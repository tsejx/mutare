/**
 * Mutates the original array to filter out the values specified, based on a given iterator function.
 * @param {*} arr
 * @param  {...any} args
 *
 * @example
 * const arr = [{x: 1}, {x: 2}, {x: 3}, {x: 4}]
 * segregateBy(arr, [{x: 1}, {x: 2}], item => item.x)
 * // arr = [{x: 3}, {x: 4}]
 */
export default function segregateBy(arr, ...args) {
    const length = args.length;
    let fn = length > 1 ? args[length - 1] : undefined;
    fn = typeof fn === 'function' ? (args.pop(), fn) : undefined;
    let argState = (Array.isArray(args[0]) ? args[0] : args).map(value => fn(value));
    let segregated = arr.filter((v, i) => !argState.includes(fn(v)));
    arr.length = 0;
    segregated.forEach(v => arr.push(v));
}
