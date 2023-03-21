---
title: 前言
---

# Axios

> Axios是一个基于promise的HTTP 库，可以用在浏览器和node.js中。

学习`Axios`设计思路。

## 目录架构

```
|-- lib
  |-- adapters 不同环境HTTP【适配】
    |-- http.js Node.js环境请求
    |-- xhr.js 浏览器环境请求
  |-- cancel 取消HTTP请求
    |-- Cancel.js 取消请求返回的信息结构
    |-- CancelToken.js 取消请求的构造器
    |-- isCancel.js 判断是否是取消请求
  |-- core Axios核心实现
    |-- Axios.js Axios构造函数
    |-- buildFullPath.js 请求HTTP地址处理
    |-- createError.js 创建Error实例，返回经过处理后的Error实例
    |-- dispatchRequest.js 真正发出HTTP请求的文件
    |-- enhanceError.js 处理Error实例，添加属性和方法
    |-- InterceptorManager.js 拦截器构造函数
    |-- mergeConfig.js 合并配置
    |-- settle.js 校验返回状态码
    |-- transformData.js 数据转化
  |-- helpers 工具类
    |-- bind.js 函数绑定上下文
    |-- buildURL.js 组合完整的URL地址，包括params
    |-- combineURLs.js 拼接URL地址
    |-- cookies.js 封装cookie操作方法
    |-- deprecatedMethod.js method废弃警告
    |-- isAbsoluteURL.js 判断URL是否为绝对路径
    |-- isURLSameOrigin.js 检测当前URL与请求URL是否同源
    |-- normalizeHeaderName.js 过滤不规范的Header头
    |-- parseHeaders.js header转为对象
    |-- spread.js 函数展开
  |-- axios.js 入口文件
  |-- defaults.js 默认config配置
  |-- utils.js 工具方法
```

## 疑问

如果经常使用`Axios`，你应该会有如下疑问。

- 如何实现跨平台
- 为什么不需要`new`，为什么可以像函数一样调用
- 如何实现的拦截器功能
- 如何实现取消请求功能
- 如何实现客户端支持防御XSRF

让我们进入源码一一了解其实现的原理吧。

## 目录

解析顺序目录如下：

* [入口文件](./入口文件.md)
* [默认Config配置](./默认Config配置.md)
* [Axios构造器类](./Axios构造器类.md)
* [拦截器中间件](./拦截器中间件.md)
* [dispatchRequest](./dispatchRequest.md)
* [取消请求cancel](./取消请求cancel.md)
* [工具方法](./工具方法.md)

## 总结

学完`Axios`才知道`Promise`是真的强大，`Axios`是真的优雅，其核心主要就是`Promise`，学习`Promise`的各种使用姿势。

最开始的`axios——实例包裹`实现，让人眼前一亮。

还有通过`then`来实现`CancelToken——取消请求`与`Promise链——拦截器`功能，其原理让人拍案叫绝，细细品味，越发有意思。



