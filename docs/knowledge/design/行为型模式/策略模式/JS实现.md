---
title: JS实现
---

# 策略模式-JS

* [排序算法](#排序算法)

## 排序算法

根据客户端传入数组长度，来选择排序算法。

```js
const bubbleSort = dataset => {
  console.log('Sorting with bubble sort');

  // ...
  // ...
  return dataset;
}

const quickSort = dataset => {
  console.log('Sorting with quick sort');

  // ...
  // ...
  return dataset;
}

const sorter = dataset => {
  if (dataset.length > 5) {
    return quickSort;
  } else {
    return bubbleSort;
  }
}

// client
const longDataSet = [1, 5, 3, 3, 2, 8];
const shortDataSet = [1, 5, 4];

const sorter1 = sorter(longDataSet);
const sorter2 = sorter(shortDataSet);

sorter1(longDataSet); // Output: Sorting with quick sort
sorter2(shortDataSet); // Output: Sorting with bubble sort
```

