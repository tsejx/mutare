# 适配器



- [`ary`](#ary)
- [`call`](#call)
- [`collectInto`](#call)
- [`flip`](#flip)
- [`over`](#over)
- [`overArgs`](#overArgs)
- [`pipeAsyncFunctions`](#pipeAsyncFunctions)
- [`promisify`](#promisify)
- [`rearg`](#rearg)
- [`spreadOver`](#spreadOver)
- [`unary`](#unary)

<br/>

### ary

创造一个最多能接受 `n` 个参数，并忽略其他参数的函数。

使用 `Array.slice(0, n)` 和 `spread` 扩展运算符调用提供的函数 `fn` ，最多有 `n` 个参数。

```javascript
const ary = (fn, n) => (...args) => fn(...args.slice(0, n));
```



<details>

<summary>例子</summary>

```js
const firstTwoMax = ary(Math.max, 2);
[[2, 6, 'a'], [8, 4, 6], [10]].map(x => firstTwoMax(...x));	// 6, 8, 10
```

</details>



### call

给定一个键和一组参数，在给定上下文时调用它们。主要用于合成。

使用闭包调用存储的键和存储的参数。

```js
const call = (key, ...args) => context => context[key](...args);
```



<details>

<summary>例子</summary>

```js
Promise.resolve([1, 2, 3])
	.then(call('map', x => 2 * x))
	.then(console.log);	// [2, 4, 6]
const map = call.bind(null, 'map');
Promise.resolve([1, 2, 3])
	.then(map(x => 2 * x))
	.then(console.log);	// [2, 4, 6]
```

</details>



### collectInto

将接受数组的函数改为变量函数。

给定一个函数，返回一个闭包，该闭包将所有输入收集到接受数组的函数中。

```js
const collectInto = fn => (...args) => fn(args)
```



<details>

<summary>例子</summary>

```js
const Pall = collectInto(Promise.all.bind(Promise));
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = new Promise(resolve => setTimeout(resolve, 2000, 3));
Pall(p1, p2, p3).then(console.log); // [1, 2, 3] (after about 2 seconds)	
```

</details>



### flip

Flip 函数将一个函数作为参数，然后将第一个参数作为最后一个参数。

返回一个接受可变输入的闭包，并在应用其他参数之前将最后一个参数拼接成第一个参数。

```js
const flip = fn => (first, ...rest) => fn(...rest, first)
```



<details>

<summary>例子</summary>

```js
let a = { name: 'John Smith' };
let b = {};
const mergeForm = flip(Object.assign);
let mergePerson = mergeForm.bind(null, a);
mergePerson(b);	// == b
b = {};
Object.assign(b, a);	// == b
```

</details>



### over

创建一个函数，该函数使用所接收的参数调用所提供的每个函数并返回结果。

使用 `Array.map()` 和 `Function.apply()` 把给定的参数应用到每个函数。

```js
const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));
```



<details>

<summary>例子</summary>

```js
const minMax = over(Math.min, Math.max);
minMax(1, 2, 3, 4, 5);	// [1, 5]
```

</details>



### overArgs

创建一个函数，该函数调用提供的函数并转换其参数。

使用 `Array.map()` 与 `spread` 扩展操作符(…)一起将转换应用到 `args`，将转换后的参数传递给 `fn`。

```js
const overArgs = (fn, transforms) => (args) => fn(...args.map((val, i) => transforms[i](val)))
```



<details>

<summary>例子</summary>

```js
const square = n => n * n;
const double = n => n * 2;
const fn = overArgs((x, y) => [x, y], [square, double]);
fn(9, 3);	// [81, 6]
```

</details>



### pipeAsyncFunctions

为异步函数执行从左到右的函数组合。

使用带扩展运算符(…)的 `Array.reduce()` 使用 `promisee .then()` 执行从左到右的函数组合。函数可以返回：简单值、承诺值，或者可以将它们定义为通过 `wait` 返回的异步值。所有的函数都必须是一元的。

```js
const pipeAsyncFunctions = (...fns) => arg => fns.reduce((p, f) => p.then(f), Promise.resolve(arg))
```



<details>

<summary>例子</summary>

```js
const sum = pipeAsyncFunctions(
	x => x + 1,
    x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
    x => x + 3,
    async x => (await x) + 4
);
(async () => {
    console.log(await sum(5));	// 15 (after one second)
})
```

</details>



### promisify

转换一个异步函数来返回一个 `promise`。

使用currying返回一个函数，返回一个调用原始函数的 `promise`。使用 `……rest` 操作符传递所有参数。

```js
const promisify = func => (...args) =>
  new Promise((resolve, reject) =>
    func(...args, (err, result) => (err ? reject(err) : resolve(result)))
  );
```



<details>

<summary>例子</summary>

```js
const delay = promisify((d, cb) => setTimeout(cb, d));
delay(2000).then(() => console.log('Hi!')); // // Promise resolves after 2s
```

</details>



### rearg

创建一个函数，该函数调用所提供的函数，其参数按照指定的索引排列。

使用 `Array.reduce()` 和 `Array.indexOf()` 结合与 `spread` 操作符(…)的索引重新排序参数，将转换后的参数传递给 `fn`。

```js
const rearg = (fn, indexes) => (...args) =>
	fn(
    	...args.reduce(
        	(acc, val, i) => ((acc[indexes.indexOf(i)] = val), acc),
            Array.from({ length: indexes.length })
        )
   	)
```



<details>

<summary>例子</summary>

```js
var rearged = rearg(
    function(a, b, c){
        return [a, b, c];
    },
    [2, 0, 1]
);
rearged('b', 'c', 'a');	// ['a', 'b', 'c']
```

</details>



### spreadOver

获得一个可变值函数并返回一个闭包，该闭包接受一个参数数组以映射到函数的输入。

使用闭包和扩展运算符(…)将参数数组返回映射到函数的输入。

```js
const spreadOver = fn => argsArr => fn(...argsArr);
```



<details>

<summary>例子</summary>

```js
const arrayMax = spreadOver(Math.max);
arrayMax([1, 2, 3]); // 3
```

</details>



### unary

创建一个接受最多一个参数的函数，其他参数则会被忽略。

使用给定的第一个参数调用提供的函数 `fn`。

```js
const unary = fn = val => fn(val)
```



<details>

<summary>例子</summary>

```js
['6', '8', '10'].map(unary(parseInt));	// [6, 8, 10]
```

</details>







