/**
 * 检测给定值是否为 null。
 * @param value - 要检查的值。
 * @returns 如果值是 null，则为 true；否则为 false。
 */
export function isNull(value: any): value is null {
  return value === null;
}
