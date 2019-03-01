/**
 * 补零函数（补到十位数）
 * @param {number} val 需要补零的数值
 * TODO: 考虑补充零的个数
 */

function fixedZero(val) {
    return val * 1 < 10 ? `0${val}` : `${val}`;
}

export default fixedZero;
