/**
 * 获取或者设置一个元素的value
 * @param {*} ele 获取或设置值的DOM元素
 * @param {*} value
 */
export function val(ele, value) {
  if (typeof value === 'undefined') {
    return ele.value;
  }
  ele.value = value;
}
