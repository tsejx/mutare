/**
 * 判断是否为 Object
 * @param value 任意值
 * @returns 是否为 Object
 */
export function isObject(value: unknown): value is Record<string, unknown> {
    return value !== null && typeof value === 'object';
}
