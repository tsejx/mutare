/*
 * @Author: tsejx 
 * @Date: 2018-12-15 15:39:24 
 * @Last Modified by: tsejx
 * @Last Modified time: 2018-12-16 01:59:38
 */

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
const difference = (a, b) => [...new Set(a.filter(x => !(new Set(b).has(x))))]

// 使用concat()方法合并后与原来两个数组筛选
const difference = (a, b) => a.concat(b).filter(v => a.includes(v) && !b.includes(v))

// TODO: 对象数组按指定值去重实现
// const differenceIn = (a, b, k) => a.filter(v => v.k === b.find(t => t.k ))