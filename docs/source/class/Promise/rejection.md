---
title: 错误追踪机制
---

# 错误追踪

提供错误追踪的功能，根据Promise的`_onHandle`与`_onReject`两个钩子实现。

其文件路径为`src/rejection-tracking.js`，源码如下：

```js
var Promise = require('./core');

// 默认错误类型列表
var DEFAULT_WHITELIST = [
  ReferenceError,
  TypeError,
  RangeError
];

// 默认关闭错误追踪功能
var enabled = false;
exports.disable = disable;
// 清空钩子，关闭错误追踪功能
function disable() {
  enabled = false;
  Promise._onHandle = null;
  Promise._onReject = null;
}

exports.enable = enable;
// 开启错误追踪功能
function enable(options) {
  options = options || {};
  if (enabled) disable();
  enabled = true;
  var id = 0;
  var displayId = 0;
  var rejections = {};
  Promise._onHandle = function (promise) {
    if (
      promise._state === 2 && // IS REJECTED
      rejections[promise._rejectionId]
    ) {
      if (rejections[promise._rejectionId].logged) {
        onHandled(promise._rejectionId);
      } else {
        clearTimeout(rejections[promise._rejectionId].timeout);
      }
      delete rejections[promise._rejectionId];
    }
  };
  Promise._onReject = function (promise, err) {
    if (promise._deferredState === 0) { // not yet handled
      promise._rejectionId = id++;
      rejections[promise._rejectionId] = {
        displayId: null,
        error: err,
        timeout: setTimeout(
          onUnhandled.bind(null, promise._rejectionId),
          matchWhitelist(err, DEFAULT_WHITELIST)
            ? 100
            : 2000
        ),
        logged: false
      };
    }
  };
  function onUnhandled(id) {
    if (
      options.allRejections ||
      matchWhitelist(
        rejections[id].error,
        options.whitelist || DEFAULT_WHITELIST
      )
    ) {
      rejections[id].displayId = displayId++;
      if (options.onUnhandled) {
        rejections[id].logged = true;
        options.onUnhandled(
          rejections[id].displayId,
          rejections[id].error
        );
      } else {
        rejections[id].logged = true;
        logError(
          rejections[id].displayId,
          rejections[id].error
        );
      }
    }
  }
  function onHandled(id) {
    if (rejections[id].logged) {
      if (options.onHandled) {
        options.onHandled(rejections[id].displayId, rejections[id].error);
      } else if (!rejections[id].onUnhandled) {
        console.warn(
          'Promise Rejection Handled (id: ' + rejections[id].displayId + '):'
        );
        console.warn(
          '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' +
          rejections[id].displayId + '.'
        );
      }
    }
  }
}

function logError(id, error) {
  console.warn('Possible Unhandled Promise Rejection (id: ' + id + '):');
  var errStr = (error && (error.stack || error)) + '';
  errStr.split('\n').forEach(function (line) {
    console.warn('  ' + line);
  });
}

function matchWhitelist(error, list) {
  return list.some(function (cls) {
    return error instanceof cls;
  });
}
```

