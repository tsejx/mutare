/**
 * 获取数据类型（只限于基本数据类型）
 * @param {object} obj
 */
export function getTypeOf(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    getTypeOf = function getTypeOf(obj) {
      return typeof obj;
    };
  } else {
    getTypeOf = function getTypeOf(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return getTypeOf(obj);
}
