const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) {
    return true;
  }
  if (targetSum < 0) return false;
  for (const num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

// brute force complexity               memoized
//  Time O(n to power m)                Time O(n*m)
//  Space O(m)                        Space O(n+m)

const canSumT = (targetSum, numbers) => {
  const arr = new Array(targetSum + 1).fill(false);
  arr[0] = true;
  for (let i = 0; i <= targetSum; i++) {
    if (arr[i] === true) {
      for (const num of numbers) {
        arr[i + num] = true;
      }
    }
  }
  return arr[targetSum];
};

console.log(canSumT(11, [1, 2, 5]));
