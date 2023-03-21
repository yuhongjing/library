---
title: dispatchRequest
---

# dispatchRequest

在`axios`构造器类，`request`方法主要实现了`拦截器`的功能，但`实际请求`的逻辑是在`dispatchRequest`函数中。

```js
var dispatchRequest = require('./dispatchRequest');

var chain = [dispatchRequest, undefined];
```

因此，让我们去看看`dispatchRequest`是如何处理请求相关的逻辑。

其文件路径为`lib/core/dispatchRequest.js`，源码如下：

```js
var utils = require('./../utils');
var transformData = require('./transformData');
var isCancel = require('../cancel/isCancel');
var defaults = require('../defaults');

// 是否执行cancel操作
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    // 调用了cancelToken原型方法，判断this.reason是否有值来终止请求
    config.cancelToken.throwIfRequested();
  }
}

// 根据适配器模式选择对应的请求方法
module.exports = function dispatchRequest(config) {
  // 请求前钩子，判断此时是否取消请求，并返回取消原因
  throwIfCancellationRequested(config);

  // 保证headers存在
  config.headers = config.headers || {};

  // 适配请求data格式
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // 扁平化headers属性
  // 相同属性其优先级为
  // config.headers -> config.headers[config.method] -> config.headers.common
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  // 配置已经合并，清空header的配置
  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  // 获取实际请求的方法
  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    // 请求后，响应成功钩子，判断此时是否取消请求，并返回取消原因
    throwIfCancellationRequested(config);

    // 适配响应data格式
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    // 响应错误时，有两种情况
    // 1. 请求成功，正常响应错误，返回适配数据
    // 2. 取消请求，返回取消请求的原因
    if (!isCancel(reason)) {
      // 请求后，响应失败钩子，判断此时是否取消请求，并返回取消原因
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};
```

其做了如下功能：

* 支持取消请求`cancel`功能
* 合并，整理实际请求的`headers`头
* 转换请求和响应`data`

## 总结

`dispatchRequest`文件主要是整理了最终的HTTP配置，特别是`headers`头的处理。