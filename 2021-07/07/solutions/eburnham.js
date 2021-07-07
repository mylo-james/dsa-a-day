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
