
/**
 * Returns a new array with `n` elements removed from the right.
 * @param {*} arr
 * @param {*} n
 * @example
 * dropRight([1,2,3]); // [1, 2]
 * dropRight([1,2,3], 2); // [1]
 * dropRight([1,2,3], 42); // []
 */
export default function dropRight(arr, n = 1) {
    return arr.slice(0, -n);
}