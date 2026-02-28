import { SESSIONS as GRADE3_SESSIONS, PILLAR_COLORS as GRADE3_COLORS } from "./grade3";

const GRADE_DATA = {
  3: { sessions: GRADE3_SESSIONS, pillarColors: GRADE3_COLORS },
};

export function getGradeData(grade) {
  return GRADE_DATA[grade] || null;
}

export function getDefaultSessions(grade) {
  const data = GRADE_DATA[grade];
  return data ? data.sessions : [];
}

export function getPillarColors(grade) {
  const data = GRADE_DATA[grade];
  return data ? data.pillarColors : {};
}
