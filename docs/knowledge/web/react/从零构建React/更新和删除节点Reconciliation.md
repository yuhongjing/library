---
title: 更新和删除节点/Reconciliation
---

# 更新和删除节点 / Reconciliation

目前我们只添加节点到 DOM，还没考虑更新和删除节点的情况。要处理这2种情况，需要对比上次渲染的 fiber 和当前渲染的 fiber 的差异，根据差异决定是更新还是删除节点。

React把这个过程叫`Reconciliation`。

因此我们需要保存上一次渲染之后的 fiber 树，我们把这棵树叫`currentRoot`。同时，给每个 fiber 节点添加`alternate`属性，指向上一次渲染的 fiber。

代码较多，建议按`render ⟶ workLoop ⟶ performUnitOfWork ⟶ reconcileChildren ⟶ workLoop ⟶ commitRoot ⟶ commitWork ⟶ updateDom`顺序阅读。

```js
function createDom(fiber) {
  const dom =
    fiber.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(fiber.type);
  
  updateDom(dom, {}, fiber.props);
  
  return dom;
}

const isEvent = key => key.startsWith("on");
const isProperty = key => key !== "children" && !isEvent(key);
const isNew = (prev, next) => key => prev[key] !== next[key];
const isGone = (prev, next) => key => !(key in next);

// 新增函数，更新 DOM 节点属性
function updateDom(dom, prevProps = {}, nextProps = {}) {
  // 以 "on" 开头的属性作为事件要特别处理
  // 移除旧的或者变化了的事件处理函数
  Object.keys(prevProps)
    .filter(isEvent)
    .filter(key => !(key in nextProps) || isNew(prevProps, nextProps)(key))
    .forEach(name => {
      const eventType = name.toLowerCase().substring(2);
      dom.removeEventListener(eventType, prevProps[name]);
    });
  
  //  移除旧的属性
  Object.keys(prevProps)
    .filter(isProperty)
    .filter(isGone(prevProps, nextProps))
    .forEach(name => {
      dom[name] = "";
    });
  
  // 添加或更新属性
  Object.keys(nextProps)
    .filter(isProperty)
    .filter(isNew(prevProps, nextProps))
    .forEach(name => {
      // React 根据 style 内联样式是驼峰命名的对象
      // 根据规范给 style 每个属性单独赋值
      if (name === "style") {
        Object.entries(nextProps[name]).forEach(([key, value]) => {
          dom.style[key] = value;
        });
      } else {
        dom[name] = nextProps[name];
      }
    });
  
  // 添加新的事件处理函数
  Object.keys(nextProps)
    .filter(isEvent)
    .filter(isNew(prevProps, nextProps))
    .forEach(name => {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, nextProps[name]);
    });
}

function commitRoot() {
  deletions.forEach(commitWork);
  commitWork(wipRoot.child);
  currentRoot = wipRoot;
  wipRoot = null;
}

function commitWork(fiber) {
  if (!fiber) {
    return;
  }
  const domParent = fiber.parent.dom;
  if (fiber.effectTag === "PLACEMENT" && fiber.dom != null) {
    domParent.appendChild(fiber.dom);
  } else if (fiber.effectTag === "UPDATE" && fiber.dom != null) {
    updateDom(fiber.dom, fiber.alternate.props, fiber.props);
  } else if (fiber.effectTag === "DELETION") {
    domParent.removeChild(fiber.dom);
  }
  commitWork(fiber.child);
  commitWork(fiber.sibling);
}

function render(element, container) {
  wipRoot = {
    dom: container,
    props: {
      children: [element]
    },
    alternate: currentRoot
  };
  deletions = [];
  nextUnitOfWork = wipRoot;
}

let nextUnitOfWork = null;
let currentRoot = null;
let wipRoot = null;
let deletions = null;

function workLoop(deadline) {
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    shouldYield = deadline.timeRemaining() < 1;
  }
  
  if (!nextUnitOfWork && wipRoot) {
    commitRoot();
  }
  
  requestIdleCallback(workLoop);
}

requestIdleCallback(workLoop);

function performUnitOfWork(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }
  
  const elements = fiber.props.children;
  // 原本添加 fiber 的逻辑挪到 reconcileChildren 函数
  reconcileChildren(fiber, elements);
  
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

// 新增函数
function reconcileChildren(wipFiber, elements) {
  let index = 0;
  // 上次渲染完成之后的 fiber 节点
  let oldFiber = wipFiber.alternate && wipFiber.alternate.child;
  let prevSibling = null;
  
  // 扁平化 props.children, 处理函数组件的 children
  elements = elements.flat();
  
  while (index < elements.length || oldFiber != null) {
    // 本次需要渲染的子元素
    const element = elements[index];
    let newFiber = null;
    
    // 比较当前和上一次渲染的 type，即 DOM tag 'div'
    // 暂不考虑自定义组件
    const sameType = oldFiber && element && element.type === oldFiber.type;
    
    // 同类型节点，只需更新节点 props 即可
    if (sameType) {
      newFiber = {
        type: oldFiber.type,
        props: element.props,
        dom: oldFiber.dom, // 复用旧节点的 DOM
        parent: wipFiber,
        alternate: oldFiber,
        effectTag: "UPDATE" // 新增属性，在提交/commit 阶段使用
      };
    }
    // 不同类型节点且存在新的元素时，创建新的 DOM 节点
    if (element && !sameType) {
      newFiber = {
        type: element.type,
        props: element.props,
        dom: null,
        parent: wipFiber,
        alternate: null,
        effectTag: "PLACEMENT" // PLACEMENT 表示需要添加新的节点
      };
    }
    // 不同类型节点，且存在旧的 fiber 节点时
    // 需要移除该节点
    if (oldFiber && !sameType) {
      oldFiber.effectTag = "DELETION";
      // 当最后提交 fiber 树到 DOM 时，我们是从 wipRoot 开始的
      // 此时没有上一次的 fiber，所以这里用一个数组来跟踪需要删除的节点
      deletions.push(oldFiber);
    }
    
    if (oldFiber) {
      // 同步更新下一个旧 fiber 节点
      oldFiber = oldFiber.sibling;
    }
    
    if (index === 0) {
      wipFiber.child = newFiber;
    } else {
      prevSibling.sibling = newFiber;
    }
    
    prevSibling = newFiber;
    index++;
  }
}
```

注意：这个过程中 React 还用`key`来检测数组元素变化位置的情况，避免重复渲染以提高性能。

简化起见，本文未实现。