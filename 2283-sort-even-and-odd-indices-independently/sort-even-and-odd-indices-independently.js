/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortEvenOdd(nums) {
  let oddIndex = [];
  let evenIndex = [];
  let combined = [];
  if (nums.length <= 2) {
    return nums;
  } else {
    for (var num in nums) {
      if (num % 2 === 0) {
        evenIndex.push(nums[num]);
      } else {
        oddIndex.push(nums[num]);
      }
    }
    evenIndex.sort((a, b) => a - b);
    oddIndex.sort((a, b) => b - a);

    for (let i = 0; i < evenIndex.length || i < oddIndex.length; i++) {
      combined.push(evenIndex[i]);
      if (oddIndex[i] !== undefined) {
        combined.push(oddIndex[i]);
      }
    }
  }

  return combined;
}
