import { closureObjectMerger } from "./closureObjectMerger";

describe("closureObjectMerger", () => {
  test("should create object merger", () => {
    const merger = closureObjectMerger({ a: 1, b: 2, c: 3 });

    expect(typeof merger).toBe("function");
    expect(merger({ x: 100 })).toEqual({ a: 1, b: 2, c: 3, x: 100 });
    expect(merger({ y: 200 })).toEqual({ a: 1, b: 2, c: 3, y: 200 });
    expect(merger({ z: 300 })).toEqual({ a: 1, b: 2, c: 3, z: 300 });
  });
});
