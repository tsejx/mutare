
## 示例

示例
```js
dedupeBy(
	[
		{ id: 1, value: 'a' },
		{ id: 2, value: 'b' },
		{ id: 3, value: 'c' },
		{ id: 2, value: 'd' },
		{ id: 1, value: 'e' },
	],
	(a, b) => a.id === b.id
)
```

## 其他实现方法

```js
export function dedupeBy(index, a, b){

	const c = b.concat(a);

	let hash = {}

	return c.reduce((item, next) => {
		if (!hash[next[index]]){
			hash[next[index]] = true;
			item.push(next);
		}
		return item
	}, [])
}
```