export const closureSnakeBuilder = (char = "") => {
  let newChar = "";

  const innerFunction = () => {
    newChar += char;

    return newChar;
  };
  return innerFunction;
};
