---
title: combineReducers
---

# combineReducers

将多个`reducer`合并为一个`reducer`，最终返回一个`reducer`函数。

## 代码解析

简洁了各种参数校验与结果判断，保留了所有核心的逻辑。

```js
export default function combineReducers(reducers) {
  // 获取所有reducer名字
  const reducerKeys = Object.keys(reducers)
  // 最终有效的reducer
  const finalReducers = {}
  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i]

    // reducer必须为函数类型
    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key]
    }
  }
  // 获取有效reducer名字
  const finalReducerKeys = Object.keys(finalReducers)

  // 返回reducer格式函数，接受参数state与action
  return function combination(state = {}, action) {
    let hasChanged = false
    const nextState = {}
    
    for (let i = 0; i < finalReducerKeys.length; i++) {
      // 获取reducer名字
      const key = finalReducerKeys[i]
      // 获取reducer函数
      const reducer = finalReducers[key]
      // 获取上一次reducer的状态树值
      const previousStateForKey = state[key]
      // 根据上一次的状态树值，传入本次action得到新的状态树值
      const nextStateForKey = reducer(previousStateForKey, action)
      // 更新每个reducer对应的状态树值
      nextState[key] = nextStateForKey
      // 判断state是否存在变化
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey
    }
    // 二次判断，如果state没变化时，进一步判断reducer的个数与state状态树是否一致。
    // 这里是为了动态替换的reducer
    hasChanged =
      hasChanged || finalReducerKeys.length !== Object.keys(state).length
    // 如果state改变，返回新的nextState，否则返回上一次的state
    return hasChanged ? nextState : state
  }
}
```

主要做了几点

* 创建一个新对象，对象的`key`就是每个`reducer`的名字。
* 每一次更改`state`时，都会重新组合`大reducer`。这里并非全量覆盖，每个`reducer`对应的`state`做了对比。
* 返回一个`大reducer`函数。

## 总结

没有什么特别的要点，就是多个对象组合成一个对象。