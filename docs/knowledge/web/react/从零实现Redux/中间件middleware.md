---
title: 中间件middleware
---

# 中间件 middleware

中间件middleware是redux中最难理解的地方。但是我挑战一下用最通俗的语言来讲明白它。如果你看完这一小节，还没明白中间件是什么，不知道如何写一个中间件，那就是我的锅了！

中间件是对dispatch的扩展或者说重写，增强dispatch的功能！

## 记录日志

我现在有一个需求，在每次修改state的时候，记录下来修改前的state，为什么修改了以及修改后的state。我们可以通过重写store.dispatch来实现，直接看代码

```js
const store = createStore(reducer);
const next = store.dispatch;

// 重写了store.dispatch
store.dispatch = action => {
  console.log('this state', store.getState());
  console.log('action', action);
  next(action);
  console.log('next state', store.getState());
}
```

我们来使用下

```js
store.dispatch({
  type: 'INCREMENT'
});
```

日志输出为

```js
this state { counter: { count: 0 } }
action { type: 'INCREMENT' }
1
next state { counter: { count: 1 } }
```

## 记录异常

我又有一个需求，需要记录每次数据出错的原因，我们扩展下dispatch

```js
const store = createStore(reducer);
const next = store.dispatch;

store.dispatch = action => {
  try {
    next(action);
  } catch (err) {
    console.error('错误报告: ', err);
  }
}
```

这样每次dispatch出异常的时候，我们都会记录下来。

## 多中间件的合作

我现在既需要记录日志，又需要记录异常，怎么办？当然很简单了，两个函数合起来呗！

```js
store.dispatch = action => {
  try {
    console.log('this state', store.getState());
    console.log('action', action);
    next(action);
    console.log('next state', store.getSatte());
  } catch (err) {
    console.error('错误报告: ', err);
  }
}
```

如果又来一个需求怎么办？接着改dispatch函数？那再来10个需求呢？到时候dispatch函数肯定庞大混乱到无法维护了！这个方式不可取呀！更不符合`开闭原则`啊！

我们需要考虑如何实现`扩展性`很强的多中间件合作模式。

1. 我们把loggerMiddleware提取出来

   ```js
   const store = createStore(reducer);
   const next = store.dispatch;
   
   const loggerMiddleware = action => {
     console.log('this state', store.getState());
     console.log('action', action);
     next(action);
     console.log('next state', store.getState());
   }
   
   store.dispatch = action => {
     try {
       loggerMiddleware(action);
     } catch (err) {
       console.error('错误报告: ', err);
     }
   }
   ```

2. 我们把exceptionMiddleware提取出来

   ```js
   const exceptionMiddleware = action => {
     try {
       // next(action)
       loggerMiddleware(action);
     } catch (err) {
       console.error('错误报告: ', err);
     }
   }
   store.dispatch = exceptionMiddleware;
   ```

3. 现在代码有一个很严重的问题，就是exceptionMiddleware里面写死了loggerMiddleware，我们需要让`next(action`变成动态的，随便哪个中间件都可以

   ```js
   const exceptionMiddleware = next => action => {
     try {
       next(action);
     } catch (err) {
       console.error('错误报告: ', err);
     }
   }
   // loggerMiddleware 变成参数传进去
   store.dispatch = exceptionMiddleware(loggerMiddleware);
   ```

4. 同样的道理，loggerMiddleware里面的next现在恒等于store.dispatch，导致loggerMiddleware里面无法扩展别的中间件了！我们也把next写成动态的

   ```js
   const loggerMiddleware => next => action => {
     console.log('this state', store.getState());
     console.log('action', action);
     next(action);
     console.log('next state', store.getState());
   }
   ```

到这里为止，我们已经探索出了一个扩展性很高的中间件合作模式！

```js
const store = createStore(reducer);
const next = store.dispatch;

const loggerMiddleware = next => action => {
  console.log('this state', store.getState());
  console.log('action', action);
  next(action);
  console.log('next state', store.getState());
}

const exceptionMiddleware = next => action => {
  try {
    next(action);
  } catch (err) {
    console.error('错误报告: ', err)
  }
}

store.dispatch = exceptionMiddleware(loggerMiddleware(next));
```

这时候我们开开心心的新建了一个`loggerMiddleware.js`，一个`exceptionMiddleware.js`文件，想把两个中间件独立到单独的文件中去。会碰到什么问题吗？

loggerMiddleware中包含了外部变量store，导致我们无法把中间件独立出去。那我们把store也作为一个参数传进去好了~

```js
const store = createStore(reducer);
const next  = store.dispatch;

const loggerMiddleware = store => next => action => {
  console.log('this state', store.getState());
  console.log('action', action);
  next(action);
  console.log('next state', store.getState());
}

const exceptionMiddleware = store => next => action => {
  try {
    next(action);
  } catch (err) {
    console.error('错误报告: ', err)
  }
}

const logger = loggerMiddleware(store);
const exception = exceptionMiddleware(store);
store.dispatch = exception(logger(next));
```

到这里为止，我们真正的实现了两个可以独立的中间件啦！

现在我有一个需求，在打印日志之前输入当前的时间戳。用中间件来实现！

```js
const timeMiddleware = store => next => action => {
  console.log('time', new Date().getTime());
  next(action);
}
...
const time = timeMiddleware(store);
store.dispatch = exception(time(logger(next)));
```

本小节完整源码见[demo-6](https://github.com/frontend9/redux-demo/tree/master/demo-6)

## 中间件使用方式优化

上一节我们已经完全实现了正确的中间件！但是中间件的使用方式不是很友好

```js
import loggerMiddleware from './middlewares/loggerMiddleware';
import exceptionMiddleware from './middlewares/exceptionMiddleware';
import timeMiddleware from './middlewares/timeMiddleware';

...

const store = createStore(reducer);
const next = store.dispatch;

const logger = loggerMiddleware(store);
const exception = exceptionMiddleware(store);
const time = timeMiddleware(store);
store.dispatch = exception(time(logger(next)));
```

其实我们只需要知道三个中间件，剩下的细节都可以封装起来！我们通过扩展createStore来实现！

先来看看期望的用法

```js
// 接受旧的 createStore，返回新的 createStore
const newCreateStore = applyMiddleware(exceptionMiddleware, timeMiddleware, loggerMiddleawre)(createStore);

// 返回了一个 dispatch 被重写过的 store
const store = newCreateStore(reducer);
```

实现applyMiddleware

```js
const applyMiddleware = function (...middlewares) {
  // 返回一个重写createStore的方法
  return function rewriteCreateStoreFunc(oldCreateStore) {
    // 返回重写后新的 createStore
    return function newCreateStore(reducer, initState) {
      // 1. 生成store
      const store = oldCreateStore(reducer, initState);
      // 给每个middleware传下store，相当于 const logger = loggerMiddleware(store);
      // const chain = [exception, time, looger];
      const chain = middlewares.map(middleware => middleware(store));
      let dispatch = store.dispatch;
      // 实现 exception(time(logger(dispatch)))
      chain.reverse().map(middleware => {
        dispatch = middleware(dispatch);
      });
      
      // 重写 dispatch
      store.dispatch = dispatch;
      return store;
    }
  }
}
```



## 让用户体验美好

现在还有个小问题，我们有两种createStore了

```js
// 没有中间件的 createStore
import { createStore } from './redux';
const store = createStore(reducer, initState);

// 有中间件的 createStore
const rewriteCreateStoreFunc = applyMiddleware(exceptionMiddleware, timeMiddleware, loggerMiddleware);
const newCreateStore = rewriteCreateStoreFunc(createStore);
const store = newCreateStore(reducer, initState);
```

为了让用户用起来统一一些，我们可以很简单的使他们的使用方式一致，我们修改下createStore方法

```js
const createStore = (reducer, initState, rewriteCreateStoreFunc) => {
    /*如果有 rewriteCreateStoreFunc，那就采用新的 createStore */
    if(rewriteCreateStoreFunc){
       const newCreateStore =  rewriteCreateStoreFunc(createStore);
       return newCreateStore(reducer, initState);
    }
    /*否则按照正常的流程走*/
    ...
}
```

最终的用法

```js
const rewriteCreateStoreFunc = applyMiddleware(exceptionMiddleware, timeMiddleware, loggerMiddleware);

const store = createStore(reducer, initState, rewriteCreateStoreFunc);
```

本小节完整源码见[demo-7](https://github.com/frontend9/redux-demo/tree/master/demo-7)