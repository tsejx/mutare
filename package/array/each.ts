export default function each (object, fn, args) {
  let key,
    i = 0,
    len = object.length,
    isObj = len === undefined || 'function' === typeof object

  if (args) {
    if (isObj) {
      for (key in object) {
        if (fn.apply(object[key], args) === false) {
          break
        }
      }
    } else {
      for (; i < length;) {
        if (fn.apply(object[i++], args) === false) {
          break
        }
      }
    }
  } else {
    if (isObj) {
      for (key in object) {
        if (fn.call(object[key], key, object[key]) === false) {
          break
        }
      }
    } else {
      for (; i < len;) {
        if (fn.call(object[i], i, object[i++]) === false) {
          break
        }
      }
    }
  }

  return object
}
