// SAMPLE INPUT / OUTPUT
const isOdd = (val) => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(n, cb) {
  if (n <= 1) return false;
  if (cb(n[0])) return true;
  return someRecursive(n.splice(1), cb);
}

console.log(someRecursive([2, 4], isOdd));
