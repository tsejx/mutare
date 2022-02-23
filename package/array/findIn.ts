/**
 * 查询对象数组(或二维数组)是否存在相同的对应键
 *
 * @param {Array} arr 对象数组
 * @param {string|number} key 查询的键名(当查询的成员为数组时,键名为可为数字索引)
 * @param {any} value 查询的键值
 * @returns {Object|undefined} 当查询成功后返回第一个对象
 * @example
 *
 * findIn([{a: 1}, {b: 2}, {c: 3}, {d: 4}, {e: 5}], 'e', 5)
 * // => [{e: 5}]
 *
 * findIn([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]], 2, 3)
 * // => [[1, 2, 3, 4, 5]]
 */
export default function findIn(arr, key, value) {
    if (!Array.isArray(arr)) return;
    return arr.filter(i => i[key] === value);
}
