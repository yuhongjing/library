---
title: Axios构造器类
---

# Axios构造器类

现在整个入口文件，只剩下`Axios`的实例化未分析了。

让我们进入到Axios的构造器看看，它的核心实现逻辑。

```js
var context = new Axios(defaultConfig);
```

其文件路径为`lib/core/Axios.js`，源码如下：

```js
var utils = require('./../utils');
var buildURL = require('../helpers/buildURL');
var InterceptorManager = require('./InterceptorManager');
var dispatchRequest = require('./dispatchRequest');
var mergeConfig = require('./mergeConfig');

// Axios构造器，主要做了两件事
// 1. Axios HTTP Config配置
// 2. 拦截器数组，请求拦截与响应拦截本质是一模一样的
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

// 核心请求函数，发送请求
// 这是入口文件中，真正返回的函数
// 接受config参数，合并覆盖默认HTTP配置(defaults)
Axios.prototype.request = function request(config) {
  if (typeof config === 'string') {
    // 支持调用方式：axios('url' [, config])
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    // 支持调用方式：axios({})
    config = config || {};
  }

  // 合并覆盖配置
  config = mergeConfig(this.defaults, config);
  
  // 获取请求协议，默认get
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    // 获取defaults中请求协议
    // 客户端可以通过如下方式，更改defaults的属性值
    // axios.defaults.method = 'post';
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // 拦截器中间件 —— 调用链
  // 两个值，分别对应resolve与reject的返回值
  var chain = [dispatchRequest, undefined];
  
  // 状态为fullfield的promise
  // 相当于 new Promise(resolve => resolve(config))
  var promise = Promise.resolve(config);

  // 循环request拦截器数组，并压入chain链前面
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    // promise会存在两个结果，因此需推入两个成员
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  // 循环response拦截器数组，并放入chain链后面
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });
  // 此时chain链结构如下：
  // request拦截器(多个) -> 实际请求 -> response拦截器(多个)
  // Promise依次执行，从而实现拦截器功能
  // 因此可以看出request拦截器与response拦截器没有任何区别，仅仅是位置不同
  
  // 顺序循环chain链
  while (chain.length) {
    // 每次循环移除最前方两个成员，相当于一个拦截器
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// 不发送请求，仅获取当前请求的URL地址
Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// 添加别名，支持axios.get等方式调用
// 其实际调用函数仍然是axios.prototype.request函数
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url
    }));
  };
});

// 添加别名，支持axios.post等方式调用
// 唯一区别是多了data参数
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;
```

其做了如下功能：

* 构造了`Axios`，初始化属性`defaults`与`interceptors`
* 实现了`request`函数，其通过`Promise`调用链的方式实现了**拦截器**(中间件)功能
* `getUrl`工具函数
* 实现函数别名`get`、`post`等

## 中间件实现

这里需要好好分析一下，Axios是如何实现拦截器的功能的？

举一个简单的例子：

```js
const config = 'HTTP默认配置';

// 真正的请求函数
const requestFunc = config => {
    return config + '|真正请求成功';
};

const chain = [requestFunc, undefined];
var promise = Promise.resolve(config);

// 请求拦截器
const requestFulfilled1 = config => {
  return config + '|请求成功拦截器1';
}
const requestRejected1 = error => {
  return error + '|请求失败拦截器1'
}
// 放入调用链前方
chain.unshift(requestFulfilled1, requestRejected1);

// 响应拦截器
const responseFulfilled1 = config => {
  return config + '|响应成功拦截器1';
}
const responseRejected1 = error => {
  return error + '|响应失败拦截器1'
}
// 放入调用链后面
chain.push(responseFulfilled1, responseRejected1);

while (chain.length) {
  promise = promise.then(chain.shift(), chain.shift());
}

// 最终返回客户端的Promise
promise.then(resolve => {
  console.log(resolve); // HTTP默认配置|请求成功拦截器1|真正请求成功|响应成功拦截器1
}).catch(error => {
  console.log(error);
})
```

这段代码，很清晰的展示`Axios`拦截器(中间件)的链式调用功能是如何实现的。

>  本人一开始认为`Axios`拦截器的实现方式，类似`redux`那样通过`compose`包装高阶函数，从而实现中间件的链式调用。
>
> 没想到`Axios`中间件的实现，异常简单明了，仅依赖`Promise`自身的链式调用功能，即可实现。

其实现逻辑为：`Promise.then中return对应的结果，此结果会传入下一个then作为参数，从而实现链式调用`。

OK，又学习到一种优雅实现中间件的方式。

## 总结

`Axios.js`文件，主要就是负责构造`axios`实例与`request`方法及其别名。

