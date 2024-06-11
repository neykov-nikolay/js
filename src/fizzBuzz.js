// when number can be divided by 3 without remainder return "Fizz"
// when number can be divided by 5 without remainder return "Buzz"
// when number can be divided by 3 and by 5 without remainder return "FizzBuzz"
// when number cannot be divided by 3 or by 5 withou remainder return the number
export const fizzBuzz = (number = 0) => {
  const canDivideBy3 = number % 3 === 0;
  const canDivideBy5 = number % 5 === 0;
  const FIZZ = "Fizz";
  const BUZZ = "Buzz";

  if (canDivideBy3 && canDivideBy5) {
    return `${FIZZ}${BUZZ}`;
  } else if (canDivideBy3) {
    return FIZZ;
  } else if (canDivideBy5) {
    return BUZZ;
  } else {
    return number;
  }
};
