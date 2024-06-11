import { closureUrlBuilder } from "./closureUrlBuilder";

describe("closureUrlBuilder", () => {
  test("should build url", () => {
    const buildUrl = closureUrlBuilder("https");

    expect(typeof buildUrl).toBe("function");
    expect(buildUrl("example.com", 3000)).toBe("https://example.com:3000");
    expect(buildUrl("google.com", 8080)).toBe("https://google.com:8080");
  });
});
