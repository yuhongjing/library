---
title: 并发模式/Concurrent Mode
---

# 并发模式 / Concurrent Mode

在我们深入其它 React 功能之前，先对代码重构，引入 React 最新的并发模式。

可能你会疑惑我们目前连最基本的组件状态更新都还没实现，却来实现并发模式。其实目前代码逻辑还十分简单，现在重构，比之后实现所有功能再回头要容易很多。

有经验的开发者很容易发现上章节的`render`代码有一个问题，渲染子节点时递归遍历了整棵树，当我们页面非常复杂时很容易阻塞主线程（和 stack over flow，堆栈溢出），我们都知道每个页面是单线程的（不考虑 worker 线程），主线程阻塞会导致页面不能及时响应高优先级操作，如用户点击或渲染动画，页面给用户"很卡，难用"的负面影响，这肯定不是我们想要的。

因此，理想情况下，我们应该把`render`拆成更细分的单元，每完成一个单元的工作，允许浏览器打断渲染响应更高优先级的工作，这个工程即"并发模式"。

这里我们用 requestIdleCallback 这个浏览器API来实现。这个API有点类似`setTimeout`，不过不是我们告诉浏览器什么时候执行回调函数，而是浏览器在线程空闲（idle）的时候主动执行回调函数。

React 目前已经不用这个API了，而是用调度器/scheduler这个包，自己实现调度算法。但它们核心思路是类似的，简化起见用 requestIdleCallback 足矣。

```js
let nextUnitOfWork = null;

function workLoop(deadline) {
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(
      nextUnitOfWork
    );
    // 回调函数入参 deadline 可以告诉我们在这个渲染周期还剩多少时间可用
    // 剩余时间小于1毫秒就退出回调，等待浏览器再次空闲
    shouldYield = deadline.timeRemaining() < 1;
  }
  requestIdleCallback(workLoop);
}

requestIdleCallback(workLoop);

// 注意，这个函数执行完本次单元任务后要返回下一个单元任务
function performUnitOfWork(nextUnitOfWork) {
  // TODO
}
```

