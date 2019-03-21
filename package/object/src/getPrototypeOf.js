/**
 * 获取对象原型对象
 * @param {obj} obj 原型对象
 */
export function getPrototypeOf(obj) {
    return !obj
        ? null
        : '__proto' in obj
        ? object.__proto__
        : /* not exposed? */ obj.constructor.prototype;
}