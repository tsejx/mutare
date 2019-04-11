## 如何判断一个值是否为数组

```js
const isArray = value => Array.isArray(value);
```

isPropertyOf 判断父级对象 可检查整个原型链 可能继承自数组）
```js
const isArrayByProperty = value => Array.prototype.isPrototypeOf(value);
```

检查指定对象的构造函数 可检查整个原型链 可能继承自数组
```js
const isArrayByConstructor = value => value.constructor === Array;
```

检查一个对象是否是制定构造函数的实例 可检查整个原型链 可能继承自数组
```js
const isArrayByInstance = value => value instanceof Array;
```

调用原始的 toString 方法 不检查整个原型链
```js
const isArrayByToString = value => Object.prototype.toString.call(value) == '[object Array]';
```