function findOdd(arr) {
  //happy coding!
  let count = 0;
  let arrs = arr.sort((a, b) => a - b);
  for (let i = 0; i < arrs.length; i++) {
    for (let j = 0; j < arrs.length; j++) {
      if (arrs[i] == arrs[j]) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return arrs[i];
    }
  }
}
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
