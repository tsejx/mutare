# shuffle

```js
function shuffle(arr) {
    var temp, j, i = arr.length;
    while (--i) {
        j = ~~(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr
}
```