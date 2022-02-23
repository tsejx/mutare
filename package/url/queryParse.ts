/**
 * 将网站地址参数转换成JavaScript对象形式
 * @param  {string} url 网站地址
 * @return {object} 参数集合
 */
export function queryParse(url) {
  var params = {};

  var arr = url.split('?');
  if (arr.length <= 1) return params;

  arr = arr[1].split('&');

  arr.forEach(item => {
    var composite = item.split('=');
    params[composite[0]] = decodeURIComponent(composite[1]);
  });

  return params;
}