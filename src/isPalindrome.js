export const isPalindrome = (text = "") => {
  let reversed = "";

  for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    reversed = letter + reversed;
  }

  return reversed === text;
};
