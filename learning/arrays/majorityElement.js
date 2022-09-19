// const majorityElement = (nums) => {
//   let counts = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (counts[nums[i]]) {
//       counts[nums[i]] += 1;
//     } else {
//       counts[nums[i]] = 1;
//     }
//   }
//   for (const key in counts) {
//     if (nums.length / 2 < counts[key]) return key;
//   }
// };

const majorityElement = (nums) => {
  let count = 0;
  let lastNum;
  for (let i of nums) {
    if (count === 0) {
      lastNum = i;
    }
    count += lastNum === i ? 1 : -1;
  }
  return lastNum;
};

console.log(majorityElement([2, 3, 2, 1, 1, 1, 3, 3, 3, 4]));
