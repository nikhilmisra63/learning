const moveZero = (nums) => {
  let start = 0;
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] && nums[i] != 0) {
      const temp = nums[start];
      nums[start] = nums[i];
      nums[i] = temp;
      start++;
    }
  }
  return nums;
};

console.log(moveZero([0, 1, 0, 3, 12]));
// console.log(moveZero([0]));
console.log(moveZero([1, 0, 1]));

// [0,1,0,3,12] 1 0
// [1,0,0,3,12] 2 1
// [1,0,0,3,12] 3
// [1,3,0,0,12] 4 2
// [1,3,12,0,0] 5 3
