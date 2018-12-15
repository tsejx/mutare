/*
 * @Author: tsejx 
 * @Date: 2018-12-15 15:39:05 
 * @Last Modified by: tsejx
 * @Last Modified time: 2018-12-15 20:49:00
 */

/**
 * 数组交集函数(ES6+)（只限基本数据类型）
 * @param {array} a 需要处理的数组
 * @param {array} b 需要处理的数组
 * @returns {array} 返回交集数组
 * @example
 * 
 * intersection([1, 2, 3, 4, 5], [2, 4])
 * // => [2, 4]
 */
const intersection = (a, b) => [...new Set(a.filter(x => new Set(b).has(x)))]

// ES7+
const intersectionES7 = (a, b) => a.filter(v => b.includes(v))