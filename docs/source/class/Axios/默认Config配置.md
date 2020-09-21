---
title: 默认Config配置
---

# 默认Config配置

顺着入口文件看，我们能够看到`axios`无论是直接引用实例，还是通过`工厂函数`生成实例，都会传入一个`defaults`。

```js
var defaults = require('./defaults');

var axios = createInstance(defaults);

axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};
```

`defaults`其实是默认的`HTTP`配置。

其文件路径为`lib/defaults.js`，源码如下：

```js
var utils = require('./utils');
var normalizeHeaderName = require('./helpers/normalizeHeaderName');

// 请求头默认的Content-Type值
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

// 如果请求头不为空且请求头的Content-Type值为空时，将Content-Type设置为value
function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

// 适配器模式，根据当前运行环境，来选择HTTP请求的方式。
function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // 浏览器环境，通过XMLHttpRequest发送HTTP请求
    adapter = require('./adapters/xhr');
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // Node.js环境通过HTTP库来发送HTTP请求
    adapter = require('./adapters/http');
  }
  return adapter;
}

// 返回的Axios HTTP默认配置
var defaults = {
  // 获取当前环境适配的HTTP请求方式
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    // 规范Accept和Content-Type两个参数，如删掉content-type，替换为Content-Type
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    
    // 根据请求携带的data参数类型，设置对应的Content-Type头
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    // data为URLSearchParams类型，请求头为表单请求头
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    // data为Object类型，请求头为JSON头
    // 因此如果不特殊设置，post、put、patch请求默认都为json请求头
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    // 将字符串转换为JSON形式
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  // 超时中断请求，设置为0，即不设置超时
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  // 校验状态码
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

// 默认公共的接受格式为json数据
defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

// get、delete、head默认的头信息为空
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

// post、put、patch默认的头信息设置为application/x-www-form-urlencoded
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
  // 例如
  // defaults.headers.post = {'Content-Type': 'application/x-www-form-urlencoded'}
});

module.exports = defaults;
```

其做了如下功能：

* 适配运行环境：`Node.js`和`浏览器`
* 请求协议头设置默认`Content-Type`
* 检查`Request Data`，并匹配对应的`Content-Type`
* 转换`Response Data`，接受`JSON`数据，设置了响应头`Accept`
* 防`XSRF`攻击请求头
* 校验`XHR`返回状态码

## 总结

`defaults`文件，就是设置了默认的HTTP参数。

针对请求数据及响应数据，做了对应的处理以及对应的响应头处理。

然后通过`适配器模式`做了运行环境的适配。