export function mapApiStudent(student) {
  return {
    id: student.id,
    name: student.display_name,
    avatarEmoji: student.avatar_emoji,
    parentEmail: student.parent_email || "",
    pickupContactNotes: student.pickup_contact_notes || "",
    mediaPermissionGranted: Boolean(student.media_permission_granted),
    allergyPrivacyFlags: student.allergy_privacy_flags || "",
    weeklyDigestPermission: Boolean(student.weekly_digest_permission),
    role: "student",
  };
}

export function mapProgressGrid(gridData) {
  return gridData.students.map((student) => {
    const completed = {};
    for (const [week, activities] of Object.entries(student.week_progress)) {
      for (const [activity, stars] of Object.entries(activities)) {
        completed[`${week}-${activity}`] = { stars };
      }
    }
    return {
      userId: student.student_id,
      stars: student.total_stars,
      completed,
    };
  });
}

export function getSessionActivities(session) {
  const activities = ["discover", "quiz", "prayer"];
  if (session.sort) activities.push("sort");
  if (session.timeline) activities.push("timeline");
  if (session.fillblank) activities.push("fillblank");
  return activities;
}
