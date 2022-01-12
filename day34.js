function mostFreq(arr) {
  // write your code here
  let compare = "";
  let mostFreq = "";

  arr.reduce((acc, val) => {
    if (val in acc) {
      acc[val]++;
    } else {
      acc[val] = 1;
    }
    if (acc[val] > compare) {
      compare = acc[val];
      mostFreq = val;
    }
    return acc;
  }, {});
  return `${mostFreq} ${compare}`;
}

const arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

console.log(mostFreq(arr));
