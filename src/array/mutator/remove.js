/**
 * 删除数组某项元素
 * @param {array} a 删除成员的数组
 * @param {numbet} i 删除元素的索引
 * @returns {array} 删除元素后新数组
 * @example
 *
 * remove([1, 2, 3, 4, 5], 3)
 * // => [1, 2, 3, 5]
 *
 * remove([{a: 1}, {b: 2}, {c: 3}, {d: 4}, {e: 5}], 3)
 * // => [{a: 1}, {b: 2}, {c: 3}, {e: 5}]
 */
function remove(a, i) {
    let r = a.slice(i + 1);
    a.splice(i, a.length);
    return a.concat(r);
}

export default remove