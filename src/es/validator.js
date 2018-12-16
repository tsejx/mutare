/*
 * @Author: tsejx 
 * @Date: 2018-12-01 12:29:20 
 * @Last Modified by: tsejx
 * @Last Modified time: 2018-12-16 23:41:14
 */

// 使用 Object.prototype.toString 有可能会被重写

/**
 * Null类型检测函数
 * @param {*} v 检测对象
 * @returns {boolean} 如果检测对象是null类型则返回true，否则返回false
 */
const isNull = v => v === null

/**
 * Undefined类型检测函数
 * @param {*} v 检测对象
 * @returns {boolean} 如果检测对象是undefined类型则返回true，否则返回false
 */
const isUndefined = v => v === undefined

/**
 * Number类型检测函数（仅适用于字面量）
 * @param {*} v 检测对象
 * @returns {boolean} 如果检测对象是number类型则返回true，否则返回false
 */
const isNumber = v => typeof v === 'number'

/**
 * Boolean类型检测函数（仅适用于字面量）
 * @param {*} v 检测对象
 * @returns {boolean} 如果检测对象是boolean类型则返回true，否则返回false
 */
const isBoolean = v => typeof v === 'boolean'

/**
 * String类型检测函数（仅适用于字面量）
 * @param {*} v 检测对象
 * @returns {boolean} 如果检测对象是string类型则返回true，否则返回false
 */
const isString = v => typeof v === 'string'

/**
 * Symbol类型检测函数
 * @param {*} v 检测对象
 * @returns {boolean} 如果检测对象是symbol类型则返回true，否则返回false
 */
const isSymbol = s => typeof s === 'symbol'

// 是否 object 类型

/**
 * Function类型检测函数
 * @param {*} v 检测对象
 * @returns {boolean} 如果检测对象是函数则返回true，否则返回false
 */
const isFunction = v => typeof v === 'function'

/**
 * Array类型检测函数
 * @param {*} v 检测对象
 * @returns {boolean} 如果检测对象是数组则返回true，否则返回false
 */
const isArray = v => Array.isArray(v)

// TODO:isInteger

// TODO:isNaN

/**
 * HTMLElement检测函数
 * @param {any} node 检测是否HTMLElement的DOM节点
 */
const isHTMLElement = node => typeof node === 'object' && node !== null && node.nodeType && node.nodeName;