/**
 * @param {string[]} strs
 * @return {string}
 */

function longestCommonPrefix(strs) {
  // if strs is empty
  if (strs.length === 0 || strs[0].length === 0) {
    return strs[0];
  }

  let test = strs[0].split('');
  let fragmentArr = [];

  let i = 0;

  while (i < test.length) {
    fragmentArr.push(test[i]);
    let fragment = fragmentArr.join('');
    console.log(`iteration: ${i} ${fragment}`);

    for (j = 1; j < strs.length; j++) {
      console.log(`fragment: ${fragment} - string: ${strs[j]}`);
      console.log(`does it start with ${fragment} = ${strs[j].startsWith(fragment)}`);
      console.log('');
      if (strs[j].startsWith(fragment) === false) {
        console.log(`failed condition - ${fragmentArr}`);
        fragmentArr.pop();
        console.log(`after pop ${fragmentArr}`);
        j = strs.length + 1;
        console.log(`set the iteration to ${i}`);
        console.log(`it should stop the string test after here`);
        return fragmentArr.join('');
      } else {
      }
    }
    i++;
  }

  return fragmentArr.join('');
}