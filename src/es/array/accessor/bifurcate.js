/*
 * @Author: tsejx 
 * @Date: 2018-12-15 15:50:45 
 * @Last Modified by: tsejx
 * @Last Modified time: 2018-12-15 16:21:49
 */

/**
 * 通过一一对应的成员为判定条件的数组将数组成员分离
 * 
 * @param {Array} arr 分离成员的数组
 * @param {Array} filter 成员为布尔值的
 * @returns {Array} 返回分离后的数组
 * @example
 * 
 * bifurcate(['a', 'b', 'c', 'd'], [true, true, false, true])
 * // => [['a', 'b', 'd'], ['c']]
 * 
 */
const bifurcate = (arr, filter) => arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [ [], [] ]);