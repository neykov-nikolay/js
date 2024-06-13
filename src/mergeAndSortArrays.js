export const mergeAndSortArrays = (...arrays) => {
  return arrays
    .reduce((mergedArray, currentArray) => {
      // mergedArray.push(...currentArray);
      mergedArray = [...mergedArray, ...currentArray];

      return mergedArray;
    }, [])
    .sort((a, b) => a - b);
};
