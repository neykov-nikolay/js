export const closureGreeter = (greeting = "") => {
  const innerFunction = (name) => {
    const greetingMessage = greeting + name;

    return greetingMessage;
  };

  return innerFunction;
};
