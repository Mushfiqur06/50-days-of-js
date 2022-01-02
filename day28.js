function toWeirdCase(string) {
  // Your code goes here
  let arr = string.split("");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      result.push(arr[i].toUpperCase());
    } else {
      result.push(arr[i]);
    }
  }
  return result.join("");
}

console.log(`${toWeirdCase("This is a test")}`);
