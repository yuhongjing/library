---
title: 缓存memoize
---

# 缓存memoize

```js
function memoize(func, resolver) {
  if (typeof func !== 'function' || (resolver != null && typeof resolver !== 'function')) {
    throw new TypeError('Expected a function');
  }
  const memoized = function(...args) {
    const key = resolver ? resolver.apply(this, args) : args[0];
    const cache = memoized.cache;
    
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || Map);
  return memoized;
}

memoize.Cache = Map;
```

```js
// 使用举例——斐波拉契

// 这里的f已经返回了memoized函数了。
// 而memoize只会执行一次。
const f = memoize(n => n < 2 ? 1 : f(n - 1) + f(n -2));
for(let i = 1; i <= 10; i++) {
    f(i);
}
```

这段代码稍微有点绕，有点意思。

这里使用了闭包返回了`memoized`函数，通过对比`Map`中是否存在`key`。

* 存在、直接返回缓存数据。
* 不存在、执行函数并将结果缓存。

还有一句代码是这里：

```js
memoized.cache = new (memoize.Cache || Map);
```

这一句代码，相当于`memoized`的构造函数是可以用户自己替换的，默认为Map。

而`resolver`表示，用户可以自定义`key`的值，否则默认以传入的第一个数据为`key`的值。

# 缓存池

```js
const MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  const result = memoize(func, key => {
    const {cache} = result;
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  
  return result;
}
```

设置了缓存最多的数量为`500`，如果缓存数量超过`500`，则会清空之前的全部缓存。