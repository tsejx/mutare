/**
 * 是否为小数
 * @param  {any} value
 * @return
 */
export function isDecimal(value) {
    return /^[-+]?(?:0|[1-9]\d*)\.\d+$/.test(value);
}