const CCC_REFERENCE = /\bCCC\s*\d{1,4}(?:\s*[–-]\s*\d{1,4})?\b/i;
const SCRIPTURE_REFERENCE = /\b(?:Genesis|Exodus|Leviticus|Numbers|Deuteronomy|Joshua|Judges|Ruth|Samuel|Kings|Chronicles|Ezra|Nehemiah|Tobit|Judith|Esther|Maccabees|Job|Psalms?|Proverbs|Ecclesiastes|Song of Songs|Wisdom|Sirach|Isaiah|Jeremiah|Lamentations|Baruch|Ezekiel|Daniel|Hosea|Joel|Amos|Obadiah|Jonah|Micah|Nahum|Habakkuk|Zephaniah|Haggai|Zechariah|Malachi|Matthew|Mark|Luke|John|Acts|Romans|Corinthians|Galatians|Ephesians|Philippians|Colossians|Thessalonians|Timothy|Titus|Philemon|Hebrews|James|Peter|Jude|Revelation)\s+\d{1,3}:\d{1,3}(?:[–-]\d{1,3})?\b/i;

const WEAKENED_DOCTRINE = [
  [/\bJesus (?:was|is) (?:only|just) (?:a )?(?:man|teacher|prophet)\b/i,
    "Jesus must be presented as true God and true man."],
  [/\bEucharist (?:is|was) (?:only|just|merely) (?:a )?symbol\b/i,
    "The Eucharist must not be reduced to a symbol; affirm Christ's Real Presence."],
  [/\bResurrection (?:is|was) (?:only|just|merely) (?:a )?(?:story|symbol|metaphor)\b/i,
    "The Resurrection must be taught as a real event, not merely a symbol."],
  [/\bsin (?:does not|doesn't) (?:matter|separate us from God)\b/i,
    "Revise the statement to preserve the Church's teaching on sin and conversion."],
];

function collectStrings(value, strings = []) {
  if (typeof value === "string") strings.push(value);
  else if (Array.isArray(value)) value.forEach((child) => collectStrings(child, strings));
  else if (value && typeof value === "object") {
    Object.values(value).forEach((child) => collectStrings(child, strings));
  }
  return strings;
}

/** Keep offline review behavior in parity with the API's deterministic rules. */
export function reviewSessionLocally(sessionData) {
  const text = collectStrings(sessionData).join("\n");
  const findings = [];

  if (!CCC_REFERENCE.test(text)) {
    findings.push({
      code: "missing_ccc_reference",
      severity: "error",
      message: "Add at least one specific Catechism citation (for example, CCC 461).",
    });
  }

  if (typeof sessionData.verse === "string" && sessionData.verse.trim()
      && !SCRIPTURE_REFERENCE.test(sessionData.verse)) {
    findings.push({
      code: "unsupported_scripture_paraphrase",
      severity: "error",
      message: "Add a book, chapter, and verse to the Scripture text (for example, John 3:16) and verify it against CPDV.",
    });
  }

  WEAKENED_DOCTRINE.forEach(([pattern, message]) => {
    if (pattern.test(text)) findings.push({ code: "weakened_doctrine", severity: "error", message });
  });

  return { passed: findings.length === 0, findings };
}
