---
title: 实现render函数
---

# 实现render函数

现在让我们实现render函数。

```js
function render(element, container) {
  // TODO create dom nodes
}

const Didact = {
  createElement,
  render
};

Didact.render(element, container);
```

## 重写render函数

`render`函数的作用是，将VDOM渲染为真实DOM并挂载到指定的容器上。

目前，我们先只关注向DOM添加元素的操作，之后再研究删除和更新操作。

### 渲染真实节点并挂载

根据之前的章节，我们知道首先根据type创建DOM节点，然后把这个DOM挂载到指定的容器节点上。

```js
function render (element, container) {
  const dom = document.createElement(element.type);
  
  container.appendChild(dom);
}
```

元素的子节点渲染也是一样的原理，因为元素是一棵树，所以使用递归的方式来遍历。

```js
function render(element, container) {
  const dom = document.createElement(element.type);
  
  // 子节点递归
  element.props.children.forEach(child =>
    render(child, dom);
  );
  
  container.appendChild(dom);
}
```

现在所有的VDOM都已经渲染为了真实的DOM，并挂载到了它们相应的DOM下。

### 处理文本节点

在前一章节，为了简单实现，我们对文本元素做了特殊的处理。

所以碰见文本元素时，我们应该创建一个`TEXT_ELEMENT`文本节点，而不是一个普通的DOM节点。

```js
function render(element, container) {
  // 处理文本节点
  const dom = 
    element.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);
  
  element.props.children.forEach(child =>
    render(child, dom);
  );
  
  container.appendChild(dom);
}
```

现在所有的文本都也渲染出来了。

```html
<!-- 上一步只渲染出来了真实节点 -->
<div>
  <span></span>
</div>

<!-- 现在渲染出来了所有的文本 -->
<div>
  <span>Hello 我是文本哟</span>
</div>
```



### 挂载属性到真实DOM上

最后一件事情就是，我们需要把`props`属性挂载到对应的节点上。

```js
function render(element, container) {
  const dom = 
    element.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);
  
  // 排除children属性
  const isProperty = key => key !== "children";
  // 挂载到dom上
  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = element.props[name];
    });
  
  element.props.children.forEach(child =>
    render(child, dom);
  );
  
  container.appendChild(dom);
}
```

现在真实DOM上有属性了。

```html
<div class="container">
  <span class="textColor" data-index="1">Hello 我是文本哟</span>
</div>
```

我们已经实现了完整的`render`函数了。

## 小结

只考虑渲染的`render`函数，大体流程如下：

* 根据`type`渲染真实节点，并挂载到指定容器上
* 子元素递归`render`
* 挂载`props`属性到真实的DOM上

## 前两章代码总结

到现在我们已经完整的实现了JSX挂载到DOM上的所有功能。

前两章完整代码如下：

```jsx
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object"
          ? child
          : createTextElement(child)
      ),
    },
  }
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: []
    }
  }
}

function render(element, container) {
  const dom =
    element.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);

  const isProperty = key => key !== "children";
  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = element.props[name];
    });

  element.props.children.forEach(child =>
    render(child, dom)
  )

  container.appendChild(dom);
}

const Didact = {
  createElement,
  render
}

/** @jsx Didact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
)
const container = document.getElementById("root");
Didact.render(element, container);
```