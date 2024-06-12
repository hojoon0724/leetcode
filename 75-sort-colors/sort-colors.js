/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function sortColors(arr) {
    let lo = 0;
    let mid = 0;
    let hi = arr.length - 1;

    while (mid <= hi) {
        if (arr[mid] === 0) {
            [arr[mid], arr[lo]] = [arr[lo], arr[mid]];
            lo++;
            mid++;

        } else if (arr[mid] === 2) {
            [arr[hi], arr[mid]] = [arr[mid], arr[hi]];
            hi--;
        } else {
            mid++
        }
    }
}