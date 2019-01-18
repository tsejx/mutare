import accMul from './accMul';
import countDecimals from './countDecimals';
import accValidation from './accValidation';

/**
 * 加法运算（保证 JavaScript 浮点精度准确）
 * @param {*} n1 第一个加数
 * @param {*} n2 第二个加数
 * @return 加法运算结果
 */
function accAdd(n1, n2) {
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
    var res = (accMul(n1, precision) + accMul(n2, precision)) / precision;
    return accValidation('add', n1, n2, res);
}

export default accAdd;
