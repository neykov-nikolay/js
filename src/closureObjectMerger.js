export const closureObjectMerger = (initialObject = {}) => {
  const innerFunction = (obj = {}) => {
    const mergedObject = { ...initialObject, ...obj };
    return mergedObject;
  };

  return innerFunction;
};
