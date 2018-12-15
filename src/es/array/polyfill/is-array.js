/*
 * @Author: tsejx 
 * @Date: 2018-12-15 15:32:25 
 * @Last Modified by: tsejx
 * @Last Modified time: 2018-12-15 15:34:35
 */

/**
 *  ES6+ Array.isArray()兼容性函数
 */
if (!Array.isArray) {
    Array.isArray = function (a) {
        return Object.prototype.toString.call(a) === '[object Array]'
    }
}