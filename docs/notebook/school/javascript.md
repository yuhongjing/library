# JAVASCRIPT

## JS底层原理
### JS是如何实现继承,作用域链,作用域,变量提升
### NEW的过程做了什么
### JS原型链的理解,prototype和__proto__的区别
### JS的基础数据类型和引用数据类型有哪些及其区别
### 什么是闭包,优缺点,特征,执行过程以及应用
### JS垃圾回收机制
### JS继承的多种方式,组合继承的缺点
### 异步机制,宏任务,微任务,异步完成后的才执行的函数应该放在哪里
### 内存泄露及销毁
### 作用域链
### 闭包的this指向谁
### JS内存分配
### JS运行环境
### 一个函数new一下和直接调用的区别

## 基础知识
### Object.prototype.toString与Object.toString的区别,直接toString有什么缺点
### 设计模式
### Typeof判断类型有哪些
js基本类型有6种:
* number
* string
* boolean
* null
* undefined
* symbol(ES6新增)

typeof检查数据能返回的7种类型为: 
* undefined
* object
* number
* boolean
* string
* function
* symbol(ES6新增)

::: warning 注意
typeof不能返回null类型,null被归在了object内了，这是一个古老的JS的bug。  
具体原因查阅[MDN typeof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)  
:::

::: tip 提示
typeof对于不识别的数据都返回为object。  
例如Array(数组),Date(日期)等返回object,就不能识别数据的真正类型。    
所以typeof返回的数据类型，并不一定是真正的数据类型。
:::

### 正则表达式
### MVVM,MVP,MVC的区别，MVVM框架有哪些
### 变量类型隐式转换规则
### 事件委托,事件冒泡以及添加事件的方式和区别
### 嵌套的div,如何确定鼠标点击的是哪个div
### 获取元素的方式
JS获取元素的方式是通过两种选择器:  
* getElementBy
* querySelector

**两种选择器的区别**   
1. query属于W3C中的Selector API规范,get属于W3C中的DOM规范
2. query是静态集合(不随文档改变),get属于动态集合(随文档改变)
3. query适合搜索多层元素,get适合搜索单层元素

### 为什么JS是单线程的,多线程有什么问题
JS是单线程的，纯属是为了操作简单。 　   
试想一下，如果JS是多线程的。  
同一时间，两个JS操作同一个DOM，浏览器该如何控制呢？  
例如JS线程一让元素消失,JS线程二让元素出现,那么浏览器到底是让元素消失还是出现呢？  
如果元素出现，那么JS线程一的后续代码就出现了冲突(因为元素应该消失的),反之亦然。  
因此为了DOM的操作简单，JS就设计成为了单线程。

### 防抖节流
### 原生js如何实现路由
### setTimeout和Promise区别,谁先执行,setTimeout异步执行原理
### 如何理解前后端分离的开发理念
### 如何理解JS以及PY这类脚本语言的概念，他们和java和c++有什么不同
### 强类型与弱类型语言的区别
### JavaScript中获取dom和创建结点的方法

## ES6语法相关
### ES6语法,特征,新增的数据类型
### Promise是什么?实现一个,状态如何转换
### Class继承
### let,const,var的区别
**const**   
const是ES6新增的关键字,作用是声明一个只读的常量,一旦声明即不可修改(注意：仅仅是不可修改)。  
const和let一样是属于块级作用域,不存在变量提升。    
```js
    const a;  // 报错必须初始化

    const b = 1; // 声明成功
    b = 2; // 报错，不能修改

    const c = {};
    c.b = 1; // 赋值成功
    c.b = 2; // 报错
```
::: warning 注意
const声明常量时必须初始化！！  
const常量只有修改值才会报错，新增值是不会报错的。
:::

**let**  
let是ES6新增的关键字,用于声明变量和var功能一样,唯一的区别是let是块级作用域。  
let也不存在变量提升。  
```js
    function test() {
        var a = 1;
        let b = 2; // 离开函数后，就会注销b
    }
    test(); // 执行函数
    console.log(a); // 输出1
    console.log(b); // 输出undefined
```

**var**  
var是声明变量的关键字,用于声明变量,具有变量提升的概念。  
变量提升如下: 
```js
    function test() {
        // var a;   这就是变量提升:所有的var声明变量，其声明相当于都自动提升到最前面。
        console.log(a); // 输出undefined  相当于已经声明但是没有值  
        console.log(b); // 报错,未声明变量
        var a = 1;
        let b = 2;
    }
    test();
```

### Object.assign的用法
`Object.assign`的功能是将一个或多个对象拷贝到目标对象，并返回目标对象。  
内容比较多,详情可查阅[MDN Object.assign](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)     

例子如下:  
```js
// 可以将对象拷贝到一个目标对象内
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }

var obj1 = { a: 1 };
var copy1 = Object.assign({ b: 2 }, obj1);
console.log(copy1); // { a: 1, b: 2 }

// 如果目标值和拷贝值重复,就回覆盖目标值
var obj2 = { a: 1 };
var copy2 = Object.assign({ a: 2 }, obj2);
console.log(copy2); // { a: 1 }

// 后续相同的值总会覆盖前面的值
var obj3 = { a: 1 };
var obj4 = { a: 3 };
var copy3 = Object.assign({ a: 2 }, obj3, obj4);
console.log(copy3); // { a: 3 }
```

::: warning 注意
因为`Object.assign`是拷贝属性值,所以深拷贝也只拷贝引用值。  
:::
例如:  
```js
var obj = { a: 1, b: {c: 1}};
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1, b: {c: 1}};
// 改变copy浅层的值
copy.a = 2;
// 改变后,源对象不受影响,拷贝成功
console.log(obj); // { a: 1, b: {c: 1}};

// 改变copy深层的值
copy.b.c = 2;
// 改变后,源对象也改变了,说明这里是拷贝的一个引用,并不是真正的值
console.log(obj); // { a: 1, b: {c: 2}};
```
::: tip 提示
`Object.assign`通常适用于浅拷贝
:::

**总结**  

`Object.assign`的功能主要有如下:
* 复制对象(浅拷贝)
* 合并对象(相同属性覆盖)

### 箭头函数和普通函数this区别
### 数组的常用方法
* 连接数组元素 [Array.join](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
* 数组逆序 [Array.reverse](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
* 数组排序 [Array.sort](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
* 合并数组 [Array.concat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
* 截取数组 [Array.slice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
* 查找元素值 [Array.find](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
* 查找元素下标 [Array.findIndex](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex)
* 填充数组 [Array.fill](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
* 插入删除数组元素 [Array.splice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
* 数组最后添加元素 [Array.push](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
* 数组最后删除元素 [Array.pop](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
* 数组最前添加元素 [Array.unshift](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
* 数组最前删除元素 [Array.shift](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)


### Promise实现串行调用，判断多个图片异步加载完成
### 什么时候使用Generator而不适合async
### 箭头函数,优缺点,通过对象.方法调用的箭头函数里面this指向什么，如何改变指向

## 请求数据和跨域相关
### 从后台获取数据的方式
### 原生ajax对象,使用Promise对象封装
### 长轮询,短轮询
### 什么是跨域,如何判断跨域,跨域的方法有哪些
### 跨域携带cookies
### 什么是Jsonp,jsonp返回的内容
### CORS请求头的配置
### 不通过http如何传输数据

## 插件,算法和应用
### 遍历数组，对象
### 对象深拷贝
### 一个列表，实现点击某个li标签，弹出元素内容
### 寻找数组缺失数
一个数组，长度99位，元素是1-100里面的值，数组无序且不重复，如何最快的寻找到缺1-100里面的那个值
### 原生javascript封装一个ajax方法
### 数组reduce方法实现去重
### 随机乱序数组
### 兼容IE和谷歌的事件绑定
### 原生js实现滚动效果
### Js的类型判断有几种方式，区别，原理，使用场景
### Bind,call,apply的原生实现
### 实现轮播图
### 尽可能多的方式实现数组去重
### 寻找数组最大数
### 实现一定时间内时间只触发一次
### 实现队列函数(先进先出),100毫秒后打印1,200毫秒后打印2以此类推
### 实现类似模板字符串的功能
### 合并有序数组
### 九九乘法表
### JavaScript字符串翻转
### URL解析的多种方式
### 时间显示，每分钟更新时间
### 数组中出现频率前K和K个值（要求从KN的复杂度降到N复杂度）
### 原生JavaScript实现可复用蒙层弹窗
### 实现es6中的promise
### 实现es6中的generator
