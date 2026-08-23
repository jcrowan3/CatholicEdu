import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import { CONTENT_PROVENANCE } from "../src/data/contentProvenance.js";
import { GRADES } from "../src/data/grades.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");

const failures = [];
const activeGrades = GRADES.filter((grade) => grade.status === "active").map(
  (grade) => `frontend/src/data/grade${grade.grade}.js`,
);
const activeGradeNumbers = GRADES.filter((grade) => grade.status === "active").map(
  ({ grade }) => grade,
);

for (const file of activeGrades) {
  if (!CONTENT_PROVENANCE.activeGradeFiles.includes(file)) {
    failures.push(`Missing active grade from provenance inventory: ${file}`);
  }
}

for (const file of CONTENT_PROVENANCE.activeGradeFiles) {
  if (!fs.existsSync(path.join(repoRoot, file))) {
    failures.push(`Provenance inventory references missing file: ${file}`);
  }
}

for (const grade of activeGradeNumbers) {
  const review = CONTENT_PROVENANCE.gradeReviews.find((entry) => entry.grade === grade);
  if (!review) {
    failures.push(`Missing Grade ${grade} from the review inventory.`);
  } else if (review.status === "reviewed"
      && (!review.reviewer || !review.reviewedAt || !review.record)) {
    failures.push(`Grade ${grade} cannot be marked reviewed without reviewer, date, and record.`);
  }
}

for (const review of CONTENT_PROVENANCE.gradeReviews) {
  if (!activeGradeNumbers.includes(review.grade)) {
    failures.push(`Review inventory references inactive Grade ${review.grade}.`);
  }
  if (!["review-required", "in-review", "reviewed"].includes(review.status)) {
    failures.push(`Grade ${review.grade} has an unsupported review status.`);
  }
}

for (const surface of CONTENT_PROVENANCE.trackedSurfaces) {
  if (!surface.surface || !surface.path || !surface.status) {
    failures.push("Each tracked surface must include surface, path, and status.");
  }
}

if (!CONTENT_PROVENANCE.auditDate || !CONTENT_PROVENANCE.disclosure) {
  failures.push("Provenance metadata must include auditDate and disclosure.");
}

const curriculumSurface = CONTENT_PROVENANCE.trackedSurfaces.find(
  (surface) => surface.surface === "Bundled grade curriculum",
);
if (!curriculumSurface || curriculumSurface.status === "reviewed") {
  failures.push(
    "Bundled curriculum must remain review-required until a qualified review record is committed.",
  );
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(
  `content provenance audit ok: ${CONTENT_PROVENANCE.activeGradeFiles.length} grade files, ${CONTENT_PROVENANCE.trackedSurfaces.length} surfaces`,
);
