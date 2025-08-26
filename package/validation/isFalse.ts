/**
 * 检测给定值是否为 false。
 * @param value - 要检查的值。
 * @returns 如果值是 false，则为 true；否则为 false。
 */
export function isFalse(value: any): value is false {
    return value === false;
}
