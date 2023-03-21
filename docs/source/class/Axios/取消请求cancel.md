---
title: 取消请求cancel
---

# 取消请求cancel

在`dispatchRequest`构造器中，只剩下`cancel`的逻辑不知道了。

```js
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    // 调用了cancelToken原型方法，判断this.reason是否有值来终止请求
    config.cancelToken.throwIfRequested();
  }
}
```

现在让我们分析一下`cancel`是如何实现的。

其文件路径为`lib/cancel/CancelToken.js`，源码如下：

```js
var Cancel = require('./Cancel');

// 定义一个CancelToken构造函数，该构造函数会有promise和reason两个属性
// 一个用于xhr发起前取消请求，一个用于xhr进行的时候取消操作
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  // 创建一个Promise并将其resolve方法赋值给一个变量
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  // 执行回调函数，并传入cancel这个方法
  // 取消实现的核心就是cancel函数，cancel函数什么时候执行，则什么时候取消请求
  executor(function cancel(message) {
    if (token.reason) {
      return;
    }
    // 设置实例属性reason，这里也是唯一能更改reason的地方
    // 因此必须调用cancel后，才会取消请求
    token.reason = new Cancel(message);
    // 将上面创建的promise状态，由pedding改为fulfilled
    // 相当于resolve(token.reason)
    // 可以将token.reason传给后面的then方法
    resolvePromise(token.reason);
  });
}

// 举例：在XHR请求，promise取消请求
// 如果存在cancelToken参数，进行预备状态，此时为pendding状态，并不会执行then内部
// 只有执行了cancel函数，promise的状态才会切换为fulfilled，才会触发abort()，从而实现取消请求
// if (config.cancelToken) {
//   随时等待状态切换
//   config.cancelToken.promise.then(function onCanceled(cancel) {
//     if (!request) {
//       return;
//     }
//     // XHR的取消请求方法abort()
//     request.abort();
//     // 返回取消请求原因
//     reject(cancel);
//     // 清除request
//     request = null;
//   });
// }


// 根据reason是否有值，来取消请求
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    // 直接抛错，中止请求
    throw this.reason;
  }
};

// 返回一个包含了CancelToken实例及执行函数cancel的对象，用于开启及执行取消操作
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  // 通过CancelToken.source().token来开启取消操作
  // 通过CancelToken.source().cancel来执行取消操作
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;
```

其做了如下功能：

取消请求，需要传入`CancelToken`实例，参数必须是函数，执行此函数会传入`cancel`函数，执行`cancel`函数才是执行取消请求操作。

`cancel`函数功能为：赋值`reason`变量，并改变`promise`状态为`fulfilled`，将`reason`传入下一个`then`。

客户端使用例子：

```js
const axios = require('axios');

const {CancelToken} = axios;
let cancel;

axios({
    method:'get',
    url:'http://www.baidu.com',
    cancelToken: new CancelToken(function executor(c) {
        cancel = c;
    })
})
.then(response => {
    console.log('response', response);
}).catch(err => {
    console.log('err', err);
});

setTimeout(() => {
  cancel('Operation canceled by the xiaoming');
}, 0);
// output：
// err Cancel { message: 'Operation canceled by the xiaoming' }
```

关于`CancelToken`这一块实现初始化也挺绕，总之就是各种延迟函数执行。

```js
// 源代码
// 传出cancel回调函数，且cancel接受最终的取消原因
executor(function cancel(message) {
    resolvePromise(token.reason);
});

// 客户端
// 传入executor回调函数
cancelToken: new CancelToken(function executor(c) {
  cancel = c; // 接受到cancel回调函数
});
```

客户端传入一个回调函数`executor`到`CancelToken`构造器中。

`CancelToken`执行完这个回调函数，又传出一个回调函数`cancel`让用户操作。

最后执行这个`cancel`回调函数才能取消请求。

## 总结

取消请求的核心技术就是`Promise`语句。

* 首先需要`cancelToken`参数，生成实例。

* 通过两层回调函数，将`cancel`暴露到客户端，`cancel`可以切换`Promise`状态。

* 灵活的应用的`then`来控制是否取消请求。

有点绕，但是的确精妙，值得反复回味。

根据当前请求的步骤，取消请求分为两种方式：

* 请求前与请求后，直接抛错错误`throw reason`

* 请求中，`XHR.abort()`

