const { health } = require("../src/server");

test("health endpoint returns ACHRAF", () => {
  expect(health()).toEqual({
    status: "ACHRAF",
  });
});
