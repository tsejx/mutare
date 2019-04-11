/**
 * 检测数组成员是否存在任意一项符合检测器的条件
 * @param {Array} arr 需要检测的数组
 * @param {function} fn 检测器
 */
function isAny(arr, fn = Boolean) {
    return arr.some(fn);
}
export default isAny;
