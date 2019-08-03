/**
 * Mutates the original array to filter out the values specified.
 * @param {*} arr
 * @param  {...any} args
 */
function segregate(arr, ...args) {
    let argState = Array.isArray(args[0]) ? args[0] : args;
    let segregated = arr.filter((v, i) => !argState.includes(v));
    arr.length = 0;
    segregated.forEach(v => arr.push(v));
}

export default segregate;
