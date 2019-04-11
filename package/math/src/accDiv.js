import { countDecimals } from './countDecimals';
import { convertToInt } from './convertToInt';
import { accValidation } from './accValidation';
import { accMul } from './accMul';

/**
 * 除法运算（保证 JavaScript 浮点精度准确）
 * @param {*} num1 被除数
 * @param {*} num2 除数
 * @return 除法运算结果
 */
export function accDiv(num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  var precision1 = 0,
    precision2 = 0,
    base1,
    base2;
  try {
    precision1 = countDecimals(num1);
  } catch (e) {}
  try {
    precision2 = countDecimals(num2);
  } catch (e) {}
  base1 = convertToInt(num1);
  base2 = convertToInt(num2);
  var res = accMul(base1 / base2, Math.pow(10, precision2 - precision1));
  return accValidation('div', num1, num2, res);
}
