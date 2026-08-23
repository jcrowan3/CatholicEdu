import assert from "node:assert/strict";
import test from "node:test";

import { shuffle } from "./shuffle.js";

test("shuffle returns a deterministic Fisher-Yates permutation with an injected source", () => {
  const source = [1, 2, 3, 4];
  const values = [0.5, 0.25, 0];
  const result = shuffle(source, () => values.shift());

  assert.deepEqual(result, [2, 4, 1, 3]);
  assert.deepEqual(source, [1, 2, 3, 4]);
});

test("shuffle handles empty and single-item collections", () => {
  assert.deepEqual(shuffle([]), []);
  assert.deepEqual(shuffle(["only"]), ["only"]);
});
