/**
 * 检测给定值是否为函数。
 * @param value - 要检查的值。
 * @returns 如果值是函数，则为 true；否则为 false。
 */
export function isFunction(value: any): value is Function {
  return typeof value === 'function';
}
