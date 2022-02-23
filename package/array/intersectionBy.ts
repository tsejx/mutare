/**
 * 数组交集函数(ES6+)
 * @param {array} a 需要处理的数组
 * @param {array} b 需要处理的数组
 * @param {function} fn 用于各自独立筛选成员的筛选器
 * @returns {array} 返回交集数组
 * @example
 *
 * intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)
 * // => [2.1]
 */
export default function intersectionBy(a, b, fn) {
    const s = new Set(b.map(fn));
    return a.filter(x => s.has(fn(x)));
}
