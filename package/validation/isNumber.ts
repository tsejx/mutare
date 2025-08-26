/**
 * 检测给定值是否为 number。
 * @param value - 要检查的值。
 * @returns 如果值是 number，则为 true；否则为 false。
 */
export function isNumber(value: any): value is number {
  return typeof value === 'number';
}
