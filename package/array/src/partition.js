/**
 * Groups the elements into two arrays, depending on the provided function's truthiness for each element.
 * @param {*} arr
 * @param {*} fn
 * @example
 * partition([
 *    {name: 'foo', age: 21, active: false},
 *    {name: 'bar', age: 25, active: true},
 *    {name: 'baz', age: 14, active: false},
 *    {name: 'ben', active: true}
 *   ],
 *   v => v.name === 'foo'
 * )
 * // [[{name: 'foo', age: 21, active: false}],[{name: 'bar', age: 25, active: true},{name: 'baz', age: 14, active: false},{name: 'ben', active: true}] ]
 */
function partition(arr, fn) {
    return arr.reduce(
        (acc, val, index, arr) => {
            acc[fn(val, index, arr) ? 0 : 1].push(val);
            return acc;
        },
        [[], []]
    );
}

export default partition;
