/**
 * Array类型检测函数（推荐，使用数组对象的原生方法判断）
 * @param {*} value 检测对象
 * @returns {boolean} 如果检测对象是数组则返回true，否则返回false
 */
export function isArray(value) {
  return Array.isArray(value);
}
