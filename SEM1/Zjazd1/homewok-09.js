// 9. With a given start value of 0. Iterate the array and add even items and subtract odd ones.

const nums = [1,6,23,8,4,98,3,7,3,98,4,98];

const evenNums = [];
const oddNums = [];

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  if (num % 2 === 0) {
    evenNums.push(num);
  } else {
    oddNums.push(num);
  }
}

console.log(evenNums);
console.log(oddNums);
 