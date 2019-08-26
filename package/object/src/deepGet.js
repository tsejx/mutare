/**
 * 深度获取对象值
 * @param {*} obj
 * @param {*} keys
 *
 * @example
 * let index = 2
 * const data = {
 *   foo: {
 *     foz: [1, 2, 3],
 *     bar: {
 *       baz: ['a', 'b', 'c']
 *     }
 *   }
 * }
 * deepGet(data, ['foo', 'foz', index]) // get 3
 * deepGet(data, ['foo', 'bar', 'baz', 8, 'foz']); // null
 */
function deepGet(obj, keys) {
    return keys.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), obj);
}

export default deepGet;
