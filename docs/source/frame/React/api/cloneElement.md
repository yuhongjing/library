---
title: cloneElement
---

# cloneElement

`cloneElement`可以基于已有的React Element创建一个新的React Element。

## 调用

```js
const cloneElement = cloneElement(element, props, ...children);
```

## 原理

```js
function cloneElement(element, config, children) {
  let propName;
  
  // 原始props拷贝
  const props = Object.assign({}, element.props);
  
  let key = element.key;
  let ref = element.ref;
  
  // 
  const self = element._self;
  const source = element._source;
  let owner = element._owner;
  
  // 处理标签属性
  if (config != null) {
    // 校验标签是否存在ref属性并记录ref值
    if (hasValidRef(config)) {
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    
    // 校验标签是否存在key属性并记录key值
    if (hasValidKey(config)) {
      key = '' + config.key;
    }
    
    // 默认props拷贝
    let defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    // 标签属性复制
    for (propName in config) {
      if (
      	hasOwnProperty.call(config, propName) &&
        !RESERVED_PROPS.hasOwnProperty(propName)
      ) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }
  
  // 子节点复制
  const childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    const childrenArray = Array(childrenLength);
    for (let i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }
  
  return ReactElement(element.type, key, ref, self, source, owner, props);
}
```

