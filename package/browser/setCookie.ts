/**
 *
 * @param {*} name
 * @param {*} value
 * @param {*} expires
 * @param {*} domain
 * @param {*} path
 * @param {*} sercure
 */
export default function setCookie(name, value, expires, domain, path, sercure) {
  let cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
  if (expires instanceof Date) {
    cookie += '; expires=' + expires;
  }
  // if (domain) {
  //     cookie += '; domain=' + domain;
  // }
  // if (path) {
  //     cookie += '; path=' + path;
  // }
  if (sercure) {
    cookie += '; sercure';
  }
  document.cookie = cookie;
}
