"""Reporting business logic."""

import csv
import io
import json
import os
import re
import uuid
from collections import defaultdict
from pathlib import Path
from textwrap import wrap

from fastapi import HTTPException, status
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from catechist_api.models import (
    Bookmark,
    Catechist,
    Class,
    ClassEnrollment,
    GradeConfig,
    Parish,
    ProgressEntry,
    Student,
)
from catechist_api.services.csv_safety import sanitize_csv_cell

PILLAR_OUTCOMES = {
    "Creed": "Explain central Catholic beliefs using Scripture and the Catechism.",
    "Sacraments": "Connect sacramental signs to God's grace and parish worship.",
    "Morality": "Apply Catholic moral teaching to choices, conscience, and service.",
    "Prayer": "Practice Catholic prayer and describe how prayer deepens discipleship.",
}

STANDARDS_PDF_PROVENANCE_NOTE = (
    "Source: Catholic Catechist Toolkit bundled curriculum; generated without AI model calls."
)


async def _count(db: AsyncSession, stmt) -> int:
    """Execute a count query and return the scalar result."""
    return (await db.execute(stmt)).scalar() or 0


async def get_parish_overview(
    db: AsyncSession,
    *,
    parish_id: uuid.UUID,
) -> dict:
    """Get parish-wide statistics."""
    parish_result = await db.execute(select(Parish).where(Parish.id == parish_id))
    parish = parish_result.scalar_one_or_none()
    if parish is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Parish not found")

    catechist_count = await _count(
        db,
        select(func.count())
        .select_from(Catechist)
        .where(
            Catechist.parish_id == parish_id,
            Catechist.is_active.is_(True),
        ),
    )
    student_count = await _count(
        db,
        select(func.count())
        .select_from(Student)
        .where(
            Student.parish_id == parish_id,
            Student.is_active.is_(True),
        ),
    )
    grade_count = await _count(
        db,
        select(func.count())
        .select_from(GradeConfig)
        .where(
            GradeConfig.parish_id == parish_id,
            GradeConfig.is_active.is_(True),
        ),
    )
    class_count = await _count(
        db,
        (
            select(func.count())
            .select_from(Class)
            .join(GradeConfig, GradeConfig.id == Class.grade_config_id)
            .where(GradeConfig.parish_id == parish_id, Class.is_active.is_(True))
        ),
    )

    progress_stats = await db.execute(
        select(
            func.count(ProgressEntry.id),
            func.coalesce(func.sum(ProgressEntry.stars_earned), 0),
        )
        .join(Student, Student.id == ProgressEntry.student_id)
        .where(Student.parish_id == parish_id)
    )
    progress_count, total_stars = progress_stats.one()

    return {
        "parish_id": parish_id,
        "parish_name": parish.name,
        "total_catechists": catechist_count,
        "total_students": student_count,
        "total_classes": class_count,
        "total_grades": grade_count,
        "total_progress_entries": progress_count or 0,
        "total_stars": total_stars or 0,
    }


async def get_class_progress_grid(
    db: AsyncSession,
    *,
    class_id: uuid.UUID,
    grade: int,
) -> dict:
    """Get the progress grid for a class — all students' week-by-week progress."""
    # Get class info
    cls_result = await db.execute(select(Class).where(Class.id == class_id))
    cls = cls_result.scalar_one_or_none()
    if cls is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Class not found")

    # Get enrolled students
    students_result = await db.execute(
        select(Student)
        .join(ClassEnrollment, ClassEnrollment.student_id == Student.id)
        .where(
            ClassEnrollment.class_id == class_id,
            ClassEnrollment.is_active.is_(True),
            Student.is_active.is_(True),
        )
        .order_by(Student.display_name)
    )
    students = students_result.scalars().all()
    student_ids = [s.id for s in students]

    # Get all progress for these students in this grade
    if student_ids:
        progress_result = await db.execute(
            select(ProgressEntry).where(
                ProgressEntry.student_id.in_(student_ids),
                ProgressEntry.grade == grade,
            )
        )
        all_progress = progress_result.scalars().all()
    else:
        all_progress = []

    # Group by student
    progress_by_student: dict[uuid.UUID, list[ProgressEntry]] = defaultdict(list)
    for entry in all_progress:
        progress_by_student[entry.student_id].append(entry)

    # Build student summaries
    student_summaries = []
    for s in students:
        entries = progress_by_student.get(s.id, [])
        week_progress: dict[str, dict[str, int]] = defaultdict(dict)
        for e in entries:
            week_progress[str(e.week)][e.activity] = e.stars_earned

        student_summaries.append(
            {
                "student_id": s.id,
                "display_name": s.display_name,
                "avatar_emoji": s.avatar_emoji,
                "activities_completed": len(entries),
                "total_stars": sum(e.stars_earned for e in entries),
                "week_progress": dict(week_progress),
            }
        )

    return {
        "class_id": class_id,
        "class_name": cls.name,
        "grade": grade,
        "students": student_summaries,
    }


async def get_student_summary(
    db: AsyncSession,
    *,
    student_id: uuid.UUID,
    grade: int,
) -> dict:
    """Get an individual student's report card."""
    # Get student
    student_result = await db.execute(select(Student).where(Student.id == student_id))
    student = student_result.scalar_one_or_none()
    if student is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Student not found")

    # Progress entries
    progress_result = await db.execute(
        select(ProgressEntry).where(
            ProgressEntry.student_id == student_id,
            ProgressEntry.grade == grade,
        )
    )
    entries = progress_result.scalars().all()

    bookmark_count = await _count(
        db,
        select(func.count())
        .select_from(Bookmark)
        .where(
            Bookmark.student_id == student_id,
            Bookmark.grade == grade,
        ),
    )

    # Activity breakdown
    activity_breakdown: dict[str, int] = defaultdict(int)
    stars_by_week: dict[str, int] = defaultdict(int)
    for e in entries:
        activity_breakdown[e.activity] += e.stars_earned
        stars_by_week[str(e.week)] += e.stars_earned

    return {
        "student_id": student_id,
        "display_name": student.display_name,
        "avatar_emoji": student.avatar_emoji,
        "grade": grade,
        "total_activities": len(entries),
        "total_stars": sum(e.stars_earned for e in entries),
        "bookmarks_count": bookmark_count,
        "activity_breakdown": dict(activity_breakdown),
        "stars_by_week": dict(stars_by_week),
    }


async def export_csv(
    db: AsyncSession,
    *,
    class_id: uuid.UUID,
    grade: int,
) -> str:
    """Export a class's progress as CSV."""
    grid = await get_class_progress_grid(db, class_id=class_id, grade=grade)

    output = io.StringIO()
    writer = csv.writer(output)

    # Determine all weeks present in data
    all_weeks: set[int] = set()
    activities = ["discover", "sort", "timeline", "fillblank", "quiz", "prayer"]
    for s in grid["students"]:
        all_weeks.update(int(w) for w in s["week_progress"])
    weeks_sorted = sorted(all_weeks) if all_weeks else list(range(1, 31))

    # Header row
    header = ["Student", "Total Stars", "Activities Completed"]
    for w in weeks_sorted:
        for a in activities:
            header.append(f"W{w}-{a}")
    writer.writerow(header)

    # Data rows
    for s in grid["students"]:
        row = [sanitize_csv_cell(s["display_name"]), s["total_stars"], s["activities_completed"]]
        for w in weeks_sorted:
            wp = s["week_progress"].get(str(w), {})
            for a in activities:
                row.append(wp.get(a, ""))
        writer.writerow(row)

    return output.getvalue()


def _repo_root() -> Path:
    """Return the monorepo root from this backend service file."""
    return Path(__file__).resolve().parents[4]


def _curriculum_data_dirs() -> list[Path]:
    """Return curriculum data directories in deployed and local-dev order."""
    dirs: list[Path] = []
    if configured_dir := os.environ.get("CATECHIST_CURRICULUM_DIR"):
        dirs.append(Path(configured_dir))

    dirs.append(Path("/app/curriculum"))
    dirs.append(_repo_root() / "backend" / "curriculum")
    dirs.append(_repo_root() / "frontend" / "src" / "data")
    return dirs


def _curriculum_path(grade: int) -> Path | None:
    """Find bundled curriculum data for a grade."""
    filename = f"grade{grade}.js"
    for directory in _curriculum_data_dirs():
        candidate = directory / filename
        if candidate.exists():
            return candidate
    return None


def _decode_js_string(value: str) -> str:
    """Decode a simple JavaScript string literal body."""
    return json.loads(f'"{value}"')


def _extract_string(block: str, key: str) -> str:
    match = re.search(rf"{key}:\s*\"((?:\\.|[^\"\\])*)\"", block)
    return _decode_js_string(match.group(1)) if match else ""


def _extract_session_blocks(source: str) -> list[str]:
    start = source.find("export const SESSIONS = [")
    if start == -1:
        return []

    array_start = source.find("[", start)
    depth = 0
    block_start: int | None = None
    blocks: list[str] = []
    in_string = False
    escaped = False

    for index, char in enumerate(source[array_start + 1 :], start=array_start + 1):
        if in_string:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == '"':
                in_string = False
            continue

        if char == '"':
            in_string = True
        elif char == "{":
            if depth == 0:
                block_start = index
            depth += 1
        elif char == "}":
            depth -= 1
            if depth == 0 and block_start is not None:
                blocks.append(source[block_start : index + 1])
                block_start = None
        elif char == "]" and depth == 0:
            break

    return blocks


def _split_ccc(ccc: str) -> list[str]:
    return [part.strip() for part in ccc.split(",") if part.strip()]


def _scripture_parts(verse: str) -> tuple[str, str]:
    if "—" in verse:
        theme, reference = verse.rsplit("—", 1)
    elif " - " in verse:
        theme, reference = verse.rsplit(" - ", 1)
    else:
        theme, reference = verse, ""
    return reference.strip(), theme.strip()


def _coverage_outcomes(grade: int, title: str, pillar: str) -> list[str]:
    return [
        PILLAR_OUTCOMES.get(pillar, "Show grade-level mastery of Catholic teaching."),
        f"Grade {grade} learners can identify and discuss: {title}.",
    ]


def get_standards_coverage(*, grade: int) -> dict:
    """Build a curriculum standards coverage report from bundled grade metadata."""
    curriculum_path = _curriculum_path(grade)
    if curriculum_path is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Coverage data not found for grade {grade}",
        )

    rows = []
    source = curriculum_path.read_text(encoding="utf-8")
    for block in _extract_session_blocks(source):
        week_match = re.search(r"week:\s*(\d+)", block)
        if not week_match:
            continue

        title = _extract_string(block, "title")
        pillar = _extract_string(block, "pillar")
        ccc = _extract_string(block, "ccc")
        verse = _extract_string(block, "verse")
        prayer_match = re.search(r"prayer:\s*{.*?title:\s*\"((?:\\.|[^\"\\])*)\"", block, re.S)
        prayer = _decode_js_string(prayer_match.group(1)) if prayer_match else ""
        scripture_reference, scripture_theme = _scripture_parts(verse)

        rows.append(
            {
                "grade": grade,
                "week": int(week_match.group(1)),
                "title": title,
                "pillar": pillar,
                "ccc_paragraphs": _split_ccc(ccc),
                "scripture_reference": scripture_reference,
                "scripture_theme": scripture_theme,
                "prayer": prayer,
                "diocesan_outcomes": _coverage_outcomes(grade, title, pillar),
            }
        )

    rows.sort(key=lambda row: row["week"])
    return {"grade": grade, "total_weeks": len(rows), "rows": rows}


def _pdf_escape(value: str) -> str:
    return value.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


def _pdf_safe(value: str) -> str:
    return value.encode("latin-1", errors="replace").decode("latin-1")


def _paginate_pdf_lines(lines: list[str], *, per_page: int = 42) -> list[list[str]]:
    return [lines[index : index + per_page] for index in range(0, len(lines), per_page)]


def _build_simple_pdf(pages: list[list[str]]) -> bytes:
    objects: list[bytes] = [
        b"<< /Type /Catalog /Pages 2 0 R >>",
        b"<< /Type /Pages /Kids ["
        + b" ".join(f"{3 + i * 2} 0 R".encode() for i in range(len(pages)))
        + b"] /Count "
        + str(len(pages)).encode()
        + b" >>",
    ]

    for page_index, page_lines in enumerate(pages):
        page_obj = 3 + page_index * 2
        content_obj = page_obj + 1
        commands = ["BT", "/F1 10 Tf", "50 760 Td", "14 TL"]
        for line in page_lines:
            commands.append(f"({_pdf_escape(_pdf_safe(line))}) Tj")
            commands.append("T*")
        commands.append("ET")
        stream = "\n".join(commands).encode("latin-1")
        objects.append(
            f"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] "
            f"/Resources << /Font << /F1 {3 + len(pages) * 2} 0 R >> >> "
            f"/Contents {content_obj} 0 R >>".encode()
        )
        objects.append(
            b"<< /Length " + str(len(stream)).encode() + b" >>\nstream\n" + stream + b"\nendstream"
        )

    objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")

    pdf = bytearray(b"%PDF-1.4\n")
    offsets = [0]
    for number, obj in enumerate(objects, start=1):
        offsets.append(len(pdf))
        pdf.extend(f"{number} 0 obj\n".encode())
        pdf.extend(obj)
        pdf.extend(b"\nendobj\n")
    xref_start = len(pdf)
    pdf.extend(f"xref\n0 {len(objects) + 1}\n".encode())
    pdf.extend(b"0000000000 65535 f \n")
    for offset in offsets[1:]:
        pdf.extend(f"{offset:010d} 00000 n \n".encode())
    pdf.extend(
        f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\n"
        f"startxref\n{xref_start}\n%%EOF\n".encode()
    )
    return bytes(pdf)


def export_standards_coverage_pdf(*, grade: int) -> bytes:
    """Export standards coverage as a simple PDF document."""
    coverage = get_standards_coverage(grade=grade)
    lines = [
        f"Grade {grade} Diocesan Standards Coverage Report",
        f"Total weeks mapped: {coverage['total_weeks']}",
        STANDARDS_PDF_PROVENANCE_NOTE,
        "",
    ]

    for row in coverage["rows"]:
        ccc = ", ".join(row["ccc_paragraphs"])
        outcomes = "; ".join(row["diocesan_outcomes"])
        raw_lines = [
            f"Week {row['week']}: {row['title']} ({row['pillar']})",
            f"CCC: {ccc}",
            f"Scripture: {row['scripture_reference']} - {row['scripture_theme']}",
            f"Prayer: {row['prayer']}",
            f"Outcomes: {outcomes}",
            "",
        ]
        for raw_line in raw_lines:
            wrapped = wrap(raw_line, width=92) or [""]
            lines.extend(wrapped)

    return _build_simple_pdf(_paginate_pdf_lines(lines))
