/**
 * 修复运算结果
 * @param {string} type 计算符号 接受 'add' 'sub' 'mul' 'div'
 * @param {*} n
 * @param {*} m
 * @param {*} res
 */
export function accValidation(type, n, m, res) {
    var temp = 0;
    switch (type) {
        case 'add':
            temp = n + m;
            break;
        case 'sub':
            temp = n - m;
            break;
        case 'div':
            temp = n / m;
            break;
        case 'mul':
            temp = n * m;
            break;
    }
    if (Math.abs(res - temp) > 1) {
        return temp;
    }
    return res;
}