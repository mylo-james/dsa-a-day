// String solution
// let isPalindrome = function (x) {
//   x = String(x).split("");
//   while (x.length > 1) {
//     if (x.pop() !== x.shift()) {
//       return false;
//     }
//   }
//   return true;
// };

// Non-string answer
let isPalindrome = function (x) {
    if (x < 0) return false;
  let res = [];
  while (x > 0) {
    res.push(x % 10);
    x = Math.floor(x / 10);
  }
  for (let i = 0; i < res.length; i++) {
    if (res[i] !== res[res.length - (i + 1)]) {
      return false;
    }
  }
  return true;
};
