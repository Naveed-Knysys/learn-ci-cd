const test = require("node:test");
const assert = require("node:assert");
const { getMessage } = require("./server");

test("getMessage returns the correct message", () => {
  assert.strictEqual(
    getMessage(),
    "Hello from CI/CD!"
  );
});