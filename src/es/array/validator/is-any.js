/*
 * @Author: tsejx 
 * @Date: 2018-12-15 15:42:17 
 * @Last Modified by: tsejx
 * @Last Modified time: 2018-12-15 21:55:54
 */

 /**
  * 检测数组成员是否存在任意一项符合检测器的条件
  * @param {Array} arr 需要检测的数组
  * @param {function} fn 检测器
  */
 const isAny = (arr, fn = Boolean) => arr.some(fn)