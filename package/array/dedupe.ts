/**
 * 数组去重函数（只限基本数据类型）
 * @param {array} a 去重的数组
 * @returns {array} 返回去重后的数组
 * @example
 *
 * dedupe([1, 1, 2, 2, 3, 3, 4, 4])
 * // => [1, 2, 3, 4]
 *
 * dedupe([undefined, '', , ,null])
 * // => [undefined, '', null]
 */
export default function dedupe(arr) {
    return [...new Set(arr)];
}
