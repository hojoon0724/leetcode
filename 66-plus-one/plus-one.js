/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  for (i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  if (digits[0] === 0) {
    digits.unshift(1);
  }
  return digits;
}