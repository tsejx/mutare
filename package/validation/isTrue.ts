/**
 * 检测给定值是否为 true。
 * @param value - 要检查的值。
 * @returns 如果值是 true，则为 true；否则为 false。
 */
export function isTrue(value: any): value is true {
  return value === true
}
