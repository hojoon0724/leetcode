/**
 * @param {number} x
 * @return {boolean}
 */

let num = 0

function isPalindrome(x) {
    if ( String(x) === String(x).split("").reverse().join("")) {
        return true;
    }
    return false;
};