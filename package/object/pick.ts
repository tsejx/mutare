function pick(obj, arr) {
    return arr.reduce((acc, current) => (current in obj && (acc[current] = obj[current]), acc), {});
}

export default pick;
