/**
 * 获取或者设置一个DOM元素的innerHTML
 * @param {*} ele 获取或者设置值的DOM元素
 * @param {*} value html值
 */
export function html(ele, value) {
  if (typeof value === 'undefined') {
    return ele.innerHTML;
  }
  ele.innerHTML = value;
}
