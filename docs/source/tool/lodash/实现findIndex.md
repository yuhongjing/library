---
title: 实现findIndex
---

# 实现findIndex，支持从N索引开始寻找并且支持前后方向

```js
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  const { length } =  array;
  let index = fromIndex + (fromRight ? 1 : -1);
  
  while((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
```

初始索引是fromIndex控制，会根据fromRight来增减1。往前，则下标后移一位，往后，则下标往前移一位。

而前后方向是依据fromRight控制循环结束条件，往前条件为下标0，往后条件为数组长度。
