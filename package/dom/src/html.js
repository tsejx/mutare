/**
 * 获取或者设置一个DOM元素的innerHTML
 * @param {*} ele 获取或者设置值的DOM元素
 * @param {*} val html值
 */
export function html(ele, val) {
  if (typeof val === 'undefined') {
    return ele.innerHTML;
  }
  ele.innerHTML = val;
}
