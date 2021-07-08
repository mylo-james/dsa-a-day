//Pointer solution. No nested loops. 

const lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;

  let seen = {};
  let max = 0;
  let leftIdx = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    debugger;
    if (seen[char] !== undefined && seen[char] >= leftIdx) {
      leftIdx = seen[char] + 1;
      seen[char] = i;
    } else {
      seen[char] = i;
    }

    if (max < i - leftIdx + 1) {
      max = i - leftIdx + 1;
    }
  }

  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb")); //3
console.log(lengthOfLongestSubstring("bbbbb")); //1
console.log(lengthOfLongestSubstring("pwwkew")); //3
console.log(lengthOfLongestSubstring("dvdf")); //3
console.log(lengthOfLongestSubstring("tmmzuxt")); //5

//some improvement in time 76% better
// const lengthOfLongestSubstring = function (s) {
//   let max = 0;
//   let sub = "";
//   let i = 0;

//   while (s[i]) {
//     let dupIdx = sub.indexOf(s[i]);
//     if (dupIdx !== -1) {
//       sub = sub.slice(dupIdx + 1);
//     }
//     sub += s[i];

//     if (max < sub.length) {
//       max = sub.length;
//     }

//     i += 1;
//   }

//   return max;
// };

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

// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring("dvdf"));
// console.log(lengthOfLongestSubstring(" "));
