---
title: Concurrent Mode
---

# Concurrent Mode

现在，我们需要重构一下我们的代码。

## 线程阻塞

```js
function render(element, container) {
  element.props.children.forEach(child => 
    render(child, dom)
  );
}
```

这里的递归渲染存在一个问题。

一旦开始渲染，直到渲染完成之前，我们都没有办法中止渲染。

如果这棵渲染树特别大，那么它就会阻塞线程比较长的时间，此时如果有其它高优先级的事情发生，例如用户输入字符，或者动画的流畅播放。

它们就必须等待渲染完成之后才能执行。

## 任务分割

解决的方法是，我们把渲染任务分割成许多个小的单元任务。

每个渲染单元任务完成后，如果发现浏览器有其它任务需要执行，就会停止执行下一个渲染单元任务，先去执行其它任务，等待其它任务结束浏览器空闲时，再继续执行下一个渲染单元任务。

因为被切割单元任务比较小，所以执行一个单元任务时，不会长时间的阻塞主线程。

## requestIdleCallback

```js
function workLoop(deadline) {
  requestIdleCallback(workLoop);
}
requestIdleCallback(workLoop);
```

我们使用`requestIdleCallback`进行循环，你可以把`requestIdleCallback`当作`setTimeout`，但是`requestIdleCallback`只有浏览器空闲的时候才会执行回调函数。

> React现在已经[没有使用requestIdleCallback](https://github.com/facebook/react/issues/11171#issuecomment-417349573)了，现在它使用[scheduler package](https://github.com/facebook/react/tree/master/packages/scheduler)，但是实现原理还是一样的。

`requestIdleCallback`还提供一个`deadline`参数。

我们使用这个参数，可以知道浏览器距离下次操控的时间。

## React的并发模式仍不稳定

现在是2019年11月份，直到现在React中的并发模式仍然处于不稳定的状态（代码仍在变动），目前相对稳定的版本代码，见如下：

```js
while (nextUnitOfWork) {
  nextUnitOfWork = performUnitOfWork(
    nextUnitOfWork
  );
}
```

## 实现并发模式

现在让我们来实现并发模式吧。

```js
let nextUnitOfWork = null;

function workLoop(deadline) {
  // 是否有其它任务
  let shouldYield = false;
  // 循环单元任务并判断是否有其它任务
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(
      nextUnitOfWork
    );
    // 1毫秒内是否有其它任务执行
    // 你也可以看成1毫秒内，浏览器是否需要控制
    shouldYield = deadline.timeRemaining() < 1;
  }
  requestIdleCallback(workLoop);
}

requestIdleCallback(workLoop);

function performUnitOfWork(nextUnitOfWork) {
  // TODO
}
```

我们需要设置第一个工作单元，并且还需要编写一个`performUnitOfWork`函数。

`performUnitOfWork`的功能是：

* 完成当前任务单元的工作。
* 返回下一个任务单元。

## 小结

渲染函数`render`会出现性能问题，解决的方式是`并发模式`处理渲染。

本章主要就是讲解了`并发模式`处理的原理，具体实现在下一章会详细说明。

