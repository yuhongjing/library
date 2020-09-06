---
title: 节流Throttle
---

# 节流Throttle

设置一个时间，在这段时间内只会执行一次函数。

```js
function throttle(func, wait, options) {
  let leading = true;
  let trailing = true;

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    leading,
    trailing,
    'maxWait': wait
  })
}
```

调用防抖功能，将`maxWait`与`wait`设置成一样，即是节流的效果。有点意思。