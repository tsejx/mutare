/**
 * 根据提供的参数格式化数字（千分位断点）
 * @param {number} num 要格式化的数值
 * @param {number} decimals 保留几位小数
 * @param {string} decPoint 小数点符号（默认点号）
 * @param {string} thousandsSep 千分位符号（默认逗号）
 * @param {string} round 舍入参数，默认 “ceil” 向上取，"floor" 向下取，"round" 四舍五入
 */
function formatDigit(num, decimals, decPoint, thousandsSep, round) {
    num = (num + '').replace(/[^0-9+-Ee.]/g, '');
    round = round || 'ceil'; //"ceil","floor","round"
    var num = !isFinite(+num) ? 0 : +num,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = typeof thousandsSep === 'undefined' ? ',' : thousandsSep,
        dec = typeof decPoint === 'undefined' ? '.' : decPoint,
        s = '',
        toFixedFix = function(num, prec) {
            var k = Math.pow(10, prec);
            console.log();

            return (
                '' +
                parseFloat(Math[round](parseFloat((num * k).toFixed(prec * 2))).toFixed(prec * 2)) /
                    k
            );
        };
    s = (prec ? toFixedFix(num, prec) : '' + Math.round(num)).split('.');
    var re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
        s[0] = s[0].replace(re, '$1' + sep + '$2');
    }

    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

export default formatDigit;
