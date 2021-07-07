function isPalindrome(x) {
  if(x < 0){
    return false
  }

  let arr = [];
  while (x / 10 >= 1) {
    arr.push(x % 10);
    x = Math.floor(x / 10);
  }

  arr.push(x);
  
  let leftIndex = 0
  let rightIndex = arr.length - 1;

  while(leftIndex < rightIndex) {
    if(arr[leftIndex] !== arr[rightIndex]) return false;
    leftIndex += 1;
    rightIndex -= 1;
  }

  return true
}

