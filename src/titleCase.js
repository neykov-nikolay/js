export const titleCase = (text = "") => {
  const firstLetter = text[0].toUpperCase();
  const letters = text.slice(1).toLowerCase();
  return `${firstLetter}${letters}`;
};
