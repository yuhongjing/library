---
title: 回顾React
---

# 回顾React

如果你很熟悉React，JSX和DOM元素的概念，那么你可以直接跳过本章。

下面的React DEMO只有三行。

* 第一行定义了一个React元素
* 第二行获取了一个DOM节点
* 最后一行是将React元素渲染在容器里。

```jsx
const element = <h1 title="foo">Hello</h1>;
const container = document.getElementById("root");
ReactDOM.render(element, container);
```

**现在让我们移出特定的React代码，用JavaScript来替换它们。**

什么？你说为什么要移出React的代码？因为JS君表示：什么鸟玩意，我咋瞅不明白这是啥东西？



## JSX标签

第一行定义的标签是通过JSX实现的：

`const element = <h1 title="foo">Hello</h1>;`

JS无法解析JSX的语句，所以我们应该用JS能解析的方式替换它。

## Babel

JSX一般是通过Babel这样的工具来转换为JS能识别的代码。

转换的方式通常很简单：

将JSX标签变为`createElement`函数，并传入了3个参数依次是标签名(`tag name`)、标签的属性(`props`)及标签的后代(`children`)。

```jsx
const element = <h1 title="foo">Hello</h1>;

// JSX解析为如下函数
const element = React.createElement(
  "h1",
  { title: "foo" },
  "Hello"
);
```

现在，JSX的标签就变成了JS能解析的Function函数了。

## React.createElement

这个`React.createElement`函数又是个啥？

`React.createElement`除开一些验证相关的功能，唯一的功能就是创建一个对象(VDOM)。

现在我们来看看，`React.craeteElement`函数返回的是个啥？

```js
const element = React.createElement(
  "h1",
  { title: "foo" },
  "Hello"
);

// 函数返回了如下对象（VDOM）
const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "Hello"
  }
};
```

它返回了一个对象，有两个属性type和props。(其实它有更多的[属性](https://github.com/facebook/react/blob/f4cc45ce962adc9f307690e1d5cfa28a288418eb/packages/react/src/ReactElement.js#L111)，但是我们只关注这两个。)

* type：是一个字符串

  表示节点的类型。我们使用[document.createElement](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createElement_)将type作为tagName参数创建真实的DOM节点。它也可以是一个函数，我们会在之后[函数组件](./函数组件.md)章节详细讲到。

* props：是一个对象

  除了children，它的所有key和value都来自于JSX标签的属性。

  ```jsx
  const element = <h1 title="foo" test="我也是标签的属性">Hello</h1>;
  
  // 本例来自于标签的属性为
  props: {
    title: "foo"，
    test: "我也是标签的属性"
  }
  ```

* children：在本例中，它是一个字符串。但是通常来说它是一个包含多个元素的数组。这也就是元素是一棵树的原因。



## 替换render

另一个需要替换React代码的地方是`ReactDOM.render`。

```js
ReactDOM.render(element, container);
```

`render`是React更改DOM的地方，所以我们来实现这个函数。

```jsx
const element = <h1 title="foo">Hello</h1>;

// 已经通过createElement解析出来的对象
// 它需要通过render来渲染成真实的DOM
const element = {
  type: "h1",
  props: {
    title: "foo"，
    children: "Hello"
  }
};
```

::: warning Note

为了避免混淆，我们用element表示React元素，node表示DOM元素。

:::

## 根据VDOM渲染真实DOM

* 在本例中，首先根据element的type创建元素节点h1。

  ```js
  const node = document.createElement(element.type);
  ```

* 然后把element的props指定在此节点上，这儿只有一个title属性。

  ```js
  node["title"] = element.props.title;
  ```

* 然后我们需要创建此节点的子元素children，子元素只有一个字符串，所以创建文本节点。

  ```js
  const text = document.createTextNode("");
  text["nodeValue"] = element.props.children;
  ```

  使用`textNode`代替`innerText`将允许我们以后以同样的方式处理所有元素。

  注意我们是如何设置`nodeValue`的，设置的方式和我们设置`h1`的`title`属性似乎看起来是一样的。其实`nodeValue`也可以看作`props: {nodeValue: "hello"}`

* 最后，将`textNode`放入`h1`元素中，然后将`h1`元素放入`container`容器中。

  ```js
  node.appendChild(text);
  container.appendChild(node);
  ```



## 最终效果

```jsx
// React
const element = <h1 title="foo">Hello</h1>;
const container = document.getElementById("root");
ReactDOM.render(element, container);

// 去掉React代码后
const element = {
  type: "h1",
  props: {
    title: "foo"，
    children: "Hello"
  }
};

const container = document.getElementById("root");

const node = document.createElement(element.type);
node["title"] = element.props.title;

const text = document.createTextNode("");
text["nodeValue"] = element.props.children;

node.appendChild(text);
container.appendChild(node);
```



## 小结

现在，我们已经使用原生的JS代码替换掉了所有的React代码。

替换React的流程大致如下：

* `babel`将所有的React标签元素替换为了JS能识别的`React.createElement`函数
* `React.createElement`返回了一个VDOM对象
* `render`根据VDOM对象渲染出来真实的DOM节点

* 将渲染的真实节点挂载到指定的根节点上