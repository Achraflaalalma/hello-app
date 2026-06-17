const { health } = require("../src/server");

test("health endpoint returns UP", () => {
  expect(health()).toEqual({
    status: "UP",
  });
});
