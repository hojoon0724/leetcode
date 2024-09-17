/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
function uncommonFromSentences(s1, s2) {
  let arr1 = s1.split(' ');
  let arr2 = s2.split(' ');
  let countMap = new Map([]);
  let answer = [];

  function count(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (countMap.has(arr[i])) {
        countMap.set(arr[i], countMap.get(arr[i]) + 1);
      } else {
        countMap.set(arr[i], 1);
      }
    }
  }

  count(arr1);
  count(arr2);

  countMap.forEach(function (value, key) {
    if (value < 2) {
      answer.push(key);
    }
  });
  return answer;
}