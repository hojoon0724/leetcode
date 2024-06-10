/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    let cand = null;
    let count = 0;
    for (num of nums) {
        if (count == 0) {
            cand = num;
        }
        if (num == cand) {
            count++;
        } else {
            count--;
        }
    }
    return cand;
}