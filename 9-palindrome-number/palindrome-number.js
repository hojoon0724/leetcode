/**
 * @param {number} x
 * @return {boolean}
 */

let num = 0

function isPalindrome(x) {
    num = x.toString()
    let arr = num.split('')
    console.log(arr)
    let i = 0
    let z = arr.length - 1
    while (i <= z) {
        if (arr[i] === arr[z]) {
            i++;
            z--;
        } else {
            return false
        }
    }
    return true
};