---
title: lazy
---

# lazy

`lazy`允许延迟加载组件。

## 调用

```js
const SomeComponent = lazy(load);
```

## 原理

通过`import()`加载模块，会返回`promise`。

处理`promise`状态，加载完成前抛出异常，否则返回模块内容。

### lazy组件声明

```js
function lazy(ctor) {
  const payload = {
    _status: -1, // 当前状态
    _result: ctor, // 
  };
  
  // 返回了一个lazyComponent Element
  const lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer,
  };
  
  return lazyType;
}
```

返回REACT_LAZY_TYPE类型并初始化加载状态、加载处理函数等。

### lazy组件加载

```js
const Uninitialized = -1;
const Pending = 0;
const Resolved = 1;
const Rejected = 2;

function lazyInitializer(payload) {
  // 如果调度器处理当前 LazyComponent 未初始化，执行loader并记录对应状态
  if (payload._status === Uninitialized) {
    const ctor = payload._result;
    const thenable = ctor(); // 这里是import()返回的promise对象
    const pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then( // 请求成功了
      moduleObject => {
        if (payload._status === Pending) { // 当前仍处于请求状态时
          const defaultExport = moduleObject.default;
          const resolved = payload;
         	resolved._status = Resolved; // 状态修改
          resolved._result = defaultExport; // 导出异步文件内容
        }
      },
      error => {
        if (payload._status === Pending) {
          const rejected = payload;
          rejected._status = Rejected; // 状态修改
          rejected._result = error;
        }
      }
    );
  }

  // 如果调度器处理当前 LazyComponent 时已经初始化成功，直接将 promise.resolve 结果返回
  // 这里可以避免重复import情况
  if (payload._status === Resolved) {
    return payload._result;
  } else {
    // 失败 或 promise 仍未执行完，将 error 或者 promise 抛出
    throw payload._result;
  }
}
```

LazyComponent的加载逻辑中，核心原则是：

* 加载完成后直接返回组件模块本身
* 加载失败抛出错误
* 首次加载或加载中的组件将promise对象以throw Error的方式抛出

## 如何避免重复加载模块

React存在`re-render`机制，那么`lazy`是如何避免重复loading呢？看看下面的例子：

```jsx
import React, { lazy, Suspense } from 'react';

const OtherComponent = lazy(() => import('./OtherComponent')); // 这里返回了一个lazy对象，每次重render不会生成新的对象

function MyComponent() {
  return (
  	<div>
    	<Suspense fallback={<div>Loading...</div>}>
      	<OtherComponent />
      </Suspense>
    </div>
  );
}
```

`lazy`是在组件外部声明，因此组件内部`re-render`时，总是引用的同一个`lazy`对象。

而`lazy`对象的`_status`状态为`Uninitialized`时才会去真实请求，为`Resolve`时会直接返回模块。
