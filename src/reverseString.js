export const reverseString = (str = "") => {
  let reversed = "";
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    reversed = element + reversed;
  }
  return reversed;
};
