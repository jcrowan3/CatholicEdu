import { SESSIONS as GRADE3_SESSIONS, PILLAR_COLORS as GRADE3_COLORS } from "./grade3";
import { SESSIONS as GRADE7_SESSIONS, PILLAR_COLORS as GRADE7_COLORS } from "./grade7";
import { SESSIONS as GRADE8_SESSIONS, PILLAR_COLORS as GRADE8_COLORS } from "./grade8";

const GRADE_DATA = {
  3: { sessions: GRADE3_SESSIONS, pillarColors: GRADE3_COLORS },
  7: { sessions: GRADE7_SESSIONS, pillarColors: GRADE7_COLORS },
  8: { sessions: GRADE8_SESSIONS, pillarColors: GRADE8_COLORS },
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
