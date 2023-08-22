---
title: ReactLazy
---

# ReactLazy

> 文件地址：react/src/ReactLazy.js

处理异步React组件。

## lazy

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

## lazyInitializer

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

## 整体流程

### Lazy Element生成

Lazy函数返回了一个Lazy Element。

```js
function lazy(ctor) {
  // 返回了一个lazyComponent Element
  const lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer,
  };
  
  return lazyType;
}
```

### Lazy Element解析

React针对Lazy Element有特殊的解析方式

```js
case LazyComponent: {
  const elementType = workInProgress.elementType;
  return mountLazyComponent(
    current,
    workInProgress,
    elementType,
    updateLanes,
    renderLanes,
  );
}
```

```js
function mountLazyComponent(
	_current,
	workInProgress,
  elementType,
   updateLanes,
   renderLanes,
) {
    // ...
    const init = lazyComponent._init; // lazyInitializer
  	let Component = init(payload);
    // ...
}
```

## 使用方式

`import()`函数是TS39提出的动态加载模块的规范实现，其返回一个`Promise`。

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

