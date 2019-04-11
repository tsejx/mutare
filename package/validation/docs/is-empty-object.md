## 如何检查一个对象是否为空对象

判断对象是否为空对象共有四种方法：

### 遍历

方法：通过 `for-in` 遍历，并通过 `hasOwnProperty` 方法确认是否存在某个 `key` 这种方法不能够遍历到 `enumerable` 为 `false` 的属性

```js
function isEmptyObject(object){
    if (Object.getOwnPropertySymbols(object).length) {
        return false
    }
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            return false
        }
    }
    return true
}
```

### keys 方法

使用 `Object` 静态方法 `keys` 然后判断 `length` 即可，`keys` 返回的是自身可枚举属性，因此同样的不可遍历到 `enumerable` 为 `false` 的属性。

```js
function isEmptyObject(object) {
    if (Object.getOwnPropertySymbols(object).length) {
        return false
    }
    if (Object.keys(object).length) {
        return false
    }
    return true
}
```

### JSON 方法

使用 `JSON.stringify` 方法将对象转为字符串，与字符串 `'{}'` 对比，同样该方法无法获取到不可遍历属性。

```js
const isEmptyObj = object => {
    if (Object.getOwnPropertySymbols(object).length) {
        return false
    }
    return JSON.stringify(object) === '{}'
}
```

### getOwnPropertyNames 方法

使用 `Object` 的 `getOwnPropertyNames` 方法，获取所有属性名，这样就算是不可枚举属性依然能够获取到，算是比较 ok 的方法。

```js
const isEmptyObj = object => {
    if (Object.getOwnPropertySymbols(object).length) {
        return false
    }
    if (Object.getOwnPropertyNames(object).length) {
        return false
    }
    return true
}
```