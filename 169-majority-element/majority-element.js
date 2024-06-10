/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  let maxCount = 1;
  let value = 0;
  let innerCount = 1;

  if (nums.length === 1) {
    return nums[0];
  } else {
    nums.sort((a, b) => a - b);
    console.log(`ordered ${nums}`);
    for (i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1]) {
        innerCount = innerCount + 1;
        console.log(`index[${i}]  ${nums[i]}:${nums[i + 1]} -- repeat -- count: ${innerCount} `);
      } else {
        if (innerCount > maxCount) {
          maxCount = innerCount;
          value = nums[i];
        }
        innerCount = 1;
        console.log(`index[${i}]  ${nums[i]}:${nums[i + 1]} -- reset`);
      }
    }
  }
  console.log([maxCount, value]);
  return value;
}