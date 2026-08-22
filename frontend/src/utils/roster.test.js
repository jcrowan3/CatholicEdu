import test from "node:test";
import assert from "node:assert/strict";

import { parseRosterText } from "./roster.js";

test("parses first and last name columns", () => {
  assert.deepEqual(parseRosterText("First Name,Last Name\nMaria,Santos"), [
    { display_name: "Maria Santos", family_name: "Santos" },
  ]);
});

test("parses headerless tab-separated rows", () => {
  assert.deepEqual(parseRosterText("Maria Santos\tSantos\nJose Santos\tSantos"), [
    { display_name: "Maria Santos", family_name: "Santos" },
    { display_name: "Jose Santos", family_name: "Santos" },
  ]);
});

test("ignores empty input", () => {
  assert.deepEqual(parseRosterText(" \n\n"), []);
});
