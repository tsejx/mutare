/**
 * Applies a function against an accumulator and each element in the array(from left to right), returning an array of successively reduced values.
 * @param {*} arr
 * @param {*} fn
 * @param {*} acc
 *
 * @example
 * reduceSuccessive([1, 2, 3, 4, 5, 6], (acc, val) => acc + val, 0);
 * // [0, 1, 3, 6, 10, 15, 21]
 */
function reduceSuccessive(arr, fn, acc) {
    return arr.reduce(
        (res, val, index, arr) => (res.push(fn(res.slice(-1)[0], val, index, arr)), res),
        [acc]
    );
}

export default reduceSuccessive