import { closureSnakeBuilder } from "./closureSnakeBuilder";

describe("closureSnakeBuilder", () => {
  test("should create snake builder", () => {
    const growSnake = closureSnakeBuilder("#");

    expect(typeof growSnake).toBe("function");

    let currentSnake = growSnake();
    expect(currentSnake).toBe("#");

    currentSnake = growSnake();
    expect(currentSnake).toBe("##");

    currentSnake = growSnake();
    expect(currentSnake).toBe("###");

    currentSnake = growSnake();
    expect(currentSnake).toBe("####");

    currentSnake = growSnake();
    expect(currentSnake).toBe("#####");
  });
});
