function expandedForm(num) {
  // Your code here
  let newStr = num.toString().split("");
  if (newStr.length === 2) {
    return `${newStr[0]}0+${newStr[1]}`;
  }
  if (newStr.length === 3) {
    return `${newStr[0]}00+${newStr[1]}0+${newStr[2]}`;
  }
}
console.log(expandedForm(734));
