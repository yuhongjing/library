---
title: compose
---

# compose

compose函数是Redux中唯一能拿出来单独使用的`API`，是函数式编程中常用的合成函数，与Redux本身没有什么关系。

> 纯函数，即相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用。



在compose.js中的源代码：

```js
export default function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
```

核心代码就最后一句`funcs.reduce((a, b) => (...args) => a(b(...args)))`。

其主要作用为：

```js
const sum = fn1(fn2(fn3(f4(10))));

// 将上面嵌套函数简化为如下：
const sum = compose(fn1, fn2, fn3, fn4)(10);
```



## 例子

```js
import {compose} from 'redux'

const x = 10;
const fn1 = x => x + 1;
const fn2 = x => x + 2;
const fn3 = x => x + 3;
const fn4 = x => x + 4;

// 原生调用方式
const sum = fn1(fn2(fn3(fn4(x)))); // 10 + 4 + 3 + 2 + 1 = 20

// compose调用方式
const composeSum = compose(fn1, fn2, fn3, fn4)(x); // 10 + 4 + 3 + 2 + 1 = 20

```



执行过程表：

| 循环轮次 | a值                                 | b值  | 返回值                                   |
| -------- | ----------------------------------- | ---- | ---------------------------------------- |
| 1        | fn1                                 | fn2  | (...args) => fn1(fn2(...args))           |
| 2        | (...args) => fn1(fn2(...args))      | fn3  | (...args) => fn1(fn2(fn3(...args)))      |
| 3        | (...args) => fn1(fn2(fn3(...args))) | fn4  | (...args) => fn1(fn2(fn3(fn4(...args)))) |

最后返回了一个嵌套函数：`fn1(fn2(fn3(fn4(x))))`。

