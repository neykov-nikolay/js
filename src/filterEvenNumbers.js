export const filterEvenNumbers = (numbers = []) => {
  const evenNumbers = [];

  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }

  return evenNumbers;
};
