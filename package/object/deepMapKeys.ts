function deepMapKeys(obj, fn) {
    return Array.isArray(obj)
        ? obj.map(value => deepMapKeys(value, fn))
        : typeof obj === 'object'
        ? Object.keys(obj).reduce((acc, current) => {
              const value = obj[current];
              acc[fn(current)] =
                  value !== null && typeof value === 'object'
                      ? deepMapKeys(value, fn)
                      : (acc[fn(current)] = value);
              return acc;
          }, {})
        : obj;
}

export default deepMapKeys