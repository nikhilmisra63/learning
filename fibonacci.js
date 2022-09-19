// const fib = (n) => {
//   if (n <= 2) {
//     return 1;
//   }
//   return fib(n - 1) + fib(n - 2);
// };

// const fibDP = (n, memo = {}) => {
//   if (n in memo) return memo[n];
//   if (n <= 2) {
//     return 1;
//   }
//   memo[n] = fibDP(n - 1, memo) + fibDP(n - 2, memo);
//   return memo[n];
// };

var fib = function (n, memo) {
  if (n === 0) return 0;
  if (n <= 2) {
    return 1;
  }
  if (n in memo) return memo[n];

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

// console.log(fib(6));
console.log(fib(3));
