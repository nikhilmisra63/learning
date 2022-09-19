// Maximum Length of Repeated Subarray
// https://leetcode.com/problems/maximum-length-of-repeated-subarray/

const maxLength = (nums1, nums2) => {
  const dp = new Array(nums2.length + 1).fill(0);
  let ans = 0;
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = nums2.length; j > 0; j--) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[j] = dp[j - 1] + 1;
        ans = Math.max(ans, dp[j]);
      } else {
        dp[j] = 0;
      }
    }
  }
  return ans;
};

console.log(maxLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]));
console.log(maxLength([0, 0, 0, 0, 0], [0, 0, 0, 0, 0]));
console.log(maxLength([1, 0, 0, 0, 1], [1, 0, 0, 1, 1]));
// console.log(maxLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]));
