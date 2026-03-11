"""Reporting business logic."""

import csv
import io
import uuid
from collections import defaultdict

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

    catechist_count = await _count(db, select(func.count()).select_from(Catechist).where(
        Catechist.parish_id == parish_id, Catechist.is_active.is_(True),
    ))
    student_count = await _count(db, select(func.count()).select_from(Student).where(
        Student.parish_id == parish_id, Student.is_active.is_(True),
    ))
    grade_count = await _count(db, select(func.count()).select_from(GradeConfig).where(
        GradeConfig.parish_id == parish_id, GradeConfig.is_active.is_(True),
    ))
    class_count = await _count(db, (
        select(func.count())
        .select_from(Class)
        .join(GradeConfig, GradeConfig.id == Class.grade_config_id)
        .where(GradeConfig.parish_id == parish_id, Class.is_active.is_(True))
    ))

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

        student_summaries.append({
            "student_id": s.id,
            "display_name": s.display_name,
            "avatar_emoji": s.avatar_emoji,
            "activities_completed": len(entries),
            "total_stars": sum(e.stars_earned for e in entries),
            "week_progress": dict(week_progress),
        })

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

    bookmark_count = await _count(db, select(func.count()).select_from(Bookmark).where(
        Bookmark.student_id == student_id, Bookmark.grade == grade,
    ))

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
        all_weeks.update(int(w) for w in s["week_progress"].keys())
    weeks_sorted = sorted(all_weeks) if all_weeks else list(range(1, 31))

    # Header row
    header = ["Student", "Total Stars", "Activities Completed"]
    for w in weeks_sorted:
        for a in activities:
            header.append(f"W{w}-{a}")
    writer.writerow(header)

    # Data rows
    for s in grid["students"]:
        row = [s["display_name"], s["total_stars"], s["activities_completed"]]
        for w in weeks_sorted:
            wp = s["week_progress"].get(str(w), {})
            for a in activities:
                row.append(wp.get(a, ""))
        writer.writerow(row)

    return output.getvalue()
