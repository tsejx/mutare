/**
 *
 * @param {Array} arr 分离成员的数组
 * @param {Function} fn 筛选函数
 * @example
 * bifurcateBy(['foo', 'bar', 'baz'], x => x[0] === 'a')
 * // => [['']]
 */
function bifurcateBy(arr, fn) {
    return arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
}

export default bifurcateBy;
