import { fibonacciSequence } from "../src/fibonacciSequence";

describe("fibonacciSequence", () => {
  test("should return fibonacci sequence up to a given number", () => {
    expect(fibonacciSequence(0)).toEqual([]);
    expect(fibonacciSequence(1)).toEqual([0]);
    expect(fibonacciSequence(2)).toEqual([0, 1]);
    expect(fibonacciSequence(3)).toEqual([0, 1, 1]);
    expect(fibonacciSequence(4)).toEqual([0, 1, 1, 2]);
    expect(fibonacciSequence(5)).toEqual([0, 1, 1, 2, 3]);
    expect(fibonacciSequence(6)).toEqual([0, 1, 1, 2, 3, 5]);
    expect(fibonacciSequence(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });
});
