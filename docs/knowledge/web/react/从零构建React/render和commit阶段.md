---
title: render和commit阶段
---

# render和commit阶段

我们的代码还有一个问题。

每完成一个任务单元都把节点添加到 DOM 上。请记住，浏览器是可以打断渲染流程的，如果还没渲染完整棵树就把节点添加到 DOM，用户会看到残缺不全的 UI 界面，给人一种很不专业的印象，这肯定不是我们想要的。因此需要重构节点添加到 DOM 这部分代码，整棵树（fiber）渲染完成之后再一次性添加到 DOM，即 React commit 阶段。

具体来说，去掉`performUnitOfWork`的`fiber.parent.dom.appendChild`代码，替换为如下代码：

```js
function createDom(fiber) {
  const dom =
    fiber.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(fiber.type);
  
  const isProperty = key => key !== "children";
  Object.keys(fiber.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = fiber.props[name;
    });
  
  return dom;
}

// 新增函数，提交根节点到 DOM
function commitRoot() {
  commitWork(wipRoot.child);
  wipRoot = null;
}

// 新增子函数
function commitWork(fiber) {
  if (!fiber) {
    return;
  }
  const domParent = fiber.parent.dom;
  domParent.appendChild(fiber.dom);
  // 递归子节点和兄弟节点
  commitWork(fiber.child);
  commitWork(fiber.sibling);
}

function render(element, container) {
  // render 时记录 wipRoot
  wipRoot = {
    dom: container,
    props: {
      children: [element]
    }
  };
  nextUnitOfWork = wipRoot;
}

let nextUnitOfWork = null;
// 新增变量，跟踪渲染进行中的根 fiber
let wipRoot = null;

function workLoop(deadline) {
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(
      nextUnitOfWork
    );
    shouldYield = deadline.timeRemaining() < 1;
  }
  
  // 当 nextUnitOfWork 为空则表示渲染 fiber 树完成了
  // 可以提交到 DOM 了
  if (!nextUnitOfWork && wipRoot) {
    commitRoot();
  }
  requestIdleCallback(workLoop);
}
// 一旦浏览器空闲，就触发执行单元任务
requestIdleCallback(workLoop);

function performUnitOfWork(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }
  
  const elements = fiber.props.children;
  let index = 0;
  let prevSibling = null;
  
  while (index < elements.length) {
    const element = elements[index];
    
    const newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null
    };
    
    if (index === 0) {
      fiber.child = newFiber;
    } else {
      prevSibling.sibling = newFiber;
    }
    
    prevSibling = newFiber;
    index++;
  }
  
  if (fiber.child) {
    return fiber.child;
  }
  
  let nextFiber = fiber;
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling;
    }
    nextFiber = nextFiber.parent;
  }
}
```
