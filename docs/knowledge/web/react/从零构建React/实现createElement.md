---
title: 实现createElement函数
---

# 实现createElement函数

现在让我们来构建一个自己的React库吧！

```jsx
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);
const container = document.getElementById("root");
ReactDOM.render(element, container);
```

## 重写createElement函数

首先我们需要重写`createElement`函数。

JSX转为JS的`createElement`函数这一步是由`babel`实现的，不在React库的范围，所以这一步我们就先跳过。

```js
// 这就是通过babel转换的element
const element = React.createElement(
  "div",
  { id: "foo" },
  React.createElement("a", null, "bar"),
  React.createElement("b")
);
```

根据上一章节的内容，我们知道元素(`element`)是一个对象，并且有`type`和`props`两个属性。

所以我们要做的事情很简单，仅仅是把这个`createElement`函数变成这种类型的对象。

```js
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children
    }
  };
}
```

我们使用扩展操作符(`spread`)来接受`props`，使用`rest`参数来接受`children`。这种方式的`children`一定是数组类型。

例如：

* `createElement("div")`将会返回：

  ```json
  {
    "type": "div",
    "props": { "children": [] }
  }
  ```

* `createElement("div", null, a)`将会返回：

  ```json
  {
    "type": "div",
    "props": { "children": [a] }
  }
  ```

* `createElement("div", null, a, b)`将会返回：

  ```json
  {
    "type": "div",
    "props": { "children": [a, b] }
  }
  ```

  

`children`数组也可以包含原始值，例如：string、number等。

## 包裹原始值和设置children默认值为空数组

当`children`的子元素不是对象时，我们创建一个特殊的类型(`TEXT_ELEMENT`)来包裹它。

```js
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child => 
        typeof child === "object"
          ? child
          : createTextElement(child)
      )
    }
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: []
    }
  };
}
```

当没有`children`时，React不会创建空数组或包括原始值。我们这样做是因为能简化代码，我们主要是为了实现更简单，而不是为了更高的性能。



## 取名Didact

现在我们的函数名还是用的`React.createElement`。

```js
const element = React.createElement(
  "div",
  { id: "foo" },
  React.createElement("a", null, "bar"),
  React.createElement("b")
);
const container = document.getElementById("root");
ReactDOM.render(element, container);
```

我们已经成功构建了一个自己的`createElement`函数。它可以替换React的`createElement`函数了。

因此我们创建的库就取名为`Didact`吧，听起来像React，并且有教育的意义。

它现在已经有了第一个函数`createElement`了。让我们替换掉React吧。

```js
const element = Didact.createElement(
  "div",
  { id: "foo" },
  Didact.createElement("a", null, "bar"),
  Didact.createElement("b")
);
const container = document.getElementById("root");
ReactDOM.render(element, container);
```

好的，现在已经是引用我们构建的库了。

但是我们如何才能让JSX将源码解析为我们`Didact`库的函数呢？

只需添加一个注释即可。

```js
/** @jsx Didact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);
const container = document.getElementById("root");
ReactDOM.render(element, container);
```

当`babel`看见这个注释后，就将会使用我们定义的函数了。



## 小结

`createElement`函数是通过`babel`解析出来的。

`createElement`函数除去验证相关功能，唯一的目的就是将元素解析为VDOM对象。

本章为了简化代码，处理了children为空和原始值的情况。