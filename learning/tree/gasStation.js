// https://leetcode.com/problems/gas-station/
// Gas Station
var canCompleteCircuit = function (gas, cost) {
  let sum = 0;
  let start = null;
  let balance = 0;
  for (let i = 0; i < gas.length; i++) {
    balance = gas[i] + balance - cost[i];
    sum += gas[i] - cost[i];
    console.log(balance, sum, start, i);
    if (balance < 0) {
      balance = 0;
      start = i + 1;
    }
  }

  if (sum < 0) return -1;
  return start;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
