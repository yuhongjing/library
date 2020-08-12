---
title: slice支持负数
---

# slice 如何支持负数，从右往左获取数组索引

```js
function slice(array, start, end) {
  // ... 其他校验
  
  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  
  // ...
}
```

当start为负数时，以数组长度+负数start，从而实现从右往左获取索引。