/**
 * Returns the minimum/maximum value of an array,after applying the provided function to set comparing rule.
 * @param {*} arr
 * @param {*} comparator
 *
 * @example
 * reduceWhich([1,2,3]) // 1
 * reduceWhich([1,2,3], (a,b) => b - a); // 3
 * reduceWhich([{name:'tom',age:12}, {name:'jack',age:18}, {name:'lucy', age:9}], (a,b)=> a.age - b.age) // {name: 'lucy', age: 9}
 */
export default function reduceWhich(arr, comparator = (a, b) => a - b) {
    return arr.reduce((a, b) => (comparator(a, b) >= 0 ? a : b));
}
