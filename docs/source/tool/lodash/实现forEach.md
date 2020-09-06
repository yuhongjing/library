---
title: 实现forEach
---

# 实现forEach

支持稀疏数组的遍历，并且`iteratee`为false时，还会中止遍历。

```js
function arrayEach(array, iteratee) {
  let index = -1;
  const length = array.length;
  
  while (++index < length) {
		if (iteratee(array[index], index, array) === false) {
       break;
    }
  }
  return array;
}
```

迭代数组，并调用`iteratee`，如果返回`false`则中止遍历。

