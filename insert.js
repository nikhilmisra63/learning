var arr = [];
arr[0] = "Jani";
arr[1] = "Hege";
arr[2] = "Stale";
arr[3] = "Kai Jim";
arr[4] = "Borge";

const insert = (ele, i) => {
  if (arr.length <= i) {
    arr[i] = ele;
    return arr;
  }
  const oldEle = arr[i];
  arr[i] = ele;

  return insert(oldEle, i + 1);
};

console.log(insert("a", 5));
