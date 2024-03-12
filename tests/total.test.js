const total = require("../total");
/* test('total of empty string should be 0', () => {
    expect(total('')).toBe(0);
}) */
describe("Total Test", () => {
  it("should return 3 if 1,2", () => {
    expect(total("1,2")).toBe(3);
  });

  it("should return 4 if 2,2", () => {
    expect(total("2,2")).toBe(4);
  });

  it("should return 0 if empty", () => {
    expect(total("")).toBe(0);
  });

  it("should return 1 when 1,3000", () => {
    expect(total("1,3000")).toBe(1);
  });
});
