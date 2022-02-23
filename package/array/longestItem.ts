/**
 * 筛选出长度最长的项目成员
 * @param  {...any} vals 用于对比的成员集合
 */
export default function longestItem(...vals) {
    return vals.reduce((a, x) => (x.length > a.length ? x : a));
}
