// export const reverseString = (str = "") => {
//   let reversed = "";
//   for (let index = 0; index < str.length; index++) {
//     const element = str[index];
//     reversed = element + reversed;
//   }
//   return reversed;
// };

export const reverseString = (str = "") => {
  let leftPart = "";
  let rightPart = "";

  let leftIndex = 0;
  let rightIndex = str.length - 1;

  while (leftIndex <= rightIndex) {
    leftPart += str[rightIndex];
    if (leftIndex !== rightIndex) {
      rightPart = str[leftIndex] + rightPart;
    }

    leftIndex++;
    rightIndex--;
  }

  return `${leftPart}${rightPart}`;
};
