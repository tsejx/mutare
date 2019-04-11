/**
 * 必须通过这个函数设置的才能通过这个函数获取
 * @param {*} ele DOM元素
 * @param {*} type 类型
 * @param {*} value 值
 */
export function cssTransform(ele, type, value) {
  var attrs = (ele.__transform = ele.__transform || {}),
    str = '';
  if (typeof value === 'undefined') {
    return attrs[type];
  }
  attrs[type] = value;
  for (var key in attrs) {
    switch (key) {
      case 'translateX':
      case 'translateY':
        str += ` ${key}(${parseFloat(attrs[key])}px)`;
        break;
      case 'rotate':
      case 'rotateX':
      case 'rotateY':
      case 'skewX':
      case 'skewY':
        str += ` ${key}(${parseFloat(attrs[key])}deg)`;
        break;
      default:
        str += ` ${key}(${attrs[key]})`;
    }
  }
  ele.style.transform = str.trim();
}
