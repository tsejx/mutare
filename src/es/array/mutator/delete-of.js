/*
 * @Author: tsejx 
 * @Date: 2018-12-15 15:55:27 
 * @Last Modified by: tsejx
 * @Last Modified time: 2018-12-15 21:01:53
 */

/**
 * 删除数组某项元素
 * @param {array} a 删除成员的数组
 * @param {numbet} i 删除元素的索引
 * @returns {array} 删除元素后新数组
 * @example
 * 
 * deleteOf([1, 2, 3, 4, 5], 3)
 * // => [1, 2, 3, 5]
 * 
 * deleteOf([{a: 1}, {b: 2}, {c: 3}, {d: 4}, {e: 5}], 3)
 * // => [{a: 1}, {b: 2}, {c: 3}, {e: 5}]
 */
function deleteOf(a, i) {
    let r = a.slice(i + 1)
    a.splice(i, a.length)
    return a.concat(r)
}