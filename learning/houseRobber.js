// House Robber
// Max sum of non adjacent elements
// https://leetcode.com/problems/house-robber/

// Recursive
const rob = (nums) => {
  const house = (arr, n) => {
    // Base Case
    if (n < 0) return 0;
    if (n === 0) return arr[0];
    let include = house(arr, n - 2) + nums[n];
    let exclude = house(arr, n - 1) + 0;

    return Math.max(include, exclude);
  };
  return house(nums, nums.length - 1);
};

const robM = (nums) => {
  const house = (arr, n, memo = {}) => {
    // Base Case
    if (n < 0) return 0;
    if (n === 0) return arr[0];
    if (n in memo) return memo[n];
    let include = house(arr, n - 2, memo) + nums[n];
    let exclude = house(arr, n - 1, memo) + 0;
    memo[n] = Math.max(include, exclude);
    return memo[n];
  };
  return house(nums, nums.length - 1);
};

const robT = (nums) => {
  const n = nums.length;
  const dp = new Array(n).fill(0);
  dp[0] = nums[0];
  for (let i = 1; i < n; i++) {
    const include = (dp[i - 2] || 0) + nums[i];
    const exclude = dp[i - 1] + 0;
    dp[i] = Math.max(include, exclude);
  }

  return dp[n - 1];
};

// O(1) space

const robO1 = (nums) => {
  let prev = 0;
  let next = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const ans = Math.max(prev + nums[i], next + 0);
    prev = next;
    next = ans;
  }
  return next;
};

// console.log(rob([5, 20, 15, -2, 18]));
// console.log(robM([3, 4, 2]));
// console.log(robT([3, 4, 2]));
console.log(robO1([3, 4, 2]));
