/**
 * 数组去重函数（根据筛选函数）
 * @param {array} arr 数组集合
 * @param {function} fn 对比方式 传入对比的对象值 根据返回布尔值是否去除重复数据
 */
export function dedupeBy(arr, fn) {
  return arr.reduce((acc, v) => {
    if (!acc.some(x => fn(v, x))) acc.push(v);
    return acc;
  }, []);
}
