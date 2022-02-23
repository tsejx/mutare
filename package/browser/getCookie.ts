/**
 * 获取当前页面 Cookie（浏览器端）
 * TODO: 兼容 NodeJS
 */
export function getCookie() {
  var cookie = {};
  var all = document.cookie;
  if (all === '') return cookie;
  var list = all.split('; ');
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var p = item.indexOf('=');
    var name = item.substring(0, p);
    name = decodeURIComponent(name);
    var value = item.substring(p + 1);
    try {
      value = decodeURIComponent(value);
    } catch (e) {
      console.log('value decodeURIComponent error value=' + value);
    } finally {
    }
    cookie[name] = value;
  }
  return cookie;
}
