//  Coin Change
// https://leetcode.com/problems/coin-change/

const solveRecursive = (coins, amount) => {
  if (amount === 0) return 0;

  if (amount < 0) return Infinity;
  let min = Infinity;

  for (let i = 0; i < coins.length; i++) {
    const ans = solveRecursive(coins, amount - coins[i]);
    if (ans !== min) {
      min = Math.min(min, 1 + ans);
    }
  }
  return min;
};

const solveRecursiveM = (coins, amount, memo = {}) => {
  if (amount in memo) return memo[amount];
  if (amount === 0) return 0;
  if (amount < 0) return Infinity;
  let min = Infinity;

  for (let i = 0; i < coins.length; i++) {
    const ans = solveRecursiveM(coins, amount - coins[i], memo);
    if (ans !== min) {
      min = Math.min(min, 1 + ans);
    }
  }
  memo[amount] = min;
  return min;
};

const solveTabulation = (coins, amount) => {
  const table = new Array(amount + 1).fill(Infinity);
  table[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0 && table[i - coins[j]] != Infinity) {
        table[i] = Math.min(table[i], 1 + table[i - coins[j]]);
      }
    }
  }
  return table[amount];
};

const coinChange = (coins, amount) => {
  //   const ans = solveRecursive(coins, amount); // Recursion
  //   const ans = coinChangeM(coins, amount); // Recursion memoization
  const ans = solveTabulation(coins, amount); // Recursion memoization
  if (ans == Infinity) return -1;
  return ans;
};

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([1, 2, 5], 100));
