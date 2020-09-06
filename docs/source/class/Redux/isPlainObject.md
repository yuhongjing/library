---
title: isPlainObject
---

# isPlainObject

用于判断对象是否为`对象字面量`或`new Object`创建的无格式对象。即对象的原型为`Object`。

```js
export default function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false

  let proto = obj
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }

  return Object.getPrototypeOf(obj) === proto
}
```

这一段代码的作用如下：

`proto`对象从当前层级开始寻找，直到寻找到原型链的顶端，即`Object`。

`Object.getPrototypeOf(obj)`只寻找父级原型链。



那么会出现以下情况：

* `obj`是无格式对象，它的父级就是`Object`，而`proto`也是`Object`，返回`true`。
* `obj`不是无格式对象，例如函数，那么它的父级就为`Function`，而`proto`为`Object`，返回`false`。



因为无格式对象的原型链层级必定是**1**，来判断对象是否为无格式对象。



> `Object.getPrototypeOf(proto)`是ES6新增的语法。
>
> 之前调用方式为：`proto.__proto__`，现在熟悉了吗？