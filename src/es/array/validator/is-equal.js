/*
 * @Author: tsejx 
 * @Date: 2018-12-15 15:41:38 
 * @Last Modified by: tsejx
 * @Last Modified time: 2018-12-15 21:56:11
 */

/**
 * 检测数组成员是否每项均严格相等
 * @param {Array} arr 需要检测的数组
 */

const isEqual = arr => arr.every(v => v === arr[0])