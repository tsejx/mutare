/**
 * 检测给定值是否为布尔值。
 * @param value - 要检查的值。
 * @returns 如果值是布尔值，则为 true；否则为 false。
 */
export function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean';
}
