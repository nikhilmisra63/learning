const runningSum = (nums) => {
  let currentValue = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] = currentValue + nums[i];
    currentValue = nums[i];
  }
  return nums;
};

console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));
