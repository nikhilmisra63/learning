function dupe(...args) {
  // Two pointers
  const dupeArr = [];
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      dupeArr.push(args[start]);
    }
    start++;
    next++;
  }
  return { dupeArr };
}

console.log(dupe(1, 2, 2, 3, 3));
