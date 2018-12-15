/*
 * @Author: tsejx 
 * @Date: 2018-12-15 15:41:13 
 * @Last Modified by: tsejx
 * @Last Modified time: 2018-12-15 21:56:04
 */

/**
 * 检测数组成员是否都符合检测器的条件
 * @param {Array} arr 需要检测的数组
 * @param {function} fn 检测器
 */

const isAll = (arr, fn = Boolean) => arr.every(fn)