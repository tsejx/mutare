export function httpRequest() {
    //判断是否支持XMLHttpRequest对象
    // Chrome, Firefox, Opera 8.0+, Safari
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
    //兼容IE浏览器
    const versions = [
        'MSXML2.XmlHttp.6.0',
        'MSXML2.XmlHttp.5.0',
        'MSXML2.XmlHttp.4.0',
        'MSXML2.XmlHttp.3.0',
        'MSXML2.XmlHttp.2.0',
        'Microsoft.XmlHttp',
    ];
    //定义局部变量xhr,储存IE浏览器的ActiveXObject对象
    let xhr;
    for (let i = 0; i < versions.length; i++) {
        try {
            xhr = new ActiveXObject(versions[i]);
            break;
        } catch (e) {}
    }
    return xhr;
}

/**
 * 发起HTTP请求
 * @param  {any} url 请求地址
 * @param  {any} method 仅支持GET和POST方法
 * @param  {any} data 请求参数
 * @param  {any} callback 回调函数
 * @param  {any} async 异步请求
 * @return {void}
 */
function request(url, method, data, callback, async) {
    const query = [];

    for (let key in data) {
        query.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`);
    }

    let params = method === 'GET' ? null : query.join('&');

    if (method === 'GET') {
        url = `${url}${query.length ? `?${query.join('&')}` : ''}`;
    }

    //默认异步
    if (async === undefined) {
        async = true;
    }
    //初始化HTTP请求
    httpRequest.open(method, url, async);
    //onreadystatechange函数对象
    httpRequest.onreadystatechange = () => {
        //readyState 的值等于4，从服务器拿到了数据
        if (httpRequest.readyState == 4) {
            //回调服务器响应数据
            callback(httpRequest.responseText);
        }
    };
    if (method == 'POST') {
        //给指定的HTTP请求头赋值
        httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }
    //发送HTTP请求
    httpRequest.send(params);
}