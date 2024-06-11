// Closures are functions that have access to variables from an outer function even after the outer function has finished executing.
// They “remember” the environment in which they were created.
export const closureCounter = (initialValue = 0) => {
  const innerFunction = () => {
    return initialValue++;
  };

  return innerFunction;
};
