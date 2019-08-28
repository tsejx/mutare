function mapValues(obj ,fn) {
    return Object.keys(obj).reduce((acc, k) => {
        acc[k] = fn(obj[k], k, obj);
        return acc;
    }, {})
}

export default mapValues;