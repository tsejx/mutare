export function isValidJSON (data) {
  try {
    JSON.parse(data)
    return true
  } catch {
    return false
  }
}
