export const findLargestNumberInNestedArray = (array = [[]]) => {
  let maxNumber = array[0][0];

  for (let i = 0; i < array.length; i++) {
    const currentArray = array[i];

    for (let index = 0; index < currentArray.length; index++) {
      const currentNumber = currentArray[index];
      if (currentNumber > maxNumber) {
        maxNumber = currentNumber;
      }
    }
  }

  return maxNumber;
};
