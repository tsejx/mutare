/**
 * 去除字符串所有空格
 * @export
 * @param  {string} str
 * @return
 */
export function trimAll(str) {
  return str.replace(/\s+/g, '');
}
