


const palindrome = num => {

  if (num < 0) return false;


}


// single digit palindromes
// 0      1     2     3    4     5    6    7    8    9


// double digit palindromes
// 11     22     33    44    55    66    77    88    99


// triple digit palindromes
// 101     111     121   ect...



// tired of thinking about palindromes
// https://digitalcommons.unl.edu/cgi/viewcontent.cgi?article=1013&context=mathmidexppap#:~:text=The%20three%20digit%20palindromes%20are,212%2C%20222%2C%20.%20.%20.&text=Clearly%2C%20the%20two%20outside%20digits,the%20digits%201%20through%209.

// notes:
// when i say beginning and ending digits -- this includes pairs
// ex:  1 0 0 1           1 0 | 0 1
//       ^   ^             ^     ^
//                        pair  pair

// if odd number of digits  the center most digit can be what ever as long as the beginning and ending digits match

// if even number of digits beginning and ending digits must match






// TESTS

console.log(palindrome(121))                     // true
console.log(palindrome(-121))                   // false
console.log(palindrome(10))                     // false
console.log(palindrome(-101))                  // false
