/**
 * 检查数组是否为空数组
 * @param {array} value
 */
export function isEmptyArray(value: any): value is [] {
  return Array.isArray(value) && value.length === 0;
}
