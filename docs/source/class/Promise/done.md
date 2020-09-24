---
title: done
---

# done

done不属于Promise规范的API。其多在Promise类库中实现。

本质就是then，在其做了一层封装，不返回Promise，使其无法链式调用。

其文件路径为`src/done.js`，源码如下：

```js
var Promise = require('./core.js');

module.exports = Promise;

Promise.prototype.done = function (onFulfilled, onRejected) {
  // 实际核心，执行的语句还是then this.then.apply(this, arguments)
  // 返回了这个新的Promise
  var self = arguments.length ? this.then.apply(this, arguments) : this;
  // 捕获其是否正常执行
  self.then(null, function (err) {
    setTimeout(function () {
      throw err;
    }, 0);
  });
};
```

调用then，但不`return`即为done。