/**
 * 检测给定值是否为负小数。
 * @param value - 要检查的值。
 * @returns 如果值是负小数，则为 true；否则为 false。
 */
export function isNegativeDecimal(value: any): value is string {
  return /^\-?(?:0|[1-9]\d*)\.\d+$/.test(value);
}
