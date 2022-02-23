/**
 * 随机生成范围内整数
 * @param {number} min 最小值
 * @param {number} max 最大值
 */
export function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
