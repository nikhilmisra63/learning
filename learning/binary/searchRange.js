// Find First and Last Position of Element in Sorted Array
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

var searchRange = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let i = -1;
  let j = -1;
  while (start <= end) {
    let mid = start + Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      i = mid;
      j = mid;
      while (nums[i - 1] === target) {
        i -= 1;
      }
      while (nums[j + 1] === target) {
        j += 1;
      }
      return [i, j];
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return [i, j];
};

console.log(searchRange([5, 7, 7, 8, 8, 8, 10], 8));
console.log([3, 5].reduce((a, b) => b - a) + 1);
