# differnce

## 其他实现方法

**使用 `concat()` 方法合并后与原来两个数组筛选**
```js
const difference = (a, b) => a.concat(b).filter(v => a.includes(v) && !b.includes(v))
```


**对象数组按指定值去重实现**

```js
const differenceIn = (a, b, k) => a.filter(v => v.k === b.find(t => t.k ))
```