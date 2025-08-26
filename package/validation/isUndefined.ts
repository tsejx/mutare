/**
 * 检测给定值是否为 undefined。
 * @param value - 要检查的值。
 * @returns 如果值是 undefined，则为 true；否则为 false。
 */
export function isUndefined(value: any): value is undefined {
  return value === undefined;
}
