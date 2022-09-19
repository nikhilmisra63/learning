// const a = [1, 0, 0, -1, -2, -3, 3, 4];
// const sortedArray = a.sort();
// const data = {};
// for (let i = 0; i < sortedArray.length; i += 1) {
//   data[a[i]] = 0;
//   for (let j = 1; j < sortedArray.length; j += 1) {
//     if (sortedArray[i] === sortedArray[j]) {
//       data[a[i]] += 1;
//     }
//   }
// }
// console.log(data);
// const { a } = req;

function sortGreatest(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(sortGreatest([1, 0, 0, -1, -2, -3, 3, 4]));
