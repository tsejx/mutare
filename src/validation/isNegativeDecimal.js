/**
 * 是否为负小数
 * @param  {any} value
 * @return
 */
function isNegativeDecimal(value){
    return /^\-?(?:0|[1-9]\d*)\.\d+$/.test(value);
}

export default isNegativeDecimal