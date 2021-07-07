/* 

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same 
backward as forward. 
For example, 121 is palindrome while 123 is not.

Input: x = 121
Output: true

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. 
From right to left, it becomes 121-. 
Therefore it is not a palindrome.

Follow up: Could you solve it without 
converting the integer to a string?

*/




//take in number
//negative -> return false
//check both ends of stringified number
//call again til length = 2




const palindrome = n => {
    if(Number(n) < 0) return false
    n = String(n)
    
    //base case
    if(n.length === 1) return true
    if(n.length === 2) return n[0] === n[1] ? true : false

    if(n[0] === n[n.length - 1]) return palindrome(n.slice(1, n.length - 1))
    else return false

}

console.log(palindrome(121))
console.log(palindrome(221))