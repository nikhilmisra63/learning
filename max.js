function maxQuality(packets, channels) {
  console.log(packets.length);
  let n = packets.length;
  let res = 0;

  if (n === channels) {
    for (let i = 0; i < n; i += 1) {
      res += packets[i];
    }
    return res;
  }

  packets.sort((a, b) => a - b);

  for (let i = n - channels + 1; i < n; i++) {
    res += packets[i];
  }

  n = n - channels;

  if (n % 2 == 0) {
    res += packets[n / 2];
  } else {
    const value = packets[Math.ceil(n / 2 + 1)];
    console.log(value);
    res += value / 2;
  }

  return Math.ceil(res);
}

// const packets = [2, 2, 1, 5, 3];
// const packets = [89, 48, 14];
// const packets = [1];
const channels = 1;

console.log(maxQuality(packets, channels));
