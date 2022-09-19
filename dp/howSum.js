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
  memo[targetSum] = null;
  return null;
};

// console.log(howSum(7, [2, 3]));
// console.log(howSum(7, [5, 3, 4, 7]));
// console.log(howSum(7, [2, 4]));
// console.log(howSum(8, [2, 3, 5]));
// console.log(howSum(300, [7, 14]));

// brute force complexity               memoized
//  Time: O(n to power m * m)          Time O(n*m^2)
//  Space: O(m)                        Space O(m*m)

// Tabulation

const howSumT = (targetSum, numbers) => {
  const table = new Array(targetSum + 1).fill(null);
  table[0] = [];
  let bs = null;
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        const combination = [...table[i], num];
        console.log(combination);
        if (!table[i + num] || table[i + num].length > combination.length) {
          bs = table[i + num] = combination;
        }
      }
    }
  }
  return table[targetSum];
};
// console.log(howSumT(7, [2, 3, 6, 7]));
console.log(howSumT(8, [2, 3, 5]));
// console.log(howSumT(7, [5, 3, 4, 7]));
