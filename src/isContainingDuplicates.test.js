import { isContainingDuplicates } from "./isContainingDuplicates";

describe("isContainingDuplicates", () => {
  test("should check if array contains duplicated elements", () => {
    expect(isContainingDuplicates([1, 2, 3])).toBe(false);
    expect(isContainingDuplicates([1, 2, 2, 3])).toBe(true);
    expect(isContainingDuplicates(["a", "b", "c"])).toBe(false);
    expect(isContainingDuplicates(["a", "b", "b", "c"])).toBe(true);
  });
});
