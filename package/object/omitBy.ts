function omitBy(obj, fn) {
    return Object.keys(obj)
        .filter(k => !fn(obj[k], k))
        .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
}

export default omitBy;