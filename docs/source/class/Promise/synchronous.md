---
title: 同步机制
---

# 同步机制

具体是干啥的，我也不清楚。但是看代码是提供了一些查看当前Promise状态的功能。

其文件路径为`src/synchronous.js`，源码如下：

```js
var Promise = require('./core.js');

module.exports = Promise;
// 开启Promise同步功能
Promise.enableSynchronous = function () {
  // 当前Promise是否为等待状态
  Promise.prototype.isPending = function() {
    return this.getState() == 0;
  };
  
  // 当前Promise是否为完成状态
  Promise.prototype.isFulfilled = function() {
    return this.getState() == 1;
  };

  // 当前Promise是否为拒绝状态
  Promise.prototype.isRejected = function() {
    return this.getState() == 2;
  };

  // 获取当前Promise的值
  Promise.prototype.getValue = function () {
    // 串行，嵌套调用的情况
    if (this._state === 3) {
      return this._value.getValue();
    }

    // 拒绝抛出失败
    if (!this.isFulfilled()) {
      throw new Error('Cannot get a value of an unfulfilled promise.');
    }

    return this._value;
  };

  Promise.prototype.getReason = function () {
    if (this._state === 3) {
      return this._value.getReason();
    }

    if (!this.isRejected()) {
      throw new Error('Cannot get a rejection reason of a non-rejected promise.');
    }

    return this._value;
  };

  // 获取Promise的状态值
  Promise.prototype.getState = function () {
    if (this._state === 3) {
      return this._value.getState();
    }
    if (this._state === -1 || this._state === -2) {
      return 0;
    }

    return this._state;
  };
};

// 关闭Promise同步功能
Promise.disableSynchronous = function() {
  Promise.prototype.isPending = undefined;
  Promise.prototype.isFulfilled = undefined;
  Promise.prototype.isRejected = undefined;
  Promise.prototype.getValue = undefined;
  Promise.prototype.getReason = undefined;
  Promise.prototype.getState = undefined;
};
```

