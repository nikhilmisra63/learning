const pascal = (numRows) => {
  if (numRows <= 0) return [];
  let pascalTriangle = new Array(numRows);

  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1);
    row[0] = 1;
    row[row.length - 1] = 1;
    for (let j = 1; j < row.length - 1; j++) {
      const rowAbove = pascalTriangle[i - 1];
      row[j] = rowAbove[j] + rowAbove[j - 1];
    }
    pascalTriangle[i] = row;
  }
  return pascalTriangle;
};

console.log(pascal(5));
