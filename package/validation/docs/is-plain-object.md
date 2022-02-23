# 判断纯对象

仅包含字面变量

```js
const isPlainObject = function (value) {
    return value && typeof value.constructor !== 'function' || value.constructor.name === 'Object'
}
```

仅包括字面变量以及 `Object.create(null)`

```js
const isPlainObject = function (value) {
  // 先判断是否为一般对象
  if (Object.prototype.toString.call(value) !== '[object Object]') {
      return false
  }

  // 获取原型，后续判断原型是否为 null 或 Object
  const prototype = Object.getPrototypeOf(value);

  // 相当于 prototype === Object.prototype
  return prototype === null || prototype === Object.getPrototypeOf({})
}
```

包括字面变量以及构造函数生成的对象

```js
// 先判断是否为对象
function isObjectObject(o) {
  return (
    isObject(o) === true &&
    Object.prototype.toString.call(o) === '[object Object]'
  )
}

function isPlainObject(o) {
  var ctor, prot
  // 首先是一个对象, 通过typeof和toString判断
  if (isObjectObject(o) === false) return false

  // If has modified constructor
  // 判断构造函数是否为function
  ctor = o.constructor
  if (typeof ctor !== 'function') return false

  // If has modified prototype
  // 判断原型是否也是一个对象
  prot = ctor.prototype
  if (isObjectObject(prot) === false) return false

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false
  }

  // Most likely a plain Object
  return true
}
```

Lodash 实现

```js
/**
    isObjectLike就是判断obj !== null && typeof obj === 'object'
    getTag: 就是拿Object.prototype.toString
*/
function isPlainObject(value) {
  if (!isObjectLike(value) || getTag(value) != '[object Object]') {
    return false
  }
  // Object.create(null)
  if (Object.getPrototypeOf(value) === null) {
    return true
  }
  let proto = value
  // 获取最顶级的proto
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }
  // 如果最最顶级proto就是value.prototype, 则为true
  // 既Object.prototype
  return Object.getPrototypeOf(value) === proto
}
```