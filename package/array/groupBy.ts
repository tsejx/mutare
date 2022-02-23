/**
 * Groups the elements of an array based on the given function.
 * @param {*} arr
 * @param {*} fn
 * @example
 * groupBy(
 *  [
 *   {id: 1, type: 'a'},
 *   {id: 2, type: 'a'},
 *   {id: 3, type: 'b'},
 *   {id: 4, type: 'c'},
 *   {id: 5, type: 'c'},
 *   {id: 6, type: 'd'}
 *  ],
 *  v => v.type === 'a' || v.type === 'c'
 * )
 */
export default function groupBy(arr, fn) {
  return arr.map(typeof fn === 'function' ? fn : value => value[fn]).reduce((acc, value, i) => {
    acc[value] = (acc[value] || []).concat(arr[i])
    return acc
  }, {})
}
