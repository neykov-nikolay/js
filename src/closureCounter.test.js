import { closureCounter } from "./closureCounter";

describe("closureCounter", () => {
  test("should create counter", () => {
    const counter = closureCounter(10);

    expect(typeof counter).toBe("function");
    expect(counter()).toBe(10);
    expect(counter()).toBe(11);
    expect(counter()).toBe(12);
  });
});
