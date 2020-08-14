---
title: 实现reduce
---

# 实现reduce

```js
function arrayReduce(array, iteratee, accumulator, initAccum) {
  let index = -1;
  const length = array == null ? 0 : array.length;
  
  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}
```

`accumulator`可以用来传入初始值。

`initAccum`用来指定是否使用数组第一个值作为初始值。

`accumulator = iteratee(accumulator, array[index], index, array);`将迭代的`accumulator`传回函数。

从而实现ES6的`reduce`。