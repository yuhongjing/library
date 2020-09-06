---
title: tail
---

# tail

```js
function tail(array) {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  const [, ...result] = array;
  return result;
}
```

作用：返回一个新的数组，这个数组包含数组除第一项外的所有元素。

这里原来可以直接结构，无须任何变量占位： `const [, ...result] = array;`。

