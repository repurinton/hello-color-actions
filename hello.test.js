const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World from Orlando, land of Mickey Mouse!");
  });
});
