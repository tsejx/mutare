function forEachRight(arr, callback) {
    return arr
        .slice(0)
        .reverse()
        .forEach(callback);
}

export default forEachRight;
