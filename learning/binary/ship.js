// https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
// Capacity To Ship Packages Within D Days

var shipWithinDays = function (weights, days) {
  let sum = weights.reduce((x, y) => x + y);
  let start = Math.max(Math.max(...weights), Math.floor(sum / days));
  let end = sum;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (isPossibleSolution(weights, days, mid)) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

const isPossibleSolution = (weights, days, mid) => {
  let boat = 1;
  let sum = 0;
  for (const weight of weights) {
    sum += weight;
    if (sum > mid) {
      boat++;
      sum = weight;
      if (boat > days) {
        break;
      }
    }
  }
  return boat <= days;
};

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(shipWithinDays([1, 2, 3, 1, 1], 4));
