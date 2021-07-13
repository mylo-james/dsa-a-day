// recursive solution

const threeSum = function (nums) {
  nums.forEach((num1, i) => {
    nums.slice(i + 1).forEach((num2, j) => {
      nums.slice(j + 1).forEach;
    });
  });
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); //[[-1,-1,2],[-1,0,1]]
console.log(threeSum([-1, 0, 1, 2, 3, -4])); //[[1, 3, -4],[-1,0,1]]

// const threeSum = function (nums) {
//   let sums = [];
//   nums.forEach((num, i)=>[
//     findSum(nums.slice(i + 1), [num], sums)
//   ])
//   return sums
// };

// const findSum = function (nums, current, sums) {
//   if (current.length === 3) {
//     debugger;
//     if (current[0] + current[1] + current[2] === 0) {
//       sums.push([current[0], current[1], current[2]]);
//       console.log("NUMS", nums);
//     }
//   }

//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];
//     let newArray = [...nums.slice(0, i), ...nums.slice(i + 1)];
//     let res = findSum(newArray, [...current, num], sums);
//   }
//   return sums;
// };
