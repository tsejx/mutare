## Array 数组

### 判定类方法

数组判定类方法通过回调函数对数组每一项作特定的判定，结果将返回布尔值 。

#### 数组类型判定

用于判断传入参数是否为数组类型。

```js
const checkIsArray = Array.isArray.bind(Array);
```

<details>

<summary>示例</summary>

```js
checkIsArray([1, 2, 3]);							// true
checkIsArray({a: 1, b: 2, c: 3});					// false
```

</details>

<br> [⬆ Back to top](#table-of-contents)

#### 全部元素判定

如果数组中的所有元素与判定函数判定都返回 `true`，则返回 `true`，否则返回 `false`。

```js
const checkAllItems = (arr, fn = Boolean) => arr.every(fn);
```

<details>

<summary>示例</summary>

```js
checkAllItems([4, 2, 3], x => x > 1);		// true
checkAllItems([1, 2, 3]);					// true
```

</details>

<br> [⬆ Back to top](#table-of-contents)

#### 任意元素判定

 如果数组中的任意元素通过判定函数的判定并返回 `true`，则返回 `true`，否则返回 `false`。

```js
const checkAnyItems = (arr, fn = Boolean) => arr.some(fn);
```

<details>

<summary>示例</summary>

```js
checkAnyItems([0, 1, 2, 0], x => x >= 2);	// true
checkAnyItems([0, 0, 1, 0]);				// true
```

</details>

<br> [⬆ Back to top](#table-of-contents)

#### 数组值绝对相等判定

判定数组中所有元素是否相等。

```js
const checkEqual = arr => arr.every(val => val === arr[0])
```

<details>

<summary>示例</summary>

```js
checkEqual([1, 2, 3, 4, 5, 6]); 	// false
checkEqual([1, 1, 1, 1]); 		// true
```

</details>

<br> [⬆ Back to top](#table-of-contents)

### 操作类方法

#### 判定条件筛选

通过与包含判定条件的元素数组的比对，将数组分成两组。

如果过滤器 `filter` 中的元素为真值，则集合中的相应元素属于第一组；否则，它属于第二组。

```js
const bifurcate = (arr, filter) => arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
```

<details>

<summary>示例</summary>

```js
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); // [ ['beep', 'boop', 'bar'], ['foo'] ]
```

</details>

 [⬆ Back to top](#table-of-contents)

#### 判定器筛选

通过判定函数的判定，将传入的数组分成两组。

如果过滤器 `filter` 中的元素为真值，则集合中的相应元素属于第一组；否则，它属于第二组。

```js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
```

<details>

<summary>示例</summary>

```js
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); // [ ['beep', 'boop', 'bar'], ['foo'] ]
```

</details>

 [⬆ Back to top](#table-of-contents)

#### 指定量元素分拆

将数组元素按给定的数目分到二维数组中，给定的数目为二维数组的长度。

```js
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
);
```

<details>

<summary>示例</summary>

```js
chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]
```

</details>

 [⬆ Back to top](#table-of-contents)

#### 数组差异筛选

传入两个任意数组，通过数组比对，提取第一个数组存在而第二数组不存在的元素，重新组合为新数组返回。

```js
const difference = (a, b) => {
    const s = new Set(b);
    return a.filter(x => !s.has(x));
}
```

<details>

<summary>示例</summary>

```js
difference([1, 2, 3], [1, 2, 4]); // [3]
```

</details>

 [⬆ Back to top](#table-of-contents)

#### 数组过滤筛选

传入两个任意数组与一个过滤器方法，对两个数组分别通过方法过滤，提取第一个数组过滤后存在而第二个数组过滤后不存在的元素，重新组合为新数组返回。

```js
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => !s.has(fn(x)));
};
```

<details>

<summary>示例</summary>

```js
differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]
```

</details>

 [⬆ Back to top](#table-of-contents)

#### differenceWith

```js
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);
```

<details>

<summary>示例</summary>

```js
differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); // [1, 1.2]
```

</details>

 [⬆ Back to top](#table-of-contents)

#### 二维数组字符化

将一个二维数组转换为一个以分隔符为界的字符串。

```js
const covertToCSV = (arr, delimiter = ',') =>
	arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
```

<details>

<summary>示例</summary>

```js
covertToCSV([['a', 'b'], ['c', 'd']]); 			// '"a","b"\n"c","d"'
covertToCSV([['a', 'b'], ['c', 'd']], ';'); 	// '"a";"b"\n"c";"d"'
```

</details>

 [⬆ Back to top](#table-of-contents)

### 删除类方法

#### 移除假值元素

移除数组中值为 `false` 的元素，返回值为去除元素后的数组。

```js
const compact = arr => arr.filter(Boolean);
```

<details>

<summay>示例</summary>

```js
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]
```

</details>

<br> [⬆ Back to top](#table-of-contents)

#### 数组正向移除

正向移除 `n` 个元素，返回移除元素后的数组。

```js
const drop = (arr, n = 1) => arr.slice(n);
```

<details>

<summay>示例</summary>

```js
drop([1, 2, 3]); // [2,3]
drop([1, 2, 3], 2); // [3]
drop([1, 2, 3], 42); // []
```

</details>

<br> [⬆ Back to top](#table-of-contents)

#### 数组逆向移除

逆向移除 `n` 个元素，返回移除元素后的数组。

```js
const dropRight = (arr, n = 1) => arr.slice(0, -n);
```

<details>

<summay>示例</summary>

```js
dropRight([1, 2, 3]); 		// [1,2]
dropRight([1, 2, 3], 2); 	// [1]
dropRight([1, 2, 3], 42); 	// []
```

</details>

<br> [⬆ Back to top](#table-of-contents)

#### 数组正向持续移除

```js
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};
```

<details>

<summay>示例</summary>

```js
dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
```

</details>

<br> [⬆ Back to top](#table-of-contents)

#### 数组逆向持续移除

```js
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};
```

<details>

<summay>示例</summary>

```js
dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
```

</details>

<br> [⬆ Back to top](#table-of-contents)

### 统计类方法

#### 指定值次数统计

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
```

<details>

<summary>示例</summary>

```js
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```

</details>

 [⬆ Back to top](#table-of-contents)

#### 指定方式统计

```js
const countBy = (arr, fn) => 
arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc
}, {});
```

<details>

<summary>示例</summary>

```js
countBy([6.1, 4.2, 6.3], Math.floor); 			// {4: 1, 6: 2}
countBy(['one', 'two', 'three'], 'length'); 	// {3: 2, 5: 1}
```

</details>

 [⬆ Back to top](#table-of-contents)

### 整理类

#### 多维数组扁平化

扁平化多维数组。

```js
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
```

<details>

<summary>示例</summary>

```js
deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```

</details>

 [⬆ Back to top](#table-of-contents)