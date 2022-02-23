/**
 * Number类型检测函数（仅适用于字面量）
 * @param {*} v 检测对象
 * @returns {boolean} 如果检测对象是number类型则返回true，否则返回false
 */
export function isNumber(v) {
  return typeof v === 'number';
}
