/**
 * 检测给定值是否为数组。
 * @param value - 要检查的值。
 * @returns 如果值是数组，则为 true；否则为 false。
 */
export function isArray(value: any): value is any[] {
  return Array.isArray(value);
}
