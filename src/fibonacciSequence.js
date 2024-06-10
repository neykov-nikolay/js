export const fibonacciSequence = (number) => {
  const fibNumbers = [0, 1];

  for (let index = 2; index < number; index++) {
    const previousNumber = fibNumbers[fibNumbers.length - 2];
    const lastNumber = fibNumbers[fibNumbers.length - 1];
    const num = previousNumber + lastNumber;

    fibNumbers.push(num);
  }

  return fibNumbers;
};

console.log(fibonacciSequence(4));
