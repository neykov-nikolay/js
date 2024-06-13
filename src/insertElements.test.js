import { insertElements } from "./insertElements";

describe("insertElements", () => {
  test("should insert elements in array at given index", () => {
    const testArray = ["a", "b", "c", "d", "e"];

    expect(insertElements(testArray, 1, "X")).toEqual(["a", "X", "b", "c", "d", "e"]);
    expect(insertElements(testArray, 3, "X", "Y", "Z")).toEqual(["a", "b", "c", "X", "Y", "Z", "d", "e"]);
  });
});
