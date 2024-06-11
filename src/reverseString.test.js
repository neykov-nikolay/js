import { reverseString } from "../src/reverseString";

describe("reverseString", () => {
  test("should reverse given string", () => {
    expect(reverseString("abcde")).toBe("edcba");
    expect(reverseString("12345")).toBe("54321");
  });
});
