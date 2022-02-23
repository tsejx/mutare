
/**
 * Return the values from a single column
 * @param {*} arr
 * @param {*} col
 */
export default function column(arr, col) {
    return arr.map(function (x) {
        return x[col]
    })
}