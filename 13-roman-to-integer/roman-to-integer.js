/**
 * @param {string} s
 * @return {number}
 */
 
let map = new Map();

map.set('I', 1);
map.set('V', 5);
map.set('X', 10);
map.set('L', 50);
map.set('C', 100);
map.set('D', 500);
map.set('M', 1000);

function romanToInt(str) {
  let arr = str.split('');
  let answer = 0;
  let i = 0;
  while (i < arr.length) {
    if (map.get(arr[i]) < map.get(arr[i + 1])) {
      answer = answer + (map.get(arr[i + 1]) - map.get(arr[i]));
      i = i + 2;
    } else {
      answer = answer + map.get(arr[i]);
      i++;
    }
  }
  return answer;
}