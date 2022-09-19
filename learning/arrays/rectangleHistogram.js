const rectangleHistogram = (heights) => {
  heights.push(0);
  const stack = [];
  let result = 0;
  let i = 0;
  while (i < heights.length) {
    if (stack.length === 0 || heights[stack[stack.length - 1]] < heights[i]) {
      stack.push(i);
      i++;
    } else {
      const height = heights[stack.pop()];
      const left = stack.length - 1 >= 0 ? stack[stack.length - 1] : -1;
      const width = i - left - 1;
      result = Math.max(result, height * width);
    }
  }
  return result;
};
console.log(rectangleHistogram([2, 1, 5, 6, 2, 3]));
