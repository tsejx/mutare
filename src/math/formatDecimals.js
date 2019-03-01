import accAdd from './accAdd'
import accMul from './accMul'

/**
 * 格式化数值（金额数值）并并可指定保留小数个数
 * @param {number} num 需要格式化的数字
 * @param {interger} decimals 保留数值小数的个数（默认保留两位小数并最大值为10）
 * @description 现时采取的策略是对保留小数末尾进行四舍五入的策略
 * @description 不保留小数的情况应该使用原生方法 parseInt()
 * TODO: 设定参数决定末尾保留小数是否进行四舍五入操作
 */
function formatDecimals(num, decimals, toFixed = true) {
    if (isNaN(num)) num = '0';

    num = num.toString().replace(/\$|\¥|\,/g, '');

    decimals = decimals > 0 && decimals <= 10 ? decimals : 2;

    var sign = num == (num = Math.abs(num));

    num = Math.floor(accAdd(accMul(num, Math.pow(10, decimals)), 0.50000000001));

    var interger = Math.floor(num / Math.pow(10, decimals)).toString()

    var cents = String(num).substr(String(num).length - decimals)

    return (sign ? '' : '-') + interger + '.' + cents;
}

export default formatDecimals;
