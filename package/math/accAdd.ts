import { accMul } from './accMul';
import { countDecimals } from './countDecimals';
import { accValidation } from './accValidation';

/**
 * 加法运算（保证 JavaScript 浮点精度准确）
 * @param {*} num1 第一个加数
 * @param {*} num2 第二个加数
 * @return 加法运算结果
 */
export function accAdd(num1, num2) {
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
  var res = (accMul(num1, precision) + accMul(num2, precision)) / precision;
  return accValidation('add', num1, num2, res);
}
