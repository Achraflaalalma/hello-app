const { health } = require("../src/server");

test("health endpoint returns ACHRAFF", () => {
  expect(health()).toEqual({
    status: "ACHRAFF",
  });
});
