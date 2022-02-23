/**
 * Check if value is primitive
 * @param {*} v
 */
export function isPrimitive(v) {
    return v === null || typeof v !== 'object' && typeof v !== 'function'
}
