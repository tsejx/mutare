function dig(obj, target) {
    target in obj ? obj[target] : Object.values(obj).reduce((acc, value) => {
        if (acc !== undefined) return acc;
        if (typeof value === 'object') return dig(value, target);
    }, undefined);
}

export default dig;