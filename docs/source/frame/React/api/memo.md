---
title: memo
---

# memo

React的re-render模型：当某个组件因为自己的内部状态发生变化而重渲染时，以它自己为根节点的组件子树上的所有子孙组件默认都会被迫进行重渲染。即使，子树组件上`props`和`state`没有发生任何变化。这种重渲染我们称之为「被迫的，不必要的重渲染」。

而`React.memo()`函数就是用来避免重渲染的场景，此函数可以让你的组件在`props`没有发生变化的情况下跳过重渲染`re-render`。

## 调用

```js
const MemoizedComponent = memo(Component, arePropsEqual?);
```

## 原理

### `React.memo`返回值

Function Component就是普通的JS函数，在JSX中会被转译为React Element。

而`React.memo`返回的什么？从源码可以探究：

```js
function memo(type, compare) {
  const elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type,
    compare: compare === undefined ? null : compare,
  };
  
  return elementType;
}

// 返回的结构如下
{
  $$typeof: Symbol(react.element),
  key: null,
  props: {},
  ref: null,
  type: 'div', // 或者是代表组件的 js 函数（普通function或者ES6 class）
}
```

`$$typeof`属性是react element这种数据结构的标志。所以说，`React.memo()`的返回也是react element。

### `React.memo`如何避免重渲染？

React渲染存在两种处理模式`create`和`update`，memo是针对重渲染治理，因此逻辑在`update`内，下面看看源码分析：

```js
function updateMemoComponent(
	current,
  workInProgress,
  Component,
  nextProps,
  updateLanes,
  renderLanes,
) {
  // fiber节点未创建
  if (current === null) {
    const type = Component.type;
   	if (
      isSimpleFunctionComponent(type) && // memo适用于functon组件
      Component.compare === null && 
      Component.defaultProps === undefined
    ) {
      let resolvedType = type;
      workInProgress.tag = SimpleMemoComponent;
      workInProgress.type = resolvedType;
      return updateSimpleMemoComponent(
      	current,
        workInProgress,
        resolvedType,
        nextProps,
        updateLanes,
        renderLanes,
      );
    }
    const child = createFiberFromTypeAndProps(
    	Component.type,
      null,
      nextProps,
      workInProgress,
      workInProgress.mode,
      renderLanes,
    );
    child.ref = workInProgress.ref;
    child.return = workInProgress;
    workInProgress.child = child;
    return child;
  }
  
  const currentChild = current.child; // memo的child为被缓存的组件
  if (!includesSomeLane(updateLanes, renderLanes)) { // 当前fiber节点中没有更新的
    const prevProps = currentChild.memoziedProps; // 获取组件上次的props属性
    let compare = Component.compare; // 获取更新比较方法
    compare = compare !== null ? compare : shallowEqual; // 没设置，则使用默认的props全属性浅对比方法
    if (compare(prevProps, nextProps) && current.ref === workInProgress.ref) {
      return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes); // 对比成功，跳过re-render
    }
  }
    
  workInProgress.flags |= PerformedWork;
  const newChild = createWorkInProgress(currentChild, nextProps);
  newChild.ref = workInProgress.ref;
  newChild.return = workInProgress;
  workInProgress.child = newChild;
  return newChild;
}
```

### shallowEqual

下面看看React浅比较的源码实现。

```js
function shallowEqual(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }
  
  // 不是对象或对象为null时，浅比较失败
  if (
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null
  ) {
    return false;
  }
  
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  
  // 逐个对比两个对象的key差异
  for (let i = 0; i < keysA.length; i++) {
    if (
      !hasOwnProperty.call(objB, keysA[i]) ||
      !Object.is(objA[keysA[i]], objB[keysA[i]])
    ) {
      return false;
    }
  }
  
  return true;
}
```

