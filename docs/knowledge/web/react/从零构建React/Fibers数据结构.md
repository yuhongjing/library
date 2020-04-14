---
title: Fibers数据结构
---

# Fibers数据结构

为了方便描述渲染树和单元任务，React 设计了一种数据结构"fiber 树"。每个元素都是一个fiber，每个 fiber 就是一个单元任务。

假如我们渲染如下这样一棵树：

```js
Redact.render(
  <div>
    <h1>
       <p />
       <a />
    </h1>
  </div>,
  container
)
```

用 Fiber 树来描述就是：

![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20200413184111.png)

在`render`函数我们创建**根 fiber**，再把它设为`nextUnitOfWork`。在 workLoop 函数把`nextUnitOfWork`给`performUnitOfWork`执行，主要包含以下三步：

1. 把元素添加到 DOM
2. 为元素的后代创建 fiber 节点
3. 选择下一个单元任务，并返回

为了完成这些目标需要设计的数据结构方便的找到下一个任务单元。**所以每个 fiber 直接链接它的第一个子节点（child），子节点链接它的兄弟节点（sibling），兄弟节点链接到父节点（parent）**。

示意图如下（注意不同节点之间的高亮箭头）：

![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20200103143611.png)

当我们完成了一个 fiber 的单元任务，如果他有一个`子节点/child`，则这个节点作为`nextUnitOfWork`。

如下图所示，当完成`div`单元任务之后，下一个单元任务就是`h1`。

![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20200103144905.png)

如果一个 fiber 没有`child`，我们用`兄弟节点/sibling`作为下一个任务单元。

如下图所示，`p`节点没有`child`而有`sibling`，所以下一个任务单元是`a`节点。

![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20200103145713.png)

如果一个 fiber 既没有`child`也没有`sibling`，则找到父节点的兄弟节点。

如下图所示的`a`和`h2`。

当`fiber`不存在`child fiber`和`sibling fiber`时，我们会寻找父级的`sibling fiber`，如果父级也没有`sibling fiber`，会依次向上寻找，直到`root fiber`。这时就说明整棵`fiber`树渲染完毕。

举例：如下图所示，`a`元素没有子元素和未渲染的兄弟节点了，此时就需要向上寻找父元素的兄弟节点`h2`，所以下一个工作单元就是`h2`。

![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20200103151837.png)

如果父节点没有兄弟节点，则继续往上找，直到找到一个兄弟节点或者到达 fiber 根节点。

到达根节点即意味本次`render`任务全部完成。

把这个思路用代码表达如下：

```js
// 之前 render 的逻辑挪到这个函数
function createDom(fiber) {
  const dom =
    fiber.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(fiber.type);
  
  const isProperty = key => key !== "children";
  Object.keys(fiber.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = fiber.props[name];
    });
  
  return dom;
}

function render(element, container) {
  // 创建根 fiber，设为下一次的单元任务
  nextUnitOfWork = {
    dom: container,
    props: {
      children: [element]
    }
  };
}

let nextUnitOfWork = null;
function workLoop(deadline) {
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    shouldYield = deadline.timeRemaining() < 1;
  }
  requestIdleCallback(workLoop);
}
// 一旦浏览器空闲，就触发执行单元任务
requestIdleCallback(workLoop);

function performUnitOfWork(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }
  
  // 子节点 DOM 插到父节点之后
  if (fiber.parent) {
    fiber.parent.dom.appendChild(fiber.dom);
  }
  
  // 每个子元素创建新的 fiber
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
    // 根据上面的图示，父节点只链接第一个子节点
    if (index === 0) {
      fiber.child = newFiber;
    } else {
      // 兄弟点链接弟节点
      prevSibling.sibling = newFiber;
    }
    
    prevSibling = newFiber;
    index++;
  }
  // 返回下一个任务单元 (fiber)
  // 有子节点直接返回
  if (fiber.child) {
    return fiber.child;
  }
  // 没有子节点则找兄弟节点，兄弟节点也没有找父节点的兄弟节点
  // 循环遍历直至找到为止
  let nextFiber = fiber;
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling;
    }
    nextFiber = nextFiber.parent;
  }
}
```