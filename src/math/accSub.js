import accMul from './accMul';
import countDecimals from './countDecimals';
import accValidation from './accValidation';

/**
 * 减法运算（保证 JavaScript 浮点精度准确）
 * @param {any} n1 被减数
 * @param {any} n2 减数
 * @return 减法运算计算结果
 */
function accSub(n1, n2) {
    n1 = Number(n1);
    n2 = Number(n2);
    var base1, base2, precision;
    try {
        base1 = countDecimals(n1) + 1;
    } catch (e) {
        base1 = 0;
    }
    try {
        base2 = countDecimals(n2) + 1;
    } catch (e) {
        base2 = 0;
    }
    precision = Math.pow(10, Math.max(base1, base2));
    var res = Number((accMul(n1, precision) - accMul(n2, precision)) / precision);
    return accValidation('sub', n1, n2, res);
}

export default accSub;
