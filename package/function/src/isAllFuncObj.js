import { isFunction } from '../../validation';

/**
 * 检测对象内的属性是否全是函数类型
 * @param {any} obj 检测对象
 */
export function isAllFunction(obj) {
  return Object.keys(obj).every(key => isFunction(obj[key]));
}
