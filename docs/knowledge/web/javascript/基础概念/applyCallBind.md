---
title: apply、call和bind
---

# apply、call和bind

这三者的实现差不多，bind实现有一点点不一样，都可以实现this的改变。

## apply

思路就是：让函数被我们传入的thisArg调用，那么函数的this就指向调用者。

```js
Function.prototype.Apply = function (thisArg, args = Symbol.for('args')) {
  console.dir(this); // this为这个方法的调用者 => foo 函数
  const fn = Symbol('fn'); // 生成一个不重复的键
  thisArg[fn] = this || window; // 把foo函数作为传入this的一个方法
  args === Symbol.for('args')
  	? thisArg[fn]()
   	: thisArg[fn](...args); // 调用方法，传参
  delete thisArg[fn]; // 使用完删除
}
const name = 'foo';
const age = 5;
function foo(age, height) {
  console.log(this.name); // obj
  console.log(age); // 3
  console.log(height); // null
}
const obj = {
  name: 'obj',
  age: 3
};
foo.Apply(obj, [obj.age, null]);
```

## call

基本思路同apply，让传入的thisArg调用函数从而改变this指向，只是传参的形式需要改变。

```js
Function.prototype.Call = function (thisArg) {
  console.dir(this); // this为这个方法的调用者 => foo 函数
  const fn = Symbol('fn'); // 生成一个不重复的键
  thisArg[fn] = this || window; // 把foo函数作为传入this的一个方法
  const args = Array.from(arguments).slice(1);
  args.length ? thisArg[fn](...args) : thisArg[fn](); // 调用这方法，传参
  delete thisArg[fn];
}
const name = 'foo';
const age = 5;
function foo(age, height) {
  console.log(this.name); // obj
  console.log(age); // 3
  console.log(height); // null
}
const obj = {
  name: 'obj',
  age: 3
};
foo.Call(obj, obj.age, null);
```

## bind

bind函数要能够返回严格绑定this与参数后的函数，调用这个返回的函数时，有可能还会传入参数，那么需要拼接参数。

```js
Function.prototype.Bind = function (thisArg) {
  const fn = Symbol('fn'); // 生成一个不重复的键
  thisArg[fn] = this || window; // 把foo函数作为传入this的一个方法
  const f = thisArg[fn]; // 复制一份函数
  delete thisArg[fn]; // 删除原来对象上的函数，但保留了this指向
  const args = Array.from(arguments).slice(1);
  return function () {
    const arg = args.concat(...arguments); // 拼接参数
    f(...arg);
  };
}
const name = 'foo';
const age = 5;
const height = 4;
function foo(age, height) {
  console.log(this.name); // obj
  console.log(age); // 3
  console.log(height); // 2
}
const obj = {
  name: 'obj',
  age: 3
};
foo.bind(obj, obj.age)(2);
```

## 深入浅出

在`javascript`中，`call`和`apply`都是为了改变某个函数运行时的**上下文**(Context)而存在的，即改变函数体内部的this指向。

`javascript`一大特点是，函数存在『定义时上下文』和『运行时上下文』以及『上下文可以改变』这样的概念。

举一个例子：

```js
function fruits() {}

function.prototype = {
  color: "red",
  say: function () {
    console.log("My color is " + this.color);
  }
}

const apple = new fruits();
apply.say(); // output: My color is red
```

但是，如果我们有一个对象`banana = {color: "yellow"}`，我们不想对它也定义say方法，那么我们就可以通过call、apply来使用apple的say方法。

```js
const banana = {
  color: "yellow"
};

apply.say.call(banana); // output: My color is yellow
apply.say.apply(banana); // output: My color is yellow
```

所以，可以看出`call`和`apply`是为了动态改变`this`而出现的。

### apply、call的区别

对于apply和call二者而言，作用完全一样，只是接受参数的方式不太一样。

例如，有一个函数定义如下：

```js
const func = function (arg1, arg2) {};
```

就可以通过如下方式来调用：

```js
func.call(this, arg1, arg2);
func.apply(this, [arg1, arg2]);
```

其中`this`是你想指定的上下文，它可以是任何一个`javascript`对象(javascript中一切皆对象)，call需要把参数**按顺序传递**进去，而apply则是把**参数放在数组**里。

一般来说这两者使用场景如下：

* call：当参数明确时
* apply：当参数不明确时，函数内部通过`arguments`来遍历参数

举点例子，来加深印象。

#### 数组之间追加

```js
const array1 = [12, "foo", [name: "Joe"], -2458];
const array2 = ["Doe", 555, 100];
Array.prototype.push.apply(array1, array2);
// array1的值为
// output: [12, "foo", [name: "Joe"], -2458, "Doe", 555, 100]
```

#### 获取数组中的最大值和最小值

```js
const numbers = [5, 458, 120, -215];
const maxInNumbers = Math.max.apply(Math, numbers); // 458
const maxInNumbers = Math.max.call(Math, 5, 458, 120, -215); // 458
```

numbers本身没有`max`方法，但是`Math`有，我们就可以借助call或apply使用其方法。

#### 验证类型是否为数组

```js
function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}
```

#### 类(伪)数组使用数组方法

```js
const domNodes = Array.prototype.slice.call(document.getElementsByTagName("*"));
```

`javascript`中存在一种名为伪数组的对象结构。比如`arguments`等，其不能应用`Array`下的方法。

但我们可以将其转换为真正的数组，这样就可以运用`Array`下的方法。

### 深入理解运行apply、call

下面借用一道面试题，来更深入理解apply和call。

定义一个log方法，让它可以代理`console.log`方法，常见的解决方法是：

```js
function log(msg) {
  console.log(msg);
};

log(1); // output: 1
log(1, 2); // output: 1
```

上面方法能解决最基本的需求，但是当传入参数的个数是不确定的时候，上面的方法就失效了，这个时候可以考虑使用apply和call。

这里因为**参数不确定**，所以使用apply是最好的。代码如下：

```js
function log() {
  console.log.apply(console, arguments);
}

log(1); // output: 1
log(1, 2); // output: 1 2
```

接下来的要求是给每一个log消息都添加一个`(app)`的前缀，比如：

```js
log("hello world"); // output: (app) hello world
```

怎么做比较优雅呢？这个时候需要想到`arguments`参数是个伪数组，通过`Array.prototype.slice.call`转化为标准数组，再使用数组方法`unshift`，像这样：

```js
function log() {
  const args = Array.prototype.slice.call(arguments);
  args.unshift('(app)');
 
  console.log.apply(console, args);
};
```

### bind详解

bind方法与apply和call类似，也可以改变函数体内`this`的指向。

在常见的单体模式中，通常我们会使用`_this`、`that`、`self`等保存`this`，在改变上下文之后我们可以继续引用它， 像这样：

```js
const foo = {
    bar: 1,
    eventBind: function() {
        const _this = this;
        $('.someClass').on('click', function(event) {
            console.log(_this.bar);     // 1
        });
    }
};
```

由于`javascript`特有机制，上下文环境在`eventBind`过渡到`$('.someClass')`发送了改变，通过上述方式来保存`this`是没什么问题的，当然使用`bind`可以更加优雅的解决这个问题。

```js
const foo = {
    bar: 1,
    eventBind: function() {
        $('.someClass').on('click', function(event) {
            console.log(this.bar); // 1
        }.bind(this));
    }
};
```

在上述代码里，bind创建了一个函数，当这个click事件绑定在被调用的时候，它的`this`关键词会被设置成被传入的值。

再来一个简单的栗子：

```js
const bar = function() {
  console.log(this.x);
};

const foo = {
  x:3
};

bar(); // undefined
var func = bar.bind(foo);
func(); // 3
```

这里我们创建了一个新的函数func，当使用`bind`创建一个绑定函数之后，它被执行的时候，它的`this`会被设置成foo，而不是像我们调用bar时的全局作用域。

有个有趣的问题，如果连续bind两次，亦或者是连续bind三次那么输出的值是什么呢？像这样：

```js
const bar = function(){
  console.log(this.x);
};
const foo = {
  x:3
};
const sed = {
  x:4
};

var func = bar.bind(foo).bind(sed);
func(); // 3
 
const fiv = {
    x:5
};
var func = bar.bind(foo).bind(sed).bind(fiv);
func(); // 3
```

答案是，两次都将输出3，而非期待中的4和5。

原因是，在`javascript`中，多次bind是无效的。更深层次的原因， bind的实现，相当于使用函数在内部包了一个call、apply。

第二次bind相当于再包住第一次bind，故第二次以后的bind是无法生效的。

### apply、call、bind比较

那么apply、call、bind三者相比较，之间又存在什么异同呢？何时使用apply、call，何时使用bind呢？

举一个例子：

```js
const obj = {
  x: 81
};

const foo = {
  getX: function() {
    return x;
  }
};

console.log(foo.getX.bind(obj)()); // output: 81
console.log(foo.getX.call(obj)); // output: 81
console.log(foo.getX.apply(obj)); // output: 81
```

区别是，当你希望改变上下文环境之后并非立即执行，而是回调执行的时候，使用bind方法。

而apply、call则会立即执行函数。

## 总结

* apply、call、bind三者都是用来改变函数的`this`对象的指向
* apply、call、bind三者第一个参数都是`this`要指向的对象，也就是想指定的上下文
* apply、call、bind三者都可以利用后续参数传参
* bind返回对应函数，以便稍后调用；apply、call则是立即调用