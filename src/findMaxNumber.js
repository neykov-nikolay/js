export const findMaxNumber = (numbers = []) => {
  let maxNumber = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    if (currentNumber > maxNumber) {
      maxNumber = currentNumber;
    }
  }

  return maxNumber;
};
