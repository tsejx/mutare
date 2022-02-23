/**
 * 获取元素宽度
 * @export
 * @param  {any} ele
 * @return {number}
 */
export function getElementWidth(ele) {
  let width =
    ele && typeof ele.getBoundingClientRect === 'function' && ele.getBoundingClientRect().width;
  if (width) {
    width = +width.toFixed(6);
  }
  return width || 0;
}
