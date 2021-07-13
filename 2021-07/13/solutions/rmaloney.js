const isValid = function (s) {
  let stack = [s[0]];
  let idx = 1;

  let match = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  while (idx < s.length) {
    let last = stack[stack.length - 1];
    let current = s[idx];
    if (match[last] !== current) {
      stack.push(current);
    } else {
      stack.pop();
    }
    idx += 1;
  }
  return stack.length === 0;
};

console.log(isValid("(]"));
