//  Max product sub array
// https://leetcode.com/problems/maximum-product-subarray/

const maxProd = (nums) => {
  let prevMax = nums[0];
  let prevMin = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    currMax = Math.max(prevMax * num, num, prevMin * num);
    currMin = Math.min(prevMin * num, num, prevMax * num);

    prevMax = currMax;
    prevMin = currMin;

    result = Math.max(result, currMax);
  }
  return result;
};
console.log(maxProd([-2, 0, -1]));
