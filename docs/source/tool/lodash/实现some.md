# 实现some

```js
function some(array, predicate) {
  let index = -1;
  const length = array == null ? 0 : array.length;
  
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
```

只要断言函数为真值，就会中止遍历。