---
title: ReactSymbols
---

# ReactSymbols

> 文件地址：shared/ReactSymbols.js

处理React元素类型的声明。

React元素类型标识文件，每个虚拟DOM都会存在`$$typeof`属性。

 ```jsx
 // 普通的节点
 <span bgColor="#ff2534">Hello World!</span>
 
 // 对应虚拟DOM属性如下：
 {
   type: 'span',
   props: {
     bgColor: '#ff2534',
     children: 'Hello World!',
   },
   key: null,
   ref: null,
   $$typeof: Symbol.for('react.element'), // 这里！
 }
 ```

## 源码解析

### React元素类型

```js
export let REACT_ELEMENT_TYPE = 0xeac7; // 元素类型，标识这是一个react元素
export let REACT_PORTAL_TYPE = 0xeaca; // 插槽类型，标识可以在父元素任意位置插入一个子组件
export let REACT_FRAGMENT_TYPE = 0xeacb; // 碎片类型，可以创建不根标签的组件
export let REACT_STRICT_MODE_TYPE = 0xeacc;
export let REACT_PROFILER_TYPE = 0xead2;
export let REACT_PROVIDER_TYPE = 0xeacd;
export let REACT_CONTEXT_TYPE = 0xeace;
export let REACT_FORWARD_REF_TYPE = 0xead0;
export let REACT_SUSPENSE_TYPE = 0xead1;
export let REACT_SUSPENSE_LIST_TYPE = 0xead8;
export let REACT_MEMO_TYPE = 0xead3;
export let REACT_LAZY_TYPE = 0xead4; // 懒加载类型，编写异步组件
export let REACT_BLOCK_TYPE = 0xead9;
export let REACT_SERVER_BLOCK_TYPE = 0xeada;
export let REACT_FUNDAMENTAL_TYPE = 0xead5;
export let REACT_SCOPE_TYPE = 0xead7;
export let REACT_OPAQUE_ID_TYPE = 0xeae0;
export let REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
export let REACT_OFFSCREEN_TYPE = 0xeae2;
export let REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

// 支持symbol则优先使用symbol
if (typeof Symbol === 'function' && Symbol.for) {
  const symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}
```

### 迭代器

```js
// false | Symbol.iterator
const MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator; 
const FAUX_ITERATOR_SYMBOL = '@@iterator';

export function getIteratorFn(maybeIterable: ?any): ?() => ?Iterator<*> {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }
  // 拿到当前入参的迭代器
  const maybeIterator =
    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
    maybeIterable[FAUX_ITERATOR_SYMBOL];
	// 返回迭代器
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}
```

## 防止XSS攻击

React官方针对XSS攻击做了一些默认的防范。

1. 通过转义`'"&<>`五个字符，将恶意代码渲染成字符串而不是DOM标签。
2. 校验**合规元素**，服务器存储JSON类型，不支持Symbol类型，因此React渲染服务端返回的HTML数据时，会校验`$$typeof`属性，如果不符合预期则会拒绝处理该元素。

## 小彩蛋

为什么React Element十六进制值为`0xeac7`？因为它看起来像React。