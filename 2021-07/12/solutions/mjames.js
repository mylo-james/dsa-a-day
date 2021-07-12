const myAtoi = function (s) {
  s = parseInt(s) ? parseInt(s) : 0;
  return s > 2147483647 ? 2147483647 : s < -2147483648 ? -2147483648 : s;
};
