const { health } = require("../src/server");

test("health endpoint returns FINAL", () => {
  expect(health()).toEqual({
    status: "FINAL",
  });
});
