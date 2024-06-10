// factorial is the sum of the multiplication of all positive numbers, which are equal to or less than the given number.
export const factorial = (number = 0) => {
  let factorialResult = 1;

  for (let num = 2; num <= number; num++) {
    factorialResult *= num;
  }

  return factorialResult;
};
