// export const isContainingDuplicates = (array = []) => {
//   let hasDuplicates = false;
//   const tempArr = [];

//   array.forEach((element) => {
//     if (!tempArr.includes(element)) {
//       tempArr.push(element);
//     } else {
//       hasDuplicates = true;
//     }
//   });

//   return hasDuplicates;
// };

export const isContainingDuplicates = (array = []) => {
  const uniqueArray = [...new Set(array)];

  return array.length > uniqueArray.length;
};
