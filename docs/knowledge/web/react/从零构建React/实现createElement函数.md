---
title: 实现createElement函数
---

# 实现createElement函数

第一步实现`createElement`函数，把 JSX 转换成 JS。

以下面这个新的渲染为例，`createElement`就是把 JSX 结构转换为元素描述对象。

```jsx
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);
// 等价转换 👇
const element = React.craeteElement(
  "div",
  { id: "foo" },
  React.createElement("a", null, "bar"),
  React.craeteElement("b")
);

const container = document.getElementById("root");
ReactDOM.render(element, container);
```

就像上章节示例那样，`createElement`返回一个包含 type 和 props 的元素对象，描述节点信息。

```js
// 注意：这里 children 始终是数组
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
  }
}

function craeteTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: []
    }
  }
}
```

children 可能包含字符串或者数字这类基础类型值，给这里的值包裹成`TEXT_ELEMENT`特殊类型，方便后面统一处理。

注意：React 并不会包裹字符串这类值，如果没有 children 也不会创建空数组，我们这里之所以这么做，是为了简化代码。（主要目的是学习思路，并非真正做一个实用的框架）

现在我们将自己实现的框架叫做`redact`来区别于`react`。示例 app 如下：

```js
const element = Redact.craeteElement(
  "div",
  { id: "foo" },
  Redact.createElement("a", null, "bar"),
  Redact.createElement("b")
);
const container = document.getElementById("root");
ReactDOM.render(element, container);
```

但我们还是习惯用 JSX 来写组件，这里还可以使用吗？答案是能的，只需要加一行注释即可。

```jsx
/** @jsx Redact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);
const container = document.getElementById("root");
ReactDOM.render(element, container);
```

注意第一行注释`@jsx`告诉 babel 用`Redact.createElement`替换默认的`React.createElement`。或者直接修改`.babelrc`配置文件的`pragma`项，就不用每次都添加注释了。

```json
{
  "presets": [
    [
      "@babel/preset-react",
      {
        "pragma": "Redact.createElement"
      }
    ]
  ]
}
```

