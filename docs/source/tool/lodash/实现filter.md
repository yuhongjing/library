---
title: 实现filter
---

# 实现filter

```js
function filter(array, predicate) {
  let index = -1;
  let resIndex = 0;
  const length = array == null ? 0 : array.length;
  const result = [];
  
  whlie (++index < length) {
    const value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
```

在`lodash`中是比较常见的操作了，传入函数，判断是否存入数组。

