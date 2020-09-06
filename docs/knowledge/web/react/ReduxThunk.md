---
title: Redux-thunk
---

# Redux-thunk

redux-thunk是redux的中间件，其增强了redux的`dispatch`功能。

在redux中，我们通过`dispatch`方法将`action`传送给`reducer`，而`dispatch`方法只能接受对象类型的`action`参数。因此我们无法实现异步的操作。

引入redux-thunk中间件后，`action`可以为函数，就可以实现异步操作了。

## 安装

```node
npm install --save redux-thunk
```

## 实现原理

首先阅读一下[中间件原理](./从零实现Redux/中间件middleware.html)。

其实现非常简单，判断每个经过此中间件的`action`类型。

* 如果是`function`，就调用这个函数，并传入dispatch、getState以及extraArugment参数，而不是任由它到达reducer。
* 否则，直接进入下一个中间件，不做任何处理。

然后，然后就没了，redux-thunk原理就这点。

## 代码展示

```js
// 入口文件 store/index.js
import {createStore, applyMiddleware, combineReducers} from 'redux';
import * as reducers from '@/reducer';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers(reducers), // 组合多个Reducers
  {
    preloadedState: '预加载数据'
  }
  applyMiddleware(thunk) // 这里引入redux-thunk
); 

export default store;
```

## 总结

是的，redux-thunk就实现这样简单的功能：`action参数支持函数`。

这个库目前已经获得15k star，但是你可能不知道，redux-thunk全部代码一共11行。

[redux-thunk Github链接](https://github.com/reduxjs/redux-thunk)

