/**
 * 检测给定值是否为负整数。
 * @param value - 要检查的值。
 * @returns 如果值是负整数，则为 true；否则为 false。
 */
export function isNegativeInteger(value: any): value is number {
  return typeof value === 'number' && value < 0 && Number.isInteger(value);
}
