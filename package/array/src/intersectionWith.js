/**
 * 数组交集函数 (可用于任何数据类型)
 * @param {*} a 参与交集的数组，筛选匹配后会保留该数组中的成员
 * @param {*} b 参与交集的数组，筛选匹配后不会保留该数组中成员
 * @param {*} comparator 筛选器函数
 */
function intersectionWith(a, b, comparator) {
    return a.filter(x => b.findIndex(y => comparator(x, y)) !== -1);
}

export default intersectionWith;
