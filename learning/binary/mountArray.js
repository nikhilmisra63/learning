// https://leetcode.com/problems/find-in-mountain-array/
// Find in Mountain Array

var findInMountainArray = function (target, mountainArr) {
  const peak = getPeakElement(mountainArr);
  if (mountainArr[peak] === target) {
    return peak;
  }
  const left = binarySearch(mountainArr, 0, peak, "asc", target);
  if (left >= 0) {
    return left;
  }
  return binarySearch(mountainArr, peak + 1, mountainArr.length, "dsc", target);
};

const getPeakElement = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
};

function binarySearch(mArr, start, end, order, target) {
  let left = start;
  let right = end;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target === mArr[mid]) {
      return mid;
    } else if (
      (target > mArr[mid] && order === "asc") ||
      (target < mArr[mid] && order === "dsc")
    ) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return -1;
}

console.log(findInMountainArray(3, [1, 2, 3, 4, 5, 3, 1]));
