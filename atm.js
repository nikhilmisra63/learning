/* eslint-disable camelcase */
const amtArray = [2000, 500, 100, 50, 10]; // the denomination you want to find.
const resultArray = [];
let total = 590;
for (let i = 0; i < amtArray.length; i += 1) {
  resultArray.push(Math.floor(total / amtArray[i]));
  // Get the new total
  total %= amtArray[i];
}
const twothousands_notes = resultArray[0];
const fivehundred_notes = resultArray[1];
const hundred_notes = resultArray[2];
const fifties_notes = resultArray[3];
const ten_notes = resultArray[4];

console.log(
  `calculated amt : 10: ${ten_notes} 50: ${fifties_notes} 100 :${hundred_notes}   500 :  ${fivehundred_notes}  2000 :  ${twothousands_notes},`
);
