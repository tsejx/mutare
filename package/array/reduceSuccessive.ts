/**
 * Applies a function against an accumulator and each element in the array(from left to right), returning an array of successively reduced values.
 * @param {*} arr
 * @param {*} fn
 * @param {*} acc
 *
 * @example
 * reduceSuccessive([1, 2, 3, 4, 5, 6], (acc, value) => acc + value, 0);
 * // [0, 1, 3, 6, 10, 15, 21]
 */
export default function reduceSuccessive(arr, fn, acc) {
    return arr.reduce(
        (res, value, index, arr) => (res.push(fn(res.slice(-1)[0], value, index, arr)), res),
        [acc]
    );
}