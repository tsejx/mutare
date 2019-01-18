import countDecimals from './countDecimals';
import convertToInt from './convertToInt';
import accValidation from './accValidation';

/**
 * 乘法运算（保证 JavaScript 浮点精度准确）
 * @param {*} n1 第一个乘数
 * @param {*} n2 第二个乘数
 * @return 乘法运算结果
 */
function accMul(n1, n2) {
    n1 = Number(n1);
    n2 = Number(n2);
    var precision = 0,
        base1 = n1.toString(),
        base2 = n2.toString();
    try {
        precision += countDecimals(base1);
    } catch (e) {}
    try {
        precision += countDecimals(base2);
    } catch (e) {}
    var res = (convertToInt(base1) * convertToInt(base2)) / Math.pow(10, precision);
    return accValidation('mul', n1, n2, res);
}

export default accMul;
