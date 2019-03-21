/**
 * Array类型检测函数（推荐，使用数组对象的原生方法判断）
 * @param {*} value 检测对象
 * @returns {boolean} 如果检测对象是数组则返回true，否则返回false
 */
const isArray = value => Array.isArray(value);

// isPropertyOf 判断父级对象 可检查整个原型链 可能继承自数组）
const isArrayByProperty = value => Array.prototype.isPrototypeOf(value);

// 检查指定对象的构造函数 可检查整个原型链 可能继承自数组
const isArrayByConstructor = value => value.constructor === Array;

// 检查一个对象是否是制定构造函数的实例 可检查整个原型链 可能继承自数组
const isArrayByInstance = value => value instanceof Array;

// 调用原始的 toString 方法 不检查整个原型链
const isArrayByToString = value => Object.prototype.toString.call(value) == '[object Array]';

export { isArray, isArrayByProperty, isArrayByConstructor, isArrayByInstance, isArrayByToString };
