/*
 * @Author: tsejx 
 * @Date: 2018-12-01 12:23:32 
 * @Last Modified by:   tsejx 
 * @Last Modified time: 2018-12-01 12:23:32 
 */

/**
 * 检测对象内的属性是否全是函数类型
 * @param {any} obj 检测对象
 */
const isAllFunction = obj => Object.keys(obj).every(key => isFunction(obj[key]))