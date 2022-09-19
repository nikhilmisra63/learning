// Two Sum
// https://leetcode.com/problems/two-sum/
const howSum = (targetSum, numbers) => {
  for (let i = 0; i <= numbers.length; i++) {
    for (let j = i + 1; j <= numbers.length - 1; j++) {
      if (numbers[i] + numbers[j] === targetSum) {
        return [i, j];
      }
    }
  }
};

const twoSumM = (target, nums) => {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complement in obj) {
      return [obj[complement], i];
    } else {
      obj[nums[i]] = i;
    }
  }
  return [];
};

console.log(howSum(6, [3, 3]));
console.log(twoSumM(6, [3, 3]));
