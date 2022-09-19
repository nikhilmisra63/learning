const removeDupe = (nums) => {
  let uniqueCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[uniqueCount] = nums[i];
      uniqueCount++;
    }
  }
  return uniqueCount;
};

console.log(removeDupe([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDupe([1, 1, 2]));
