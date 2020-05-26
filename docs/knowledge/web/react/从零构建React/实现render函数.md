---
title: 实现render函数
---

# 实现render函数

现在让我们实现 render 函数，目前只需要添加节点到 DOM，删除和更新操作后面再实现。

```js
function render(element, container) {
  // 创建节点
  const dom =
    element.type === 'TEXT_ELEMENT'
      ? document.createTextNode("")
      : document.createElement(element.type);
  
  // 赋值属性 (props)
  const isProperty = key => key !== "children";
  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => 
       dom[name] = element.props[name]
    );
  
  // 递归遍历子节点
  element.props.children.forEach(child =>
    render(child, dom)
  );
  
  // 插入父节点
  container.appendChild(dom);
}
```
