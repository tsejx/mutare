/**
 * 判断是否为有效的 Object（有成员的 Object）
 * @param value 任意值
 * @returns 是否为有效的 Object
 */
export function isValidObject(value: unknown): value is Record<string, unknown> {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    Object.keys(value).length > 0
  );
}
