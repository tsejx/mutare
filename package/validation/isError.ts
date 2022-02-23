export function isError(v) {
    return Object.prototype.toString(v) === '[object Error]' || v instanceof Error
}