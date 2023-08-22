---
title: ReactHooks
---

# ReactHooks

> 文件地址：react/src/ReactHooks.js

## Hook数据结构

### hook

每一个`hook`方法的声明，都会生成一个对应的`hook`对象，来存储值。各自生成的`hook`会以`next`链接在一起，组成一个链表。然后挂载到`fiber`节点的`memoizedState`中。

```typescript
type Hook = {
  memoizedState: any; // 上次渲染后的state
  baseState: any; // 通过已处理好的update，来计算出state
  baseQueue: Update<any, any> | null; // 尚需处理的update，通常是上一轮render中遗留下的优先级过低而暂缓执行的update
  queue: UpdateQueue<any, any> | null; // 当前触发的update链表
  next: Hook | null; // 下一个Hook链接
};
```

举例：

```jsx
const [count, setCount] = useState(0);
const [price, setPrice] = useState(10);

// 对应hook链表为
const hook = {
	memoizedState: 0,
  baseState: 0,
  baseQueue: null,
  queue: null,
  next: {
    memoizedState: 10,
    baseState: 10,
    baseQueue: null,
    queue: null,
  },
};
```

不同的`hook`，其`memoizedState`存储的值各不相同。

| 方法                      | `memoizedState`  |
| ------------------------- | ---------------- |
| useState/useReducer       | State            |
| useEffect/useLayoutEffect | effect对象       |
| useMemo/useCallback       | [callback, deps] |
| useRef                    | { current: any } |



