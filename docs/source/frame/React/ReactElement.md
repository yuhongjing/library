---
title: ReactElement
---

# ReactElement

> 文件地址：react/src/ReactElement.js

处理React虚拟DOM的创建/复制/校验等逻辑。

## createElement/jsx

用于创建React Element，但createElement函数本身只是解析标签属性。

jsx和createElement是完全一致的。

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

## ReactElement

React Element组件。

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

## cloneElement

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

## createFactory

创建React Element元素，已经被createElement替代了。

```js
function createFactory(type) {
  const factory = createElement.bind(null, type);
  factory.type = type;
  return factory;
}
```

## isValidElement

校验是否为React Element并且防止XSS。

```js
function isValidElement(object) {
  return (
  	typeof object === 'object' &&
    object !== null &&
    object.$$typeof === REACT_ELEMENT_TYPE
  );
}
```

