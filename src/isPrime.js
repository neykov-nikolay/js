// prime number can only be divided by itself and 1 without reminders
export const isPrime = (number = 0) => {
  let isPrimeNumber = number <= 2 ? false : true;

  for (let divider = 2; divider < number; divider++) {
    if (number % divider === 0) {
      isPrimeNumber = false;
    }
  }

  return isPrimeNumber;
};
