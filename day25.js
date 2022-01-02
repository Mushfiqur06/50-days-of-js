function spinWords(string) {
  //TODO Have fun :)
  let newStr = string.split(" ");
  let result = [];
  newStr.forEach((value) => {
    if (value.length >= 5) {
      let strRevearse = value.split("").reverse().join("");

      result.push(strRevearse);
    } else {
      result.push(value);
    }
  });
  return result.join(" ");
}
spinWords("You are almost to the last test");
