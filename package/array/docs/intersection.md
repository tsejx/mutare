# intersection

## 其他实现方法

**ES7+**
```js
function intersection(a, b) {
    return a.filter(v => b.includes(v));
}
```