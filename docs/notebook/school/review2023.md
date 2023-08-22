---
  title: review2023
---

# Review2023

2023跳槽学习准备。

## React

### 路由

#### Hash

通过#来实现，onHashChange监听改变，路由改变和刷新时，不会请求服务端。

#### History

通过H5 API pushState和popState实现，前进和后退不会请求服务端，但是刷新时容易出现404问题，因为会真实请求服务端。

### 合成事件与原生事件

#### 获取原生事件

```tsx
<div onClick={(e) => e.nativeEvent}></div>
```

#### 事件执行顺序

```tsx
function Comp() {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.addEventListener('click', () => {
     console.log("绑定原生事件"); 
    })
  }, []);
  
  const handleClick = () => {
    console.log("绑定合成事件");
  }
  
  return (
  	<div ref={divRef} onClick={handleClick}>
      <span>DOM</span>
  	</div>
  )
}
```

（React 16）React所有事件都挂载到document对象上，当真实 DOM 触发事件，会冒泡到 document 对象后，再处理 React 事件，所以会先执行原生事件，然后处理 React 事件，最后真正执行 document 上挂载的事件

#### 阻止事件冒泡

原生事件 -> React事件 -> document事件

* 阻止合成事件间的冒泡，用`e.stopPropagation()`。
* 阻止合成事件与最外层`document`上的事件间的冒泡，用`e.nativeEvent.stopImmediatePropagation()`。
* 阻止合成事件与除最外层`document`上的原生事件的冒泡，可以通过`e.target`来避免。

```ts
document.body.addEventListener('click', (e) => {
  if (e.target && e.target.matches('div.code')) {
    return;
  }
  this.setState({ active: false });
});
```

#### 总结

React事件机制总结如下：

* React上注册的事件最终会绑定在document DOM上，而不是React组件对应的DOM。（减少内存开销）
* React自身实现了一套事件冒泡机制，所以这就是`e.stopPropagation()`无效的原因。
* React通过队列的形式，从触发的组件向父组件回溯，然后调用他们JSX中定义的callback。
* React有一套自己的合成事件`SyntheticEvent`。

### Hook能否在条件判断中实现

不能，闭包链表原因，条件判断可能会丢失记录。

### setState

#### 同步获取

通过回调来实现。

```tsx
class Comp {
  componentDidMount() {
    this.setState({ message: '你好啊' }, () => {
      console.log(this.state.message);
    });
  }
}
```

#### 同步更新

原生DOM事件中，同步更新

```tsx
class Comp {
  componentDidMount() {
    const btnEl = document.getElementById('btn');
    btnEl.addEventListener('click', () => {
      this.setState({
        message: '你好啊',
      });
      console.log('this.state.message'); // 你好啊
    });
  }
}
```

#### 总结

* 在组件生命周期或React合成事件中，setState是异步。
* 在setTimeout或原生DOM事件中，setState是同步。

### Real DOM & Vitual DOM

#### 定义

* Real DOM即真实的DOM，文档对象模型，是一个结构化的抽象。

* Vitual DOM即虚拟的DOM，本质是JavaScript对象行

#### 区别

* 虚拟DOM不会进行排版和重绘操作，而真实DOM会频繁重排和重绘。
* 虚拟DOM的总损耗是"虚拟DOM增删改 + 真实DOM差异增删改 + 排版和重绘"，真实DOM的总损耗是"真实DOM完全增删改 + 排版和重绘"。

通过原生`API`去操作DOM时，更新10个节点会触发10次重排流程；而虚拟DOM会按批次执行一次。

#### 优缺点

真实DOM优点：易用、缺点：效率低，解析速度慢，性能差，频繁操作DOM导致重排。

虚拟DOM优点：简单、性能大部分场景下比较好，减少重排、跨平台；缺点：极致性能难达标、首次渲染更耗时。

### useContext

```js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
let AppContext = React.createContext()

// useContext 实现
function useContext(context){
    return context._currentValue
}

function Counter() {
    let { state, setState } = useContext(AppContext)
    return (
        <>
            <button onClick={() => setState({ number: state.number + 1 })}>+</button>
        </>
    );
}
function App() {
    let [state, setState] = useState({ number: 0 })
    return (
        <AppContext.Provider value={{ state, setState }}>
            <div>
                <h1>{state.number}</h1>
                <Counter></Counter>
            </div>
        </AppContext.Provider>
    )
}
function render() {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}
render()
```

### useState

```js
let lastIndex = 0;   //记录当前下标
let LastStates = []; //记录 states

function useState(initValue) {
    //1、记录当前 state 的下标(这里使用了闭包的原理)
    const currentIndex = lastIndex;
    
    //2、记录初始值
    lastStates[currentIndex] = lastStates[currentIndex] ?? initValue;
    
    //3、setState 回调修改 state
    function setState(newValue) {
        lastStates[currentIndex] = newValue
        //修改后，重新render
        render()
    }
    
    //4、返回数组
    return [lastStatas[lastIndex++], setState]
}
```

### useReducers

```js
let lastIndex = 0;
let lastStates = [];

function useReducer(reducer, initState) {
    //1、记录当前 state 下标
    const currentIndex = lastIndex;
    //2、记录初始值
    lastStates[currentIndex] = lastStates[currentIndex] ?? initState;
    
    //3、定义 dispatch
    function dispatch(action) {
        // reducer 处理 state，返回处理后的结果
        lastStates[currentIndex] = reducer(lastStates[currentIndex], action);
        // 重新渲染
        render();
    }
    
    return [lastStates[lastIndex++], dispatch]
}
```

### useCallback&useMemo

```js
let lastResult;
let lastDependencies;

function useCallback(callback, dependencies) {
    //1、判断是否传入了依赖项
    if (dependencies) {
        const isChange = !dependencies.every((item, index) => {
            return item === lastDependencies[index]
        })
        //如果依赖项改变
        if (isChange) {
            lastResult = callback(); //更新记忆值
            lastDependencies = dependencies;  //记录最新的依赖项
        }
    } else {
        //没传入依赖项，可以当成是第一次调用 useMemo
        lastResult = callback();
        lastDependencies = dependencies;
    }
    
    //返回记忆值函数
    return lastResult
}
```

 ## HTML

### Property & Attribute

* Property是DOM的属性，是JavaScript里的对象。
* Attribute是HTML标签的特性，它的值只能是字符串。

举个例子：

```html
<input id="this-input" type="text" value="test" />

// Attribute
id、type、value

// Property
document.querySelector('#this-input').nodeType
```

### 浏览器一帧都干了啥

【1】接受输入事件
 【2】执行事件回调
 【3】开始一帧
 【4】执行 RAF (RequestAnimationFrame)
 【5】页面布局，样式计算
 【6】绘制渲染
 【7】执行 RIC (RequestIdelCallback)

## CSS

### transform：translateZ(0)有什么作用

GPU加速，优化前端性能。

这个问题是因为使用transform和opacity做CSS动画的时候，会将元素提升为一个复合层；而使用js操作css属性做动画时，必须使用translateZ或will-change才能将元素强行提升至一个复合层。

### 设备像素、CSS像素、设备独立像素、dpr、ppi

#### CSS像素

CSS像素(css pixel, px)：适用于web编程，在CSS中以px为后缀，是一个长度单位。

在CSS规范中，长度单位可以分为两类，绝对单位以及相对单位。

px是一个相对单位，相对的是设备像素(device pixel)，一般情况，页面缩放比为1，1个CSS像素等于1个设备独立像素。

`CSS`像素又具有两个方面的相对性：

* 在同一个设备上，每1个CSS像素所代表的设备像素是可以变化的（比如调整屏幕的分辨率）
* 在不同的设备之间，每1个CSS像素所代表的设备像素是可以变化的（比如两个不同型号的手机）

在页面进行缩放操作也会引起`css`的`px`的变化，假设页面放大一倍，原本的1px的东西变成2px，在实际宽度不变的情况下1px变得跟原来的2px的长度一样了。（元素会占据更多的设备像素）

假设原本需要320px才能填满的宽度，现在只需要160px，px会受到下面因素影响而变化：

* 每英寸像素（PPI）
* 设备像素比（DPR）

#### 设备像素

设备像素（device pixels），又称物理像素，单位为`pt`。

指设备能控制显示的最小物理单位，不一定是一个小正方形区块，也没有标准的宽高，只是用于显示丰富色彩的一个"点"而已。

从屏幕在工厂生产出的那天起，它上面设备的像素点就固定不变了。

#### 设备独立像素

设备独立像素（Device Independent Pixel）：与设备无关的逻辑像素，代表可以通过程序控制使用的虚拟像素，是一个总体概念，包括了CSS像素。

在`Javscript`中可以通过`window.screen.width / window.screen.height`查看。

比如"电脑分辨率 2560x1600调节为1440x900"，这里的分辨率就是设备独立像素。

一个设备独立像素可能包含1个或多个物理像素点，包含的越多则屏幕看起来越清晰。

至于为什么出现设备独立像素这种虚拟像素单位概念，下面举个例子：

iPhone  3GS和iPhone 4/4s的尺寸都是3.5寸，但iPhone 3GS的分辨率是320x480，iPhone 4/4s的分辨率是640x960。这意味着，iPhone 3GS有320个物理像素，iPhone 4/4s有640个物理像素。

如果我们按照真实的物理像素进行布局，比如说我们按照320物理像素进行布局，到了640物理像素的手机上就会有一半的空白，为了避免这种问题，就产生了虚拟像素单位。

我们统一iPhone 3GS和iPhone 4/4s都是320个虚拟像素，只是在iPhone 3GS上，最终1个虚拟像素换算成1个物理像素，在iPhone 4s中，1个虚拟像素最终换算成2个物理像素。

至于1个虚拟像素被换算成几个物理像素，这个数值我们称之为设备像素比，也就是下面的`dpr`。

#### 设备像素比 DPR

dpr（device pixel ratio），设备像素比，代表设备独立像素到设备像素的转换关系。

在`JavaScript`中可以通过`window.devicePixelRatio`获取。

计算公式为:`DPR = 设备像素 / 设备独立像素`。

* 当设备像素比为1:1时，使用1(1x1)个设备像素显示1个CSS像素
* 当设备像素比为2:1时，使用4(2x2)个设备像素显示1个CSS像素
* 当设备像素比为3:1时，使用9(3x3)个设备像素显示1个CSS像素

当`dpr`为3时，那么1px的CSS像素宽度对应3px的物理像素的宽度，1px的CSS像素高度对应3px的物理像素高度。

#### 每英寸像素 PPI

ppi（pixel per inch），每英寸像素，表示每英寸所包含的像素点数目，更确切的说法应该是像素密度。数值越高，说明屏幕能以更高密度显示图像。

计算公式为:`PPI = 根号(x^2 + y^2) / 屏幕尺寸

#### 总结

* 无缩放情况下，1个CSS像素等于1个设备独立像素
* 设备像素由屏幕生产之后就不发生改变，而设备独立像素是一个虚拟单位会发生改变
* PC端中，1个设备独立像素 = 1个设备像素（在100%，未缩放的情况下）
* 在移动端中，标准屏幕（160ppi）下1个设备独立像素 = 1个设备像素
* 设备像素比（dpr）= 设备像素 / 设备独立像素
* 每英寸像素（ppi），值越大，图像越清晰

### em、px、rem、vh、vw

#### px

`px`，表示像素，每个像素都是大小等同的，所以是绝对单位长度。

#### em

em是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸（`1em = 16px`)

为了简化`font-size`的换算，我们需要在`css`的`body`选择器中声明`font-size=62.5%`，这就使em值变为`16px * 62.5% = 10px`。

这样`12px = 1.2em`，`10px = 1em`，也就是说将原来的`px`数值除以10，换成em单位就可以了。

特点：

* em的值不是固定的
* em会继承父级元素的字体大小
* em是相对长度单位
* 任何浏览器的默认字体大小都是16px

#### rem

rem，相对单位，相对的是HTML根元素`font-size`的值。

* rem单位可谓集相对大小和绝对大小的优点于一身
* 和em不同的是rem总是相对于根元素，而不像em一样使用级联方式计算尺寸

#### vh、vw

vw根据窗口的宽度，分成100等份，同理vh是窗口的高度。

窗口分为几种情况：

* 在桌面端，指浏览器可视区域
* 在移动端，指布局视口

像vw、vh比较容易混淆的单位是`%`，不过百分比宽泛的讲是相对于父元素：

* 对于普通定位元素是父元素
* 对于positiion：absolute的元素是相对于已定位的父元素
* 对于position：fixed的元素是相对于Viewport

#### 总结

* px：绝对单位，页面按精准像素显示
* em：相对单位，基准点为父节点字体大小，如果自身定义了`font-size`则按自身计算
* rem：相对单位，相对根节点`html`字体大小计算
* vh、vw：页面视口大小

### Chrome支持小于12px的文字方式

* scale，缩放
* Text-size-adjust: none，设定文字大小是否根据设备来自动调整大小

### 性能优化

* 内联首屏CSS
* 异步加载CSS
  * link放在head后
  * media设置noexist
  * rel设置alternate
* 资源压缩 webpack等
* 减少昂贵属性，box-shadow等
* base64小图，重绘
* CSS雪碧图

## Network

### 强缓存/协商缓存

强缓存：不请求服务端，本地200，cache controle/etag等，多用于图片

协商缓存：请求服务端，命中走304，使用本地缓存，last-modify

### 同源限制

浏览器安全限制，host/port/协议相同为同源。

CORS/JSONP/postMessage/反向代理

### 从输入URL到展示的过程

1. DNS 解析（浏览器缓存、路由器缓存）
2. TCP 三次握手
3. REQUEST，分析 URL ，设置请求报文（头、主体）
4. RESPONSE
5. 浏览器渲染
   1. HTML Parse -> DOM Tree
   2. CSS Parse -> Style Tree
   3. Attachment -> Render Tree
   4. layout
   5. GPU painting：绘制页面

### http/https协议

#### 1.0协议缺陷

1. 无法复用链接，完成即断开，重新慢启动和TCP 3次握手
2. `head of line blocking`: 线头阻塞，导致请求之间相互影响

#### 1.1 协议改进

1. 长连接 keep-alive，复用
2. `host`字段指定对应的虚拟站点
3. 断点续传
4. 身份认证
5. 状态管理 cache缓存(Cache-Control、Expires、Last-Modified、Etag)

#### 2.0 协议

1. 多路复用
2. 二进制分帧层：应用层和传输层之间
3. 首部压缩
4. 服务端推送

#### https 较为安全的网络传输协议

1. 证书(公钥)
2. SSL 加密
3. 端口 443

### TCP

1. 三次握手
2. 四次挥手
3. 滑动窗口：流量控制
4. 拥塞处理
   1. 慢开始
   2. 拥塞避免
   3. 快速重传
   4. 快速恢复

### TCP和UDP区别

**TCP 是面向连接的、可靠的、有序的、速度慢的协议；UDP 是无连接的、不可靠的、无序的、速度快的协议**。 TCP 开销比UDP 大，TCP 头部需要20 字节，UDP 头部只要8 个字节。 TCP 无界有拥塞控制，UDP 有界无拥塞控制

### 缓存策略

缓存策略可分为 强缓存 和 协商缓存

1. `Cache-Control/Expires`: 浏览器判断缓存是否过期，未过期时，直接使用强缓存，`Cache-Control`的`max-age`优先级高于`Expires`。
2. 当缓存已经过期时，使用协商缓存
   1. 唯一标识方案: `Etag`(response携带)&`If-None-Match`(Request携带，上一次返回的Etag)，服务端判断资源是否被修改。
   2. 最后一次修改事件：`Last-Modified(response) & If-Modified-Since`(request，上一次返回的Last-Modified)
   3. 如果一致，则直接返回304通知浏览器使用缓存。
   4. 如不一致，则服务端返回新的资源。
3. Last-Modifed缺点：
   1. 周期性修改，但内容未变时，会导致缓存失效。
   2. 最小粒度只到`s`，`s`以内的改动无法检测到。
4. `Etag`的优先级高于`Last-Modified`

### 常见状态码

* 1xx：接受，继续处理
* 200：成功，并返回数据
* 201：已创建
* 202：已接受
* 203：成功，但未授权
* 204：成功，无内容
* 205：成功，重置内容
* 206：成功，部分内容
* 301：永久移动，重定向
* 302：临时移动，重定向
* 304：资源未修改，可使用缓存
* 305：需代理访问
* 400：请求预发错误
* 401：要求身份认证
* 403：拒绝请求
* 404：资源不存在
* 500：服务端错误

### GET/POST

* get：缓存、请求长度受限、会被历史保存记录，无副作用（不修改资源），幂等（请求次数与资源无关）的场景
* post：安全、大数据、更多编码类型

### Websocket

> Websocket是一个持久化的协议，基于 http，服务端可以主动 push。

兼容：

> FLASH Socket
>
> 长轮询：定时发送ajax
>
> long poll：发送 ---> 有消息时再 response

### TCP三次握手

> 建立连接前，客户端和服务端需要通过握手来确认对方

* 客户端发送`syn`(同步序列编号)请求，进入`syn_send`状态，等待确认
* 服务端接收并确认`syn`包后发送`syn+ack`包，进入`syn_recv`状态
* 客户端接收`syn+ack`包后，发送`ack`包，双方进入`established`状态

### TCP四次挥手

* 客户端 -- FIN --> 服务端， FIN -- WAIT
* 服务端 -- ACK --> 客户端，CLOSE -- WAIT
* 服务端 -- ACK,FIN --> 客户端，LAST -- ACK
* 客户端 -- ACK --> 服务端，CLOSE

### Node的Event Loop

* timer阶段：执行到期的setTimeout/setInterval队列回调
* I/O阶段：执行上轮循环残留的callback
* Idle、prepare
* Poll：等待回调
  * 执行回调
  * 执行定时器
    * 如有到期的setTimeout/setInterval，则返回timer阶段
    * 如有setImmediate，则前往check阶段
  * check
    * 执行setImmediate
  * close callbacks

### 跨域

* JSONP：利用script标签，但只能get

```ts
function jsonp(url, jsonpCallback, success) {
  const script = document.createElement('script');
  script.src = url;
  script.async = true;
  
}
```

* CORS: Access-Control-Allow-Origin: *
* postMessage

### 安全

#### XSS攻击

* cookie设置httpOnly

* 转义页面上的输入内容和输出内容

#### CSRF

* get不修改数据
* 不被第三方网站访问到用户的cookie
* 设置白名单，不被第三方网站请求
* 请求校验

## WebPACK

### Loader和plugins区别

loader是转换器，加载非JS文件，Plugins在loader之后，基于事件机制扩展功能。

### Webpack构建流程

1. 初始化参数webpack.config.js
2. 开始编译，初始化compiler对象，注册plugins，监听webpack生命周期
3. 确定入口，根据ast解析文件树
4. 编译模块，递归loader
5. 完成编译输出文件，根据entry和output生成代码chunk
6. 打包完成

### Webpack事件机制

tapable定义了9个钩子，插件在监听对应事件钩子，然后执行逻辑即可

### Tree-shaking原理

从入口文件entry开始，遍历文件依赖树，标记模块依赖并导出。

### Webpack优化

* Tree-shaking
* 代码压缩
* 分包动态加载
* 小图片转base64
* 生产环境/开发环境分别打包，干掉debug信息

## JS

### 垃圾回收

引用计数（循环引用）/标签清除

### 事件循环

单线程执行异步操作，宏微任务控制，一个宏任务执行其内部产生的所有微任务以及新产生的微任务。

### Async和await实现同步

Generator的语法糖，返回迭代器Iterator，这两都属于协程。

### 实现bind函数

```js
Function.prototype.myBind = function (context) {  
  var _this = this;
  var args = [...arguments].slice(1);

  return function F() {
    return _this.apply(context, args.concat(...arguments));
  }
} 
```

### 实现call函数

```js
// getValue.call(a, 'yck', '24') => a.fn = getValue
Function.prototype.myCall = function (context) {
  var context = context || window;
  // 给context添加一个方法，指向this (例子的this就是getValue)
  context.fn = this;
  var args = [...arguments].slice(1);
  var result = context.fn(...args);
  delete context.fn;
  return result;
}
```

### 实现apply函数

```js
Function.prototype.myApply = function (context) {
  var context = context || window;
  // 给context添加一个方法，指向this
  context.fn = this;
  var result;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result context.fn();
  }
  delete context.fn;
  return result;
}
```

### 手写Promise基础版

```js
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class Promise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    // 存放成功的回调
    this.onResolvedCallbacks = [];
    // 存放失败的回调
    this.onRejectedCallbacks= [];

    let resolve = (value) => {
      if(this.status ===  PENDING) {
        this.status = FULFILLED;
        this.value = value;
        // 依次将对应的函数执行
        this.onResolvedCallbacks.forEach(fn=>fn());
      }
    } 

    let reject = (reason) => {
      if(this.status ===  PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        // 依次将对应的函数执行
        this.onRejectedCallbacks.forEach(fn=>fn());
      }
    }

    try {
      executor(resolve,reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }

    if (this.status === REJECTED) {
      onRejected(this.reason)
    }

    if (this.status === PENDING) {
      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value)
      });

      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
      this.onRejectedCallbacks.push(()=> {
        onRejected(this.reason);
      })
    }
  }
}
```

### 实现Promise相关函数

```js
// 追加一个then实现，在then的两个参数都执行function即可
Promise.prototype.finally = functino (f) {
  return this.then(function (value) {
    return Promise.resolve(f()).then(function () {
      return value;
    });
  }, function (err) {
    return Promise.resolve(f()).then(function () {
      throw err;
    });
  });
}

// 不返回Promise
Promise.prototype.done = function (onFulfilled, onRejected) {
  var self = arguments.length ? this.then.apply(this, arguments) : this;
  self.then(null, function (err) {
    setTimeout(function () {
      throw err;
    }, 0);
  });
};


Promise.all = function (iterable) {
    return new Promise((resolve,reject) => {
        const promises = Array.from(iterable);
        // 定义Promise对象resolve的数组
        const result = [];
        // 定义一个计数器用来判断是否所有的promise执行完毕
        let count = 0;
        // 并发执行每一个promise
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i])
              .then(res => {
                  result[i] = res;
                  count++;
                  if (count === promises.length) {
                      resolve(result);
                  }
              })
              .catch(err => reject(err))
        }
    })
}

// 多个Promise执行，执行完毕一个就返回
Promise.race = function (values) {
  // 创建一个外层Promise
  return new Promise(function (resolve, reject) {
    // 遍历Promise数组
    iterableToArray(values).forEach(function(value){
      // 将外层的Promise的参数resolve和reject传入子Promise
      // 当任意一个子Promise执行完毕，改变了外层Promise状态后
      // 其余Promise就无法再更改外层Promise了
      Promise.resolve(value).then(resolve, reject);
    });
  });
};

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};
```

### 防抖、节流

```js
// 防抖
function debounce(func, wait) {
  let timeout = null;
  return function () {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(func, wait);
  }
}

// 节流 - 定时器
function throttle(func, wait) {
  let tag = false;

  return function () {
    if (!tag) {
      tag = true;
      func();
      setTimeout(() => {
        tag = false;
      }, wait)
    }
  }
}

// 节流 - 时间差
function throttle(func, limit) { 
    let previous = 0; //上次执行时间 

    return function() { 
        const now = Date.now();  //当前时间 
        
        // 若当前时间-上次执行时间大于时间限制
        if (now - previous > limit) { 
            func(); 
            previous = now; 
        } 
    } 
} 

```

### 函数柯里化

```js
// 例子，自动执行的 super 版本
const compose =
  (...functions) =>
    (x) => functions.reduceRight((acc, fn) => fn(acc), x);

compose(
  (x) => x + 1,
  (x) => x + 2,
)(10);

// compose redux实现
const compose = (...funs) => funs.reduce((a, b) => (...args) => a(b(...args)));
function compose(...funs) { // 拿到所有的中间件
  return funs.reduce((a, b) => { // 后面的中间件会作为前面中间件的参数调用
    return function(...args) { // 获取传入的数据 args -> dispatch
      return a(b(...args));
    }
  });
}

const loggerMiddleware = (next) => (action) => {
  console.log('logger', action);
  return next(action);
}

const exceptionMiddleware = (next) => (action) => {
  console.log('exception', action);
  return next(action);
}

const timeMiddleware = (next) => (action) => {
  console.log('time', action);
  return next(action);
}

let dispatch = (action) => {
  console.log(action)
  return action;
}


const wrapDispath = (x) => compose(loggerMiddleware, exceptionMiddleware, timeMiddleware)(dispatch)(x);

console.log('wrap', wrapDispath(1000))
```

#### 手写简易函数柯里化

```js
function toCurry(func, ...args) {
  return function () {
      args = [...args, ...arguments];
    	// func.length为函数的参数
      if (args.length < func.length) {
          return toCurry(func, ...args);
      }
      return func.apply(null, args);
  }
}

console.log(toCurry((a, b) => a + b)(1)(2))
```

### 深拷贝

```js
// proxy。immer.js
// lodash deepClone
// JSON
// 递归暴力
```

### 发布订阅模式

```js
class EventHub {
  constructor() {
    this.map = {};
  }
  on(event, fn) {
    this.map[event] = this.map[event] || [];
    this.map[event].push(fn);
  }
  emit(event, data) {
    const fnList = this.map[event] || [];
    if (!fnList || fnList.length === 0) return;
    fnList.forEach(fn => fn.call(undefined, data));
  }
  off(event, fn) {
    const fnList = this.map[event] || {};
    const index = fnList.indexOf(fn);
    if (index < 0) return;
    fnList.splice(index, 1);
  }
  once(event, fn) {
    const f = (data) => {
      fn(data);
      this.off(event, f);
    }
    this.on(event, f);
  }
}
```

### 装饰者模式

AOP设计模式/高阶函数都可以

```js
class SimpleCoffee {
  getCost() {
    return 10;
  }

  getDescription() {
    return 'Simple Coffee';
  }
}

class MilkCoffee {
  constructor(coffee) {
    this.coffee = coffee;
  }

  getCost() {
    return this.coffee.getCost() + 2;
  }

  getDescription() {
    return this.coffee.getDescription() + ', milk';
  }
}

// client
let someCoffee;

someCoffee = new SimpleCoffee();
console.log(someCoffee.getCost()); // 10
console.log(someCoffee.getDescription()); // Simple Coffee

someCoffee = new MilkCoffee(someCoffee);
console.log(someCoffee.getCost()); // 12
console.log(someCoffee.getDescription()); // Simple Coffee, milk
```

### Lodash.get

```js
function myGet(obj: {}, path, defaultValue) {
  if (typeof path === 'string') {
    // 正则表达式配合 replace，将 `[` 替换为 `.` ,把 `]` 替换为空字符串
    // 如`a[0].b.c[1]` 处理为 `a.0.b.b.1`
    path = path.replace(/([\[\]])/g, ($1) => {
      return $1 === '[' ? '.' : ''
    }).split('.');
  }

  if (!obj || typeof obj !== 'object' || !Array.isArray(path) || path.length === 0) {
    return path.length === 0 ? obj : defaultValue
  }

  let target = obj
  for (const item of path) {
    target = target[item]
    if (!target) break
  }

  return target || defaultValue
}
```

### 数组转二叉树

```js
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function arr2Bst(arr) {
  if (!arr.length) {
    return null;
  }
  if (arr.length === 1) {
    return arr[0];
  }
  let mid = parseInt(arr.length / 2, 10);
  root = new TreeNode(arr[mid]);
  root.left = arr2Bst(arr.slice(0, mid));
  root.right = arr2Bst(arr.slice(mid + 1));
  return root
}

console.log(arr2Bst([1, 5, 2, 3, -1, 10]))
```

### 深度优先遍历

```js
function dfs(root) {
  root.children.forEach(dfs)
}

dfs(root)
```

### 广度优先遍历

```js
function bfs(root) {
  const stack = [root];
  while(stack.length > 0) {
    const node = stack.shift();
    node.children.forEach((item) => stack.push(item));
  }
}

bfs(root)


function bfs(pRoot){
    if(!node){
        return []
    }
    let queue = [pRoot]  //将根节点加入到队列中
    let result = []  //结果数组
    while(queue.length){
        let len = queue.length   //队列中长度循环一次就得变一次
        let tempArr = []  //存储每层节点值的临时数组，方便一层层打印
        for(let i = 0; i < len; i++){   //遍历每层节点
            let temp = queue.shift()
            tempArr.push(temp.val)
            if(temp.left){
                queue.push(pNode.left)
            }
            if(temp.right){
                queue.push(pNode.right)
            }
        }
       result.push([...tempArr])
    }
    return result
}
```

### 二叉树遍历(前序/中序/后序/层序广度)

```js
// 前序，根左右
let res = []
function preorderTraverse(pRoot){
    if(!pRoot){//递归的出口
        return 
    }
    res.push(pRoot.val)
    preorderTraverse(pRoot.left)
    preorderTraverse(pRoot.right)
}


// 中序，左根右
let res = []
function inorderTraverse(pRoot){
    if(!pRoot){//递归的出口
        return 
    }
    inorderTraverse(pRoot.left)
    res.push(pRoot.val)
    inorderTraverse(pRoot.right)
}

// 后序，左右根
let res = []
function postorderTraverse(pRoot){
    if(!pRoot){//递归的出口
        return 
    }
    postorderTraverse(pRoot.left)
    postorderTraverse(pRoot.right)
    res.push(pRoot.val)
}
```

### 判断对称二叉树

```js
//对称二叉树
const symmetricalTree = {
  val: 8,
  left: {
    val: 6,
    left: { val: 5, left: null, right: null },
    right: { val: 7, left: null, right: null }
  },
  right: {
    val: 6,
    left: { val: 7, left: null, right: null },
    right: { val: 5, left: null, right: null }
  }
}

//非对称二叉树
const binaryTree = {
  val: 8,
  left: {
    val: 6,
    left: { val: 5, left: null, right: null },
    right: { val: 7, left: null, right: null }
  },
  right: {
    val: 9,
    left: { val: 7, left: null, right: null },
    right: { val: 5, left: null, right: null }
  }
}

function isSymmetrical(pRoot) {
  return isSymmetricalTree(pRoot, pRoot);
}

function isSymmetricalTree(node1, node2) {
  //判断两个节点都是否为空
  if (!node1 && !node2) {
    return true;
  }
  //判断两个节点是否存在一个为空
  if (!node1 || !node2) {
    return false;
  }
  //判断两个节点是否相同
  if (node1.val != node2.val) {
    return false;
  }
  return isSymmetricalTree(node1.left, node2.right) && isSymmetricalTree(node1.right, node2.left);
}

console.log(isSymmetrical(symmetricalTree));
console.log(isSymmetrical(binaryTree));
```

### 选择排序

```js
function selectionSort(arr) {
  let minIndex;
  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

console.log(selectionSort([1, 5, 2, 3, -1, 10]))
```

### 冒泡排序

```js
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([1, 5, 2, 3, -1, 10]))
```

### 快速排序 

```js
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let position = arr.splice(middle, 1)[0];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < position) {
      left.push(arr[i])
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), position, ...quickSort(right)];
}

console.log(quickSort([1, 5, 2, 3, -1, 10]))
```

### 循环链表判断

```js
var hasCycle = function(head) {
    if(!head || !head.next) {
        return false
    }
    let fast = head.next.next, slow = head
    while(fast !== slow) {
        if(!fast || !fast.next) return false
        fast = fast.next.next
        slow = slow.next
    }
    return true
};
```

### 扁平化数组

```js
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

function flat(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flat(arr[i]))
    } else {
      result = result.concat(arr[i])
    }
  }
  return result;
}

console.log(flat(arr))
```

## 操作系统

### 进程和线程的区别是啥

**进程是操作系统进行资源分配的最小单元，线程是操作系统进行运算调度的最小单元**

## 跨端

### JS Bridge实现原理

Javascript通知Native

* API注入，Native获取Javascript环境上下文，并在上面挂载对象或方法，让JS可以直接调用。
* URL Scheme跳转拦截
* prompt/console/alert拦截

Native通知Javascript：Native是H5的宿主，因此有更大的权限，可以直接通过WebView API执行JS代码。
