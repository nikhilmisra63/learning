// https://leetcode.com/problems/search-in-rotated-sorted-array/
// Search in Rotated Sorted Array
var search = function (nums, target) {
  // get pivot index to decide on which side you have to find

  // IF array is Rotated then try to find the min element
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    middle = Math.floor((start + end) / 2);
    if (nums[middle] > nums[end]) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }

  //   check which side we have to start
  if (nums[start] === target) return start;

  let left = 0;
  let right = nums.length - 1;
  if (target >= nums[start] && target <= nums[right]) {
    left = start;
  } else {
    right = start - 1;
  }
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (target === nums[middle]) {
      return middle;
    } else if (target > nums[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return nums[middle] === target ? middle : -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2, 3], 7));
console.log(search([3, 1], 1));
console.log(search([1, 7, 3, 6, 5, 6], 0));
