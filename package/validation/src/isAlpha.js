/**
 * 是否只包含字母
 * @param  {any} value
 * @return
 */
export function isAlpha(value) {
  return /^[a-z]$/i.test(value);
}
