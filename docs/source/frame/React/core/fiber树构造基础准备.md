---
title: fiber 树构造(基础准备)
---

# fiber 树构造(基础准备)

在 React 运行时中，`fiber树构造`位于`react-reconciler`包。

在正式解读`fiber树构造`之前，再次回顾一下reconciler 运作流程的4个阶段。

![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/reactfiberworkloop.b647e134.png)

1. 输入阶段：衔接`react-dom`包，承接`fiber更新`请求(可以参考React 应用的启动流程)
2. 注册调度任务：与调度中心(`scheduler`包)交互，注册调度任务`task`，等待任务回调(可以参考React 调度原理(scheduler))
3. 执行任务回调：在内存中构造出`fiber树`和`DOM`对象，也就是**fiber 树构造的重点内容**。
4. 输出：与渲染器(`react-dom`)交互，渲染`DOM`节点。

`fiber 树构造`处于上述第 3 个阶段，可以通过不同的视角来理解`fiber树构造`在`React`运行时所处的位置：

* 从`scheduler`调度中心的角度来看，它是任务队列`taskQueue`中的一个具体的任务回调(`task.callback`)
* 从React 工作循环的角度来看，它属于`fiber树构造循环`

由于`fiber 树构造`源码量比较大，本系列根据`Reac`运行的`内存状态`，分为 2 种情况来说明：

1. 初次创建：在`React`应用首次启动时，界面还没有渲染，此时并不会进去对比过程，相当于直接构造一颗全新的树。
2. 对比更新：`React`应用启动后，界面已经渲染，如果再次发生更新，创建`新fiber`之前需要和`旧fiber`进行对比。最后构造的fiber树有可能是全新的，也可能是部分更新的。

无论是`初次创建`还是`对比更新`，基础概念都是通用的，本节将介绍这些基础知识，为正式进入`fiber树构造`做准备。

## ReactElement，Fiber，DOM三者的关系

在React 应用中的高频对象一文中，已经介绍了`ReactElement`和`Fiber`对象的数据结构，这里我们梳理出`ReactElement，Fiber，DOM`这 3 种对象的关系。

