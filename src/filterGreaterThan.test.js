import { filterGreaterThan } from "../src/filterGreaterThan";

describe("filterGreaterThan", () => {
  test("should filter numbers greater than given number", () => {
    expect(filterGreaterThan([1, 5, 2, 9, 3, 8, 4], 4)).toEqual([5, 9, 8]);
  });
});
