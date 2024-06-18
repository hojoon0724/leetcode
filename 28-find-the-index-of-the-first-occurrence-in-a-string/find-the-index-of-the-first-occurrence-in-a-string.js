/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
    if (haystack.includes(needle)){
    return haystack.indexOf(needle)
    } else {
        return -1
    }

};