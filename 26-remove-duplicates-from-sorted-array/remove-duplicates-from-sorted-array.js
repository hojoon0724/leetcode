/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    i = 0
    while (i < nums.length) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1)
        } else {
            i++
        }
    }
    return nums.length
};