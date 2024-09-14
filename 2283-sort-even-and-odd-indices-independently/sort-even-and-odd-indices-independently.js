/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortEvenOdd(nums) {
  let oddIndex = [];
  let evenIndex = [];
  let combined = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      evenIndex.push(nums[i]);
    } else {
      oddIndex.push(nums[i]);
    }
  }
  evenIndex.sort((a, b) => a - b);
  oddIndex.sort((a, b) => b - a);

  for (let i = 0; i < nums.length/2; i++) {
    combined.push(evenIndex[i]);
    if (oddIndex[i]) {
      combined.push(oddIndex[i]);
    }
  }
  return combined;
}