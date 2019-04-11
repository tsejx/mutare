/**
 * 设置对象的值
 * @param {object} obj 需要设置值的对象
 * @param {string} key 键名
 * @param {any} value 值
 */
export function setPropertyOf(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
