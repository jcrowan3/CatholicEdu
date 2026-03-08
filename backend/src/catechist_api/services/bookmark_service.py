"""Bookmark business logic."""

import uuid

from fastapi import HTTPException, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from catechist_api.models import Bookmark


async def get_student_bookmarks(
    db: AsyncSession,
    *,
    student_id: uuid.UUID,
    grade: int,
) -> list[Bookmark]:
    """Get all bookmarks for a student in a given grade."""
    result = await db.execute(
        select(Bookmark)
        .where(
            Bookmark.student_id == student_id,
            Bookmark.grade == grade,
        )
        .order_by(Bookmark.week, Bookmark.discover_index)
    )
    return list(result.scalars().all())


async def create_bookmark(
    db: AsyncSession,
    *,
    student_id: uuid.UUID,
    grade: int,
    week: int,
    discover_index: int,
    item_name: str,
    item_desc: str | None = None,
    item_icon: str | None = None,
    pillar: str | None = None,
) -> Bookmark:
    """Create a bookmark. Raises 409 if already exists."""
    # Check for duplicate
    existing = await db.execute(
        select(Bookmark).where(
            Bookmark.student_id == student_id,
            Bookmark.grade == grade,
            Bookmark.week == week,
            Bookmark.discover_index == discover_index,
        )
    )
    if existing.scalar_one_or_none() is not None:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Bookmark already exists",
        )

    bookmark = Bookmark(
        student_id=student_id,
        grade=grade,
        week=week,
        discover_index=discover_index,
        item_name=item_name,
        item_desc=item_desc,
        item_icon=item_icon,
        pillar=pillar,
    )
    db.add(bookmark)
    await db.flush()
    return bookmark


async def delete_bookmark(
    db: AsyncSession,
    *,
    bookmark_id: uuid.UUID,
    student_id: uuid.UUID,
) -> None:
    """Delete a bookmark by ID, ensuring it belongs to the student."""
    result = await db.execute(
        select(Bookmark).where(
            Bookmark.id == bookmark_id,
            Bookmark.student_id == student_id,
        )
    )
    bookmark = result.scalar_one_or_none()
    if bookmark is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Bookmark not found",
        )
    await db.delete(bookmark)
    await db.flush()
