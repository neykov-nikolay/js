import { closureGreeter } from "./closureGreeter";

describe("closureGreeter", () => {
  test("should create greeter", () => {
    const greeter = closureGreeter("Hello ");

    expect(typeof greeter).toBe("function");
    expect(greeter("John")).toBe("Hello John");
    expect(greeter("Jane")).toBe("Hello Jane");
    expect(greeter("Mike")).toBe("Hello Mike");
  });
});
