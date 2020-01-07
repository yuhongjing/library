---
title: Render and Commit Phases
---

# Render and Commit Phases

```js
function performUnitOfWork(fiber) {
  ...
  
  if (fiber.parent) {
    fiber.parent.dom.appendChild(fiber.dom);
  }
	
  ...
}
```

现在的渲染流程是：每次处理一个元素的时候，我们都会向DOM添加一个新节点。

那现在就出现了一个新的问题。

还记得上一章讲过，为了保证浏览器主线程不被阻塞，浏览器可以在我们渲染工作单元结束时，插入高优先级任务，暂停我们的渲染任务。

此时用户就会看见一个不完整的UI视图，我们不希望出现这样的情况。

### 解决方法

所以我们需要确定完成所有的工作单元后，再一口气添加整棵fiber树到DOM中。

这样就不会出现不完整的UI视图了。

## 移除在fiber中添加DOM	

```js
function performUnitOfWork(fiber) {
  ...
  
  // 删除在fiber改变DOM的代码
  // if (fiber.parent) {
  //   fiber.parent.dom.appendChild(fiber.dom);
  // }
	
  ...
}
```

所以，我们首先需要将在fiber中移除添加DOM的代码。



## 追踪根节点

```js
function render(element, container) {
  // nextUnitOfWork = {
  wipRoot = {
    dom: container,
    props: {
      children: [element]
    }
  };
  // 新增
  nextUnitOfWork = wipRoot;
}

let nextUnitOfWork = null;
// 新增
let wipRoot = null;
```

我们现在需要追踪根节点的状态。

当根节点的下一个工作单元为空时，就说明所有工作单元都已经执行完毕。

现在可以将整棵fiber树直接添加进DOM中了。

### 添加整棵fiber树

```js
function commitRoot() {
 // TODO add nodes to dom 
}

function workLoop(deadline) {
  ...
  
  // 添加判断 渲染任务是否完成
  if (!nextUnitOfWork && wipRoot) {
    commitRoot();
  }
}
```

这里的`commitRoot`函数，会递归所有节点添加在DOM中。



## 小结

本章的解决了一个新的Bug——出现渲染不完整的UI。

解决方式：

* 移除每个工作单元的添加DOM功能。
* 监听根节点的状态，判断是否完成所有渲染任务。
* 在workLoop中，根据条件一次添加整棵fiber树。

### 白屏问题

这种的解决方式，也会出现其它问题。

因为在执行渲染任务期间，DOM不会再出现任何改变，直到全部任务结束后，才一次性的渲染出来。

所以当用户第一次进入页面的时候，就会出现白屏的问题。

现在Vue和React所出现的白屏问题，也正是由于这个原因导致的。