// String solution
let isPalindrome = function (x) {
  x = String(x).split("");
  while (x.length > 1) {
    if (x.pop() !== x.shift()) {
      return false;
    }
  }
  return true;
};