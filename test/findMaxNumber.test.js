import { findMaxNumber } from "../src/findMaxNumber";

describe("findMaxNumber", () => {
  test("should find the maximum number in an array", () => {
    expect(findMaxNumber([2, 5, 3])).toBe(5);
  });
});
