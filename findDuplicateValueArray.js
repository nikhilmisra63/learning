const a = [
  "_D6DYs1fI",
  "9q9yVePEJ",
  "JsrQ_dhlC",
  "cpxMLTY6b",
  "rqXWuZfY1",
  "Nw_ZKSbiL",
  "X7tooY6K7",
  "nQPXYq6Cv",
  "H2Ica8R-l",
  "MIZQBZgti",
  "s9W5nYu4e",
  "BE8JTIzY_",
  "iDlz1V329",
  "9PwmRvg8A",
  "F6baoePhn",
  "FycT3kHWp",
];

function hasDuplicates(array) {
  var valuesSoFar = [];
  for (var i = 0; i < array.length; ++i) {
    const value = array[i];
    if (valuesSoFar.indexOf(value) !== -1) {
      return `One duplicate value: ${value}`;
    }
    valuesSoFar.push(value);
  }
  return "No duplicate value";
}
console.log(hasDuplicates(a));
