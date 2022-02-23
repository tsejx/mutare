export default function decode (value) {
  try {
    value = decodeURIComponent(value)
  } catch (e) {
    console.error(e);
  }
  return value
}
