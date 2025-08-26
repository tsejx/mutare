/**
 * 检测是否为有效数组
 * @param value - 要检查的值。
 * @returns 如果值是有效数组，则为 true；否则为 false。
 */
export function isValidArray(value: any): value is any[] {
  return Array.isArray(value) && value.length > 0;
}
