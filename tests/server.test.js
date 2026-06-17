const { health } = require("../src/server");

test("health endpoint returns LAALALMAACHRAF", () => {
  expect(health()).toEqual({
    status: "LAALALMAACHRAF",
  });
});
