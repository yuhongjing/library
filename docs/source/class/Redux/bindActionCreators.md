---
title: bindActionCreators
---

# bindActionCreators

`bindActionCreator`就是`dispatch`。

几乎所有情况下，需要更新状态树时，会直接调用`dispatch`即可。

但是，当你希望传达一些`action creator`传送到子组件时，而且不希望子组件知晓`redux`存在。当出现这种情况时，就可以使用`bindActionCreator`，让子组件不需要知晓`redux`、不需要注入`store`，仍可以改变状态树信息。

## 举例

```js
const actions = {
    addTodo: ...,
    addTodoTwo: ...
}
// 父组件
class TodoListContainer extends Component {
    render() {
        // 由 react-redux 注入：
        let { dispatch } = this.props;
        let boundActionCreators = bindActionCreators(actions, dispatch);

        return (
            <childContainer {...boundActionCreators} />
        );
    }
}

// 子组件
class childContainer extends Component {
    componentDidMount(){
        this.props.addTodo();
        this.props.addTodoTwo();
    }
}
```

中间件无须注入`redux`仍然可以调用`addTodo`和`addToDoTwo`方法去更新`store`数据。

`bindActionCreator`就是做这么一件事情。

## 代码解析

```js
function bindActionCreator(actionCreator, dispatch) {
  // 返回函数dispatch并bind作用域
  return function() {
    return dispatch(actionCreator.apply(this, arguments))
  }
}

export default function bindActionCreators(actionCreators, dispatch) {
  // 判断actionCreators是否为函数
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch)
  }

  // 否则判断actionCreators是否为对象
  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error(
      `bindActionCreators expected an object or a function, instead received ${
        actionCreators === null ? 'null' : typeof actionCreators
      }. ` +
        `Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`
    )
  }

  const boundActionCreators = {}
  // 遍历action对象，将其中函数作用域bind在当前作用域下
  for (const key in actionCreators) {
    const actionCreator = actionCreators[key]
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)
    }
  }
  return boundActionCreators
}
```

以上源码可以看出`bindActionCreators`就是`dispatch`，只是做了一个`bind`的功能。

