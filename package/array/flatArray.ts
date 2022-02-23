
/**
 * 多维数组扁平化
 * @param {*} arr 需要进行扁平化的多维数组
 */
export default function flatArray (arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }

  return arr
}