/**
 * 是否为小数
 * @param  {any} value
 * @return
 */
function isDecimal(value) {
    return /^[-+]?(?:0|[1-9]\d*)\.\d+$/.test(value);
}

export default isDecimal