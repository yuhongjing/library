---
title: 完整的redux
---

# 完整的redux

## 退订

不能退订的订阅都是耍流氓！我们修改下store.subscribe方法，增加退订功能

```js
function subscribe(listener) {
  listeners.push(listener);
  return function unsubscribe() {
    const index = listeners.indexOf(listener);
    listeners.splice(index, 1);
  }
}
```

使用

```js
const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  console.log(state.counter.count);
});
// 退订
unsubscribe();
```



## 中间件拿到的store

现在的中间件拿到了完整的store，他甚至可以修改我们的subscribe方法，按照`最小开放策略`，我们只用把getState给中间件就可以了！`因为我们只允许你用getState方法`！

修改下applyMiddleware中给中间件传的store

```js
// const chain = middlewares.map(middleware => middleware(store));
const simpleStore = { getState: store.getState };
const chain = middlewares.map(middleware => middleware(simpleStore));
```

## compose

我们的applyMiddleware中，把[A, B, C]转换成A(B(C(next)))，是这样实现的

```js
const chain = [A, B, C];
let dispatch = store.dispatch;
chain.reverse().map(middleware => {
  dispatch = middleware(dispatch);
});
```

redux提供了一个compose方式，可以帮我们做这个事情

```js
const chain = [A, B, C];
dispatch = compose(...chain)(store.dispatch);
```

看下它是如何实现的

```js
export default function compose(...funcs) {
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
```

当然compose函数对于新人来说可能比较难理解，你只需要知道他是做什么的就行啦！



## 省略initState

有时候我们创建store的时候不传initState，我们怎么用？

```js
const store = createStore(reducer, {}, rewriteCreateStoreFunc);
```

redux允许我们这样写

```js
const store = createStore(reducer, rewriteCreateStoreFunc);
```

我们仅需要改下createStore函数，如果第二个参数是一个object，我们认为它是initState，如果是function，我们就认为它是rewriteCreateStoreFunc。

```js
function createStore(reducer, initState, rewriteCreateStoreFunc) {
  if (typeof initState === 'function') {
    rewriteCreateStoreFunc = initState;
    initState = undefined;
  }
  ...
}
```



## 2行代码的replaceReducer

reducer拆分后，和组件是一一对应的。我们就希望在做按需加载的时候，reducer也可以跟着组件在必要的时候再加载，然后用新的reducer替换老的reducer。

```js
const createStore = function (reducer, initState) {
  ...
  function replaceReducer(nextReducer) {
    reducer = nextReducer;
    // 刷新一遍 state 的值，新来的 reducer 把自己默认的状态放到 state 树上去
    dispatch({ type: Symbol() });
  }
  ...
  return {
    ...
    replaceReducer
  }
}
```

我们来尝试使用下

```js
const reducer = combineReducers({
  counter: counterReducer
});
const store = createStore(reducer);

// 生成新的reducer
const nextReducer = combineReducers({
  counter: counterReducer,
  info: infoReducer
});
// replaceReducer
store.replaceReducer(nextReducer);
```

replaceReducer示例源码见[demo-5](https://github.com/frontend9/redux-demo/tree/master/demo-5)



## bindActionCreators

bindActionCreators我们很少很少用到，一般只有在react-redux的connect实现中用到。

它是做什么的？它通过闭包，把dispatch和actionCreator隐藏起来，让其他地方感知不到redux的存在。

我们通过普通的方式来隐藏dispatch和actionCreator试试，注意最后两行代码。

```js
const reducer = combineReducers({
  counter: counterReducer,
  info: infoReducer
});
const store = createStore(reducer);

// 返回 action 的函数就叫 actionCreator
function increment() {
  return {
    type: 'INCREMENT'
  }
}

function setName(name) {
  return {
    type: 'SET_NAME',
    name: name
  }
}

const actions = {
  increment: function () {
    return store.dispatch(increment.apply(this, arguments))
  },
  setName: function () {
    return store.dispatch(setName.apply(this, arguments))
  }
}
// 注意：我们可以把 actions 传到任何地方去
// 其他地方在实现自增的时候，根本不知道 dispatch，actionCreator等细节
actions.increment(); // 自增
actions.setName('九部威武'); // 修改 info.name
```

我眼睛一看，这个 actions 生成的时候，好多公共代码，提取一下

```js
const actions = bindActionCreators({ increment, setName }, store.dispatch);
```

来看一下 bindActionCreators 的源码，超级简单（就是生成了刚才的 actions）

```js
// 核心的代码在这里，通过闭包隐藏了 actionCreator 和 dispatch
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments))
  }
}

// actionCreators 必须是 function 或者 object
export default function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch)
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error()
  }

  const keys = Object.keys(actionCreators)
  const boundActionCreators = {}
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const actionCreator = actionCreators[key]
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)
    }
  }
  return boundActionCreators
}
```

bindActionCreators 示例源码见 [demo-8](https://github.com/frontend9/redux-demo/tree/master/demo-8)



## 大功告成

完整的示例源码见[demo-9](https://github.com/frontend9/redux-demo/tree/master/demo-9)，你可以和[redux](https://github.com/reduxjs/redux/issues)源码做一下对比，你会发现，我们已经有了redux所有的功能了。

当然，为了保证代码的理解性，我们少了一些参数的验证。比如`createStore(reducer)`的参数reducer必须是function等等。