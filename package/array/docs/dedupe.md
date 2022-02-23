# dedupe

**Demo**

```js
dedupe([1, 1, 2, 2, 3, 3, 4, 4]) // => [1, 2, 3, 4]
```

## 其他实现方法

**使用 `Array.from()` 转为数组**
```js
const dedupeFrom = a => Array.from(new Set(a));
```

**使用 Map 数据结构实现**
```js
function dedupeMap(a) {
    const m = new Map();
    return a.filter(i => !m.has(i) && m.set(i, 1));
}
```

**使用 `filter()` 方法实现**
```js
function dedupeFilter(a) {
    let b = [];
    return a.filter(i => (b.includes(i) ? '' : b.push(i)));
}
```