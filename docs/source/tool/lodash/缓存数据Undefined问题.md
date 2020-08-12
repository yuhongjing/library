---
title: 缓存数据Undefined问题
---

# 缓存时，如何区分undefined是用户存入的值还是默认空值

```js
const HASH_UNDEFINED = '__lodash_hash_undefined__';

class Hash {
  // ...其他操作
  get(key) {
		const data = this.__data__;
    const result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  
  has(key) {
    const data = this.__data__;
    return data[key] !== undefined;
  }
  
  set(key, value) {
    const data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = value === undefined ? HASH_UNDEFINED : value;
    return this;
  }
}
```

这里存在一个问题，即：判断`key`是否存在，是依据`data[key]`值是否为`undefined`来判断。

但是用户想要存入的值，可能为`undefined`，此时就会无法区分`undefined`到底是存入的值还是空值。而`Lodash`，做了一层转换，将用户存入的`undefined`转换为一个字符串，从而区分了`undefined`。

当然，这样还是有一个问题，即用户存入值正好为`__lodash_hash_undefined__`时，会识别为`undefined`，不过这种情况应该会非常少。

为什么Lodash不使用，数组、对象或Symbol来替代默认的字符串呢？因为Lodash是分模块发布的，不同的模块可能依赖不同版本的Hash类，这样HASH_UNDEFINED指向的内存或者Symbol值就不一致，也就没法区别undefiend了。

