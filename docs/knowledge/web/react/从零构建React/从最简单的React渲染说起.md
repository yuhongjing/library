---
title: 从最简单的React渲染说起
---

# 从最简单的React渲染说起

如果你很熟悉React，JSX和DOM元素的概念，那么你可以直接跳过本章。

下面的三行代码是一个再简单不过的 React 应用：在`root`根节点上渲染一个文本为`Hello`的h1节点。

```jsx
const element = <h1 title="foo">Hello</h1>;
const container = document.getElementById("root");
ReactDOM.render(element, container);
```

第一步的目标就是**用原生 DOM 方式替换 React 代码**。

## JSX

React 在组件渲染时会返回一段类似 html 模板的结构，这个就是 JSX 。

JSX 本质上还是 JS，它是一种语法糖。

JSX 需要`babel`配合`@babel/plugin-transform-react-jsx`插件转换成`React.createElement`函数。

函数入参如下：

```js
React.createElement(
  type,
  [props],
  [...children]
)
```

例如上面的例子中，`<h1 title="foo">Hello</h1>`，转换后的结果为：

```js
const element = React.createElement(
  'h1',
  { title: 'foo' },
  'Hello'
);
```

`React.createElement`会返回一个包含元素（element）信息的对象，即：

```js
const element = {
  type: "h1",
  props: {
    title: "foo",
    // createElement 第三个及之后的参数移到 props.children
    children: "Hello"
  }
};
```

React 官方还实现了很多额外属性，为了简单描述，本文未涉及。

这个对象描述了 React 创建一个节点（node）所需要的信息

* `type` DOM节点的名字，比如这里是`h1`，也可以是函数组件，后面章节会讲到
* `props` 包含所有元素的属性（比如title）和特殊属性children，children可以包含其它元素，从根到叶就能构成一颗完整的树，也就是描述了整个 UI 界面

**为了避免含义不清，"元素"特指"React elements"，"节点"特指"DOM elements"**。

## ReactDOM.render

下面替换掉`ReactDOM.render`调用，React 通过此函数将元素更新到 DOM。

```js
ReactDOM.render(element, container);
```

`render`是React更改DOM的地方，所以我们来实现这个函数。

```jsx
const element = {
  type: "h1",
  props: {
    title: "foo",
    children: ["Hello"],
  },
};

const container = document.getElementById("root");

const node = document.createElement(element.type);
node["title"] = element.props.title;

const text = document.createTextNode("");
text["nodeValue"] = element.props.children;

node.appendChild(text);
container.appendChild(node);
```

对比元素对象。

1. 用`element.type`创建节点，再把非 children 属性（本例是title）赋值给节点。
2. 创建 children 节点，由于 children 是字符串，故创建`textNode`节点，并把字符串赋值给`nodeValue`，这里之所以用`createTextNode`而不是`innerText`，是为了方便之后统一处理。
3. 再把 children 节点 text 插到元素节点的子节点上。
4. 最后把元素节点插到根节点即完成了这次 React 替换。

像上面代码`element`这样 JSX 转成的描述 UI 界面的对象就是所谓的**虚拟DOM**。

而上面代码`node`即 **真实DOM**。

`render`渲染就是把虚拟DOM转换为真实DOM的过程。