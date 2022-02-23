/**
 *
 * @param {array} arr
 * @param {function | string} fn
 * @example
 *
 * countBy([6.1, 4.2, 6.3], Math.floor) // {4: 1, 6: 2}
 * countBy(['one', 'two', 'three'], 'length') // {3: 2, 5: 1}
 */
export default function countBy(arr, fn) {
    return arr.map(typeof fn === 'function' ? fn : value => value[fn]).reduce((acc, value) => {
        acc[value] = (acc[value] || 0) + 1;
        return acc
    }, {});
}