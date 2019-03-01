/**
 * 移除当前页面 Cookie 指定键值（浏览器端）
 * TODO: 兼容 NodeJS
 * @param {*} name
 * @param {*} domain
 * @param {*} path
 * @param {*} sercure
 */
function rmCookie(name, domain, path, sercure) {
    this.set(name, '', new Date(0), domain, path, sercure);
}

export default rmCookie;
