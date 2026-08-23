import process from "node:process";

import { CONTENT_PROVENANCE } from "../src/data/contentProvenance.js";

const INDEX_URL = "https://sacredbible.org/catholic/index.htm";
const REFERENCE = /—\s*((?:(?:[1-3])\s+)?[A-Za-z ]+)\s+(\d+):(\d+)(?:[–-](?:(\d+):)?(\d+))?\s*$/;

function normalize(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function requestedGrades() {
  const explicit = process.argv.find((argument) => argument.startsWith("--grade="));
  if (explicit) return [Number(explicit.split("=")[1])];
  return CONTENT_PROVENANCE.scriptureSourceAudits
    .filter(({ status }) => status === "verified-automated")
    .map(({ grade }) => grade);
}

const index = await (await fetch(INDEX_URL)).text();
const bookFiles = [...index.matchAll(/HREF="((?:OT|NT)-[^"]+\.htm)"/gi)].map((match) => match[1]);
const sourceCache = new Map();
const failures = [];
let checked = 0;

function fileForBook(book) {
  const key = book.trim().replace(/^Psalm$/i, "Psalms").replace(/\s+/g, "-").toLowerCase();
  return bookFiles.find((file) => file.toLowerCase().includes(`_${key}.htm`));
}

for (const grade of requestedGrades()) {
  if (!Number.isInteger(grade) || grade < 1 || grade > 8) {
    failures.push(`Unsupported grade: ${grade}`);
    continue;
  }
  const { SESSIONS } = await import(`../src/data/grade${grade}.js`);
  for (const session of SESSIONS) {
    const reference = session.verse.match(REFERENCE);
    if (!reference) {
      failures.push(`Grade ${grade}, week ${session.week}: missing parseable Scripture reference`);
      continue;
    }
    const [, book, startChapter, startVerse, endChapterValue, endVerseValue] = reference;
    const file = fileForBook(book);
    if (!file) {
      failures.push(`Grade ${grade}, week ${session.week}: unsupported book ${book}`);
      continue;
    }
    if (!sourceCache.has(file)) {
      const response = await fetch(`https://sacredbible.org/catholic/${file}`);
      const bytes = await response.arrayBuffer();
      sourceCache.set(file, new TextDecoder("windows-1252").decode(bytes));
    }

    const source = sourceCache.get(file);
    const endChapter = Number(endChapterValue || startChapter);
    const endVerse = Number(endVerseValue || startVerse);
    const verses = [];
    for (let chapter = Number(startChapter); chapter <= endChapter; chapter += 1) {
      const first = chapter === Number(startChapter) ? Number(startVerse) : 1;
      const last = chapter === endChapter ? endVerse : first + 150;
      for (let verse = first; verse <= last; verse += 1) {
        const match = source.match(new RegExp(`\\{${chapter}:${verse}\\} ([\\s\\S]*?)<BR>`, "i"));
        if (match) verses.push(match[1].replace(/<[^>]+>/g, ""));
      }
    }

    const quote = session.verse.slice(0, reference.index);
    const segments = quote.split(/\.{3}|…/).map(normalize).filter((segment) => segment.length > 8);
    const sourceText = normalize(verses.join(" "));
    checked += 1;
    if (!verses.length || !segments.length || !segments.every((segment) => sourceText.includes(segment))) {
      failures.push(`Grade ${grade}, week ${session.week}: quotation does not match ${book} ${startChapter}:${startVerse}`);
    }
  }
}

console.log(`CPDV source verification: ${checked} quotations checked, ${failures.length} findings`);
if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
