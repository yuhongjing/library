---
title: 函数组件Hooks
---

# 函数组件 Hooks

支持了函数组件，还需要支持组件状态 / state 才能实现刷新界面。

我们的示例也跟着更新，用 hooks 实现经典的 counter，点击计数器加1。

```js
/** @jsx Redact.createElement */
function Counter() {
  const [state, setState] = Redact.useState(1);
  return (
    <h1 onClick={() => setState(c => c + 1)}>
      Count: {state}
    </h1>
  );
}
const element = <Counter />;
const container = document.getElementById("root");
Redact.render(element, container);
```

注意：以下代码省略了未变化的部分。

```js
// 新增变量，渲染进行中的 fiber 节点
let wipFiber = null;
// 新增变量，当前 hook 的索引
let hookIndex = null;

function updateFunctionComponent(fiber) {
  // 更新进行中的 fiber 节点
  wipFiber = fiber;
  // 重置 hook 索引
  hookIndex = 0;
  // 新增 hooks 数组以支持同一个组件多次调用 `useState`
  wipFiber.hooks = [];
  const children = [fiber.type(fiber.props)];
  reconcileChildren(fiber, children);
}

function useState(initial) {
  // alternate 保存了上一次渲染的 fiber 节点
  const oldHook =
    wipFiber.alternate
    && wipFiber.alternate.hooks
    && wipFiber.alternate.hooks[hookIndex];
  const hook = {
    // 第一次渲染使用入参，第二次渲染复用前一次的状态
    state: oldHook ? oldHook.state : initial,
    // 保存每次 setState 入参的队列
    queue: []
  };

  const actions = oldHook ? oldHook.queue : [];
  actions.forEach(action => {
    // 根据调用 setState 顺序从前往后生成最新的 state
    hook.state = action instanceof Function ? action(hook.state) : action;
  });

  // setState 函数用于更新 state，入参 action
  // 是新的 state 值或函数返回新的 state
  const setState = action => {
    hook.queue.push(action);
    // 下面这部分代码和 render 函数很像，
    // 设置新的 wipRoot 和 nextUnitOfWork
    // 浏览器空闲时即开始重新渲染。
    wipRoot = {
      dom: currentRoot.dom,
      props: currentRoot.props,
      alternate: currentRoot
    };
    nextUnitOfWork = wipRoot;
    deletions = [];
  };

  // 保存本次 hook
  wipFiber.hooks.push(hook);
  hookIndex++;
  return [hook.state, setState];
}
```

