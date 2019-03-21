import { countDecimals } from './countDecimals';
import { convertToInt } from './convertToInt';
import { accValidation } from './accValidation';

/**
 * 乘法运算（保证 JavaScript 浮点精度准确）
 * @param {*} num1 第一个乘数
 * @param {*} num2 第二个乘数
 * @return 乘法运算结果
 */
export function accMul(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    var precision = 0,
        base1 = num1.toString(),
        base2 = num2.toString();
    try {
        precision += countDecimals(base1);
    } catch (e) {}
    try {
        precision += countDecimals(base2);
    } catch (e) {}
    var res = (convertToInt(base1) * convertToInt(base2)) / Math.pow(10, precision);
    return accValidation('mul', num1, num2, res);
}
