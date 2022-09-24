// https://leetcode.com/problems/magnetic-force-between-two-balls/
// Magnetic Force Between Two Balls
// aggressive cows

var maxDistance = function (position, m) {
  let start = 0;
  let end = Math.max(...position);
  let ans = -1;
  const sortedArr = position.sort((a, b) => a - b);
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (isPossible(sortedArr, m, mid)) {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ans;
};

const isPossible = (position, m, mid) => {
  let ballCount = 1;
  let pos = position[0];
  for (let i = 0; i < position.length; i++) {
    if (position[i] - pos >= mid) {
      ballCount++;
      if (ballCount === m) {
        return true;
      }
      pos = position[i];
    }
  }
  return false;
};

console.log(maxDistance([5, 4, 3, 2, 1, 1000000000], 2));
console.log(maxDistance([15, 93, 21, 36, 42, 55, 12, 79], 2));
