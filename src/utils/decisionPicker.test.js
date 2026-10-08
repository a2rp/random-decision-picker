import assert from "node:assert/strict";
import test from "node:test";
import { maxDecisionOptions, parseDecisionOptions, pickRandomOption } from "./decisionPicker.js";

test("cleans empty lines and duplicate options while preserving first spelling", () => {
  assert.deepEqual(parseDecisionOptions("  Tea\n\nCoffee\n tea \nRead"), ["Tea", "Coffee", "Read"]);
  assert.deepEqual(parseDecisionOptions("\n  \n"), []);
});

test("enforces option count and per-option limits", () => {
  assert.throws(() => parseDecisionOptions(Array.from({ length: maxDecisionOptions + 1 }, (_, index) => `Choice ${index}`).join("\n")), /up to 50 unique options/);
  assert.throws(() => parseDecisionOptions("x".repeat(121)), /120 characters/);
});

test("selects uniformly from a supplied random value and rejects invalid inputs", () => {
  const options = ["Tea", "Walk", "Read"];
  assert.equal(pickRandomOption(options, () => 0), "Tea");
  assert.equal(pickRandomOption(options, () => 0.5), "Walk");
  assert.equal(pickRandomOption(options, () => 0.999), "Read");
  assert.throws(() => pickRandomOption([]), /at least two/);
  assert.throws(() => pickRandomOption(["Only"]), /at least two/);
  assert.throws(() => pickRandomOption(options, () => 1), /between zero and one/);
});
