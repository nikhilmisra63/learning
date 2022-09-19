// const sortedArr = (arr1, m, arr2, n) => {
//   let i = 0;
//   let j = 0;
//   let k = 0;
//   let arr3 = [];
//   while (i < m && j < n) {
//     if (arr1[i] < arr2[j]) {
//       arr3[k++] = arr1[i++];
//     } else {
//       arr3[k++] = arr2[j++];
//     }
//   }
//   while (i < m) {
//     arr3[k++] = arr1[i++];
//   }
//   while (j < n) {
//     arr3[k++] = arr2[j++];
//   }
//   arr1 = arr3;
//   return arr1;
// };
const sortedArr = (nums1, m, nums2, n) => {
  m--;
  n--;
  let i = nums1.length - 1;
  while (i >= 0) {
    if (n > -1 && m > -1 && nums1[m] >= nums2[n]) {
      nums1[i] = nums1[m];
      nums1[m] = nums2[n];
      m--;
    } else if (n > -1) {
      nums1[i] = nums2[n--];
    }
    i--;
  }
};

console.log(sortedArr([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(sortedArr([1], 1, [], 0));
console.log(sortedArr([0], 0, [1], 1));
