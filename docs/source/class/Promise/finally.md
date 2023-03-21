---
title: finally
---

# finally

无论Promise状态为成功或拒绝，都会执行的方法即是finally。

其文件路径为`src/finally.js`，源码如下：

```js
var Promise = require('./core.js');

module.exports = Promise;

// finally不需要区分状态，只需要执行传入的函数即可。
// 因此参数只有一个回调函数
Promise.prototype.finally = function (f) {
  // 注意这里返回了一个新的Promise
  return this.then(function (value) {
    return Promise.resolve(f()).then(function () {
      return value;
    });
  }, function (err) {
    return Promise.resolve(f()).then(function () {
      throw err;
    });
  });
};
```

其实现原理为：调用then，其`onFulfilled`和`onRejected`回调函数，都执行传入的函数。

我们可以得知如下几点：

* finally中无法得知当前Promise状态
* finally回调函数无法接受参数
* finally就是then

## 小彩蛋

你以为finally就是Promise链最后的点吗？

No，它返回了Promise，因此我们甚至可以这样调用：

```js
new Promise(resolve => {
  resolve(123);
}).then(res => {
  console.log('then', res);
  return res
}).finally(() => {
  console.log('finally');
  return 456;
}).then(res => {
  console.log('then1', res);
});

// then 123
// finally
// then1 123
```

