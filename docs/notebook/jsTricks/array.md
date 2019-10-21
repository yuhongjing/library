---
title: Array Skill
sidebarDepth: 2
---

# Array Skill
数组相关的JS技巧。

## 克隆数组
```js
const _arr = [0, 1, 2];
const arr = [..._arr]; // arr => [0, 1, 2]
```

## 合并数组
```js
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
const arr = [...arr1, ...arr2];
// arr => [0, 1, 2, 3, 4, 5]
```

## 去重数组
```js
const arr = [...new Set([0, 1, 1, null, null])];
// arr => [0, 1, null]
```

## 混淆数组
```js
const arr = [0, 1, 2, 3, 4, 5].slice().sort(() => Math.random() - .5);
// arr => [3, 4, 0, 5, 1, 2]
```

## 清空数组
```js
const arr = [0, 1, 2];
arr.length = 0;
// arr => []
```

## 截断数组
```js
const arr = [0, 1, 2];
arr.length = 2;
// arr => [0, 1]
```

## 交换赋值
```js
let a = 0;
let b = 1;
[a, b] = [b, a];
// a b => 1 0
```

## 过滤假值
> **空值**
>> **undefined、 null、 ""、 0、 false、 NaN**

```js
const arr = [undefined, null, '', 0, false, NaN, 1, 2].filter(Boolean);
// arr => [1, 2]
```

## 异步累计
```js
async function Func(deps) {
    return deps.reduce(async(t, v) => {
        const dep = await t;
        const version = await Todo(v);
        dep[v] = version;
        return dep;
    }, Promise.resolve({}));
}
const result = await Func(); // 需在async包围下使用
```

## 数组首部插入成员
```js
let arr = [1, 2]; // 以下方法任选一种
arr.unshift[0];
arr = [0].concat(arr);
arr = [0, ...arr];
// arr => [0, 1, 2]
```

## 数组尾部插入成员
```js
let arr = [0, 1]; // 以下方法任选一种
arr.push(2);
arr.concat(2);
arr[arr.length] = 2;
arr = [...arr, 2];
```

## 统计数组成员个数
```js
const arr = [0, 1, 1, 2, 2, 2];
const count = arr.reduce((t, c) => {
    t[c] = t[c] ? ++t[c] : 1;
    return t;
}, {});
// count => {0: 1, 1: 2, 2: 3}
```

## 解构数组成员嵌套
[ES flat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
```js
const arr = [0, 1, [2, 3, [4, 5]]];
const [a, b, [c, d, [e, f]]] = arr;
// a b c d e f => 0 1 2 3 4 5
```

## 解构数组成员别名
```js
const arr = [0, 1, 2];
const {0: a, 1: b, 2: c} = arr;
// a b c => 0 1 2
```

## 解构数组成员默认值
```js
const arr = [0, 1, 2];
const [a, b, c = 3, d = 4] = arr;
// a b c d => 0 1 2 4
```

## 获取随机数组成员
```js
const arr = [0, 1, 2, 3, 4, 5];
const randomItem = arr[Math.floor(Math.random() * arr.lenth)];
// randomItem => 1
```

## 创建指定长度数组
```js
const arr = [...new Array(3).keys()];
// arr => [0, 1, 2]
```

## 创建指定长度且值相等的数组
```js
const arr = new Array(3).fill(0);
// arr => [0, 0, 0]
```

## reduce代替map和filter
```js
const _arr = [0, 1, 2];

// map
const arr = _arr.map(v => v * 2);
const arr = _arr.reduce((t, c) => {
    t.push(c * 2);
    return t;
}, []);
// arr => [0, 2, 4]

// filter
const arr = _arr.filter(v => v > 0);
const arr = _arr.reduce((t, c) => {
    c > 0 && t.push(c);
    return t;
}, []);
// arr => [1, 2]

// map和filter
const arr = _arr.map(v => v * 2).filter(v => v > 2);
const arr = _arr.reduce((t, c) => {
    c = c * 2;
    c > 2 && t.push(c);
    return t;
}, []);
// arr => [4]
```