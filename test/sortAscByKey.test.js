import { sortAscByKey } from "../src/sortAscByKey";

describe("sortAscByKey", () => {
  test("should array sort in ascending order by given key", () => {
    const testArray = [
      { id: "1", quantity: 3, percent: 10, price: 500 },
      { id: "2", quantity: 2, percent: 70, price: 1 },
      { id: "3", quantity: 1, percent: 20, price: 10 },
    ];

    expect(sortAscByKey(testArray, "quantity")).toEqual([
      { id: "3", quantity: 1, percent: 20, price: 10 },
      { id: "2", quantity: 2, percent: 70, price: 1 },
      { id: "1", quantity: 3, percent: 10, price: 500 },
    ]);
    expect(sortAscByKey(testArray, "percent")).toEqual([
      { id: "1", quantity: 3, percent: 10, price: 500 },
      { id: "3", quantity: 1, percent: 20, price: 10 },
      { id: "2", quantity: 2, percent: 70, price: 1 },
    ]);
    expect(sortAscByKey(testArray, "price")).toEqual([
      { id: "2", quantity: 2, percent: 70, price: 1 },
      { id: "3", quantity: 1, percent: 20, price: 10 },
      { id: "1", quantity: 3, percent: 10, price: 500 },
    ]);
  });
});
