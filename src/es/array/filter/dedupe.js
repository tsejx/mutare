/*
 * @Author: tsejx 
 * @Date: 2018-12-15 15:37:24 
 * @Last Modified by: tsejx
 * @Last Modified time: 2018-12-15 19:07:29
 */

/**
 * 数组去重函数(ES6+)（只限基本数据类型）
 * 
 * @param {array} a 去重的数组
 * @returns {array} 返回去重后的数组
 * @example
 * 
 * dedupe([1, 1, 2, 2, 3, 3, 4, 4])
 * // => [1, 2, 3, 4]
 * 
 * dedupe([undefined, '', , ,null])
 * // => [undefined, '', null]
 */
const dedupe = a => [...new Set(a)]

// 使用Array.from()转为数组
const dedupeFrom = a => Array.from(new Set(a))

// 使用Map数据结构实现
function dedupeMap(a) {
    const m = new Map()
    return a.filter((i) => !m.has(i) && m.set(i, 1))
}

// 使用filter()方法实现
function dedupeFilter(a) {
    let b = []
    return a.filter((i) => b.includes(i) ? '' : b.push(i))
}