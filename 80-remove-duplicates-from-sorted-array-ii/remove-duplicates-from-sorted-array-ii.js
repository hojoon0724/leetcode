/**
 * @param {number[]} nums
 * @return {number}
 */

function removeDuplicates(nums) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === nums[i + 2]) {
      // console.log(`${i} complicated`);
      j = i + 2;
      while (nums[i] === nums[j]) {
        j++;
      }
      console.log(`${i} remove from index[${i + 2}], ${j - 1 - (i + 1)}`);
      console.log(`i=${i}/j=${j}`);
      nums.splice(i + 2, j - 1 - (i + 1));
      console.log(nums);
      i++;
    } else if (nums[i] === nums[i + 1]) {
      console.log(`${i} same`);
      i++;
    } else if (nums[i] !== nums[i + 1]) {
      console.log(`${i} diff`);
      i++;
    }
  }
}