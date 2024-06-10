export const filterInRange = (numbers = [], min, max) => {
  return numbers.filter((number) => number >= min && number <= max);
};
