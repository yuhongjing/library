---
title: 编码规范
---

# 编码规范
React编写规范整理，书写漂亮的React代码。

## 基础规则
* `一个文件声明一个组件`: 尽管可以在一个文件中声明多个React组件，但是最好不要这样做；推荐一个文件声明一个React组件，并只导出一个组件
* `使用JSX表达式`: 不要使用React.createElement的写法
* `函数组件和class类组件的使用场景`: 如果定义的组件不需要props和state，建议将组件定义为成函数组件，否则定义为class类组件（不过现在有了react-hooks，也可以尝试函数组件）

## 文件命名
* 组件文件使用一致的`.js`或`.jsx`后缀，不应该在项目中出现部分组件为`.js`，部分为`.jsx`的情况

## 模块化
* 组织多个组件的目录使用一个`index.js`以命名导出的形式暴露所有组件

推荐:
```js
export {default as MyComponent1} from './MyComponent1';
export {default as MyComponent2} from './MyComponent2';
export {default as MyComponent3} from './MyComponent3';
```

## 组件声明
* 组件名称和定义该组件的文件名称建议要保持一致

推荐:   
```js
import Footer from './Footer';
```
不推荐:
```js
import Footer from './Footer/index';
```

* 不要使用displayName属性来定义组件的名称，应该在class或function关键字后面直接声明组件的名称

推荐:
```js
export default class MyComponent extends React.Component {}
```
不推荐:
```js
export default React.Component({
    displayName: 'MyComponent'
});
```

## React中的命名
* `组件名称`: 推荐使用大驼峰命名
* `属性名称`: React DOM使用小驼峰命令来定义属性的名称，而不使用HTML属性名称的命名约定
* `style`样式属性: 采用小驼峰命名属性的JavaScript对象

推荐:
```
// 组件名称
MyComponent
// 属性名称
onClick
// 样式属性
backgroundColor
```

## JSX写法注意
### 标签
* 当标签没有子元素的时候，始终使用自闭合的标签

推荐:
```jsx
<Component />
```
不推荐:
```jsx
<Component></Component>
```

* 如果标签有多行属性，关闭标签要另起一行

推荐:
```jsx
<Component
    bar="bar"
    baz="baz"
/>
```
不推荐:
```jsx
<Component
    bar="bar"
    baz="baz" />
```

* 在自闭标签之前留一个空格

推荐:
```jsx
<Foo />
```
不推荐:
```jsx
<Foo/>

<Foo        />

<Foo
/>
```

* 当组件跨行时，要用括号包裹JSX标签

推荐:
```jsx
render() {
    return (
        <MyComponent className="long body" foo="bar">
            <MyChild />
        </MyComponent>
    );
}
```
不推荐:
```jsx
render() {
    return <MyComponent className="long body" foo="bar">
              <MyChild />
           </MyComponent>;
}
```

### 对齐
JSX语法使用下列的对齐方式:

推荐:
```jsx
// 属性越长越下方
<Foo
    superLongParam="bar"
    anotherSuperLongParam="baz"
/>

// 如果组件的属性可以放在一行 (一个属性时)，就保持在当前
<Foo bar="bar" />
```
不推荐:
```jsx
<Foo superLongParam="bar"
     anotherSuperLongParam="baz" />
```

### 引号
JSX的属性都采用双引号，其他的JS都使用单引号，因为JSX属性不能包含转义的引号

推荐:
```jsx
<Foo bar="bar" />

<Foo style={{left: '20px'}} />
```
不推荐:
```jsx
<Foo bar='bar' />

<Foo style={{left: "20px"}} />
```

## 样式写法
React中的样式可以使用style行内样式，也可以使用className属性来引用外部CSS样式表中定义的CSS类，推荐使用className来定义样式。并且推荐使用SCSS或LESS等来替换传统的CSS写法。

## defaultProps使用静态属性定义
defaultProps推荐使用静态属性定义，不推荐在class外进行定义。

推荐:
```jsx
class Example extends React.Component {
    static defaultProps = {
        name: 'stranger'
    }

    render() {
        // ...
    }
}
```
不推荐:
```jsx
class Example extends React.Component {
    render() {
        // ...
    }
}

Example.propTypes = {
    name: propTypes.string
};
```

## key属性设置
key帮助React识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。当元素没有确定id的时候，万不得已你可以使用元素索引index作为key，但是列表项目的顺序可能会发生变化，如果通过索引来用作key值，因为这样做会导致性能变差，还可能引起组件状态的问题。

推荐:
```jsx
{todos.maps(todo => (
    <Todo
        {...todo}
        key={todo.id}
    />
))}
```
不推荐:
```jsx
{todos.map((todo, index) => 
    <Todo
        {...todo}
        key={index}
    />
)}
```

## 为组件绑定事件处理器
React为组件绑定事件处理器提供4种方法: 
* public class fields语法
* 构造函数中进行绑定
* 在回调中使用箭头函数
* 使用Function.prototype进行绑定

推荐使用public class fields语法，在不满足需求情况下使用箭头函数的写法（传递参数给事件处理器）

推荐:
```jsx
handleClick = () => {
    console.log('this is:', this);
}
<button onClick={this.handleClick}>Click me</button>
```
不推荐:
```jsx
constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
}
handleClick() {
    console.log('this is:', this);
}
<button onClick={this.handleClick}>Click me</button>
```

## State
### 不要直接修改state
除了state初始化外，其他地方修改state，需要使用setState()方法，否则如果直接赋值，则不会重新渲染组件。

推荐:
```jsx
this.setState({comment: 'Hello'});
```
不推荐:
```jsx
this.state.comment = 'hello';
```

### State的更新可能是异步的
出于性能考虑，React可能会把多个setState()调用合并成一个调用，因为this.props和this.state可能会异步更新，所以这种场景下需要让setState()接受一个函数而不是一个对象。

推荐:
```jsx
this.setState((state, props) => ({
    counter: state.counter + props.increment
}));
```
不推荐:
```jsx
this.setState({
    counter: this.state.counter + this.props.increment
});
```

## 组件的代码顺序
组件应该有严格的代码顺序，这样有利于代码维护，我们推荐每个组件中的代码顺序一致性
```jsx
class Example extends React.Component {
    // 静态属性
    static defaultProps = {};

    // 构造函数
    constructor(props) {
        super(props);
        this.state = {};
    }

    // 声明周期钩子函数
    // 按照它们的执行顺序
    // 1. componentWillMount
    // 2. componentWillReceiveProps (这里React16.4 替换了新的)
    // 3. shouldComponentUpdate
    // 4. componentDidMount
    // 5. componentDidUpdate
    // 6. componentWillUnmount
    
    compontDidMount() { ... }

    // 事件函数/普通函数
    handleClick = e => { ... }

    // 最后，render方法
    render() { ... }
}
```

## 使用高阶组件
使用高阶组件解决横切关注点，而不是使用mixins。

## 避免不必要render的写法
shouldComponentUpdate钩子函数和React.PureComponent类都是用来当state和props变化时，避免不必要的render的方法。

shouldComponentUpdate钩子函数需要自己手动实现浅比较的逻辑，React.PureComponent类则默认对props和state进行浅层比较，并减少了跳过必要更新的可能性。

推荐使用React.PureComponent避免不要的render。

## 状态提升
如果多个组件需要反映相同的变化数据，建议将共享状态提升到最近的共同父组件中去，从而依靠自上而下的数据流，而不是尝试在不同组件间同步state。

## 推荐使用Context
如果某个属性在组件树的不同层级的组件之间需要用到，我们应该使用Context提供在组件之间共享此属性的方式，而不是显式地通过组件树的逐层传递props。

## Refs写法
Refs提供了一种方式，允许我们访问DOM节点或在render方法中创建的React元素。  
推荐使用createRef API的方式或者回调函数的方式使用Refs，而不是使用this.refs.textInput这种过时的方式访问refs。

## 路由加载
建议使用路由懒加载当前用户所需的内容，这样能够显著地提高你的应用性能。尽管并没有减少应用整体的代码体积，但是你可以避免加载用户永远不需要的代码，并在初始加载的时候减少所需加载的代码量。

推荐:
```jsx
const OtherComponent = React.lazy(() => import('./OtherComponent'));
```
不推荐:
```jsx
import OtherComponent from './OtherComponent';
```

## AJAX发起请求的时机
推荐在componentDidMount生命周期发起AJAX请求。这你可以拿到AJAX请求返回的数据并通过setState来更新组件。