---
title: 前言
---

# Redux

> Redux是JavaScript状态容器，提供可预测化的状态管理。
>
> 除了React，还支持其他的界面库。体小精悍，仅2KB。



学习Redux源码，不想每次出现问题，因不知其运行原理而没法解决。

## 目录架构

```
|-- src
  |-- utils 工具方法
    |-- actionTypes.js Redux私有属性
    |-- isPlainObject.js 判断纯对象
    |-- warning.js 报错
  |-- applyMiddleware.js 中间件
  |-- bindActionCreators.js 父子组件传递dispatch
  |-- combineReducers.js 合并reducer
  |-- compose.js 组合函数
  |-- createStore.js 创建Redux store
  |-- index.js 入口文件
```

## API

Redux一共暴露了5个API。

* [createStore](./createStore.md)：核心功能，提供`dispatch`、`订阅发布`等功能。

* [combineReducers](./combineReducers.md)：合并`reducer`，组合成一个`大reducer`。

* [bindActionCreators](./bindActionCreators.md)：子组件调用父组件`dispatch`。

* [applyMiddleware](./applyMiddleware.md)：中间件，增强`dispatch`功能。

* [compose](./compose.md)：工具函数，合成多个函数。
