/**
 * @param {number} n
 * @return {number[]}
 */
function lexicalOrder(n) {
  const output = [];
  checkOtherInts(1);

  return output;

  function checkOtherInts(current) {

    if (current > n) return;
    output.push(current);
    checkOtherInts(current * 10);
    if (current % 10 !== 9) checkOtherInts(current + 1);
  }
}

