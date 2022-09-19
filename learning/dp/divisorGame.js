const divisorGame = (n) => {
  // calculate x
  return n % 2 === 0;
  let x = n - 1;
  while (x >= 1) {
    if (n % x !== 0) x--;
    else break;
  }
  console.log(x);
  //   let alice = 0;
  //   let bob = 0;
  //   while (n >= 0 && x >= 1) {
  //     if (alice === bob) {
  //       alice += x;
  //     } else {
  //       bob += x;
  //     }
  //     n -= x;
  //   }
  //   console.log(alice, bob, x);
  //   if (alice > bob) return true;
  //   return false;
};

console.log(divisorGame(3));
