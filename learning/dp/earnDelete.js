// Earn and Delete
// https://leetcode.com/problems/delete-and-earn/

const earnDelete = (nums) => {
  const maxNum = Math.max(...nums);
  const dp = new Array(maxNum + 1).fill(0);
  const freq = new Array(maxNum + 1).fill(0);

  for (const num of nums) {
    freq[num]++;
  }

  dp[1] = freq[1];
  for (let i = 2; i <= maxNum; i++) {
    let points = i * freq[i];
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + points);
  }
  return dp[maxNum];
};

const earnDeleteO = (nums) => {
  const maxNum = Math.max(...nums);
  const dp = new Array(maxNum + 1).fill(0);
  const freq = new Array(maxNum + 1).fill(0);

  for (const num of nums) {
    freq[num]++;
  }

  dp[1] = freq[1];
  for (let i = 2; i <= maxNum; i++) {
    let points = i * freq[i];
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + points);
  }
  return dp[maxNum];
};

console.log(earnDelete([3, 4, 2]));
console.log(earnDeleteO([3, 4, 2]));
