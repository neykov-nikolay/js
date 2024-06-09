import { filterEvenNumbers } from "../src/filterEvenNumbers";

describe("filterEvenNumbers", () => {
  test("should filter even numbers in a given array", () => {
    expect(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([2, 4, 6, 8]);
  });
});
