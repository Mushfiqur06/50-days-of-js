function getCount(str) {
  let vowelsCount = 0;
  // enter your magic here
  let vowelList = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let arr = str.split("");
  arr.forEach((element) => {
    if (vowelList.includes(element)) {
      vowelsCount++;
    }
  });
  console.log(arr);
  return vowelsCount;
}

console.log(getCount("THe Strings are SOO COOL"));
