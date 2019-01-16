/*
 * @Author: tsejx
 * @Date: 2019-01-14 21:59:12
 * @Last Modified by: tsejx
 * @Last Modified time: 2019-01-14 22:00:20
 */

/**
 * 将 arguments 转为数组
 * @param {*} arg 函数参数集合
 */
const argumentsToArray = arg => Object.prototype.slice.call(arg);
