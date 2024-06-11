import { titleCase } from "../src/titleCase";

describe("titleCase", () => {
  test("should convert text to title case", () => {
    expect(titleCase("hello")).toBe("Hello");
    expect(titleCase("HELLO")).toBe("Hello");
    expect(titleCase("hElLo")).toBe("Hello");
  });
});
