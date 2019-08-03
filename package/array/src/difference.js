/**
 * 数组差集函数(ES6+)（只限基本数据类型）
 * @param {array} a 参与数组
 * @param {array} b 需要处理的函数
 * @returns {array} 返回差集数组
 * @example
 *
 * difference([1, 2, 3, 4, 5], [2, 4])
 * // => [1, 3, 5]
 *
 * difference([NaN, undefined, '', null], [NaN, '', ,])
 * // => [null]
 */
function difference(a, b) {
    return [...new Set(a.filter(x => !new Set(b).has(x)))];
}

export default difference