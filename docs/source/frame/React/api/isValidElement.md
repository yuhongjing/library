---
title: isValidElement
---

# isValidElement

`isValidElement`检查传入值是否为React Element。

## 调用

```js
const isElement = isValidElement(value);
```

## 原理

```js
function isValidElement(object) {
  return (
  	typeof object === 'object' &&
    object !== null &&
    object.$$typeof === REACT_ELEMENT_TYPE
  );
}
```

源码分析很简单，校验对象是否存在REACT_ELEMENT_TYPE。
