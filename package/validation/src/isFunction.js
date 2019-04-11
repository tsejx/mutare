/**
 * Function类型检测函数
 * @param {*} v 检测对象
 * @returns {boolean} 如果检测对象是函数则返回true，否则返回false
 */
export function isFunction(v) {
  return typeof v === 'function';
}
