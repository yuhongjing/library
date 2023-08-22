---
title: React
---

# React.js

> 文件地址：react/src/React.js

React入口文件暴露了如下方法：

| API                                                        | 作用              | 文件地址                                    |
| ---------------------------------------------------------- | ----------------- | ------------------------------------------- |
| createElement                                              | 创建React组件     | [react/src/ReactElement.js](./ReactElement) |
| cloneElement                                               | 复制React组件     | [react/src/ReactElement.js](./ReactElement) |
| isValidElement                                             | 校验React组件     | [react/src/ReactElement.js](./ReactElement) |
| createFactory                                              | 获取React组件类型 | [react/src/ReactElement.js](./ReactElement) |
| lazy                                                       | 懒加载异步组件    | [react/src/ReactLazy.js](./ReactLazy)       |
| version（ReactVersion）                                    | React版本号       | [shared/ReactVersion.js](./ReactVersion)    |
| Fragment（REACT_FRAGMENT_TYPE）                            | Fragment唯一标识  | [shared/ReactSymbols.js](./ReactSymbols)    |
| Profiler（REACT_PROFILER_TYPE）                            | Profiler唯一标识  | [shared/ReactSymbols.js](./ReactSymbols)    |
| StrictMode（REACT_STRICT_MODE_TYPE）                       |                   | [shared/ReactSymbols.js](./ReactSymbols)    |
| unstable_DebugTracingMode（REACT_DEBUG_TRACING_MODE_TYPE） |                   | [shared/ReactSymbols.js](./ReactSymbols)    |
| Suspense（REACT_SUSPENSE_TYPE）                            |                   | [shared/ReactSymbols.js](./ReactSymbols)    |

