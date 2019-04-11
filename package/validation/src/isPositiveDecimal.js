/**
 * 是否是正小数
 * @param {*} value
 */
export function isPositiveDecimal(value) {
  return /^\+?(?:0|[1-9]\d*)\.\d+$/.test(value);
}
