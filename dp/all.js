const fib = (n, memo = {}) => {
  if (memo[n]) return memo[n];
  if (n <= 2) {
    return 1;
  }
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

const gridTraveler = (start, end, memo = {}) => {
  const key = `${start}, ${end}`;
  if (key in memo) return memo[key];
  if (start === 1 && end === 1) return 1;
  if (start === 0 || end === 0) return 0;
  memo[key] =
    gridTraveler(start - 1, end, memo) + gridTraveler(start, end - 1, memo);
  return memo[key];
};

const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (const num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (const num of numbers) {
    const remainder = targetSum - num;
    const result = howSum(remainder, numbers, memo);
    if (result !== null) {
      memo[targetSum] = [...result, num];
      return memo[targetSum];
    }
  }
  return null;
};

const bestSum = (targetSum, numbers, memo = {}) => {
  // m = ts ,n = num
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  let bestCombination = null;
  for (const num of numbers) {
    const remainder = targetSum - num;
    const result = bestSum(remainder, numbers, memo);
    if (result !== null) {
      const combination = [...result, num];
      if (!bestCombination || combination.length < bestCombination.length) {
        bestCombination = combination;
      }
    }
  }
  memo[targetSum] = bestCombination;
  return bestCombination;
};

console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));

// brute force complexity               memoized
//  Time: O(n to power m * m)          Time O(n*m to power of 2)
//  Space: O(m)                        Space O(m*m)
