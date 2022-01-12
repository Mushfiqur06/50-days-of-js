function gcd(a, b) {
  // write your code here
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

const a = 48;
const b = 13;

console.log(gcd(a, b));
