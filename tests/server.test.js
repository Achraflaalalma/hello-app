const { health } = require("../src/server");

test("health endpoint returns laalalma", () => {
  expect(health()).toEqual({
    status: "laalalma",
  });
});
