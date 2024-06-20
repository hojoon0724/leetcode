/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLastWord(s) {
  let wordArr = s.split(' ');

  for (i = wordArr.length - 1; i >= 0; i--) {
    if (wordArr[i].length !== 0) {
      console.log(wordArr[i].length);
      return wordArr[i].length;
    }
  }
}