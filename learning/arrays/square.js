const bubbleSort = () => {};
const square = (nums) => {
  nums = nums.map((a) => a * a);

  return nums.sort((a, b) => a - b);
};

console.log(square([-4, 2, 3]));
