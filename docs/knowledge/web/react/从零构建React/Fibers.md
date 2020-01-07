---
title: Fibers
---

# Fibers

为了组织工作单元，我们需要构建一种数据结构：`fiber tree`。

我们将为每一个元素分配一个`fiber`，一个`fiber`就是一个工作单元。	

## 举个例子

假设我们的渲染树为如下：

```js
Didact.render(
  <div>
    <h1>
      <p />
      <a />
    </h1>
  </div>,
  container
);
```

* 首先我们会将`root fiber`(根元素)设置为`nextUnitOfWork`([还记得上一章的内容吗?我们需要手动设置第一个工作单元](./ConcurrentMode.md#实现并发模式))。

* 剩下的工作都在`performUnitOfWork`函数里处理。

  `performUnitOfWork`函数主要做三件事情：

  * 添加元素到DOM中([之前的render只有挂载DOM这一步](./实现render.md#渲染真实节点并挂载))
  * 给该元素的所有`children`(子元素)添加`fibers`
  * 设置下一个工作单元

现在整个`fibers`树如下图所示：

![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20200103143611.png)

这种数据结构的好处在于可以很方便的找到下一个工作单元。

每一根`fiber`都链接着它的`child`(子元素)，`sibling`(兄弟元素)和`parent`(父元素)。

## 渲染流程

当一个工作单元完成后，会按照以下流程进行渲染。

* 查看是否存在子元素
* 查看是否存在兄弟元素
* 查看是否存在父元素

### 首先渲染子元素

当我们完成一个`fiber`后，如果它存在`child fiber`，那么`child fiber`将是`nextUnitOfWork`。

举例：如下图所示，当`div`元素渲染完成后，发现其存在子元素`h1`，那么下一个工作单元为`h1`。

![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20200103144905.png)

### 然后渲染兄弟元素

当`fiber`不存在`child fiber`时且存在`sibling fiber`时，我们会将`sibling fiber`作为下一个`nextUnitOfWork`。

举例：如下图所示，`p`元素没有子元素，但有一个兄弟元素`a`，所以下一个工作单元为`a`。

![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20200103145713.png)

### 渲染『叔叔』元素

当`fiber`不存在`child fiber`和`sibling fiber`时，我们会寻找父级的`sibling fiber`，如果父级也没有`sibling fiber`，会依次向上寻找，直到`root fiber`。这时就说明整棵`fiber`树渲染完毕。

举例：如下图所示，`a`元素没有子元素和未渲染的兄弟节点了，此时就需要向上寻找父元素的兄弟节点`h2`，所以下一个工作单元就是`h2`。

![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20200103151837.png)

## 代码实现

现在我们已经清楚了，如何通过`fiber`来组织我们工作单位的原理和流程。

很明显，这是很常见的深度优先遍历树的模式。

现在让我们通过代码来实现这些功能吧。

### 清空render函数

首先让我们清空render函数的所有代码，上个章节已经解释了，之前的渲染方式会存在阻塞进程的问题，现在让我们使用`fiber`来重构整个渲染流程。

```js
function render(element, container) {
//  const dom =
//    element.type == "TEXT_ELEMENT"
//      ? document.createTextNode("")
//      : document.createElement(element.type);

//  const isProperty = key => key !== "children";
//  Object.keys(element.props)
//    .filter(isProperty)
//    .forEach(name => {
//      dom[name] = element.props[name];
//    });

//  element.props.children.forEach(child =>
//    render(child, dom)
//  );

//  container.appendChild(dom);
}
```

### 独立创建DOM函数

创建DOM的功能是在render函数中实现的，现在我们已经删除了render的所有代码，这个功能我们把它独立出来了。

```js
function render(element, container) {
//  const dom =
//    element.type == "TEXT_ELEMENT"
//      ? document.createTextNode("")
//      : document.createElement(element.type);
}

function createDom(fiber) {
  
}
```

### 设置初始工作单元

上一章说明了，我们需要手动设置第一个工作单元，也就是根节点。

所以，我们在render函数中，设置根节点为第一个工作单元。

```js
function render(element, container) {
  nextUnitOfWork = {
    dom: container,
    props: {
      children: [element]
    }
  };
}

let nextUnitOfWork = null;
```

### 循环工作单元

当浏览器空闲的时候，会调用我们的`workLoop`函数。

我们让浏览器在空闲的时候循环执行工作单元。

```js
// 我负责循环调度工作单元 我是调度官
function workLoop(deadline) {
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    // 这里就是循环执行工作单元的函数
    nextUnitOfWork = performUnitOfWork(
      nextUnitOfWork
    );
    shouldYield = deadline.timeRemaining() < 1;
  }
  requestIdleCallback(workLoop);
}

// 我才是真正处理渲染DOM的函数 我才是苦力
function performUnitOfWork(fiber) {
  // TODO 添加DOM节点
  // TODO 给子元素添加新的fibers
  // TODO 返回下一个工作单元
}
```

### 实现`performUnitOfWork`函数

它主要有如下三个功能：

* 根据当前`fiber`添加DOM节点
* 给当前`fiber`的所有子元素添加`fiber`
* 返回下一个工作单元

#### 根据当前`fiber`添加DOM

这里的`createDom`就是我们从render中独立出来的函数。

```js
function performUnitOfWork(fiber) {
  if (!fiber.dom) {
    // 我们在fiber.dom属性中获取fiber的节点类型
    fiber.dom = createDom(fiber);
  }
  
  if (fiber.parent) {
    // 挂载DOM必须通过父元素来调用appendChild API插入
    fiber.parent.dom.appendChild(fiber.dom);
  }
  
  // TODO create new fibers
  // TODO return next unit of work
}
```

#### 给当前fiber的所有子节点，创建fiber

循环当前fiber的子元素，并给每一个子元素添加fiber。

```js
function performUnitOfWork(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }
  
  if (fiber.parent) {
    fiber.parent.dom.appendChild(fiber.dom);
  }
  
  // 获取当前fiber的子元素
  const elements = fiber.props.children;
  let index = 0;
  let prevSibling = null;
  
  while (index < elements.length) {
    const element = elements[index];
    // 给每个子节点添加fiber
    const newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null
    };
  }
  
  // TODO return next unit of work
}
```

#### 子元素fiber挂载到整棵fibers树上

将所有子元素的fiber添加在fibers树上，按照子元素是否为第一个位置来判断是`child fiber`还是`sibling fiber`。

```js
function performUnitOfWork(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }
  
  if (fiber.parent) {
    fiber.parent.dom.appendChild(fiber.dom);
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
    
    // 如果是第一个子元素，就设置成child fiber
    if (index === 0) {
     fiber.child = newFiber; 
    } else {
      // 否则设置为sibling fiber
      prevSibling.sibling = newFiber;
    }

    prevSibling = newFiber;
    index++;
  }
 
  // TODO return next unit of work
}
```

#### 返回下一个工作单元

最后，我们需要寻找下一个工作单元，我们需要依次检查子元素，兄弟元素和叔叔元素。

```js
function performUnitOfWork(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }
  
  if (fiber.parent) {
    fiber.parent.dom.appendChild(fiber.dom);
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
 
  // 首先检查子元素
  if (fiber.child) {
    return fiber.child;
  }
  let nextFiber = fiber;
  while (nextFiber) {
    // 然后检查兄弟元素
    if (nextFiber.sibling) {
      return nextFiber.sibling;
    }
    // 最后检查叔叔元素
    nextFiber = nextFiber.parent;
  }
}
```

## `performUnitOfWork`最终实现

```js
function performUnitOfWork(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }
  
  if (fiber.parent) {
    fiber.parent.dom.appendChild(fiber.dom);
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

## 小结

本章介绍了一个新的数据结构`fiber`。

我们通过`fiber`来组织了工作单元的工作流程。