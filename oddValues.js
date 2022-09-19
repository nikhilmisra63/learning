// function collectOddValues(arr) {
//   let result = [];
//   function helper(helperInput, n) {
//     if (n < 0) {
//       return result;
//     }
//     if (helperInput[n] % 2 !== 0) {
//       result.push(helperInput[n]);
//     }
//     helper(helperInput, n - 1);
//   }
//   helper(arr, arr.length - 1);
//   return result;
// }

// let result = [];
// function collectOddValues(arr, n) {
//   if (n < 0) return result;
//   if (arr[n] % 2 !== 0) result.push(arr[n]);
//   return collectOddValues(arr, n - 1);
// }

function collectOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) return newArr;

  if (arr[0] % 2 !== 0) newArr.push(arr[0]);

  return newArr.concat(collectOddValues(arr.slice(1)));
}
const arr = [1, 3, 5, 2, 4, 9];
console.log(collectOddValues(arr, arr.length - 1));
