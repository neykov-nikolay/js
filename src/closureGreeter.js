export const closureGreeter = (greeting = "") => {
  const innerFunction = (name) => {
    return greeting + name;
  };

  return innerFunction;
};
