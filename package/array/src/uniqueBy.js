function uniqueBy(arr, fn) {
    return arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));
}

export default uniqueBy;
