/**
 * 是否只包含字母
 * @param  {any} value
 * @return
 */
function isAlpha(value) {
    return /^[a-z]$/i.test(value);
}

export default isAlpha;
