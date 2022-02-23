/**
 * Symbol类型检测函数
 * @param {*} v 检测对象
 * @returns {boolean} 如果检测对象是symbol类型则返回true，否则返回false
 */
export function isSymbol (value) {
  return typeof value === 'symbol'
}
