function largestVariance(s) {
  const freqObj = {};

  for (let i = 0; i < s.length; i++) {
    const currStr = s.charAt(i);

    if (freqObj[currStr]) {
      freqObj[currStr]++;
    } else {
      freqObj[currStr] = 1;
    }
  }

  const freqObjKeys = Object.keys(freqObj);

  let variance = 0;

  for (let primaryString of freqObjKeys) {
    for (let secondaryString of freqObjKeys) {
      if (primaryString === secondaryString) continue;

      let primaryFreq = 0;
      let secondaryFreq = 0;
      let secondaryCharCount = freqObj[secondaryString];

      for (let i = 0; i < s.length; i++) {
        const currentStr = s[i];

        if (currentStr === primaryString) primaryFreq++;
        if (currentStr === secondaryString) {
          secondaryFreq++;
          secondaryCharCount--;
        }

        if (
          primaryFreq > 0 &&
          secondaryFreq > 0 &&
          primaryFreq > secondaryFreq
        ) {
          variance = Math.max(variance, primaryFreq - secondaryFreq);
        }

        if (primaryFreq < secondaryFreq && secondaryCharCount > 0) {
          primaryFreq = 0;
          secondaryFreq = 0;
        }
      }
    }
  }

  return variance;
}

console.log(largestVariance("bbacccabab"));
