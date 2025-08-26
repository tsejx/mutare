/**
 * 判断一个值是否为负数
 * @param value 需要判断的值
 * @returns 如果是负数返回 true，否则返回 false
 */
export function isNegativeNumber(value: unknown): boolean {
  return typeof value === 'number' && value < 0;
}
