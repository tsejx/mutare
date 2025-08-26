/**
 * 检测给定值是否为空。
 * @param value - 要检查的值。
 * @returns 如果值为空，则为 true；否则为 false。
 */
export function isBlank(value: any): value is null | undefined {
  return value === undefined || value === null;
}
