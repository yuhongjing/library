---
title: createElement
---

# createElement

`createElement`可以创建一个React Element，它可以作为JSX的替代。

## 调用

```js
const element = createElement(type, props, ...children);
```

## 原理

下面我们从源码分析，createElement做了什么操作？

```js
/**
 * @param {*} type 标签名
 * @param {Object} config 标签属性
 * @param {string | ReactElement | array} children 子DOM
 */
function createElement(type, config, children) {
  let propName;
  
  const props = {}; // 提取内建标签属性，key、ref、__self、__source
  
  let key = null; // 组件索引值，用于重渲染标识
  let ref = null; // DOM引用
  let self = null;
  let source = null;
  
  // 处理标签属性
  if (config != null) {
    // 校验标签是否存在ref属性并记录ref值
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    
    // 过滤标签是否存在key属性并将key值转为字符串记录下来
    if (hasValidKey(config)) {
      key = '' + config.key
    }
    
    // self和source如果没有默认值，则赋值为null
    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config__source;
    
    // 剩余标签属性放在props中
     for (propName in config) {
       // 提取标签自有属性并过滤内建标签属性
       if (
         hasOwnProperty.call(config, propName) &&
         !RESERVED_PROPS.hasOwnProperty(propName)
       ) {
         props[propName] = config[propName];
       }
     }
  }
  
  // 处理children
  const childrenLength = arguments.length - 2;
  // 传输了children参数
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    // 传送了多个children参数，createElement支持如下调用方式，会合并为数组
    // createElement(type, config, children, children, children);
    const childArray = Array(childrenLength);
    for (let i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2]; // children下标从2开始
    }
    props.children = childArray;
  }
  
  // 处理默认props
  // Component.defaultProps = { xxx: xxx }
  if (type && type.defaultProps) {
    const defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  
  return ReactElement(
    type,
    key,
    ref,
    self,
    source,
    ReactCurrentOwner.current,
    props,
  );
}
```

从源码看，`createElement`只做了四件事：

1. 处理标签特殊属性，`ref`和`key`。
2. 处理`children`，支持多`children`传输方式。
3. 处理`defaultProps`。
4. 调用`ReactElement`。

`createElement`针对内建属性和调用方式做了一些处理，下面看看React Element返回了什么？

### ReactElement

```js
const ReactElement = function(type, key, ref, self, source, owner, props) {
  const element = {
    $$typeof: REACT_ELEMENT_TYPE, // React Element标识
    
    type: type,
    key: key,
    ref: ref,
    props: props,
    
    _owner: owner,
  };
  
  return element;
};
```

这里最重要的操作是赋值了`$$typeof`，这个标识除了可以识别React Element，还可以预防XSS攻击。

因为服务端传输的JSON格式，不支持Symbol类型，从而无法被识别为React元素。
