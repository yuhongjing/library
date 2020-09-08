---
title: applyMiddleware
---

# applyMiddleware

中间件的功能是，增强`dispatch`函数功能。

## 前言

`dispatch`执行流程。

```js
// 默认执行流程
用户操作 -> dispatch(action) -> reducer(prevState, action) -> 新的state -> 界面

// 需要异步请求等功能，增强dispatch
用户操作 -> dispatch(action) -> middleware(action)
-> 真正的action -> reducer(prevState, action) -> 新的state -> 界面
```

因此我们需要改造`dispatch`。

## 举例

中间件的功能是，增强`dispatch`函数功能。那么如何增强一个函数功能呢？

类似`装饰者模式`，**不改变原函数**的情况下，在调用真正的函数之前，做各种`装饰`操作。

举例：我们有一个非常普通的函数，它的功能就是打印参数值。

```js
const callback = params => {
  console.log('参数值为：', params);
};
```

现在，我们不想改变原函数代码，并增强它的功能，增加一层参数校验。我们可以如下做。

```js
const callback = params => {
  console.log('参数值为：', params);
};

// 函数柯里化
const validNotObject = fun => params => {
  if (typeof params !== 'object') {
    console.log('参数类型不是对象，符合校验要求');
    fun(params);
  }
};

// 客户端调用方式
validNotObject(callback)('str');
```

如此一来，我们即可以在不修改原函数的情况下，扩展增强它的功能。

但是，我们可能会有多个增强功能，因此希望能够进行链式调用，且按顺序执行。

```js
const validNotObject = next => action => {
  if (typeof action !== 'object') {
    console.log("参数不是对象，符合要求");
    // 这里的next是funB
  	return next(action);
  }
}

const validNotNumber = next => action => {
  if (typeof action !== 'number') {
    console.log("参数不是数值，符合要求");
    // 这里的next是callback
  	return next(action);
  }
}

const callback = params => {
  console.log('我是参数值:', params);
}

// 对函数进行嵌套，外层函数的参数是内层函数
// 相当于一层一层的装饰，通过所有的装饰，最后执行默认函数callback
validNotObject(validNotNumber(callback))('str');
```

以上这一块代码，就是中间件链实现的核心逻辑。

其核心要点主要是：

* 利用`装饰者模式`，包裹原函数进行功能增强
* 利用`函数嵌套`，进行链式执行与顺序调用

不过，上面这一段代码不够简洁，且看到`函数嵌套`就想到应该会使用`compose`工具函数。

因此，redux的中间件简易实现版如下：

```js
// compose核心语句
const compose = (...funs) => funs.reduce((a, b) => (...args) => a(b(...args)));

const validNotObject = next => action => {
  if (typeof action !== 'object') {
    console.log("参数不是对象，符合要求");
  }
  // 这里的next是funB，如果不 return 就是洋葱卷模型
  return next(action);
}

const validNotNumber = next => action => {
  if (typeof action !== 'number') {
    console.log("参数不是数值，符合要求");
  }
  // 这里的next是callback
  return next(action);
}

const callback = params => {
  console.log('我是参数值:', params);
}

// compose(validNotObject, validNotNumber)(callback)
// 等同于 validNotObject(validNotNumber(callback))
// 这个callback就是被扩展的dispatch函数
// 这个str就是action
compose(validNotObject, validNotNumber)(callback)('str');

// **********************************************************
// 要点来了，compose应该是从右到左执行，为什么这里是先执行左边的函数呢？

// 主要是因为两层的设计，可以看见第一层时，仍然是从右至左的执行
// compose(validNotObject, validNotNumber) === validNotObject(validNotNumber)

// 此时传入callback后，会组合成『一个』新的函数，并且返回了这『一个』新的函数，此时未执行。
// compose(validNotObject, validNotNumber)(callback)

// 函数的内容为validNotObject的内容
// if (typeof action !== 'object') {
//    console.log("参数不是对象，符合要求");
//  }
//  return next(action);

// 先通过compose将中间件反序，使得外层中间件获得内层中间件引用。
// 如此一来，就可以进行链式调用。
// 有点绕，有点精妙吧，利用了函数式编程的两大工具柯里化与组合。
```

可以看见中间件函数有两个箭头（两层函数），因此需要调用两层参数才能执行。

下面这句代码是redux中间件的源代码，可以仔细体会一下。

`中间件函数Fun({ dispatch, getState })(next)(action)`

## 代码解析

```js
import compose from './compose'

export default function applyMiddleware(...middlewares) {
  return createStore => (...args) => {
    const store = createStore(...args)
    // 构建dispatch过程中禁止执行dispatch
    // dispatch未组合完成时，是不允许执行dispatch的
    let dispatch = () => {
      throw new Error(
        'Dispatching while constructing your middleware is not allowed. ' +
          'Other middleware would not be applied to this dispatch.'
      )
    }

    // 每个中间件都会传入两个参数getState、dispatch
    const middlewareAPI = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
    }
    const chain = middlewares.map(middleware => middleware(middlewareAPI))
    // 将所有中间件组合成一个嵌套函数并传入原生函数dispatch，返回一个新的装饰好的嵌套函数dispatch。
    dispatch = compose(...chain)(store.dispatch)

    return {
      ...store,
      dispatch
    }
  }
}
```

### redux-thunk源码

一个简单的中间件源码，可以对比上方`applyMiddleware`代码看。

```js
function createThunkMiddleware(extraArgument) {
  // 中间件被注入的两个参数dispatch与getState
  // 第一层是next，指向下一个中间件，可以理解为funA(funB)中的funB
  // 第二层是参数，可以理解为funA(funB)('我是参数')中的('我是参数')
  return ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```

## 总结

* 中间件的执行是顺序执行的。
* 每个`dispatch`的生成是反序，其实这里只是想说明函数链式调用是通过**函数嵌套**实现的。



::: tip 后续补充
反序这一块，学习函数式编程，柯里化与组合即可完全明白了。
:::

