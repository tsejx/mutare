/**
 * 按指定数值分离数组
 *
 * @param {Array} arr 需分离成员的数组
 * @param {number} size 分离后各成员数组所包含的成员数
 * @returns {Array} 返回分离后的数组
 * @example
 *
 * chunk(['a', 'b', 'c', 'd', 'e'], 2)
 * // => [['a', 'b'], ['c', 'd'], ['e']]
 *
 * chunk([{a: 'a'}, {b: 'b'}, {c: 'c'}, {d: 'd'}, {e: 'e'}], 3)
 * // => [[{a: 'a'}, {b: 'b'}, {c: 'c'}], [{d: 'd'}, {e: 'e'}]]
 */
function chunk(arr, size) {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
    );
}

export default chunk;
