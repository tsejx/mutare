/**
 * 检测数组成员是否都符合检测器的条件
 * @param {Array} arr 需要检测的数组
 * @param {function} fn 检测器
 */

export default function isAll(arr, fn = Boolean) {
    return arr.every(fn);
}
