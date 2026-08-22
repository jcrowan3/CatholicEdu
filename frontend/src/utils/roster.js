function splitRosterLine(line) {
  const delimiter = line.includes("\t") ? "\t" : ",";
  return line.split(delimiter).map((part) => part.trim()).filter(Boolean);
}

export function parseRosterText(text) {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  if (lines.length === 0) return [];

  const firstCells = splitRosterLine(lines[0]).map((cell) => cell.toLowerCase());
  const headerNames = [
    "student", "student name", "display name", "name",
    "first", "first name", "last", "last name", "family", "family name",
  ];
  const hasHeader = firstCells.some((cell) => headerNames.includes(cell));
  const headers = hasHeader ? firstCells : [];
  const dataLines = hasHeader ? lines.slice(1) : lines;

  return dataLines
    .map((line) => {
      const cells = splitRosterLine(line);
      if (cells.length === 0) return null;

      if (headers.length > 0) {
        const get = (...names) => {
          const index = headers.findIndex((header) => names.includes(header));
          return index >= 0 ? cells[index] : "";
        };
        const displayName =
          get("student", "student name", "display name", "name") ||
          [get("first", "first name"), get("last", "last name")].filter(Boolean).join(" ");
        const familyName = get("family", "family name", "last", "last name");
        return displayName ? { display_name: displayName, family_name: familyName || null } : null;
      }

      return { display_name: cells[0], family_name: cells[1] || null };
    })
    .filter(Boolean);
}
