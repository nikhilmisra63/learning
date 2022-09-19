const fs = require("fs");
let chair = 13;
let lowestChair = chair;
let currentChair = chair;
function findLowestStartingStair(jumps) {
  let res = Number.MAX_VALUE;
  for (let i = jumps.length - 2; i >= 0; i--) {
    if (i + arr[i] >= n - 1) {
      let sub_res = minJumps(arr, i + 1);
      if (sub_res != Number.MAX_VALUE) res = Math.min(res, sub_res + 1);
    }
  }

  return res;
  // Write your code here
}
function main() {
  let jumps = [-5, 4, -2, 3, 1, -1, -6, -1, 0, -5];

  const result = findLowestStartingStair(jumps);
  console.log(result);
}

console.log(main());
