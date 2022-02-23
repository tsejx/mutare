/**
 *
 * @param fn
 * @param delay
 */
export default function sleep(fn: Function, delay: number) {
  if (typeof fn === 'function') {
    setTimeout(fn, delay);
  }
}