const lengthOfLongestSubstring = function (s) {
  let max = 0
  let sub = [];
  let i = 0

  while(s[i]){
    if(sub.includes(s[i])){
      if(max < sub.length){
        max = sub.length
        debugger
      }
      sub = [s[i]]
    }else{
      sub.push(s[i])
    }

    i += 1
  }
  return max

};


console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring(''));