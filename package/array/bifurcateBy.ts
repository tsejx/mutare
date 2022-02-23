/**
 *
 * @param {Array} arr 分离成员的数组
 * @param {Function} fn 筛选函数
 * @example
 * bifurcateBy(['foo', 'bar', 'baz'], x => x[0] === 'a')
 * // => [['']]
 */
export default function bifurcateBy(arr, fn) {
    return arr.reduce((acc, value, i) => (acc[fn(value, i) ? 0 : 1].push(value), acc), [[], []]);
}
