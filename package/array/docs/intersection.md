# intersection

## 其他实现方法

**ES7+**
```js
function intersectionES7(a, b) {
    return a.filter(v => b.includes(v));
}
```