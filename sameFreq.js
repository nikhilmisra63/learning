function same(arr1, arr2) {
  if (arr1 === arr2) {
    return true;
  }
  let freq1 = {};
  let freq2 = {};
  arr1 = arr1.toString();
  arr2 = arr2.toString();
  for (let i = 0; i < arr1.length; i++) {
    freq1[arr1[i]] = (freq1[arr1[i]] || 0) + 1;
  }
  console.log(freq1);
  for (let j = 0; j < arr2.length; j++) {
    freq2[arr2[j]] = (freq2[arr2[j]] || 0) + 1;
  }
  console.log(freq2);
  for (let key in freq1) {
    if (freq1[key] !== freq2[key]) return false;
  }

  return true;
}
console.log(same(1821, 281));
