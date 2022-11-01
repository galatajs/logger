const test = require("node:test");
const assert = require("node:assert");
const { getModule, createTestApp } = require("@galatajs/test");
const { createApp, createModule } = require("@galatajs/app");
const { createPinoModule } = require("../dist");

test("PinoModule Unit Tests", async (t) => {
  const module = createModule("main", {
    imports: [createPinoModule()],
  });
  const app = createApp(module);
  app.register(createTestApp());
  app.start();

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });

  await t.test("module should be defined", async () => {
    const module = getModule("main");
    assert.equal(typeof module, "object");
  });

  await t.test("service should be defined", async () => {
    const module = getModule("main");
    const service = module.getRequiredProvider("pinoService");
    assert.equal(typeof service, "object");
  });

  await t.test("service.info should be defined and must be log", async () => {
    const module = getModule("main");
    const service = module.getRequiredProvider("pinoService");
    const result = service.logger.info("test");
    assert.equal(result, undefined);
  });
});
