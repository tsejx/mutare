# Array

tags: FunctionPackage

---

## 数组去重
```javascript
let arr = [2, '12', 2, 12, 1, 2, 1, 6, 12, 13, 6]

[...new Set(arr)]
```

## 合并数组

```javascript
let arr1 = [1, 2, 3, 4, 5], arr2 = [6, 7, 8, 9, 10];

// 1.concat
arr1 = arr1.concat(arr2)

// 2.for
for(let i=0;len = arr2.length;i <len; i++){
  arr1.push(arr2[i])
}

// 3.reduce
arr1 = arr2.reduce((coll, item) => {
  coll.push(item);
  return coll
}, arr1)

// 4.push.apply
arr1.push.apply(arr1, arr2)
```




