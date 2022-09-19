function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, Math.abs(nums[i]).toString().length);
  }
  return maxDigits;
}

const radixSort = (nums) => {
  const maxDigit = mostDigits(nums);
  for (let k = 0; k < maxDigit; k++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k);
      buckets[digit].push(nums[i]);
    }
    nums = [].concat(...buckets);
  }
  return nums;
};

// console.log(radixSort([23, 345, 12, 2345, 9852]));
console.log(
  radixSort([902, 593, 7, 1556, 3556, 4386, 86, 4, 8157, 9637, 408, 29])
);
