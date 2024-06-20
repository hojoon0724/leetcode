/**
 * @param {number[]} nums
 * @return {number}
 */
 
function minIncrementForUnique(nums) {
  nums.sort((a, b) => a - b);
  let count = 0;
  let i = 1;
  while (i < nums.length) {
    if (nums[i] <= nums[i - 1]) {
      count = count + nums[i - 1] - nums[i] + 1;
      nums[i] = nums[i - 1] + 1;
      i++;
    } else {
      i++;
    }
  }

  return count;
}