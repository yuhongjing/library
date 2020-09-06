---
title: 防抖Debounce
---

# 防抖Debounce

原理：事件触发时，会记录当前事件触发时间，如果在允许等待的时间`wait`内又触发了事件，则函数还不会执行，但是以这个时间为准，如果再无事件触发，函数才会执行。

典型应用场景，搜索输入框。

```js
function debounce(func, wait, options) {
  let lastArgs,
    lastThis,
    maxWait,
    result,
    timerId,
    lastCallTime;

  let lastInvokeTime = 0;
  let maxing = false;

  const useRAF = (!wait && wait !== 0 && typeof root.requestAnimationFrame === 'function');

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }
  wait = +wait || 0;
  if (isObject(options)) {
    maxing = 'maxWait' in options
    maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : maxWait
  }

  function invokeFunc(time) {
    const args = lastArgs;
    const thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function startTimer(pendingFunc, wait) {
    if (useRAF) {
      root.cancelAnimationFrame(timerId);
      return root.requestAnimationFrame(pendingFunc);
    }
    return setTimeout(pendingFunc, wait);
  }

  function cancelTimer(id) {
    if (useRAF) {
      return root.cancelAnimationFrame(id);
    }
    clearTimeout(id);
  }

  function remainingWait(time) {
    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;

    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    const time = Date.now();
    if (shouldInvoke(time)) {
      timerId = undefined;
      return invokeFunc(time);
    }
    timerId = startTimer(timerExpired, remainingWait(time));
  }

 
  function debounced(...args) {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    lastArgs = args;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        lastInvokeTime = lastCallTime;
        return startTimer(timerExpired, wait);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = startTimer(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
   
    return result;
  }
  return debounced;
}
```

做了如下功能

* 参数校验
* 是否使用`requestAnimationFrame`来替代`setTimeout`来优化性能
* 最大等待时间，一旦超过这个时间，也会执行函数

## 最简易版

```js
function debounce (func, wait) {
  let timerId;
  function debounced () {
    clearTimeout(timerId);
    timerId = setTimeout(func, wait);
  }
}
```

