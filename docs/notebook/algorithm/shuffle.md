---
title: 洗牌
sidebarDepth: 0
---

## 洗牌算法
::: tip 思路
从数组最后一个元素开始，在数组中随机选出一个位置  
当前位置与随机位置元素交换，循环直到第一个元素
:::

```js
function shuffle(array) {
    const length = array.length;
    let random;
    for (let current = length - 1; current > -1; current--) {
        random = Math.floor(length * Math.random());
        [array[current], array[random]] = [array[random], array[current]];
    }
    return array;
}
```