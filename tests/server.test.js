const { add } = require("../src/server");

test("adds numbers", () => {
  expect(add(2, 3)).toBe(5);
});
