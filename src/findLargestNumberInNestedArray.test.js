import { findLargestNumberInNestedArray } from "../src/findLargestNumberInNestedArray";

describe("findLargestNumberInNestedArray", () => {
  test("should find largest number in nested array", () => {
    expect(findLargestNumberInNestedArray([[1, 2], [5]])).toBe(5);
  });
});
