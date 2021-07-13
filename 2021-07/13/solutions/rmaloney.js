const isValid = function (s) {
  let stack = [s[0]];
  let idx = 1;

  let match = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  while (idx < s.length) {
    let current = s[idx];
    if (match[current]) {
      stack.push(current);
    } else if (current !== match[stack.pop()]) {
      return false;
    }

    idx += 1;
  }
  return stack.length === 0;
};

console.log(isValid("()"));
