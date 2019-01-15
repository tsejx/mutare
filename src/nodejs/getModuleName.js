/*
 * @Author: tsejx
 * @Date: 2019-01-15 11:36:20
 * @Last Modified by: tsejx
 * @Last Modified time: 2019-01-15 11:40:19
 */

/**
 * 通过模块绝对地址获取模块名称
 * @param {object} module 模块
 */
function getModuleName(asolutePath) {
    var sign = 'node_modules';
    var signIndex = asolutePath.indexOf(sign);
    var pathSeparator = asolutePath.slice(signIndex - 1, signIndex);
    var modulePath = asolutePath.substring(signIndex + sign.length + 1);
    var moduleName = modulePath.substring(0, modulePath.indexOf(pathSeparator));
    moduleName = moduleName.toLowerCase();
    return moduleName;
}