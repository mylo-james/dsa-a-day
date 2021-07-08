/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/

Given a string s, find the length of the longest 
substring without repeating characters.

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Input: s = ""
Output: 0


*/

let lengthOfLongestSubstring = function (str) {
  if (str.length < 2) return str.length;
  let left = 0;
  let right = 0;
  let max = 0;
  count = {};
  while (left < str.length) {
    let char = str[right];
    count[char] = count[char] + 1 || 1;
    if (count[char] === 2 || right === str.length - 1) {
      let length = Object.keys(count).length;
      max = length > max ? length : max;
      left += 1;
      right = left;
      count = {};
    } else {
      right += 1;
    }
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb")); //3
console.log(lengthOfLongestSubstring("bbbbb")); //1
console.log(lengthOfLongestSubstring("pwwkew")); //3
console.log(lengthOfLongestSubstring("a a")); //0
