const latterToNum = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
};

function getDigit(num, i) {
  // return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  const char = latterToNum[num.split("").reverse().join("").charAt(i)];
  return char ? char : 0;
}
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    // maxDigits = Math.max(maxDigits, Math.abs(nums[i]).toString().length);
    maxDigits = maxDigits < nums[i].length ? nums[i].length : maxDigits;
  }
  return maxDigits;
}

const radixSort = (nums) => {
  const maxDigit = mostDigits(nums);
  for (let k = 0; k < maxDigit; k++) {
    let buckets = Array.from({ length: 26 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k);
      buckets[digit].push(nums[i]);
    }
    nums = [].concat(...buckets);
  }
  return nums;
};

// console.log(radixSort([23, 345, 12, 2345, 9852]));

// console.log(radixSort(["abc", "zca", "aaa"]));
console.log(
  radixSort([
    "Zimbabwe",
    "South-Africa",
    "India",
    "America",
    "Yugoslavia",
    " Australia",
    "Denmark",
    "France",
    "Netherlands",
    "Italy",
    "Germany",
  ])
);
// console.log(
//   radixSort(["geeksforgeeks", "is", "the", "best", "place", "for", "learning"])
// );
