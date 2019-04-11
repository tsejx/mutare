/**
 * 计算字符串片段出现次数
 * @export
 * @param  {string} str 整段字符串
 * @param  {string} index 片段字符串
 * @return 片段字符在整段字符串出现的次数
 */
export function countStr(str, index) {
  return str.split(index).length - 1;
}
