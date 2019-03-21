import { accMul } from './accMul';
import { countDecimals } from './countDecimals';
import { accValidation } from './accValidation';

/**
 * 减法运算（保证 JavaScript 浮点精度准确）
 * @param {any} num1 被减数
 * @param {any} num2 减数
 * @return 减法运算计算结果
 */
export function accSub(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    var base1, base2, precision;
    try {
        base1 = countDecimals(num1) + 1;
    } catch (e) {
        base1 = 0;
    }
    try {
        base2 = countDecimals(num2) + 1;
    } catch (e) {
        base2 = 0;
    }
    precision = Math.pow(10, Math.max(base1, base2));
    var res = Number((accMul(num1, precision) - accMul(num2, precision)) / precision);
    return accValidation('sub', num1, num2, res);
}