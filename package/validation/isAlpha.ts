/**
 * 是否只包含字母
 * @param  value - 要检查的值。
 * @return
 */
export function isAlpha(value) {
  return /^[a-z]$/i.test(value);
}
