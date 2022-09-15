const test = require("node:test");
const assert = require("node:assert");
const { createPinoLogger } = require("../dist");

test("PinoApp Unit Tests", async (t) => {
  await t.test("createPinoLogger should create pino instance", async () => {
    const pino = createPinoLogger();
    assert.equal(typeof pino, "object");
    assert.equal(typeof pino.info, "function");
  });

  await t.test("createPinoLogger and log should log", async () => {
    const pino = createPinoLogger();
    const result = pino.info("test");
    assert.equal(result, undefined);
  });
});
