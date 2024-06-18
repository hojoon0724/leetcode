/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  const closest = nums.reduce((prev, curr) => {
    return Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev;
  });

  console.log(`check: ${nums.includes(target)}`);
  if (nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    if (target > closest) {
      return nums.indexOf(closest) + 1;
    } else {
      return nums.indexOf(closest);
    }
  }
}