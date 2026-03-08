"""Bookmark router — save and remove discover items."""

import uuid

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from catechist_api.auth.dependencies import get_current_user
from catechist_api.auth.jwt import TokenPayload
from catechist_api.database import get_db
from catechist_api.schemas.bookmark import BookmarkCreateRequest, BookmarkResponse
from catechist_api.services import bookmark_service

router = APIRouter()


@router.get("/{student_id}/bookmarks/{grade}", response_model=list[BookmarkResponse])
async def get_bookmarks(
    student_id: uuid.UUID,
    grade: int,
    user: TokenPayload = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Get all bookmarks for a student in a grade."""
    if user.type == "student" and user.sub != student_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Access denied")

    bookmarks = await bookmark_service.get_student_bookmarks(
        db, student_id=student_id, grade=grade
    )
    return bookmarks


@router.post("/{student_id}/bookmarks", response_model=BookmarkResponse, status_code=201)
async def create_bookmark(
    student_id: uuid.UUID,
    body: BookmarkCreateRequest,
    user: TokenPayload = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Save a discover item as a bookmark."""
    if user.type == "student" and user.sub != student_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Access denied")

    bookmark = await bookmark_service.create_bookmark(
        db,
        student_id=student_id,
        grade=body.grade,
        week=body.week,
        discover_index=body.discover_index,
        item_name=body.item_name,
        item_desc=body.item_desc,
        item_icon=body.item_icon,
        pillar=body.pillar,
    )
    return bookmark


@router.delete("/{student_id}/bookmarks/{bookmark_id}", status_code=204)
async def delete_bookmark(
    student_id: uuid.UUID,
    bookmark_id: uuid.UUID,
    user: TokenPayload = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Remove a bookmark."""
    if user.type == "student" and user.sub != student_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Access denied")

    await bookmark_service.delete_bookmark(db, bookmark_id=bookmark_id, student_id=student_id)
