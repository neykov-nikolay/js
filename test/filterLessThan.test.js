import { filterLessThan } from "../src/filterLessThan";

describe("filterLessThan", () => {
  test("should filter numbers less than given number", () => {
    expect(filterLessThan([1, 5, 2, 9, 3, 8, 4], 4)).toEqual([1, 2, 3]);
  });
});
