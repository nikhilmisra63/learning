const occurrence = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  let ans = -1;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (nums[mid] === target) {
      ans = mid;
      end = mid - 1; // to get first occurrence
      //   start = mid+1 // to get last occurrence
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ans;
};

console.log(occurrence([1, 2, 3, 3, 3, 3, 5], 3));
