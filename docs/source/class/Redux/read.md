---
title: 前言
---

# Redux

> Redux是JavaScript状态容器，提供可预测化的状态管理。
>
> 除了React，还支持其他的界面库。体小精悍，仅2KB。



学习Redux源码，不想每次出现问题，因不知其运行原理而没法解决。

## API

Redux一共暴露了5个API。

* [createStore](./createStore.md)：核心功能，提供`dispatch`、`订阅发布`等功能。

* [combineReducers](./combineReducers.md)：合并`reducer`，组合成一个`大reducer`。

* [bindActionCreators](./bindActionCreators.md)：子组件调用父组件`dispatch`。

* [applyMiddleware](./applyMiddleware.md)：中间件，增强`dispatch`功能。

* [compose](./compose.md)：工具函数，合成多个函数。
