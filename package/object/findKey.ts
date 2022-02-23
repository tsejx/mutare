function findKey(obj, fn) {
    return Object.keys(obj).find(key => fn(obj[key], key, obj));
}

export default findKey