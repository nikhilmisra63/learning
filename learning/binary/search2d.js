// https://leetcode.com/problems/search-a-2d-matrix/
// Search a 2D Matrix

var searchMatrix = function (matrix, target) {
  const arr = [].concat(...matrix);
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (arr[mid] === target) return true;
    else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    300
  )
);
