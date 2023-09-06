---
title: 前言
---

# React

> 基于React 17.0.0源码解析。
>
> GitHub仓库地址：https://github.com/facebook/react

## API解析

| API                               | 作用                    | 文件地址                     |
| --------------------------------- | ----------------------- | ---------------------------- |
| createElement                     | 创建React组件           | [跳转](./api/createElement)  |
| cloneElement                      | 复制React组件           | [跳转](./api/cloneElement)   |
| isValidElement                    | 校验React组件           | [跳转](./api/isValidElement) |
| createFactory（废弃）             | 创建指定类型的React组件 |                              |
| lazy                              | 懒加载异步组件          | [跳转](./api/lazy)           |
| memo                              | 缓存组件                | [跳转](./api/memo)           |
| version（常量）                   | 获取React版本号         |                              |
| Fragment（常量）                  | Fragment标识            | [跳转](./api/symbol)         |
| Profiler（常量）                  | Profiler标识            | [跳转](./api/symbol)         |
| StrictMode（常量）                | 严格模式标识            | [跳转](./api/symbol)         |
| unstable_DebugTracingMode（常量） |                         | [跳转](./api/symbol)         |
| Suspense（常量）                  |                         | [跳转](./api/symbol)         |
| SuspenseList（常量）              |                         | [跳转](./api/symbol)         |
| unstable_LegacyHidden（常量）     |                         | [跳转](./api/symbol)         |
| unstable_Scope（常量）            |                         | [跳转](./api/symbol)         |

## 基本概念

| 名称         | 文件地址                     |
| ------------ | ---------------------------- |
| 宏观包结构   | [跳转](./basic/宏观包结构)   |
| 两大工作循环 | [跳转](./basic/两大工作循环) |
| 高频对象     | [跳转](./basic/高频对象)     |

## 运行核心

| 名称                     | 文件地址                           |
| ------------------------ | ---------------------------------- |
| 启动过程                 | [跳转](./core/启动过程)            |
| Reconciler 运作流程      | [跳转](./core/reconciler运作流程)  |
| 优先级管理               | [跳转](./core/优先级管理)          |
| 调度原理                 | [跳转](./core/调度原理)            |
| Fiber 树构造（基础准备） | [跳转](./core/fiber树构造基础准备) |
| Fiber 树构造（初次创建） | [跳转](./core/fiber树构造初次创建) |
| Fiber 树构造（对比更新） | [跳转](./core/fiber树构造对比更新) |
| Fiber 树渲染             | [跳转](./core/fiber树渲染)         |

## 状态管理

| 名称                    | 文件地址                       |
| ----------------------- | ------------------------------ |
| 状态与副作用            | [跳转](./state/状态与副作用)   |
| Hook 原理（概览）       | [跳转](./state/Hook原理概览)   |
| Hook 原理（状态Hook）   | [跳转](./state/Hook原理状态)   |
| Hook 原理（副作用Hook） | [跳转](./state/Hook原理副作用) |
| Context 原理            | [跳转](./state/context原理)    |

## 交互

| 名称     | 文件地址                    |
| -------- | --------------------------- |
| 合成事件 | [跳转](./interact/合成事件) |

## 高频算法

| 名称         | 文件地址                         |
| ------------ | -------------------------------- |
| 调和算法     | [跳转](./algorithm/调和算法)     |
| 位运算       | [跳转](./algorithm/位运算)       |
| 深度优先遍历 | [跳转](./algorithm/深度优先遍历) |
| 堆排序       | [跳转](./algorithm/堆排序)       |
| 链表操作     | [跳转](./algorithm/链表操作)     |
| 栈操作       | [跳转](./algorithm/栈操作)       |

