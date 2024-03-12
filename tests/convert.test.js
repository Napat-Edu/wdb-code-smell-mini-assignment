const dollarsToRubles = require("../convert");

describe("convert module", () => {
  it("should return ?", () => {
    expect(dollarsToRubles(30)).toBe(2250);
  });
});
