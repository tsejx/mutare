import countDecimals from './countDecimals';
import convertToInt from './convertToInt';
import accValidation from './accValidation';

/**
 * 除法运算（保证 JavaScript 浮点精度准确）
 * @param {*} n1 被除数
 * @param {*} n2 除数
 * @return 除法运算结果
 */
function accDiv(n1, n2) {
    n1 = Number(n1);
    n2 = Number(n2);
    var precision1 = 0,
        precision2 = 0,
        base1,
        base2;
    try {
        precision1 = countDecimals(n1);
    } catch (e) {}
    try {
        precision2 = countDecimals(n2);
    } catch (e) {}
    base1 = convertToInt(n1);
    base2 = convertToInt(n2);
    var res = accMul(base1 / base2, Math.pow(10, precision2 - precision1));
    return accValidation('div', n1, n2, res);
}

export default accDiv;
