import { mergeAndSortArrays } from "./mergeAndSortArrays";

describe("mergeAndSortArrays", () => {
  test("should merge and sort multiple arrays given as rest parameters", () => {
    const testArray1 = [5, 1, 2];
    const testArray2 = [9, 4, 8];
    const testArray3 = [6, 3, 7];

    expect(mergeAndSortArrays(testArray1, testArray2)).toEqual([
      1, 2, 4, 5, 8, 9,
    ]);
    expect(mergeAndSortArrays(testArray1, testArray3)).toEqual([
      1, 2, 3, 5, 6, 7,
    ]);
    expect(mergeAndSortArrays(testArray2, testArray3)).toEqual([
      3, 4, 6, 7, 8, 9,
    ]);
    expect(mergeAndSortArrays(testArray1, testArray2, testArray3)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });
});
