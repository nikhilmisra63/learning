const countBits = (n) => {
  const arr = [];
  for (let i = 0; i < n + 1; i++) {
    const bit = i.toString(2);
    arr.push(bit.split("1").length - 1);
  }
  return arr;
};

console.log(countBits(5));
