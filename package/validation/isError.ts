/**
 * 检测给定值是否为错误对象。
 * @param value - 要检查的值。
 * @returns 如果值是错误对象，则为 true；否则为 false。
 */
export function isError(value: any): value is Error {
    return Object.prototype.toString.call(value) === '[object Error]' || value instanceof Error;
}
