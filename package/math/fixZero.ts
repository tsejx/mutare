/**
 * 补零函数（补到十位数）
 * @param {number} value 需要补零的数值
 * TODO: 考虑补充零的个数
 */

export function fixZero(value) {
  return value * 1 < 10 ? `0${value}` : `${value}`;
}
