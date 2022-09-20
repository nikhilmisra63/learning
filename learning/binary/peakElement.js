// https://leetcode.com/problems/find-peak-element/
// Find Peak Element

// https://leetcode.com/problems/peak-index-in-a-mountain-array/submissions/
// Peak Index in a Mountain Array

var findPeakElement = function (nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);
    if (nums[mid] < nums[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
};

console.log(findPeakElement([1, 2, 3, 1]));
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
console.log(findPeakElement([0, 1, 0]));
console.log(findPeakElement([0, 10, 5, 2]));
