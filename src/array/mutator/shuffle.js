/**
 * 数组乱序函数
 * @param {Array} a 需要乱序的数组
 * @returns {Array} 乱序后的数组
 * @example
 *
 * shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
 * // =>[6, 1, 2, 7, 9, 8, 4, 5, 10, 3]
 *
 * shuffle([{a: 1}, {b: 2}, {c: 3}, {d: 4}, {e: 5}])
 * // =>[{a: 1}, {d: 4}, {e: 5}, {c: 3}, {b: 2}]
 */
function shuffle(a) {
    var m = a.length,
        t,
        i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        [a[m], a[i]] = [a[i], a[m]];
    }
    return a;
}

export default shuffle
