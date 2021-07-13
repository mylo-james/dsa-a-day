//slow solution. O(n) t

const myAtoi = function (s) {
  let idx = 0;
  let negative = 1;

  //remove white space
  while (s[idx] === " " && idx < s.length) idx += 1;

  //mark it as negative or positive
  if (s[idx] === "-") {
    negative = true;
    idx += 1;
  } else if (s[idx] === "+") {
    idx += 1;
  }

  let nums = "01234567890";
  let num = "";
  //build number
  while (nums.includes(s[idx])) {
    num += s[idx];
    idx += 1;
  }

  let res = negative ? -Number(num) : Number(num);
  return res >= 2 ** 31 ? 2 ** 31 - 1 : res <= -(2 ** 31) ? -(2 ** 31) : res;
};

console.log(myAtoi("2147483648"));
