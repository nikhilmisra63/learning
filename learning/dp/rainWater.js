// Rain Water Trapping
// https://leetcode.com/problems/trapping-rain-water/

const waterTrapping = (height) => {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let ans = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        ans += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        ans += rightMax - height[right];
      }
      right--;
    }
  }
  return ans;
};

console.log(waterTrapping([3, 1, 2, 4, 0, 1, 3, 2]));

const waterTrappingBrute = (buildings) => {
  const left = [];
  let right = [];
  let ans = 0;
  left[0] = buildings[0];
  for (let i = 1; i < buildings.length; i++) {
    left[i] = Math.max(left[i - 1], buildings[i]);
  }
  right[buildings.length - 1] = buildings[buildings.length - 1];
  for (let i = buildings.length - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], buildings[i]);
  }
  for (let k = 0; k < buildings.length; k++) {
    ans += Math.min(left[k], right[k]) - buildings[k];
  }
  return ans;
};

console.log(waterTrappingBrute([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
