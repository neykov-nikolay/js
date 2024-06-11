import { fizzBuzz } from "./fizzBuzz";

describe("fizzBuzz", () => {
  test("should get 'Fizz' when the number can be divided by 3 without remainder", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(6)).toBe("Fizz");
    expect(fizzBuzz(9)).toBe("Fizz");
    expect(fizzBuzz(12)).toBe("Fizz");
  });

  test("should get 'Buzz' when the number can be divided by 5 without remainder", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
    expect(fizzBuzz(20)).toBe("Buzz");
    expect(fizzBuzz(25)).toBe("Buzz");
  });

  test("should get 'FizzBuzz' when the number can be divided by 3 and by 5 without remainder", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
    expect(fizzBuzz(45)).toBe("FizzBuzz");
    expect(fizzBuzz(60)).toBe("FizzBuzz");
  });

  test("should get the number when number cannot be divided by 3 or by 5 without remainder", () => {
    expect(fizzBuzz(1)).toBe(1);
    expect(fizzBuzz(2)).toBe(2);
    expect(fizzBuzz(4)).toBe(4);
    expect(fizzBuzz(7)).toBe(7);
  });
});
