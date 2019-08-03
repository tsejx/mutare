/**
 * Removes elements in an arrau until the passed function returns `true`.Returns the remaining elements in the array.
 * @param {*} arr
 * @param {*} func
 */
function dropWhile(arr, func) {
    while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
    return arr;
}

export default dropWhile;
