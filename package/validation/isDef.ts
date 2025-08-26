/**
 * 检测给定值是否已定义。
 * @param value - 要检查的值。
 * @returns 如果值已定义，则为 true；否则为 false。
 */
export function isDef(value: any): value is null | undefined {
    return value !== undefined && value !== null
  }
