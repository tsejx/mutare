/**
 * 将 arguments 转为数组
 * @param {*} arg 函数参数集合
 */
export function argToArray(arg) {
    return Object.prototype.slice.call(arg);
}