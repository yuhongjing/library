---
title: 实现Map
---

# 实现Map

```js
function map(array, iteratee) {
  let index = -1;
  const length = array == null ? 0 : array.length;
  const result = new Array(length);
  
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
```