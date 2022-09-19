function stringifyNumbers(oldObj) {
  let newObj = {};
  for (const key in oldObj) {
    if (typeof oldObj[key] === "number") {
      newObj[key] = oldObj[key].toString();
    } else if (typeof oldObj[key] === "object" && !Array.isArray(oldObj[key])) {
      newObj[key] = stringifyNumbers(oldObj[key]);
    } else {
      newObj[key] = oldObj[key];
    }
  }
  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

function collectStrings(oldObj) {
  let newArr = [];
  for (const key in oldObj) {
    if (typeof oldObj[key] === "string") {
      newArr.push(oldObj[key]);
    } else if (typeof oldObj[key] === "object" && !Array.isArray(oldObj[key])) {
      newArr = newArr.concat(collectStrings(oldObj[key]));
    }
  }
  return newArr;
}

const obj1 = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj1));
