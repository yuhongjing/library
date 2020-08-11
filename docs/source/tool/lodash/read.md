---
title: 总结
---

# Lodash
阅读Lodash源码，解读一些有意思的代码。

## Slice 如何支持负数，从右往左获取数组索引

```js
function slice(array, start, end) {
  // ... 其他校验
  
  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  
  // ...
}
```

当start为负数时，以数组长度+负数start，从而实现从右往左获取索引。



## 数组长度是接受任意值，如何保持合法性

```js
// Lodash中很多地方都出现以下代码
// 作用：根据传入的初始和结束索引求得要操作的数据元素长度
length = start > end ? 0 : ((end - start) >>> 0);
```

在JS中，Array.length是一个32位无符号整型的数字，而通过无符号位移运算>>>，就可以确保我们得到一个32-bit unsigned ints。

```js
// 例如
-1 >>> 0    // 4294967295

0 >>> 0     // 0

'1' >>> 0   // 1

'1x' >>> 0  // 0

null >>> 0  // 0
```

对于异常情况的包容也可以让我们减少一些类型判断和显示的强制类型转化的操作。

因此，在有用到Array.length的场景，可用>>>0做参数防护。



## 如何判断类对象

```js
function isObjectLike(value) {
  return typeof value === 'object' && value !== null;
}
```

通过`typeof`操作符，返回值为`object`且值不为`null`，就认为是类对象。

因为`null`的typeof返回`object`，所以需要单独过滤，这是JS的bug，但是未修复。



## 实现SameValueZero规范的字符比较

```js
function eq(value, other) {
  return value === other || (value !== value && other !== other);
  // 下面代码效果等同上面
  // return value === other || (Number.isNaN(value) && Number.isNaN(other));
}
```

处理`NaN!==NaN`的情况，利用JS中只有NaN不等于自己的特征，实现`SameValueZero`规范的比较。



## 实现Map

```js
function map(array, iteratee) {
  let index = -1;
  const length = array == null ? 0 : array.length;
  const result = new Array(length);
  
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
```



## 如何判断类数组

```js
function isArrayLike(value) {
  // isLength函数：length值合法
  return value != null && typeof value != 'function' && isLength(value.length);
}
```

满足以下三个条件，即可认为类数组。

* 不为`null`。
* 不为`function`，因为函数有length属性，表示形参个数。
* 拥有`length`属性，且值合法。



## 缓存时，如何区分undefined是用户存入的值还是默认空值

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



## 实现findIndex，支持从N索引开始寻找并且支持前后方向

```js
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  const { length } =  array;
  let index = fromIndex + (fromRight ? 1 : -1);
  
  while((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
```

初始索引是fromIndex控制，会根据fromRight来增减1。往前，则下标后移一位，往后，则下标往前移一位。

而前后方向是依据fromRight控制循环结束条件，往前条件为下标0，往后条件为数组长度。



## 标记

```js
const LARGE_ARRAY_SIZE = 200
function baseDifference(array, values, iteratee, comparator) {
  let includes = arrayIncludes
  let isCommon = true
  const result = []
  const valuesLength = values.length

  if (!array.length) {
    return result
  }
  if (iteratee) {
    values = map(values, (value) => iteratee(value))
  }
  if (comparator) {
    includes = arrayIncludesWith
    isCommon = false
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas
    isCommon = false
    values = new SetCache(values)
  }
  outer:
  for (let value of array) {
    const computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      let valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}
```

这段代码，设计比较精妙。

* 通过标记，可以引用指定语句，例如这里的`continue outer;`，不过实际适用场景比较少。
* `includes`在各个情况下，引用的方法都不一样，并且活用了实参形参不一致的特征，简化了代码量。
* 通过isCommon来区分复杂与普通处理模式。
* `value = (comparator || value !== 0) ? value : 0;`
  * 这一段代码比较奇怪，在没有提供`comparator`的情况下，如果`value === 0`，则将`value`赋值为0。
  * `value === 0`有三种情况`+0`、`0`、`-0`。但是因为上面代码会在比较时使用`set`，而`set`无法区分`+0`与`-0`。

