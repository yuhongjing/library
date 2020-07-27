---
title: Immer
---

# Immer

Immer是[Mobx](https://github.com/mobxjs/mobx)的作者[Mweststrate](https://github.com/mweststrate)研发的一个`immutable`库。

其核心实现是利用了ES6的proxy，几乎以最小的成本实现了JS的不可变结构。

## 安装

```npm
npm i --save immer
```

## Immer相关概念

Immer涉及概念不多，在此先罗列出来。

* currentState 被操作对象的原始状态。
* draftState 根据currentState生成的草稿状态，它是currentState的代理，对draftState所做的任何修改都将被记录并用于生成nextState。在此过程中，currentState将不受影响。
* nextState 根据draft生成的最终状态。
* produce 用来生成nextState或producer的函数。
* producer 通过produce生成，用来生产nextState，每次执行相同的操作。
* recipe 用来操作draftState的函数。

## 常用API介绍

首先引入Immer。

```js
// 以下两种引入的produce是相同的
import produce from 'immer';
import {produce} from 'immer';
```

### 第一种使用方式

语法：

```js
produce(
  currentState,
  recipe: (draftState) => void | draftState,
  ?PatchListener
) : nextState
```

例子1：

```js
let nextState = produce(currentState, (draft) => {

});

currentState === nextState; // true
```

例子2：

```js
let currentState = {
  a: [],
  p: {
    x: 1
  }
};

let nextState = produce(currentState, (draft) => {
  draft.a.push(2);
});

currentState.a === nextState.a; // false
currentState.p === nextState.p; // true
```

由此可见，对draftState的修改都会反应到nextState，而Immer使用的结构是**共享**的，nextState在结构上又与currentState共享未修改的部分，共享效果如图。

![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/Immer-tree.gif)

#### 自动冻结功能

Immer在内部做了一件很巧妙的事情，通过produce生成的nextState是被冻结(freeze)的，(Immer内部使用`Object.freeze`方法，只冻结nextState跟currentState相比修改的部分)，当直接修改nextState时，将会报错。这使得nextState成为了真正的不可变数据。

例子：

```js
let nextState = produce(currentState, (draft) => {
  draft.p.x.push(2);
});

currentState === nextState; // true,仍然相等
```

### 第二种使用方式

利用高阶函数，提前生成一个生产者producer。

语法：

```js
produce(
  recipe: (draftState) => void | draftState,
  ?PatchListener
)(currentState) : nextState
```

例子：

```js
let producer = produce((draft) => {
  draft.x = 2;
});
let nextState = producer(currentState);
```

recipe是否有返回值，nextState的生成过程时不同的：

* 无返回值，nextState根据recipe函数内的draftState生成的。
* 有返回值，nextState根据recipe函数的返回值生成的。

```js
// 此时，nextState不是通过draftState生成的，而是通过recipe的返回值生成的。
let nextState = produce(
  currentState,
  (draftState) => {
    return {
      x: 2
    }
  }
);
```

recipe中的this

recipe函数内部的`this`指向draftState，也就是修改`this`与修改recipe的参数draftState，效果是一样的。

**注意：此处的recipe函数不能是箭头函数，如果是箭头函数，`this`就无法指向draftState了。**

```js
produce(currentState, function(draft) {
  // 此处，this指向draftState
  draft === this; // true
});
```

## 解决问题

在React框架中，`setState`支持函数式写法：

```js
this.setState(state => ({
  ...state,
  isShow: true
}));
```

上述情况，配合解构语法，写起来还算优雅。那么数据稍微复杂一点呢？我们就得忍受"糟糕的Immutable了。

```js
// 比如更改对象数组中其中一个对象的键值时

// 第一种方法，直接调用setState函数
const {members} = this.state;
this.setState({
  members: [
    {
      ...members[0],
      age: members[0].age + 1,
    },
    ...members.slice(1)
  ]
});

// 第二种，通过setState的函数
this.setState(state => {
  const {members} = state;
  return {
    members: [
      {
        ...members[0],
        age: members[0].age + 1,
      },
      ...members.slice(1)
    ]
  }
});
  
```

然后有了Immer后，一切都不一样了：

```js
this.setState(produce(draft => {
  draft.members[0].age++;
});
```

### 方便的柯里化

Immer支持柯里化，所以我们可以直接把一次性改变两个参数。

```js
const oldObj = {value: 1};
const newObj = produce(oldObj, draft => (draft.value = 2));
```

这就是Immer的哲学：**Create the next immutable state by mutating the current one.**

## 优化Redux

在正式优化之前，我们先看一下produce[第二种使用方式](./Immer.html#第二种使用方式)的拓展用法：

例子：

```js
let obj = {};

let producer = produce((draft, arg) => {
  obj === arg; // true
});
let nextState = producer(currentState, obj);
```

相比produce第二种使用方式的例子，多定义了一个`obj`对象，并将其作为producer方法的第2个参数传了进去；可以看到，produce内的recipe回调函数的第2个参数与`obj`对象指向的是同一块内存。

现在让我们看看produce这种拓展用法，在Redux能发挥怎样的功效？

### 普通reducer怎么解决上面的React需求

```js
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_AGE':
      const { members } = state;
      return {
        ...state,
        members: [
          {
            ...members[0],
            age: members[0].age + 1,
          },
          ...members.slice(1),
        ]
      }
    default:
      return state
  }
};
```

### 引入immer后，reducer可以这样写

```js
const reducer = (state, action) => produce(state, draft => {
  switch (action.type) {
    case 'ADD_AGE':
      draft.members[0].age++;
  }
});
```

可以看见，通过produce，代码已经精简了非常多。

不过，我们还可以利用produce能够先制造出producer的特点，代码还可以更优雅：

```js
const reducer = produce((draft, action) => {
  switch (action.type) {
    case 'ADD_AGE':
      draft.members[0].age++;
  }
});
```

至此，Immer优化reducer的方法已经完毕。

## 相关文档

* [Immer 官方文档](https://immerjs.github.io/immer/docs/introduction)
* [Immer github](https://github.com/immerjs/immer)

