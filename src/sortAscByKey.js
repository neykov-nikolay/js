export const sortAscByKey = (array = [], key = "") => {
  return array.sort((a, b) => a[key] - b[key]);
};
