---
title: React Hooks
---

# React Hooks

[React Hook手册](https://zh-hans.reactjs.org/docs/hooks-reference.html)

## 前言

在React的世界中，有容器组件和UI组件之分，在React Hooks出现之前。

UI组件我们可以使用`函数组件`也称无状态组件来展示UI。

而对于容器组件，函数组件就显得无能为力，我们依赖`类组件`来获取数据，处理数据，并向下传递参数给UI组件进行渲染。

React Hooks相比类组件有以下几点好处：

* 代码可读性更强，原本同一块功能的代码逻辑被拆分在了不同的生命周期函数中，容易使开发者不利于维护和迭代，通过React Hooks可以将功能代码耦合，方便阅读维护。

* 组件树层级变浅，在原本的代码中，我们经常使用`HOC / render props`等方式来复用组件的状态，增强功能等，无疑增加了组件树层数及渲染，而在React Hooks中，这些功能都可以通过强大的自定义的Hooks来实现

OK，让我们开始一起来学习React Hooks吧！



## React Hooks到底是啥？

`React Hooks`是将`React.Component`的特性添加到**函数组件**的一种方式。

例如以下几种`类组件`的特性添加到`函数组件`中。

* State
* 组件生命周期

> React Hooks能够让开发者不使用`class`来使用`React`的特性

可能大家会问，是不是以后`React`官网就不会继续维护用`class`来构建组件的方式了。这一点大可不必担心。

![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/9636F675-0517-4E4C-B92E-0301DD073EED.png)

同时也有一点需要大家了解：`React Hooks`的出现只是新增了一种处理逻辑的方式，而不是让你将原有的类组件重写为函数组件。



## useState

在传统的类组件，我们通过`this.state`来保存组件状态，下面用一个Demo来表示。

```js
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
  	super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    const {count} = this.state;
    return (
      <div>
      	Count: {Count}
        <button onClick={() => this.setState({count: count + 1})}>+</button>
      </div>
    );
}
```

一个简单的计数器组件就完成了，而在`函数组件`中，由于没有this这个黑魔法，React得通过`useState`来帮我们保存组件的状态。

以下是通过使用`函数组件`的方式来实现。

```js
import React, {useState} from 'react';

// 如果需要，props在函数参数获得
function App(props) {
  const [count, setCount] = useState(0);
  return (
  	<div>
    	Count: {count}
	    <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

### useState解析

`useState`返回了两个变量，我们可以随意给这两个变量命名。

* 第一个变量是一个值，类似于`类组件`中的`this.state`中的自定义变量
* 第二个变量是一个函数，用来更新第一个变量的值。类似于`类组件`的`this.setState`

我们调用`useState`时，传入了一个值，这个值是作为第一个变量的`初始值`。

::: warning 注意

`useState`不帮助你处理状态，相较于`setState`非覆盖式更新状态，`useState`想实现覆盖式更新状态，需要开发者自己处理逻辑。

:::

现在有了`useState`后，函数组件也可以拥有自己的状态了，但仅仅有状态是完全不够的。



## useEffect

`函数组件`能够保存状态，但是对于异步请求等副作用操作还是无能为力，而`useEffect`能够让`函数组件`拥有了**生命周期方法**来处理`函数组件`的副作用操作。

> 函数组件中的useEffect其实等同于类组件中的`componentDidMount`、`componentDidUpdate`和`componentWillUnmount`的结合体

字如其名，`useEffect`就是维护一些具有**副作用**的操作。

* 获取远程接口数据
* 操作DOM
* 响应订阅操作

> `useEffect`在每次`render`之后触发，不管组件是否首次渲染

现看看类组件的一个Demo如何操作各种生命周期的

```js
import React, {Component} from 'react';

class App extends Component {
  this.state = {
    count: 1
  };
  componentDidMount() {
    const {count} = this.state;
    document.title = 'componentDidMount' + count;
    this.timer = setInterval(() => {
      this.setState({count: count + 1});
    }, 1000);
  }
  componentDidUpdate() {
    const {count} = this.state;
    document.title = 'componentDidMount' + count;
  }
  componentWillUnmount() {
    document.title = 'componentWillUnmount';
    clearInterval(this.timer);
  }
  render() {
    const {count} = this.state;
    return (
      <div>
        Count: {count}
        <button onClick={() => clearInterval(this.timer)}>clear</button>
      </div>
    );
  }
}
```

在Demo中，组件每隔一秒更新组件状态，并且每次触发更新都会触发`document.title`的更新(副作用)，而组件卸载时修改`document.title`(类似于清除)。

从Demo可以看到，一些重复的功能开发者需要在`componentDidMount`和`componentDidUpdate`重复编写，而如果使用`useEffect`则完全不一样。

下面通过`函数组件`方式来实现

```js
import React, {useState, useEffect} from 'react';
let timer = null;

function App() {
  const [count, setCount] = useState(0);
  // 模拟componentDidUpdate count变化时触发函数
  useEffect(() => {
    document.title = 'componentDidMount' + count;
  }, [count]);
  // 模拟componentDidMount 空数组不会变化，仅组件加载时触发一次函数
  useEffect(() => {
    time = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    // 模拟componentWillUnmount函数 组件卸载时 触发return的函数
    return () => {
      document.title = 'componentWillUnmount';
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      Count: {count}
      <button onClick={() => clearInterval(timer)}>clear</button>
    </div>
  )
}
```

### useEffect解析

`useEffect`会接受两个参数

* 第一个参数传递函数，用来执行副作用操作，例如请求数据等
* 第二个参数是数组，数组中的值发生变化时会触发第一个参数中的函数

如果`useEffect`有返回值`return`则会在组件销毁时调用。

基于这个强大的`Hooks`，我们可以模拟封装各种生命周期函数。

现在我们有了`useState`管理状态，`useEffect`处理副作用、异步逻辑已经足以应付大多数的使用场景。



## useContext

`useContext`是React帮你封装好的，用来处理多层级传递数据的方式，在以前的组件树中，跨层级祖先组件想要给孙子组件传递数据时，除了一层层props往下透传之外，我们还可以使用`React Context API`来帮我们做这件事。

举个例子:

```js
const {Provider, Consumer} = React.createContext(null);
function Bar() {
  return <Consumer>{color => <div>{color}</div>}</Consumer>;
}
function Foo() {
  return <Bar />;
}
function App() {
  return (
  	<Provider value={'grey'}>
    	<Foo />
    </Provider>
  );
}
```

通过`React createContext`的语法，在APP组件中可以跨过Foo组件给Bar传递数据。而在`React Hooks`中，我们可以使用`useContext`进行改造。

```js
const colorContext = React.createContext('gray');
function Bar() {
  const color = useContext(colorContext);
  return <div>{color}</div>;
}
function Foo() {
  return <Bar />;
}
function App() {
  return (
  	<colorContext.Provider value={'red'}>
    	<Foo />
    </colorContext.Provider>
  );
}
```

传递给`useContext`的是`context`而不是`comsumer`，返回值即是想要透传的数据了。用法很简单，使用`useContext`可以解决`Consumer`多状态嵌套的问题。

```js
function HeaderBar() {
  return (
    <CurrentUser.Consumer>
      {user =>
        <Notifications.Consumer>
          {notifications =>
            <header>
              Welcome back, {user.name}!
              You have {notifications.length} notifications.
            </header>
          }
        </Notifications.Consumer>
      }
    </CurrentUser.Consumer>
  );
}
```

而使用`useContext`则变得十分简洁，可读性很强且不会增加组件树深度。

```js
function HeaderBar() {
  const user = useContext(CurrentUser);
  const notifications = useContext(Notifications);
  return (
    <header>
      Welcome back, {user.name}!
      You have {notifications.length} notifications.
    </header>
  );
}
```



## useReducer

`useReducer`这个`Hooks`在使用上跟React/React-Redux一模一样，唯一缺少的就是无法使用Redux提供的中间件。

我们将上述的计时器组件改写为`useReducer`

```js
import React, {useReducer} from "react";
const initialState = {
  count: 0
};
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + action.payload};
    case 'decrement':
      return {count: state.count - action.payload};
    default:
      throw new Error();
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment', payload: 5})}>
        +
      </button>
      <button onClick={() => dispatch({type: 'decrement', payload: 5})}>
        -
      </button>
    </div>
  );
}
```

用法跟Redux基本上是一致的，用法也很简单，算是提供了一个mini的Redux版本。



## useCallback

在类组件中，我们经常犯下面的错误：

```js
class App {
  render() {
    return <div>
      <SomeComponent
        style={{fontSize: 14}}
        doSomething={() => console.log('do something')} 
      />
    </div>;
  }
}
```

这样写有什么坏处呢？

一旦App组件的`props`或者状态改变了就会触发重渲染，即使跟`SomeComponent`组件不相关，由于每次`render`都会产生新的`style`和`doSomething`，所以会导致`SomeComponent`重新渲染。

倘若`someComponent`是一个大型的组件树，这样的`Virtual Dom`的比较显然是很浪费的，解决的办法也很简单，将参数抽离成变量。

```js
const fontSizeStyle = {fontSize: 14};
class App {
  doSomething = () => {
    console.log('do something');
  }
  render() {
    return <div>
      <SomeComponent
        style={fontSizeStyle}
        doSomething={this.doSomething}
      />
    </div>;
  }
}
```

在类组件中，我们还可以通过`this`这个对象来存储函数，而在函数组件中没办法进行挂载了。所以函数组件在每次渲染的时候如果有传递函数的话都会重新渲染子组件。

```js
function App() {
  // 这样做没用
  const handleClick = () => {
    console.log('Click happened');
  }
  return <SomeComponent onClick={handleClick}>Click Me</SomeComponent>;
}
```

而有了`useCallback`就不一样了，你可以通过`useCallback`获得一个记忆后的函数。

```js
function App() {
  const memoizedHandleClick = useCallback(() => {
    console.log('Click happened')
  }, []); // 空数组代表无论什么情况下该函数都不会发生改变
  return <SomeComponent onClick={memoizedHandleClick}>Click Me</SomeComponent>;
}
```

老规矩，第二个参数传入一个数组，数组中的每一项一旦值或者引用发生改变，`useCallback`就会重新返回一个新的记忆函数提供给后面进行渲染。

这样只要子组件继承了`PureComponent`或者使用`React.memo`就可以有效避免不必要的`VDOM`渲染。



## useMemo

`useCallback`的功能完全可以由`useMemo`所取代，如果你想通过使用`useMemo`返回一个记忆函数也是完全可以的。

```js
useCallback(fn, inputs)
// 等同于
useMemo(() => fn, inputs)
```

所以前面使用`useCallback`的例子可以使用`useMemo`进行改写：

```js
function App() {
  const memoizedHandleClick = useMemo(() => () => {
    console.log('Click happened')
  }, []); // 空数组代表无论什么情况下该函数都不会发生改变
  return <SomeComponent onClick={memoizedHandleClick}>Click Me</SomeComponent>;
}
```

唯一的区别是：

* `useCallback`不会执行第一个参数函数，而是将它返回给你

* `useMemo`会执行第一个函数并且将函数执行结果返回给你。

所以在前面的例子中，可以返回`handleClick`来达到存储函数的目的。

所以`useCallback`常用于记忆事件函数，生成记忆后的事件函数并传递给子组件使用。而`useMemo`更适合用于经过函数计算而得到的一个确定的值，比如`记忆组件`。

```js
function Parent({a, b}) {
  // Only re-rendered if `a` changes:
  const child1 = useMemo(() => <Child1 a={a} />, [a]);
  // Only re-rendered if `b` changes:
  const child2 = useMemo(() => <Child2 b={b} />, [b]);
  return (
    <div>
      {child1}
      {child2}
    </div>
  );
}

```

当a或b改变时，child1或child2才会重新渲染。

从例子可以看出来，只有第二个参数数组的值发生变化时，才会触发子组件的更新。



## useRef

`useRef`跟`createRef`类似，都可以用来生成对`DOM`对象的引用。

看个例子：

```js
import React, {useState, useRef} from "react";
function App() {
  let [name, setName] = useState("Nate");
  let nameRef = useRef();
  const submitButton = () => {
    setName(nameRef.current.value);
  };
  return (
    <div className="App">
      <p>{name}</p>

      <div>
        <input ref={nameRef} type="text" />
        <button type="button" onClick={submitButton}>
          Submit
        </button>
      </div>
    </div>
  );
}
```

`useRef`返回的值传递给组件或者`DOM`的`ref`属性，就可以通过`ref.current`值访问组件或真实的DOM节点，从而可以对DOM进行一些操作，比如监听事件等等。

当然`useRef`远比你想象中的功能强大，`useRef`的功能有点像类属性，或者说你想要在组件中记录一些值，并且这些值在稍后可以更改。

利用`useRef`就可以绕过`Capture Value`的特性。可以认为ref在所有的`render`过程中保持着唯一引用，因此对所有ref的赋值或者取值，拿到的都只有一个最终状态，而不会在每个`render`间存在隔离。

```js
function MessageThread() {
  const [message, setMessage] = useState('');

  const showMessage = () => {
    alert('You said: ' + message);
  };

  const handleSendClick = () => {
    setTimeout(showMessage, 3000);
  };

  const handleMessageChange = e => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <input value={message} onChange={handleMessageChange} />
      <button onClick={handleSendClick}>Send</button>
    </div>
  );
}
```

在点击Send按钮后，再次修改输入框的值，3秒后的输出依然是点击前输入框的值。这就是所谓的`capture value`的特性。而在类组件中3秒后输出的就是修改后的值，因为这时候message是挂载在this变量上，它保留的是一个引用值，对this属性的访问都会获取到最新的值。

讲到这里你应该明白了，`useRef`创建了一个引用，就可以有效规避`React Hooks`中的`Capture Value`特性。

```js
function MessageThread() {
  const latestMessage = useRef('');

  const showMessage = () => {
    alert('You said: ' + latestMessage.current);
  };

  const handleSendClick = () => {
    setTimeout(showMessage, 3000);
  };

  const handleMessageChange = e => {
    latestMessage.current = e.target.value;
  };
}
```

只要将赋值于取值的对象变成`useRef`，而不是`useState`，就可以躲过`capture value`特性，在3秒后得到最新的值。



## useImperativeHandle

通过`useImperativeHandle`用于让父组件获取子组件内的索引

```js
import React, {useRef, useEffect, useImperativeHandle, forwardRef} from "react";
function ChildInputComponent(props, ref) {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => inputRef.current);
  return <input type="text" name="child input" ref={inputRef} />;
}
const ChildInput = forwardRef(ChildInputComponent);
function App() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <ChildInput ref={inputRef} />
    </div>
  );
}
```

通过这种方式，App组件可以获得子组件的input的DOM节点。



## useLayoutEffect

大部分情况下，使用`useEffect`就可以帮我们处理组件的副作用，但是如果想要同步调用一些副作用，比如对DOM的操作，就需要使用`useLayoutEffect`，在`useLayoutEffect`中的副作用会在`DOM`更新之后同步执行。

```js
function App() {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const title = document.querySelector("#title");
    const titleWidth = title.getBoundingClientRect().width;
    console.log("useLayoutEffect");
    if (width !== titleWidth) {
      setWidth(titleWidth);
    }
  });
  useEffect(() => {
    console.log("useEffect");
  });
  return (
    <div>
      <h1 id="title">hello</h1>
      <h2>{width}</h2>
    </div>
  );
}
```

在上面的例子中，`useLayoutEffect` 会在`render`，DOM更新之后同步触发函数，会优于`useEffect`异步触发函数。