function mapKeys(obj, fn) {
    return Object.keys(obj).reduce((acc, k) => {
        acc[fn(obj[k], k, obj)] = obj[k]
        return acc;
    })
}

export default mapKeys;