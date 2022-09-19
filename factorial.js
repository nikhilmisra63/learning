const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(0));

// 1st call = 4
//  2nd call = 3
//  3rd call = 2
//  4th cal = 1
