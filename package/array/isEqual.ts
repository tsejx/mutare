/**
 * 检测数组成员是否每项均严格相等
 * @param {Array} arr 需要检测的数组
 */

export default function isEqual(arr) {
    return arr.every(v => v === arr[0]);
}
