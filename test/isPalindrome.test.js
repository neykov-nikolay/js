import { isPalindrome } from "../src/isPalindrome";

describe("isPalindrome", () => {
  test("should check if given text is palindrome", () => {
    expect(isPalindrome("abcba")).toBe(true);
    expect(isPalindrome("12321")).toBe(true);
    expect(isPalindrome("abcde")).toBe(false);
    expect(isPalindrome("12345")).toBe(false);
  });
});
