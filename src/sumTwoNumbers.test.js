import { sumTwoNumbers } from "../src/sumTwoNumbers";

describe("sumTwoNumbers", () => {
  test("should calculate the sum of two numbers", () => {
    expect(sumTwoNumbers(2, 3)).toBe(5);
    expect(sumTwoNumbers(-2, -3)).toBe(-5);
  });
});
