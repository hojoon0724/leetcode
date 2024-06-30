/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */

function getAncestors(n, edges) {
  let answer = [];
  const map = new Map();
  for (const set of edges) {
    let val = set[0];
    let key = set[1];
    if (!map.has(key)) {
      map.set(key, [val]);
    } else {
      map.get(key).push(val);
    }
  }

  function collectAncestors(node, ancestors) {
    if (!map.has(node)) return;
    for (const ancestor of map.get(node)) {
      if (!ancestors.has(ancestor)) {
        ancestors.add(ancestor);
        collectAncestors(ancestor, ancestors);
      }
    }
  }

  for (let x = 0; x < n; x++) {
    const ancestors = new Set();
    collectAncestors(x, ancestors);
    answer.push(Array.from(ancestors).sort((a, b) => a - b));
  }

  return answer;
}
