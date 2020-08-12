---
title: SameValueZero规范的字符比较
---

# 实现SameValueZero规范的字符比较

```js
function eq(value, other) {
  return value === other || (value !== value && other !== other);
  // 下面代码效果等同上面
  // return value === other || (Number.isNaN(value) && Number.isNaN(other));
}
```

处理`NaN!==NaN`的情况，利用JS中只有NaN不等于自己的特征，实现`SameValueZero`规范的比较。

