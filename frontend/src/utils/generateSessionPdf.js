import { jsPDF } from "jspdf";
import { CONTENT_PROVENANCE } from "../data/contentProvenance";

/**
 * Generate a printable PDF for a session.
 * Uses Helvetica (built-in) — no emoji rendering.
 */
export function generateSessionPdf(session) {
  const doc = new jsPDF({ unit: "pt", format: "letter" });
  const pageW = doc.internal.pageSize.getWidth();
  const margin = 50;
  const contentW = pageW - margin * 2;
  let y = margin;

  const checkPage = (needed = 40) => {
    if (y + needed > doc.internal.pageSize.getHeight() - margin) {
      doc.addPage();
      y = margin;
    }
  };

  // ─── Header ───
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text(`Week ${session.week}: ${session.title}`, margin, y);
  y += 24;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`Pillar: ${session.pillar}  |  CCC: ${session.ccc || ""}`, margin, y);
  y += 14;

  doc.setFontSize(10);
  doc.setFont("helvetica", "italic");
  const verseLines = doc.splitTextToSize(`"${session.verse}"`, contentW);
  doc.text(verseLines, margin, y);
  y += verseLines.length * 12 + 10;

  // ─── Divider ───
  doc.setDrawColor(180);
  doc.line(margin, y, pageW - margin, y);
  y += 16;

  // ─── Discover ───
  if (session.discover) {
    checkPage(60);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Discover: " + session.discover.title, margin, y);
    y += 18;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    for (const item of session.discover.items) {
      checkPage(30);
      doc.setFont("helvetica", "bold");
      doc.text(`- ${item.name}`, margin + 10, y);
      y += 13;
      doc.setFont("helvetica", "normal");
      const descLines = doc.splitTextToSize(item.desc, contentW - 20);
      doc.text(descLines, margin + 18, y);
      y += descLines.length * 12 + 6;
    }
    y += 8;
  }

  // ─── Secondary Activity ───
  if (session.sort) {
    checkPage(50);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Sort & Match: " + session.sort.title, margin, y);
    y += 18;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    for (const group of session.sort.groups) {
      checkPage(20);
      doc.setFont("helvetica", "bold");
      doc.text(group + ":", margin + 10, y);
      y += 13;
      doc.setFont("helvetica", "normal");
      const groupItems = session.sort.items
        .filter((it) => it.group === group)
        .map((it) => it.name)
        .join(", ");
      const itemLines = doc.splitTextToSize(groupItems, contentW - 20);
      doc.text(itemLines, margin + 18, y);
      y += itemLines.length * 12 + 6;
    }
    y += 8;
  }

  if (session.timeline) {
    checkPage(50);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Put in Order: " + session.timeline.title, margin, y);
    y += 18;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    const sorted = [...session.timeline.items].sort((a, b) => a.order - b.order);
    for (let i = 0; i < sorted.length; i++) {
      checkPage(16);
      doc.text(`${i + 1}. ${sorted[i].text}`, margin + 10, y);
      y += 14;
    }
    y += 8;
  }

  if (session.fillblank) {
    checkPage(50);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Fill the Blank: " + session.fillblank.title, margin, y);
    y += 18;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    for (const s of session.fillblank.sentences) {
      checkPage(20);
      const line = s.text.replace("___", `[${s.answer}]`);
      const lines = doc.splitTextToSize(line, contentW - 10);
      doc.text(lines, margin + 10, y);
      y += lines.length * 12 + 6;
    }
    y += 8;
  }

  // ─── Quiz ───
  if (session.quiz) {
    checkPage(60);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Quiz", margin, y);
    y += 18;

    doc.setFontSize(10);
    for (let qi = 0; qi < session.quiz.questions.length; qi++) {
      const q = session.quiz.questions[qi];
      checkPage(40);
      doc.setFont("helvetica", "bold");
      const qLines = doc.splitTextToSize(`${qi + 1}. ${q.q}`, contentW - 10);
      doc.text(qLines, margin + 10, y);
      y += qLines.length * 12 + 4;

      doc.setFont("helvetica", "normal");
      const opts = q.opts || q.options || [];
      for (let oi = 0; oi < opts.length; oi++) {
        checkPage(14);
        const marker = oi === q.correct ? " *" : "";
        doc.text(`   ${String.fromCharCode(65 + oi)}) ${opts[oi]}${marker}`, margin + 18, y);
        y += 13;
      }
      y += 6;
    }

    doc.setFont("helvetica", "italic");
    doc.setFontSize(8);
    doc.text("* = correct answer", margin + 10, y);
    y += 14;
  }

  // ─── Prayer ───
  if (session.prayer) {
    checkPage(60);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Prayer: " + session.prayer.title, margin, y);
    y += 18;

    doc.setFontSize(10);
    for (const line of session.prayer.lines) {
      checkPage(20);
      const prefix = line.s === "A" ? "All: " : "Leader: ";
      doc.setFont("helvetica", line.s === "A" ? "bold" : "italic");
      const prayerLines = doc.splitTextToSize(prefix + line.t, contentW - 10);
      doc.text(prayerLines, margin + 10, y);
      y += prayerLines.length * 12 + 4;
    }
  }

  // ─── Footer ───
  const pages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pages; i++) {
    doc.setPage(i);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(150);
    const pageH = doc.internal.pageSize.getHeight();
    const disclosureLines = doc.splitTextToSize(
      CONTENT_PROVENANCE.disclosure,
      contentW
    );
    doc.text(
      disclosureLines,
      margin,
      pageH - 42
    );
    doc.text(
      "Catholic Catechist Toolkit",
      margin,
      pageH - 18
    );
    doc.text(
      `Page ${i} of ${pages}`,
      pageW - margin,
      pageH - 18,
      { align: "right" }
    );
    doc.setTextColor(0);
  }

  const filename = `Week${session.week}_${session.title.replace(/[^a-zA-Z0-9]/g, "_")}.pdf`;
  doc.save(filename);
}
