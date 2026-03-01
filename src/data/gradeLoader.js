import { SESSIONS as GRADE3_SESSIONS, PILLAR_COLORS as GRADE3_COLORS } from "./grade3";
import { SESSIONS as GRADE4_SESSIONS, PILLAR_COLORS as GRADE4_COLORS } from "./grade4";
import { SESSIONS as GRADE5_SESSIONS, PILLAR_COLORS as GRADE5_COLORS } from "./grade5";
import { SESSIONS as GRADE6_SESSIONS, PILLAR_COLORS as GRADE6_COLORS } from "./grade6";
import { SESSIONS as GRADE7_SESSIONS, PILLAR_COLORS as GRADE7_COLORS } from "./grade7";
import { SESSIONS as GRADE8_SESSIONS, PILLAR_COLORS as GRADE8_COLORS } from "./grade8";

const GRADE_DATA = {
  3: { sessions: GRADE3_SESSIONS, pillarColors: GRADE3_COLORS },
  4: { sessions: GRADE4_SESSIONS, pillarColors: GRADE4_COLORS },
  5: { sessions: GRADE5_SESSIONS, pillarColors: GRADE5_COLORS },
  6: { sessions: GRADE6_SESSIONS, pillarColors: GRADE6_COLORS },
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
