/**
 * 判断是否为空对象
 * @param {obj} obj 检测对象
 */
export function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}
