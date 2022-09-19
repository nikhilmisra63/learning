const fibDP = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) {
    return 1;
  }
  memo[n] = fibDP(n - 1, memo) + fibDP(n - 2, memo);
  return memo[n];
};

// console.log(fibDP(5));

// Tabulation
const fib = (n) => {
  const arr = new Array(n + 1).fill(0);
  arr[1] = 1;
  for (let i = 0; i <= n; i++) {
    arr[i + 2] = arr[i] + arr[i + 1];
  }
  return arr[n];
};

console.log(fib(50));
