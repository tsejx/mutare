/**
 * Filter an array of objects based on a condition while alse filtering out unspecified keys.
 * @param {*} arr
 * @param {*} keys
 * @param {*} fn
 *
 * @example
 * const data = [{id: 1, name: 'foo', age: 21}, {id: 2, name: 'bar', age: 25}]
 * reducedFilter(data, ['id', 'name'], i => i.age > 24)
 * // [{id: 2, name: 'bar'}]
 */
export default function reducedFilter(arr, keys, fn) {
    return arr.filter(fn).map(el =>
        keys.reduce((acc, key) => {
            acc[key] = el[key];
            return acc;
        }, {})
    );
}
