"""Pydantic schemas for reporting endpoints."""

import uuid

from pydantic import BaseModel


class ParishOverviewResponse(BaseModel):
    """Parish-wide statistics."""

    parish_id: uuid.UUID
    parish_name: str
    total_catechists: int
    total_students: int
    total_classes: int
    total_grades: int
    total_progress_entries: int
    total_stars: int


class StudentProgressSummary(BaseModel):
    """A student's progress row in the class grid."""

    student_id: uuid.UUID
    display_name: str
    avatar_emoji: str
    activities_completed: int
    total_stars: int
    # Week-by-week progress: { "1": { "quiz": 5, "discover": 3 }, ... }
    week_progress: dict[str, dict[str, int]]


class ClassProgressGridResponse(BaseModel):
    """Progress grid for a class — all students' progress."""

    class_id: uuid.UUID
    class_name: str
    grade: int
    students: list[StudentProgressSummary]


class StudentSummaryResponse(BaseModel):
    """Individual student report."""

    student_id: uuid.UUID
    display_name: str
    avatar_emoji: str
    grade: int
    total_activities: int
    total_stars: int
    bookmarks_count: int
    # By activity type: { "quiz": 15, "discover": 10, ... }
    activity_breakdown: dict[str, int]
    # By week: { "1": 3, "2": 5, ... }
    stars_by_week: dict[str, int]
