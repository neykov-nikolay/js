import { isInteger } from "../src/isInteger";

describe("isInteger", () => {
  test("should check if given number is integer", () => {
    expect(isInteger(1)).toBe(true);
    expect(isInteger(2)).toBe(true);
    expect(isInteger(3)).toBe(true);
    expect(isInteger(-1)).toBe(true);
    expect(isInteger(-2)).toBe(true);
    expect(isInteger(-3)).toBe(true);
    expect(isInteger(1.2)).toBe(false);
    expect(isInteger(2.4)).toBe(false);
    expect(isInteger(3.5)).toBe(false);
    expect(isInteger(-1.2)).toBe(false);
    expect(isInteger(-2.4)).toBe(false);
    expect(isInteger(-3.5)).toBe(false);
  });
});
