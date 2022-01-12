function set(arrOfNum) {
  // write your code here
  let result = arrOfNum.filter(
    (value, index, arr) => arr.indexOf(value) === index
  );
  console.log(result);
}

const arrOfNum = [1, 2, 2, 4, 5, 6, 6];

set(arrOfNum);
