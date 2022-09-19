// Max Sub Array
const maxSubArr = (nums) => {
  let max = -Infinity;
  let currentMax = 0;

  for (let i = 0; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    max = Math.max(currentMax, max);
  }

  return max;
};

console.log(maxSubArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArr([5, 4, -1, 7, 8]));
