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

for (const surface of CONTENT_PROVENANCE.reviewedSurfaces) {
  if (!surface.surface || !surface.path || !surface.status) {
    failures.push("Each reviewed surface must include surface, path, and status.");
  }
}

if (!CONTENT_PROVENANCE.auditDate || !CONTENT_PROVENANCE.disclosure) {
  failures.push("Provenance metadata must include auditDate and disclosure.");
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(
  `content provenance audit ok: ${CONTENT_PROVENANCE.activeGradeFiles.length} grade files, ${CONTENT_PROVENANCE.reviewedSurfaces.length} surfaces`,
);
