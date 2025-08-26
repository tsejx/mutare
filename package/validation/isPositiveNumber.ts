/**
 * 判断给定值是否为正数
 */
export function isPositiveNumber(value: any) {
  return typeof value === 'number' && value > 0
}
