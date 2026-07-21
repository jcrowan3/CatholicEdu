export const CONTENT_PROVENANCE = {
  auditDate: "2026-07-21",
  auditScope:
    "Bundled curriculum data, take-home summaries, and session PDF exports.",
  aiUse:
    "Curriculum text may include AI-assisted drafting and has been human reviewed before release.",
  disclosure:
    "Curriculum text may include AI-assisted drafting and is reviewed before use. Scripture quotations use CPDV; CCC paragraph references point families to official teaching.",
  activeGradeFiles: [
    "frontend/src/data/grade2.js",
    "frontend/src/data/grade3.js",
    "frontend/src/data/grade4.js",
    "frontend/src/data/grade5.js",
    "frontend/src/data/grade6.js",
    "frontend/src/data/grade7.js",
    "frontend/src/data/grade8.js",
  ],
  reviewedSurfaces: [
    {
      surface: "Bundled grade curriculum",
      path: "frontend/src/data/grade[2-8].js",
      status: "reviewed",
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
