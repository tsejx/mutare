/**
 * 检测数组成员是否每项均严格相等
 * @param {Array} arr 需要检测的数组
 */

const isEqual = arr => arr.every(v => v === arr[0]);

export default isEqual;
