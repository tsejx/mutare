/**
 * 是否为正整数
 * @param value 任意值
 * @returns 是否为正整数
 */
export function isPositiveInteger(value: any): boolean {
  return Number.isInteger(value) && value > 0;
}
