/**
 * @param {number[]} nums
 * @return {number}
 */

function removeDuplicates(nums) {
  let repeat = false
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            if (!repeat) repeat = true
            else {
                nums.splice(i, 1)
                i--
            }
        }
        else repeat = false
    }
    return nums.length
}