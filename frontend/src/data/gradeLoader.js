const gradeModules = {
  1: () => import("./grade1.js"),
  2: () => import("./grade2.js"),
  3: () => import("./grade3.js"),
  4: () => import("./grade4.js"),
  5: () => import("./grade5.js"),
  6: () => import("./grade6.js"),
  7: () => import("./grade7.js"),
  8: () => import("./grade8.js"),
};

const gradeCache = new Map();

const pillarColors = {
  1: { Creed: "#4A90D9", Sacraments: "#D4A843", Morality: "#6DB87B", Prayer: "#9B6DB8", Review: "#C0607A" },
  2: { Creed: "#4A90D9", Sacraments: "#D4A843", Morality: "#6DB87B", Prayer: "#9B6DB8", Review: "#C0607A" },
  3: { Creed: "#4A90D9", Sacraments: "#D4A843", Morality: "#6DB87B", Prayer: "#9B6DB8" },
  4: { Creed: "#4A90D9", Sacraments: "#D4A843", Morality: "#6DB87B", Prayer: "#9B6DB8", Review: "#D9704A" },
  5: { Creed: "#4A90D9", Sacraments: "#D4A843", Morality: "#6DB87B", Prayer: "#9B6DB8", Review: "#C0392B" },
  6: { Creed: "#4A90D9", Sacraments: "#D4A843", Morality: "#6DB87B", Prayer: "#9B6DB8", Review: "#C0736A" },
  7: { Creed: "#4A90D9", Sacraments: "#D4A843", Morality: "#6DB87B", Prayer: "#9B6DB8", Review: "#C0392B" },
  8: { Creed: "#3B5BA5", Sacraments: "#9B5D1A", Morality: "#2A6B3E", Prayer: "#6B3B9A", Review: "#4A4A6A" },
};

export async function loadGradeData(grade) {
  const numericGrade = Number(grade);
  if (gradeCache.has(numericGrade)) return gradeCache.get(numericGrade);

  const loadModule = gradeModules[numericGrade];
  if (!loadModule) return null;

  const module = await loadModule();
  const curriculum = module.CURRICULUM;
  const data = {
    sessions: curriculum?.sessions || module.SESSIONS,
    pillarColors: module.PILLAR_COLORS,
    schemaVersion: curriculum?.schemaVersion || null,
    grade: curriculum?.grade || numericGrade,
  };
  gradeCache.set(numericGrade, data);
  return data;
}

export function getGradeData(grade) {
  return gradeCache.get(Number(grade)) || null;
}

export async function loadDefaultSessions(grade) {
  const data = await loadGradeData(grade);
  return data?.sessions || [];
}

export function getDefaultSessions(grade) {
  return getGradeData(grade)?.sessions || [];
}

export function getPillarColors(grade) {
  return pillarColors[Number(grade)] || {};
}

export function getCurriculumMetadata(grade) {
  const data = getGradeData(grade);
  return data
    ? { grade: data.grade, schemaVersion: data.schemaVersion, sessionCount: data.sessions.length }
    : null;
}
