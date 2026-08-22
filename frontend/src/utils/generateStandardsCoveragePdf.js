const PILLAR_OUTCOMES = {
  Creed: "Explains central Catholic doctrine and connects it to Scripture, Tradition, and the life of the Church.",
  Sacraments: "Identifies sacramental signs, grace, worship, and parish practice as encounters with Christ.",
  Morality: "Applies Catholic moral teaching to conscience, virtue, human dignity, and discipleship choices.",
  Prayer: "Practices Catholic prayer, Scripture reflection, communal response, and personal relationship with God.",
  Review: "Synthesizes prior doctrine, Scripture, prayer, and discipleship outcomes across units.",
};

function stripEmoji(value = "") {
  return value
    .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractScriptureTheme(verse = "") {
  const cleaned = stripEmoji(verse);
  const parts = cleaned.split(/\s+[—-]\s+/);
  if (parts.length < 2) return cleaned || "Scripture connection";
  return `${parts.at(-1)}: ${parts.slice(0, -1).join(" - ")}`;
}

function normalizeCcc(value) {
  if (!value) return "Not cited";
  return String(value).replace(/\s+/g, " ").trim();
}

function activityNames(session) {
  const names = ["Discover", "Quiz", "Prayer"];
  if (session.sort) names.push("Sort");
  if (session.timeline) names.push("Timeline");
  if (session.fillblank) names.push("Fill blank");
  return names.join(", ");
}

function buildCoverageRows(sessions) {
  return sessions.map((session) => ({
    week: session.week,
    title: stripEmoji(session.title),
    pillar: session.pillar || "Unassigned",
    ccc: normalizeCcc(session.ccc),
    scripture: extractScriptureTheme(session.verse),
    prayer: stripEmoji(session.prayer?.title || "Prayer activity"),
    outcome:
      PILLAR_OUTCOMES[session.pillar] ||
      "Builds grade-level Catholic vocabulary, doctrine, prayer, and discipleship practice.",
    activities: activityNames(session),
  }));
}

function summarizePillars(rows) {
  return rows.reduce((summary, row) => {
    const existing = summary[row.pillar] || { weeks: 0, ccc: new Set() };
    existing.weeks += 1;
    for (const ref of row.ccc.split(",")) {
      const trimmed = ref.trim();
      if (trimmed && trimmed !== "Not cited") existing.ccc.add(trimmed);
    }
    summary[row.pillar] = existing;
    return summary;
  }, {});
}

export async function generateStandardsCoveragePdf({ grade, gradeInfo, sessions }) {
  const { jsPDF } = await import("jspdf");
  const rows = buildCoverageRows(sessions);
  const pillarSummary = summarizePillars(rows);
  const doc = new jsPDF({ unit: "pt", format: "letter" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 44;
  const contentW = pageW - margin * 2;
  let y = margin;

  const addPageIfNeeded = (needed = 48) => {
    if (y + needed > pageH - margin) {
      doc.addPage();
      y = margin;
    }
  };

  const writeWrapped = (text, x, width, options = {}) => {
    const {
      size = 9,
      font = "normal",
      lineHeight = 11,
      color = 35,
    } = options;
    doc.setFont("helvetica", font);
    doc.setFontSize(size);
    doc.setTextColor(color);
    const lines = doc.splitTextToSize(String(text || ""), width);
    doc.text(lines, x, y);
    y += lines.length * lineHeight;
  };

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(25);
  doc.text(`Grade ${grade} Standards Coverage`, margin, y);
  y += 24;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(80);
  doc.text(gradeInfo?.subtitle || "Catholic formation curriculum", margin, y);
  y += 18;
  doc.text(`Generated ${new Date().toLocaleDateString()}`, margin, y);
  y += 22;

  writeWrapped(
    "This report maps each week to its Catechism references, Scripture focus, prayer practice, and diocesan-aligned formation outcome so a DRE can review curriculum fit without hand-compiling evidence.",
    margin,
    contentW,
    { size: 10, lineHeight: 13 }
  );
  y += 10;

  doc.setDrawColor(190);
  doc.line(margin, y, pageW - margin, y);
  y += 20;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(25);
  doc.text("Pillar Summary", margin, y);
  y += 18;

  for (const [pillar, summary] of Object.entries(pillarSummary)) {
    addPageIfNeeded(34);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(25);
    doc.text(`${pillar}: ${summary.weeks} week${summary.weeks === 1 ? "" : "s"}`, margin, y);
    y += 12;
    const refs = [...summary.ccc].slice(0, 10).join(", ") || "No CCC references";
    writeWrapped(`CCC coverage: ${refs}${summary.ccc.size > 10 ? ", ..." : ""}`, margin + 12, contentW - 12);
    y += 6;
  }

  addPageIfNeeded(60);
  y += 6;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(25);
  doc.text("Week-by-Week Coverage", margin, y);
  y += 20;

  for (const row of rows) {
    addPageIfNeeded(108);
    doc.setFillColor(246, 247, 249);
    doc.roundedRect(margin, y - 12, contentW, 18, 4, 4, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(25);
    doc.text(`Week ${row.week}: ${row.title}`, margin + 8, y);
    doc.text(row.pillar, pageW - margin - 8, y, { align: "right" });
    y += 18;

    writeWrapped(`CCC: ${row.ccc}`, margin + 8, contentW - 16, { font: "bold" });
    writeWrapped(`Scripture: ${row.scripture}`, margin + 8, contentW - 16);
    writeWrapped(`Prayer: ${row.prayer}`, margin + 8, contentW - 16);
    writeWrapped(`Outcome: ${row.outcome}`, margin + 8, contentW - 16);
    writeWrapped(`Activities: ${row.activities}`, margin + 8, contentW - 16, { color: 85 });
    y += 12;
  }

  const pages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pages; i++) {
    doc.setPage(i);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(140);
    doc.text("Catholic Catechist Toolkit - Standards Coverage", margin, pageH - 26);
    doc.text(`Page ${i} of ${pages}`, pageW - margin, pageH - 26, { align: "right" });
  }

  const filename = `Grade${grade}_Standards_Coverage.pdf`;
  doc.save(filename);
}
