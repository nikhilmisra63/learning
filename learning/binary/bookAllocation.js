// https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
// Capacity To Ship Packages Within D Days
// similar to book allocation

const bookAllocation = (arr, n, m) => {
  let start = 0;
  let end = arr.reduce((a, b) => a + b);
  let ans = -1;
  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (isPossibleSolution(arr, n, m, mid)) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return ans;
};

const isPossibleSolution = (arr, n, m, mid) => {
  let studentCount = 1;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (sum + arr[i] <= mid) {
      sum += arr[i];
    } else {
      studentCount++;
      if (studentCount > m || arr[i] < mid) {
        return false;
      }
      sum = arr[i];
    }
  }
  return true;
};

console.log(bookAllocation([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, 5));
