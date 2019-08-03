/**
 * Flatten multidimensional array to one-dimensional arrays
 * @param {*} arr Target array
 */
function deepFlatten(arr) {
    return [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
}

export default deepFlatten;
