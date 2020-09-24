---
title: ES6扩展
---

# ES6扩展

实现ES6标准的Promises/A+ API。

其文件路径为`src/es6-extensions.js`，源码如下：

```js
var Promise = require('./core.js');

module.exports = Promise;

// 提升效率，预制几种常见情况的Promise
var TRUE = valuePromise(true);
var FALSE = valuePromise(false);
var NULL = valuePromise(null);
var UNDEFINED = valuePromise(undefined);
var ZERO = valuePromise(0);
var EMPTYSTRING = valuePromise('');

// 创建成功状态的Promise
function valuePromise(value) {
  var p = new Promise(Promise._noop);
  p._state = 1;
  p._value = value;
  return p;
}

// 返回成功状态的Promise
Promise.resolve = function (value) {
  // 参数为Promise时，直接返回此Promise
  if (value instanceof Promise) return value;

  // 参数为预制情况时，直接返回对应Promise
  if (value === null) return NULL;
  if (value === undefined) return UNDEFINED;
  if (value === true) return TRUE;
  if (value === false) return FALSE;
  if (value === 0) return ZERO;
  if (value === '') return EMPTYSTRING;

  // 当参数为对象或函数类型时，判断其是否存在then方法
  // 存在，改变其上下文并返回
  // 至于为啥怎么做，暂且不太清楚
  if (typeof value === 'object' || typeof value === 'function') {
    try {
      var then = value.then;
      if (typeof then === 'function') {
        return new Promise(then.bind(value));
      }
    } catch (ex) {
      return new Promise(function (resolve, reject) {
        reject(ex);
      });
    }
  }
  // 否则，直接创建Promise并返回即可
  return valuePromise(value);
};

// 从类数组或可迭代对象，浅拷贝出一个新的数组
var iterableToArray = function (iterable) {
  // 判断是否支持ES6 Array.from方法
  if (typeof Array.from === 'function') {
    iterableToArray = Array.from;
    return Array.from(iterable);
  }

  // 不支持ES6 则通过slice来进行浅拷贝数组
  iterableToArray = function (x) { return Array.prototype.slice.call(x); };
  return Array.prototype.slice.call(iterable);
}

// 多个Promise执行
// 全部执行完毕后，按照传入Promise顺序，返回结果数组
// 如果某个Promise失败，则返回失败状态
Promise.all = function (arr) {
  var args = iterableToArray(arr);

  // 返回一个Promise
  return new Promise(function (resolve, reject) {
    // 如果Promise数组为空，则返回一个成功状态且值为空数组的Promise
    if (args.length === 0) return resolve([]);
    var remaining = args.length;
    function res(i, val) {
      // Promise数组值为函数或对象的情况
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        // 如果值为Promise
        if (val instanceof Promise && val.then === Promise.prototype.then) {
          // 处理Promise嵌套的情况
          while (val._state === 3) {
            val = val._value;
          }
          // 处理Promise成功状态的情况
          if (val._state === 1) return res(i, val._value);
          // 处理Promise失败状态的情况，更改外层Promise为失败状态
          if (val._state === 2) reject(val._value);
          // 处理Promise等待状态的情况，传入外层Promise reject方法
          val.then(function (val) {
            res(i, val);
          }, reject);
          return;
        } else {
          // 解决then方法的情况
          // 针对then为方法的情况都不太了解
          var then = val.then;
          if (typeof then === 'function') {
            var p = new Promise(then.bind(val));
            p.then(function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
      }
      // 结果数组对应Promise位置，存入结果值
      args[i] = val;
      // Promise数组遍历完毕后
      if (--remaining === 0) {
        // 更改外层Promise的状态值
        resolve(args);
      }
    }
    // 遍历promise数组，传入下标
    // 因为最终的Promise结果数组，与传入的Promise顺序相同
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

// 类似语法糖，返回拒绝状态的Promise
Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

// 多个Promise执行，执行完毕一个就返回
Promise.race = function (values) {
  // 创建一个外层Promise
  return new Promise(function (resolve, reject) {
    // 遍历Promise数组
    iterableToArray(values).forEach(function(value){
      // 将外层的Promise的参数resolve和reject传入子Promise
      // 当任意一个子Promise执行完毕，改变了外层Promise状态后
      // 其余Promise就无法再更改外层Promise了
      Promise.resolve(value).then(resolve, reject);
    });
  });
};

// 原型方法 catch
// 调用then，传入onRejected
Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};
```

## Promise.all例子

```js
const promise = new Promise((resolve, reject) => {
  console.log('test');
});

// Promise数组中，可以接受普通值，也可以接受Promise，甚至Promise嵌套的情况
Promise.all([1, 2, promise]);

// 处理Promise为成功状态的情况
// 例如 Promise.all([Promise.resolve(123)]) 此时Promise已经为成功状态的情况
if (val._state === 1) return res(i, val._value);

// 处理Promise为失败状态的情况
// 例如 Promise.all([Promise.reject(123)]) 此时Promise已经为失败状态的情况
if (val._state === 2) reject(val._value);
// 处理Promise为等待状态的情况
// 例如 Promise.all([promise]) 此时Promise为等待状态，也是最常见的情况
val.then(function (val) {
  res(i, val);
}, reject);
```

