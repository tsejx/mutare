# union

## 其他实现方法

**ES7+**

```js
function unionES7(a, b) {
    return a.concat(b.filter(v => !a.includes(v)));
}
```