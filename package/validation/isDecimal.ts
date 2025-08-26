/**
 * 检测给定值是否为小数。
 * @param value - 要检查的值。
 * @returns 如果值是小数，则为 true；否则为 false。
 */
export function isDecimal(value: any): value is number {
  return /^[-+]?(?:0|[1-9]\d*)\.\d+$/.test(value);
}
