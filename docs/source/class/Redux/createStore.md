---
title: createStore
---

# createStore

::: tip 说明

本文源码采用redux 4.0.5版本。

:::

## 前言

>  Creates a Redux store that holds the state tree.
>
>  The only way to change the data in the store is to call `dispatch()` on it.
>
>  There should only be a single store in your app. 

`createStore`的作用就如上源码注释所写。

* 创建一个保存状态树的仓库。
* 应用只有一个仓库。
* 只能通过`dispatch()`方法来更改仓库数据。

## 结构分析

```js
import $$observable from 'symbol-observable'

import ActionTypes from './utils/actionTypes'
import isPlainObject from './utils/isPlainObject'

export default function createStore(reducer, preloadedState, enhancer) {
  // preloadedState参数及其位置可以省略，优化传参体验。
  // 例如 createStore(reducer, , enhancer)
  // 等同于 createStore(reducer, enhancer)
  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState
    preloadedState = undefined
  }

  // 增强器必须为函数
  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.')
    }

    // 默认是createStore(reducer, preloadedState)
    // 通过增强器改造Store，返回新的createStore，再传入相应参数。
    return enhancer(createStore)(reducer, preloadedState)
  }

  function getState() {
    // 获取状态树
  }

  function subscribe(listener) {
    // 订阅
  }

  function dispatch(action) {
    // 更改状态树
  }

  function replaceReducer(nextReducer) {
    // 未知
  }

  function observable() {
    // 状态树更改时，发布新状态
  }

  return {
    dispatch,
    subscribe,
    getState,
    replaceReducer,
    [$$observable]: observable
  }
}
```

`createStore`函数接受3个参数：

* `reducer`：纯函数，接受上次或初始的状态`state`，根据`action`来返回新的`state`。
* `preloadedState（可选）`：初始`state`。
* `enhancer（可选）`：增强器，用来扩展`store`功能，例如`redux-thunk`等中间件。

暴露了5个方法：

* `dispatch`：接受`action`，调用相应`reducer`，从而更改状态树。
* `subscribe`：订阅函数，状态树更新时，会收到`store`的发布信息。
* `getState`：获取`store`状态树信息。
* `replaceReducer`：动态替换`reducer`。
* `[$$observable]`：兼容`observable`类库的订阅发布。

整个`createStore`文件的内容就是这些。

## 运行串联

梳理一下整个运行流程。

* 应用首先调用`createStore API`创建一个`store`。
* 监听的子模块通过`subscribe API`传入回调函数进行订阅，`store`将回调函数存入`listeners`。
* 某些需要改变`store`的模块，通过调用`dispatch API`来更新`store`。
* `store`改变时，遍历`listeners`并依次调用其回调函数，完成发布更新功能。

## 代码解析

```js
import $$observable from 'symbol-observable'

import ActionTypes from './utils/actionTypes'
import isPlainObject from './utils/isPlainObject'

export default function createStore(reducer, preloadedState, enhancer) {
  // 当参数都为函数时，猜测参数有误，用户传入了多个增强器。
  if (
    (typeof preloadedState === 'function' && typeof enhancer === 'function') ||
    (typeof enhancer === 'function' && typeof arguments[3] === 'function')
  ) {
    throw new Error(
      'It looks like you are passing several store enhancers to ' +
        'createStore(). This is not supported. Instead, compose them ' +
        'together to a single function.'
    )
  }
  // 传参优化，参数位置替换，上文结构分析时已说明
  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState
    preloadedState = undefined
  }
  // 当传送enhancer时，检测其是否为函数类型
  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.')
    }
    // 改造store，返回新的store再传入相应参数，从而实现增强功能
    return enhancer(createStore)(reducer, preloadedState)
  }
  // reducer必须为函数类型
  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.')
  }

  let currentReducer = reducer // 当前的reducer，可能还会存在动态替换的reducer
  let currentState = preloadedState // 当前的state
  let currentListeners = [] // 当前已订阅的成员函数
  let nextListeners = currentListeners // 下一次dispatch触发时，将要发布更新的函数数组
  let isDispatching = false // 锁， 是否处于dispatch更新状态

  // 查看nextListeners和currentListeners是否为同一引用
  // 如果是，就拷贝一份，防止各自修改数据时，造成影响
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice()
    }
  }

  // 获取当前状态树信息
  function getState() {
    // 处于dispatch状态时，不能获取状态树，更改完毕后才允许获取。
    if (isDispatching) {
      throw new Error(
        'You may not call store.getState() while the reducer is executing. ' +
          'The reducer has already received the state as an argument. ' +
          'Pass it down from the top reducer instead of reading it from the store.'
      )
    }

    return currentState
  }

  // 订阅
  function subscribe(listener) {
    // 参数必须为函数，状态树改变时，会触发回调函数
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.')
    }

    // 处于dispatch状态时，不允许订阅
    if (isDispatching) {
      throw new Error(
        'You may not call store.subscribe() while the reducer is executing. ' +
          'If you would like to be notified after the store has been updated, subscribe from a ' +
          'component and invoke store.getState() in the callback to access the latest state. ' +
          'See https://redux.js.org/api-reference/store#subscribelistener for more details.'
      )
    }

    let isSubscribed = true

    ensureCanMutateNextListeners()
    // 将订阅函数推入listeners队列
    nextListeners.push(listener)

    // 返回取消订阅的函数，客户端可以自行取消订阅
    return function unsubscribe() {
      if (!isSubscribed) {
        return
      }

      if (isDispatching) {
        throw new Error(
          'You may not unsubscribe from a store listener while the reducer is executing. ' +
            'See https://redux.js.org/api-reference/store#subscribelistener for more details.'
        )
      }

      isSubscribed = false

      ensureCanMutateNextListeners()
      // 将订阅函数移出，取消订阅
      const index = nextListeners.indexOf(listener)
      nextListeners.splice(index, 1)
      currentListeners = null
    }
  }

  // 改变状态树
  function dispatch(action) {
    // 检测参数是否为无格式对象
    if (!isPlainObject(action)) {
      throw new Error(
        'Actions must be plain objects. ' +
          'Use custom middleware for async actions.'
      )
    }
    
    // action属性type不能为undefined
    if (typeof action.type === 'undefined') {
      throw new Error(
        'Actions may not have an undefined "type" property. ' +
          'Have you misspelled a constant?'
      )
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.')
    }

    try {
      isDispatching = true
      // 传入当前state及action，返回最新的state(这里是同步执行，因此不能触发异步函数)
      currentState = currentReducer(currentState, action)
    } finally {
      isDispatching = false
    }

    const listeners = (currentListeners = nextListeners)
    // 遍历listeners数组，触发回调函数
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }

    return action
  }

  // 动态替换reducer
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.')
    }

    currentReducer = nextReducer

    // 与 dispatch({ type: ActionTypes.INIT }) 功能类似
    // 替换reducer时，会生成一个新的state来替换旧的state
    dispatch({ type: ActionTypes.REPLACE })
  }

  // 适配ECMA TC39会议的一个有关Observable的提案所写的一个函数
  // 规范地址 https://github.com/tc39/proposal-observable
  // 作用是订阅store的变化，适用于所有实现了Observable的类库（主要是适配 RxJS）
  function observable() {
    const outerSubscribe = subscribe
    return {

      subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.')
        }
        // 用于给subscribe注册的函数，严格按照Observable的规范实现，observer必须有一个next属性
        function observeState() {
          if (observer.next) {
            observer.next(getState())
          }
        }

        observeState()
        const unsubscribe = outerSubscribe(observeState)
        return { unsubscribe }
      },

      // $$observable即为Symbol.observable，也属于Observable的规范，返回自身
      [$$observable]() {
        return this
      }
    }
  }

  // 初始化action，当没有命中任何reducer时，直接返回state避免报错
  dispatch({ type: ActionTypes.INIT })

  return {
    dispatch,
    subscribe,
    getState,
    replaceReducer,
    [$$observable]: observable
  }
}
```

## 总结

`createStore API`的功能本文[前言](#前言)已说明。

经过分析，可以得知`createStore`文件，主要实现了如下几个要点。

* 订阅/发布模式
* `createStore`参数位置兼容
* 动态替换`reducer`
* 兼容`observable`类库的订阅发布功能
* `dispatch`改变状态树功能。

这也是redux的核心功能，非常短小精悍，简洁易懂。

学习了这一块基本上就能够明白redux的核心运作方式。