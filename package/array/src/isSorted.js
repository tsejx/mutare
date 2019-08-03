/**
 * Returns `1` if the array is sorted in ascending order,`-1` if it is sorted in descending order or `0` if it is not sorted.
 * @param {*} arr
 */
function isSorted(arr) {
    let direction = -(arr[0] - arr[1]);
    for (let [i, val] of arr.entries()) {
        direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
        if (i === arr.length - 1) return !direction ? 0 : direction;
        else if ((val - arr[i + 1]) * direction > 0) return 0;
    }
}

export default isSorted