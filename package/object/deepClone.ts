/**
 * 对象深拷贝
 * @param {object} obj 将要拷贝的对象
 */
export function deepClone(obj) {
    let clone = Object.assign({}, obj);
    Object.keys(clone).forEach(key =>
        (clone[key] = typeof obj[key] === 'object') ? deepClone(obj[key]) : obj[key],
    );
    return Array.isArray(obj) && obj.length
        ? (clone.length = obj.length) && Array.from(clone)
        : Array.isArray(obj)
        ? Array.from(obj)
        : clone;
}
