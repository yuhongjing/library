---
title: useEffect完整指南
---

# useEffect完整指南

[useEffect完整指南](https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/)

## 每次渲染都有独立props和state

下面是一个计时器组件，注意高亮的那一行。

``` jsx {6}
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

高亮代码中的`{count}`就是一个最普通的『常量』，并不是想象中的`data binding`、`watcher`、`proxy`等类似的东西。

它仅仅是一个最简单的常量，之所以能够变化是因为组件渲染了。例如第一次渲染和第二次渲染的count没有任何的联系。[参考](https://overreacted.io/zh-hans/react-as-a-ui-runtime/)

## 每次渲染都有独立的事件处理函数

那么事件处理函数呢？

下面这个例子，会在点击后3秒弹出点击次数`count`。

``` jsx {4-8,16-18}
function Counter() {
  const [count, setCount] = useState(0);

  function handleAlertClick() {
    setTimeout(() => {
      alert('You clicked on: ' + count);
    }, 3000);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={handleAlertClick}>
        Show alert
      </button>
    </div>
  );
}
```

如果按照下面的步骤去操作：

* 点击增加count到3
* 点击一下"Show alert"
* 点击增加count到5并且在回调函数触发前完成

结果是：弹出『You clicked on: 3』，尽管此时组件的count值为5。

因为在任意一次渲染中，**props和state是始终保持不变的**。因为props和state在不同的渲染中是相互独立的，那么使用到它们的任何值也是独立的（包括事件处理函数）。它们都『属于』一次特定的渲染。即便是事件处理中的异步函数调用，也是这次渲染中的`count`值。

## 每次渲染都有独立的Effects

其实effects并不特别，回到官网的例子：

``` jsx {4-6}
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

effect是如何获取到最新的`count`状态值的呢？

其实都是一样的，由上文知道，`count`是某个特定渲染中的常量。事件处理函数『获取』的是属于它那次特定渲染中的`count`状态值。对于effects也同样如此：

并不是`count`的值在『不变』的effect中发生了改变，而是**effect函数本身在每一次渲染中都不相同**。

每一个effect版本『获取』的`count`值都来自于它属于的那次渲染。

**概念上，你可以想象effects是渲染结果的一部分**。

## 每次渲染都是独立的

effects会在每次渲染后运行，并且概念上它是组件输出的一部分，可以『获取』属于某次特定渲染的props和state。

下面来做一个实验，思考下面的代码：

``` jsx {4-8}
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log(`You clicked ${count} times`);
    }, 3000);
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

如果点击了很多次且effect中设置了延时，打印出来的结果是什么呢？

结果是：依次输出对应的0、1、2、3、4、5。这也是很符合直觉的结果。

但是在class的`this.state`并不是这样运作的，它会返回最后的5、5、5、5、5。因为`this.state`指向了最新状态，每次渲染时的this指向了同一个对象。因此这就是混乱的来源。

## 逆潮而动

到现在为止，我们可以清楚的知道一个事实：每个组件内的函数（包括事件处理函数、effects、定时器或API调用等）会捕获某次渲染中定义的props和state。

所以下面两个例子是相等的：

``` jsx {4}
function Example(props) {
  useEffect(() => {
    setTimeout(() => {
      console.log(props.counter);
    }, 1000);
  });
  // ...
}
```

``` jsx {2,5}
unction Example(props) {
  const counter = props.counter;
  useEffect(() => {
    setTimeout(() => {
      console.log(counter);
    }, 1000);
  });
  // ...
}
```

在组件内什么时候去获取props或者state是无关紧要的，因为它们不会改变。在单次渲染的范围内，props和state始终保持不变。

当然，有时你可能想在effect的回调函数中读取最新的值而不是捕获的值。最简单的方法是使用**refs**。

这相当于从过去渲染的函数中获取未来的props和state，这是在逆潮而动，打破了默认范式使得代码不够『干净』。尽管有时候需要这么做。

下面的计时器模拟了class中的行为。

``` jsx {3,6-7,9-10}
function Example() {
  const [count, setCount] = useState(0);
  const latestCount = useRef(count);

  useEffect(() => {
    // Set the mutable latest value
    latestCount.current = count;
    setTimeout(() => {
      // Read the mutable latest value
      console.log(`You clicked ${latestCount.current} times`);
    }, 3000);
  });
  // ...
```

## Effect中的清理是怎样的？

有些effects可能需要一个清理步骤。本质上，它的目的是清除副作用，比如取消订阅。

思考如下代码：

``` jsx
useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.id, handleStatusChange);
    };
});
```

假设第一次渲染的时候`props`是`{id: 10}`，第二次渲染的时候`{id: 20}`。你可能会认为发生了下面的这些事：

* React清除了`{id: 10}`的effect。
* React渲染`{id: 20}`的UI。
* React运行`{id: 20}`的effect。

在class生命周期是如此，但function并不是如此。React只会在**浏览器绘制**后运行effects。这会使得应用更加流畅，因为它不会阻塞屏幕的更新。

Effect的清除同样被延迟了。上一次的effect会在本次重新渲染后清除：

* React渲染`{id: 20}`的UI。
* 浏览器绘制，我们在屏幕上看到`{id: 20}`的UI。
* React清除`{id: 10}`的effect。
* React运行`{id: 20}`的effect。

这里可能会有疑问，如果上一次的effect在本次渲染props变成`{id: 20}`之后被清除，它是如何获取到上次的`{id: 10}`。

引用上文的结论：

> 组件内的每一个函数（包括事件处理函数，effects，定时器或者API调用等等）会捕获定义它们的那次渲染中的props和state。

答案显而易见：effect的清除并不会获取『最新』的props，它只能获取到定义它的那次渲染中的props值。

``` jsx {8-11}
// First render, props are {id: 10}
function Example() {
  // ...
  useEffect(
    // Effect from first render
    () => {
      ChatAPI.subscribeToFriendStatus(10, handleStatusChange);
      // Cleanup for effect from first render
      return () => {
        ChatAPI.unsubscribeFromFriendStatus(10, handleStatusChange);
      };
    }
  );
  // ...
}

// Next render, props are {id: 20}
function Example() {
  // ...
  useEffect(
    // Effect from second render
    () => {
      ChatAPI.subscribeToFriendStatus(20, handleStatusChange);
      // Cleanup for effect from second render
      return () => {
        ChatAPI.unsubscribeFromFriendStatus(20, handleStatusChange);
      };
    }
  );
  // ...
}
```

这正是为什么React能做到在绘制后立即处理effects — 并且默认情况下使你的应用运行更流畅。

## 同步，而非生命周期

同步才是理解effects的心智模型。

class中的mount/update/unmount和useEffect是不同的心智模型。

* 在mount中，我们会想着处理组件渲染完成后相关的逻辑。
* 在update中，我们会想着处理组件更新时相关的逻辑。
* 在unmount中，我们会想着处理组件卸载时相关的逻辑。

但是在useEffect试图根据是否第一次渲染而表现不一致，这就是逆潮而动。

## 告诉React去对比你的Effects

Effects没有依赖值时，在effect中的代码每次渲染时都会执行（并且在某些场景下，它可能导致无限循环）。

因此，我们需要告诉Effects依赖值。

``` jsx
useEffect(() => {
    document.title = 'Hello, ' + name;
}, [name]); // Our deps
```

当name发送变化时，才会执行回调函数中的代码。

## 关于依赖项不要对React撒谎

如果你设置了依赖项，effect中用到的所有组件内的值都要包含在依赖中。这包括props，state，函数 — 组件内的任何东西。

有时候你是这样做了，但可能会引起一个问题。比如，你可能会遇到无限请求的问题，或者socket被频繁创建的问题。解决问题的方法不是移除依赖项。我们会很快了解具体的解决方案。

不过在我们深入解决方案之前，我们先尝试更好地理解问题。

## 如果设置了错误的依赖会怎么样呢？

举个例子，写一个每秒递增的计时器。

``` jsx
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
}
```

这个例子只会递增一次，因为count永远都是最初渲染的0。

## 两种诚实告知依赖的方法

有两种诚实告知依赖的策略。你应该从第一种开始，然后在需要的时候应用第二种。

第一种策略是在依赖中包含所有effect中用到的组件内的值。

``` jsx {3,6}
useEffect(() => {
  const id = setInterval(() => {
    setCount(count + 1);
  }, 1000);
  return () => clearInterval(id);
}, [count]);
```

现在依赖数组正确了，虽然它可能不是太理想，但确实解决了上面的问题。但每次渲染都会重新设定和清除定时器。这应该不是我们想要的结果。

第二种策略是修改effect内部的代码以确保它包含的值只会在需要的时候发生变更。我们不想告知错误的依赖 - 我们只是修改effect使得依赖更少。

让我们来看一些移除依赖的常用技巧。

## 让Effects自给自足

我们想去掉effect的count依赖。

``` jsx {3}
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
```

在这个场景，其实并不需要在effect中使用`count`，可以通过回调函数方式来更新状态。

现在，我们并没有对依赖性撒谎且移除了依赖性，并且effect只执行了一次。

## 函数式更新

`setCount(c => c + 1)`并不完美，它只能处理一个值。如果effect存在多个状态值且互相依赖时，就无能为力了。

因此需要使用更强大的`useReducer`。

## 解耦来自Actions的更新

我们来修改上面的例子让它包含两个状态：`count`和`step`。我们的定时器会每次在`count`上增加一个`step`值：

``` jsx {7,10}
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + step);
    }, 1000);
    return () => clearInterval(id);
  }, [step]);

  return (
    <div>
      <h1>{count}</h1>
      <input value={step} onChange={e => setStep(Number(e.target.value))} />
    <div/>
  );
}
```

这里无法通过setState来消除依赖，需要通过`useReducer`。

``` jsx {1,6,9}
const [state, dispatch] = useReducer(reducer, initialState);
const { count, step } = state;

useEffect(() => {
  const id = setInterval(() => {
    dispatch({ type: 'tick' }); // Instead of setCount(c => c + step);
  }, 1000);
  return () => clearInterval(id);
}, [dispatch]);
```

React会保证`dispatch`在组件的声明周期内保持不变。所以上面例子中不再需要重新订阅定时器。

::: tip 提示
你可以从依赖中去除`dispatch`、`setState`和`useRef`包裹的值因为React会确保它们是静态。不过你设置了它们作为依赖也没什么问题。
:::

## 为什么useReducer是Hooks的作弊模式

我们已经学习到如何移除effect的依赖，不管状态更新是依赖上一个状态还是依赖另一个状态。但假如我们需要依赖props去计算下一个状态呢？

实际上， 我们可以避免！我们可以把reducer函数放到组件内去读取props。

``` jsx {1,6}
function Counter({ step }) {
  const [count, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    if (action.type === 'tick') {
      return state + step;
    } else {
      throw new Error();
    }
  }

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return <h1>{count}</h1>;
}
```

这种模式会使一些优化失效，所以你应该避免滥用它，不过如果你需要你完全可以在reducer里面访问props。

## 把函数移到Effects里面

一个典型的误解是认为函数不应该成为依赖。

如果某些函数仅在effect中调用，你可以把它们的定义移到effect中：

``` jsx {4-11}
function SearchResults() {
  // ...
  useEffect(() => {
    // We moved these functions inside!
    function getFetchUrl() {
      return 'https://hn.algolia.com/api/v1/search?query=react';
    }
    async function fetchData() {
      const result = await axios(getFetchUrl());
      setData(result.data);
    }

    fetchData();
  }, []); // ✅ Deps are OK
  // ...
}
```

这么做有什么好处呢？我们不再需要去考虑这些『间接依赖』。我们的依赖数组也不再撒谎：在我们的effect中确实没有再使用组件范围内的任何东西。

## 说说竞态

下面是一个典型的在class组件里发请求的例子：

``` jsx
class Article extends Component {
  state = {
    article: null
  };
  componentDidMount() {
    this.fetchData(this.props.id);
  }
  async fetchData(id) {
    const article = await API.fetchArticle(id);
    this.setState({ article });
  }
  // ...
}
```

如果你使用的异步方式支持取消，那太棒了。你可以直接在清除函数中取消异步请求。

或者，最简单的权宜之计是用一个布尔值来跟踪它：

``` jsx {5,9,16-18}
function Article({ id }) {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    let didCancel = false;

    async function fetchData() {
      const article = await API.fetchArticle(id);
      if (!didCancel) {
        setArticle(article);
      }
    }

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [id]);

  // ...
}
```

[这篇文章](https://www.robinwieruch.de/react-hooks-fetch-data)讨论了更多关于如何处理错误和加载状态，以及抽离逻辑到自定义的Hook。我推荐你认真阅读一下如果你想学习更多关于如何在Hooks里请求数据的内容。

## 提高水准

在class组件生命周期的思维模型中，副作用的行为和渲染输出是不同的。UI渲染是被props和state驱动的，并且能确保步调一致，但副作用并不是这样。这是一类常见问题的来源。

而在useEffect的思维模型中，默认都是同步的。副作用变成了React数据流的一部分。对于每一个useEffect调用，一旦你处理正确，你的组件能够更好地处理边缘情况。

然而，用好useEffect的前期学习成本更高。这可能让人气恼。用同步的代码去处理边缘情况天然就比触发一次不用和渲染结果步调一致的副作用更难。