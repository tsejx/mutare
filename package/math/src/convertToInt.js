import { countDecimals } from './countDecimals';

/**
 * 计算数值小数点位数
 * @param {*} n 计算数值
 */
export function convertToInt(n) {
    n = Number(n);
    var m = n;
    var t = countDecimals(n);
    var temp = n.toString().toUpperCase();
    if (temp.split('E').length === 2) {
        m = Math.round(n * Math.pow(10, t));
    } else {
        m = Number(temp.replace('.', ''));
    }
    return m;
}