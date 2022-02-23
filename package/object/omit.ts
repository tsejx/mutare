function omit(obj, arr) {
    return Object.keys(obj)
        .filter(k => !arr.includes(k))
        .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
}

export default omit;