const { health } = require("../src/server");

test("health endpoint returns LAALALMA", () => {
  expect(health()).toEqual({
    status: "LAALALMA",
  });
});
