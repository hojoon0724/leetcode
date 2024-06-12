/**
 * @param {string[]} strs
 * @return {string}
 */

function longestCommonPrefix(strs) {
  //edge case
  if (!strs.length) return '';

  //set first word as prefix
  let prefix = strs[0];

  //start comparing with other words beginning from the second word
  for (let i = 1; i < strs.length; i++) {
    //gets the test word and finds where the match begins
    //if it doesn't begin with the prefix...
    while (strs[i].indexOf(prefix) !== 0) {
      //change prefix using 'substring'
      //'substring(start, end) -- reduces by 1 character
      prefix = prefix.substring(0, prefix.length - 1);
      console.log(!prefix);
      //checks if prefix is a falsy value
      if (!prefix) return '';
    }
  }
  return prefix;
}