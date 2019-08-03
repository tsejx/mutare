/**
 * Removes elements from the end of an array until the passed function returns `true`.Returns the remaining elements in the array.
 * @param {*} arr
 * @param {*} fn
 * @example
 * dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
 */
function dropRightWhile(arr, fn) {
    let rightIndex = arr.length;
    while (rightIndex-- && !fn(arr[rightIndex]));
    return arr.slice(0, rightIndex + 1);
}


export default dropRightWhile