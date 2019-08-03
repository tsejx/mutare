
/**
 * Returns the difference between two arrays, after applying the provided function to each array element of both.
 * @param {*} a
 * @param {*} b
 * @param {*} fn
 * @example
 * differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor) // [1]
 * differenceBy([{x: 2}, {x: 1}], [{x: 1}, v => v.x]) // [2]
 */
function differenceBy(a, b, fn) {
    const s = new Set(b.map(fn))
    return a.map(fn).filter(el => !s.has(el));
}