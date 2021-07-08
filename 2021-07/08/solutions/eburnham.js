

const lengthOfLongestSubstring =  (s, max = 0) => {
    if(!s.length) return max;
    let sub = ''
    
    for(let i = 0; i < s.length; i++){
        if(sub.includes(s[i])) break;
        else sub+=s[i]
    }

    return lengthOfLongestSubstring(s.slice(1), sub.length > max ? sub.length : max)
};


// console.log(lengthOfLongestSubstring('abcabcbb'));
// console.log(lengthOfLongestSubstring('bbbbb'));
// console.log(lengthOfLongestSubstring('pwwkew'));
// console.log(lengthOfLongestSubstring(''));
