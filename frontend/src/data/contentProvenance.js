export const CONTENT_PROVENANCE = {
  auditDate: "2026-08-22",
  auditScope:
    "Bundled curriculum data, take-home summaries, and session PDF exports.",
  aiUse:
    "Curriculum text may include AI-assisted drafting; no grade-by-grade qualified human review record is currently committed.",
  disclosure:
    "Curriculum text may include AI-assisted drafting and requires qualified human review before parish use. Scripture quotations use CPDV; CCC paragraph references point families to official teaching.",
  activeGradeFiles: [
    "frontend/src/data/grade1.js",
    "frontend/src/data/grade2.js",
    "frontend/src/data/grade3.js",
    "frontend/src/data/grade4.js",
    "frontend/src/data/grade5.js",
    "frontend/src/data/grade6.js",
    "frontend/src/data/grade7.js",
    "frontend/src/data/grade8.js",
  ],
  gradeReviews: [1, 2, 3, 4, 5, 6, 7, 8].map((grade) => ({
    grade,
    status: "review-required",
    reviewer: null,
    reviewedAt: null,
    record: null,
  })),
  trackedSurfaces: [
    {
      surface: "Bundled grade curriculum",
      path: "frontend/src/data/grade[1-8].js",
      status: "review-required",
    },
    {
      surface: "Family take-home summaries",
      path: "frontend/src/components/session/TakeHome.jsx",
      status: "disclosed",
    },
    {
      surface: "Session PDF exports",
      path: "frontend/src/utils/generateSessionPdf.js",
      status: "disclosed",
    },
    {
      surface: "Landing page curriculum overview",
      path: "frontend/src/components/landing/LandingPage.jsx",
      status: "disclosed",
    },
  ],
};
