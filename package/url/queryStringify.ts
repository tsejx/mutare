/**
 *
 * @param {Object} params
 * @param {Object} keys
 */
function queryStringify(params, keys){
    return Object.keys(params).filter(k => keys.includes(k)).reduce((acc,key) => {
        if (params[key] !== undefined){
            return acc + `&${key}=${params[key]}`
        } else {
            return acc
        }
    }, '').substr(1);
}

