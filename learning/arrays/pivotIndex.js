const pivotIndex = (nums) => {
  const sum = nums.reduce((a, b) => a + b);
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if ((sum - nums[i]) / 2 === currentSum) {
      return i;
    }
    currentSum += nums[i];
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([7, 9, 1, 2, 3]));
