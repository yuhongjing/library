---
title: 前言
---

# Promise

> Promise，为解决回调地狱而产生。

学习Promise，学习解决异步编程的思路。

## 目录架构

```
|-- src
  |-- core.js 核心实现
  |-- done.js 实现done API
  |-- es6-extensions.js 实现ES6 Promise/A+规范API
  |-- finally.js 实现finally API
  |-- index.js 入口文件
  |-- node-extensions.js 仅针对Node.js环境实现的API
  |-- rejection-tracking.js 错误追踪
  |-- synchronous.js 同步Promise
```

## API

Promise所有方法如下。

### Promise静态方法

* `Promise.all(iterable)`：接受多个Promise，全部执行结束后，返回结果数组。
* `Promise.denodeify(fn, length)`：
* `Promise.race(iterable)`：接受多个Promise，执行结束任意一个后，返回结果。
* `Promise.reject(reason)`：返回拒绝状态的Promise对象。
* `Promise.resolve(value)`：返回成功状态的Promise对象。

### Promise原型方法

* `Promise.prototype.catch(onRejected)`：处理拒绝状态的Promise。
* `Promise.prototype.done(onFulfilled, onRejected)`：与`then`一样，但不会返回Promise。
* `Promise.prototype.finally(onResolved)`：成功与拒绝状态，都执行。
* `Promise.prototype.nodeify(callback, ctx)`：
* `Promise.prototype.then(onFulfilled, onRejected)`：执行Promise延时任务。
