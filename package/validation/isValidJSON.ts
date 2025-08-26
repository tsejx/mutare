/**
 * 检测给定值是否为有效的 JSON
 * @param data
 * @returns
 */
export function isValidJSON(data) {
  try {
    JSON.parse(data)
    return true
  } catch {
    return false
  }
}
