//some improvement in time 76% better
const lengthOfLongestSubstring = function (s) {
  let max = 0;
  let sub = "";
  let i = 0;

  while (s[i]) {
    let dupIdx = sub.indexOf(s[i]);
    if (dupIdx !== -1) {
      sub = sub.slice(dupIdx + 1);
    }
    sub += s[i];

    if (max < sub.length) {
      max = sub.length;
    }

    i += 1;
  }

  return max;
};

//super slow implementation
// const lengthOfLongestSubstring = function (s) {
//   let max = 0;
//   let sub = [];
//   let i = 0;

//   while (s[i]) {
//     let dupIdx = sub.indexOf(s[i])
//     if (dupIdx !== -1) {
//       if (max < sub.length) {
//         max = sub.length;
//       }
//       sub.push(s[i]);
//       sub = sub.slice(dupIdx + 1);
//     } else {
//       sub.push(s[i]);
//     }
//     i += 1;
//   }
//   if (max < sub.length) {
//     max = sub.length;
//   }

//   return max;
// };

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring(" "));
