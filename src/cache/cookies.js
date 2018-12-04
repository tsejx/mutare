/*
 * @Author: tsejx 
 * @Date: 2018-12-02 14:41:24 
 * @Last Modified by: tsejx 
 * @Last Modified time: 2018-12-02 14:41:24 
 */

const cookie = {
  set(name, value, expires, domain, path, sercure){
    let cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    if(expires instanceof Date){
      cookie += '; expires=' + expires;
    }
    if(domain){
      cookie += '; domain=' + domain;
    }
    if(path){
      cookie += '; path=' + path;
    }
    if(sercure){
      cookie += '; sercure';
    }
    document.cookie = cookie;
  },
  get(name){
    let cookie = document.cookie;
    let searchName = encodeURIComponent(name);
    let reg = new RegExp('\\b' + searchName + '=([^;]*)\\b', 'i');
    let ret = cookie.match(reg);
    return ret ? ret[1] : '';
  },
  delete(name, domain, path, sercure){
    this.set(name, '', new Date(0), domain, path, sercure)
  }
}