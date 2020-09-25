---
title: Promise构造器
---

# Promise构造器

`src/core.js`是Promise的核心文件，此文件完整的实现了基础的Promise功能。

分析此文件，即可清楚整个Promise的逻辑，文件源码如下：

```js
// 异步库
var asap = require('asap/raw'); 

// 空函数，用作then生成的promise回调函数
function noop() {}

// Promise 状态如下，默认三种(0, 1, 2)状态
//
// 0 - 等待 pending
// 1 - 完成 fulfilled
// 2 - 拒绝 rejected
// 3 - 收养 adopted （本库实现的，处理resolve(Promise)嵌套的情况）
//
// 状态一旦变更后，将无法再次更改（状态为0时，可以更改）

var LAST_ERROR = null;
var IS_ERROR = {};
function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}
// 用于处理then回调函数处理
function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}
// 用于new Promise回调函数处理
function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

// Promise构造器
function Promise(fn) {
  // Promise必须通过new构造
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
  // 参数必须为函数
  if (typeof fn !== 'function') {
    throw new TypeError('Promise constructor\'s argument is not a function');
  }
  this._deferredState = 0; // 延迟状态，0无延迟任务、1单个任务、2多个任务
  this._state = 0; // Promise状态，默认为pending等待状态
  this._value = null; // Promise值
  this._deferreds = null; // 延迟队列 1个任务为对象，2个任务为数组
  // 只有new Promise()的情况才会调用其回调函数
  // then、catch等生成的新的Promise不调用回调函数
  if (fn === noop) return;
  // 执行回调函数，并注入两个包裹函数resolve和reject
  doResolve(fn, this);
}
Promise._onHandle = null; // 钩子函数
Promise._onReject = null; // 钩子函数
Promise._noop = noop; // 空函数

Promise.prototype.then = function(onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }
  // 生成一个新Promise其参数为空函数
  var res = new Promise(noop);
  // 处理.then中的语句
  // 将onFulfilled和onRejected参数回传到.then上
  handle(this, new Handler(onFulfilled, onRejected, res));
  // 返回这个新的Promise
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
}
// 整理延迟任务队列
function handle(self, deferred) 
  // 递归寻找最内层的Promise(嵌套)
  while (self._state === 3) {
    self = self._value;
  }
  // 钩子函数，可以在此修改Promise相关
  if (Promise._onHandle) {
    Promise._onHandle(self);
  }
  // 如果当前Promise处于pending等待状态，暂不处理延迟任务
  if (self._state === 0) {
    // 如果当前不存在延迟任务
    if (self._deferredState === 0) {
      // 新增一个延迟任务，状态切换为1
      self._deferredState = 1;
      // 延迟队列为对象，即新增的此延迟任务
      self._deferreds = deferred;
      return;
    }
    // 如果当然已经存在一个延迟任务
    if (self._deferredState === 1) {
      // 新增一个延迟任务，状态切换为2
      self._deferredState = 2;
      // 延迟队列修改为数组，追加新的延迟任务
      self._deferreds = [self._deferreds, deferred];
      return;
    }
    // 已经存在两个延迟任务的情况，直接追加延迟任务进队列
    self._deferreds.push(deferred);
    return;
  }
  // 当前Promise不为pending时，执行延迟任务
  handleResolved(self, deferred);
}
// 执行延迟函数语句
function handleResolved(self, deferred) {
  asap(function() {
    // 当Promise状态为成功时，调用onFulfilled
    // 当Promise状态为拒绝时，调用onRejected
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    // 没有回调函数，执行Promise的resolve和reject
    if (cb === null) {
      if (self._state === 1) {
        resolve(deferred.promise, self._value);
      } else {
        reject(deferred.promise, self._value);
      }
      return;
    }
    // 执行回调，传入修改后的值
    var ret = tryCallOne(cb, self._value);
    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}
// Promise状态切换为完成-fulfilled
function resolve(self, newValue) {
  // 不允许resolve自身
  if (newValue === self) {
    return reject(
      self,
      new TypeError('A promise cannot be resolved with itself.')
    );
  }
  // resolve参数为对象或者函数类型时
  if (
    newValue &&
    (typeof newValue === 'object' || typeof newValue === 'function')
  ) {
    // 获取参数的then方法
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }
    // 处理resolve(promise)的情况
    // 处理return new Promise的情况，串行调用Promise
    if (
      then === self.then &&
      newValue instanceof Promise
    ) {
      // 切换Promise状态为3，即收养状态
      self._state = 3;
      self._value = newValue; // 值为Promise
      finale(self);
      return;
      // 当传入对象且对象then属性为函数时，
      // 这里也当作了一个初始化Promise来执行
      // 有点奇怪
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }
  // 切换Promise状态为1，即完成状态
  self._state = 1;
  self._value = newValue;
  finale(self);
}
// Promise状态切换为拒绝-rejected
function reject(self, newValue) {
  // 切换Promise状态为2，即拒绝状态
  self._state = 2;
  self._value = newValue;
  // 钩子函数，可以在此进行操作
  if (Promise._onReject) {
    Promise._onReject(self, newValue);
  }
  finale(self);
}
// 判断当前Promise是否存在延迟任务
function finale(self) {
  // 单个延迟任务，延迟队列为对象，直接调用handle处理
  if (self._deferredState === 1) {
    handle(self, self._deferreds);
    // 清空延迟任务
    self._deferreds = null;
  }
  // 多个延迟任务即多个then，延迟队列为数组，遍历调用handle处理
  if (self._deferredState === 2) {
    for (var i = 0; i < self._deferreds.length; i++) {
      handle(self, self._deferreds[i]);
    }
    // 清空延迟任务
    self._deferreds = null;
  }
}

// 生成deferred延迟函数then
function Handler(onFulfilled, onRejected, promise){
  // .then(onFulfilled, onRejected)
  // then的两个参数必须为函数
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  // 绑定为then延迟函数新生成的promise
  this.promise = promise;
}


// 保证onFulfilled和onRejected只能被调用一次，done作为开关
// 向Promise回调函数注入resolve和reject两个匿名函数
// 立即执行回调函数，如捕获其错误，则执行reject
function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    // 开关，查看是否已经执行过
    if (done) return;
    done = true;
    // 执行真正的resolve
    resolve(promise, value);
  }, function (reason) {
    // 开关，查看是否已经执行过
    if (done) return;
    done = true;
    // 执行真正的reject
    reject(promise, reason);
  });
  // resolve或rejeact都没执行的情况
  // 回调函数抛错的情况
  // 执行reject
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}
```

## 流程分析

Promise调用流程图。

![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/%E6%9C%AA%E5%91%BD%E5%90%8D%E6%96%87%E4%BB%B6.png)

### new Promise

`new Promise`，即实例化Promise，这是整个Promise的开头。

Promise会被注入一个回调函数，此回调函数有两个参数：`resolve`和`reject`。

其作用分别为将Promise状态改变为`成功`或`拒绝`。

最常用的调用方式如下：

```js
new Promise((resolve, reject) => {
  // 异步请求接口
  setTimeout(() => {
    if (...) {
      resolve(true);
    } else {
      reject(false);
    }
  }, 100);
});
```

### doResolve

 当实例化Promise后，其回调函数会立即同步执行。

当回调函数执行完毕后，Promise状态可能出现3种情况：

* 成功，即调用了`resolve`
* 拒绝，即调用了`reject`
* 等待，即回调函数为异步操作(例如请求接口)，此时还未执行`resolve`或`reject`（最常见）

```js
// 立即执行的情况
new Promise((resolve, reject) => {
  resolve();
  // 或者
  reject();
});

// 延迟执行的情况
new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve();
  }, 100);
});
```

### resolve/reject

当Promise回调函数中，调用了`resolve`或`reject`后，才会执行到此流程。

此方法才会真正的改变Promise的状态。

### finale

无论执行`resolve`或`reject`方法，其都会调用`finale`方法。`finale`会执行延迟队列中的所有任务。

只有`new Promise`回调函数为**异步操作**时，此时执行的then才会被推入延迟队列，等待异步操作执行完毕后且执行了`resolve`或`reject`后，就会调用`finale`方法，从而执行then的方法。

```js
new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve(123);
  }, 100);
}).then(res => {
  console.log(res);
});

// 1. 首先执行回调函数 setTimeout 等待100毫秒
// 2. 执行then，此时Promise状态还是等待，因此将then中回调函数推入延迟队列 res => console.log(res);
// 3. 等待100毫秒，执行setTimeout内容，resolve(123)
// 4. resolve和reject改变了Promise状态，并执行finale方法
// 5. 执行finale方法，执行延迟队列中的then回调函数 res => console.log(res);
```

### then

为了满足链式调用需求，then会生成一个新的Promise。

将原Promise及新Promise作为参数调用`handle`函数，并返回新的Promise。

### handle

handle接受两个参数：`原Promise`和`新Promise`。

handle存在两种执行逻辑：

* 原Promise状态为等待时，即原Promise回调函数是异步操作的情况，此时then的回调函数将推入延迟队列
* 原Promise状态为成功或拒绝时，处理then的回调函数，将原Promise和新Promise作为参数调用`handleResolved`方法

### handleResolved

此方法为了处理then中的回调函数，接受两个参数：`原Promise`和`新Promise`。

其根据原Promise的状态，来改变新Promise的状态。

```js
// 改变原Promise的状态为成功
const promise = new Promise(resolve => {
  resolve(123);
});

// 新生成Promise的状态也应该跟随原Promise的状态
const thenPromise = promise.then(res => {
  console.log(res);
});

// 新生成的Promise状态是成功
thenPromise
  .then(() => {
    console.log('thenPromise状态为成功');
  })
  .catch(() => {
    console.log('thenPromise状态为失败');
  });

// output: 
// 123
// thenPromise状态为成功
```

如果then回调函数存在返回值，则将作为下一个Promise的参数值。

```js
function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

// 获取新Promise回调函数中的值
var ret = tryCallOne(cb, self._value);
if (ret === IS_ERROR) {
  reject(deferred.promise, LAST_ERROR);
} else {
  // 将返回值作为参数，调用下一个Promise
  resolve(deferred.promise, ret);
}
```

所有的延迟函数，在`finale`中，也会调用`handle`，最终仍然会执行到此方法中来运行then的回调函数。

因此，此方法是Promise的结尾，整个Promise的完整调用流程已分析完毕。

## 总结

现在可以回答几个问题：

一、 Promise是如何实现链式调用？

答：调用then方法时，会返回一个新Promise，因此可以继续调用then方法，从而形成链式调用。

二、Promise是如何处理异步操作？

答：将then回调函数推入延迟队列，等待Promise状态改变时，依次执行延迟队列任务。