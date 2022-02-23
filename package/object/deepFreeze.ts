export default function deepFreeze (obj) {
  return Object.keys(obj).forEach(
    prop => !(obj[prop] instanceof Object) || Object.isFrozen(obj[prop]) ? null : deepFrozen(obj[prop]) || Object.freeze(obj)
  )
}