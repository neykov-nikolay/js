import { filterInRange } from "../src/filterInRange";

describe("filterInRange", () => {
  test("should filter numbers in given range", () => {
    expect(filterInRange([1, 5, 2, 9, 3, 8, 4], 3, 5)).toEqual([5, 3, 4]);
  });
});
