---
title: this与对象原型
---

# this与对象原型

章节目录：

* [this是什么](#this是什么)
* [this豁然开朗!](#this豁然开朗)
* [对象](#对象)
* [混淆类的对象](#混淆类的对象)
* [原型](#原型)
* [行为委托](#行为委托)
* [附录](#附录)

## this是什么

JavaScript中最令人困惑的机制之一就是`this`关键字。它是每个函数作用域中自动定义的特殊标识符关键字，但即便是老练的JavaScript开发者也会时常对它的指向感到疑惑。

> 任何足够**先进**的技术都跟魔法没有区别。

但JavaScript的`this`机制实际上没有*那么*先进。

### 为什么要用`this`？

`this`如此令人费解，那么为什么我们还需要使用这种机制呢？

首先让我们看看`this`为什么这么有用，展示`this`的动机和用途：

```js
function identify() {
  return this.name.toUpperCase();
}

function speak() {
  var greeting = "Hello, I'm " + identify.call(this);
  console.log(greeting);
}

var me = {
  name: "Kyle"
};

var you = {
  name: "Reader"
};

identify.call(me); // KYLE
identify.call(you); // READER

speak.call(me); // Hello, I'm KYLE
speak.call(you); // Hello, I'm READER
```

如果这个代码段*如何*工作让你困惑，不要担心！我们之后就会讲解它。

这个代码片段允许`identify()`和`speak()`函数对多个*环境*对象进行复用，而不是针对每个对象定义函数的分离版本。

与使用`this`相反，你也可以明确地将环境对象传递给`identify()`和`speak()`。

```js
function identify(context) {
  return context.name.toUpperCase();
}

function speak(context) {
  var greeting = "Hello, I'm " + identify(context);
  console.log(greeting);
}

identify(you); // READER
speak(me); // Hello, I'm KYLE
```

然而，`this`机制提供了更优雅的方式来隐含地『传递』一个对象引用，导致更加干净的API设计和更容易的复用。

你的使用模式越复杂，你就会越清晰的看到：将执行环境作为一个明确参数传递，通常比传递`this`执行环境要乱。当我们探索对象和原型时，你将会看到一组可以自动引用恰当执行环境对象的函数是多么有用。

### 困惑

下面我们将要分析`this`是如何*实际*工作的，但首先我们要摒弃一些误解——它实际上*不是*如何工作的。

开发者根据字面猜测"this"的意思，通常会有两种臆测，但都是不对的。

#### 它自己

第一种常见的倾向是认为`this`指向函数自己。至少，这是一种语法上的合理推测。

为什么你想要在函数内部引用它自己？最常见的理解是递归这样的情形，或者是一个在第一次被调用时会解除自己绑定的事件处理器。

初次接触JS机制的开发者们通常认为，将函数作为一个对象，可以让你在方法调用之间存储**状态**(属性中的值)。这当然是可能的，而且有一些有限的用处，但是这本书的其余部分将会阐述许多其它的模式，提供比函数对象*更好*的地方来存储状态。

接下来我们来分析一个模式，来展示`this`是如何不让一个函数像我们假设的那样，得到它自身的引用的。

思考如下代码，我们视图追踪函数`foo`被调用了多少次：

```js
function foo(num) {
  console.log("foo: " + num);

  // 追踪`foo`被调用了多少次
  this.count++;
}

foo.count = 0;

var i;

for (i = 0; i < 10; i++) {
  if (i > 5) {
    foo(i);
  }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// `foo`被调用了多少次？
console.log(foo.count); // 0 -- 这是啥情况？
```

`foo.count`依然是`0`，即便四个`console.log`语句告诉我们`foo`函数实际被调用了四次。问题就来自对`this`的含义进行了**过于字面化**的解释。以为`foo`中的`this`就是指向`foo`自己，实际上并不是。

当代码执行`foo.count = 0`时，它确实向函数对象`foo`添加了一个`count`属性。但是对于函数内部的`this.count`引用，`this`其实**根本就不**指向那个函数对象，虽然属性名称一样，但根对象不同，因而产生了混淆。

许多开发者不愿深究探明`this`的工作原理，而是选择回避这个问题，转向一些其它的另类解决方法，比如创建另一个对象来持有`count`属性。

```js
function foo(num) {
  console.log("foo: " + num);

  // 追踪`foo`被调用了多少次
  data.count++;
}

var data = {
  count: 0
};

var i;

for (i = 0; i <10; i++) {
  if (i > 5) {
    foo(i);
  }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// `foo` 被调用了多少次？
console.log( data.count ); // 4
```

虽然这种方式『解决』了问题，但不幸的是它忽略了真正的问题——缺乏对于`this`的含义和其工作方式上的理解，反而退回到了一个熟悉的舒适区：词法作用域。

想从函数对象内部引用它自己，一般来说仅通过`this`是不够的。你通常需要通过一个指向它的词法标识符得到函数对象的引用。

考虑这两个函数：

```js
function foo() {
  foo.count = 4; // `foo`引用自己
}

setTimeout(function () {
  // 匿名函数，无法引用自己
}, 10);
```

第一个函数，称为『命名函数』，`foo`是一个引用，可以用于在它内部引用自己。

第二个例子中，传递给`setTimeout`的是匿名函数，所以没有办法引用自己。`callee`已废弃，就不谈论了。

因此，对于我们上面的例子来说，另一个『好用的』的另类解决方案就是在每一个地方都使用`foo`标识符作用函数对象的引用，而根本不使用`this`：

```js
function foo(num) {
	console.log("foo: " + num);

	// 追踪`foo`被调用了多少次
	foo.count++;
}

foo.count = 0;

var i;

for (i = 0; i < 10; i++) {
	if (i > 5) {
		foo(i);
	}
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// `foo` 被调用了多少次？
console.log(foo.count); // 4
```

然而，这种方法也类似地回避了对`this`的*真正*理解，而且完全依靠变量`foo`的词法作用域，。

还有一种解决问题的方法是强迫`this`指向`foo`函数对象：

```js
function foo(num) {
	console.log("foo: " + num);

	// 追踪`foo`被调用了多少次
	// 注意：由于`foo`的被调用方式(见下方)，`this`现在确实是`foo`
	this.count++;
}

foo.count = 0;

var i;

for (i = 0; i < 10; i++) {
	if (i > 5) {
		// 使用`call(..)`，我们可以保证`this`指向函数对象(`foo`)
		foo.call(foo, i);
	}
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// `foo` 被调用了多少次？
console.log(foo.count); // 4
```

**与回避`this`相反，我们更接受这种方案**。我们后面会完整的讲解这样的技术*如何*工作。

#### 它的作用域

对`this`含义的第二常见误解就是：它指向了函数的作用域。这是一个刁钻的问题，因为在某种意义上它有正确的部分，而在另外一种意义上，它是严重的误导。

明确地说，`this`不会以任何方式指向函数的**词法作用域**。作用域好像是一个将所有可用标识符作为属性的对象，这从内部来说是对的，但是JavaScript代码不能访问作用域『对象』，它是**引擎**内部实现的。

考虑下面代码，它(失败的)企图跨越这个边界，用`this`来隐含地引用函数的词法作用域：

```js
function foo() {
  var a = 2;
  this.bar();
}

function bar() {
  // 他以为this指向了foo的词法作用域对象 
  // 但是 ****** this不能指向词法作用域对象 ******
  // 事实上，当前的this指向全局对象
  console.log(this.a);
}

foo(); // undefined
```

首先，试图通过`this.bar()`来引用`bar()`函数。它几乎可以说是*碰巧*能够工作，我们过一会儿再解释它是*如何*工作的。调用`bar()`最自然的方式是省略开头的`this.`，而仅使用标识符进行词法引用。

然而，写下这段代码的开发者试图用`this`在`foo()`和`bar()`的词法作用域间建立一座桥，使得`bar()`可以访问`foo()`内部作用域的变量`a`。**这样的桥是不可能的**。你不能使用`this`引用在词法作用域中查找东西，这是不可能的。

每当你感觉自己正在试图使用`this`来进行词法作用域的查询时，提醒你自己：**这里没有桥**。

### 什么是this?

前面已经列举了两种不正确的臆想，现在让我们把注意力转移到`this`机制是如何真正工作的。

`this`不是编写时绑定，而是运行时绑定。它依赖于函数调用的上下文条件。`this`绑定与函数声明的位置没有任何关系，而与函数被调用的方式紧密相连。

当一个函数被调用时，会建立一个称为**执行环境**的活动记录。这个记录包含函数是从何处(调用栈——call-stack)被调用的，函数是*如何*被调用的，被传递了什么参数等信息。**这个记录的属性之一，就是在函数执行期间将被使用的`this`引用。**

## this豁然开朗

在第一章中，我们摒弃了对`this`的误解，知道`this`是一个完全根据*调用点*(函数是如何被调用的)而为每次函数调用建立的绑定。

### 调用点(Call-site)

为了理解`this`绑定，我们不得不理解调用点：函数在代码中被调用的位置(*不是被声明的位置*)。我们必须了解：`this`指向什么？

一般来说寻找调用点就是：『找到一个函数是在哪里被调用的』，但并不是所有情况都如此，某些特定的编码模式会使得*真正*的调用点变得不那么明确。

考虑*调用栈(call-stack)*(使我们到达当前执行位置而被调用的所有方法的堆栈)是十分重要的。**我们关心的调用点就位于当前执行中的函数之前的调用**。

下面来展示一下调用栈和调用点：

```js
function baz() {
  // 调用栈是 baz
  // 调用点是 global scope 全局作用域
  console.log("baz");
  bar(); // bar 调用点
}

function bar() {
  // 调用栈 baz -> bar
  // 调用点是 baz
  console.log("bar");
  foo(); // foo 调用点
}

function foo() {
  // 调用栈是 baz -> bar -> foo
  // 调用点是 bar
  console.log("foo");
}

baz(); // baz调用点
```

**在分析代码寻找真正的调用点时要小心，因为它是影响`this`绑定的唯一因素。**

::: tip 提示

通过JS调试器，可以很方便获取当前调用栈及其信息。

:::

### 仅仅是规则

现在我们将注意力转移到调用点*如何*决定在函数执行期间`this`指向哪里。

你必须考察调用点并判断4种规则中的哪一种适用。首先我们来介绍4种规则，然后展示多种规则适用于调用点时，优先采用哪一个。

#### 默认绑定(Default Binding)

第一个规则源于函数调用的最常见的情况：`独立函数调用`。可以认为这种`this`规则是在没有其它规则适用时的默认规则。

思考下面代码段：

```js
function foo() {
  console.log(this.a);
}

var a = 2;

foo(); // 2
```

第一点需要注意的就是，全局作用域中的声明变量，也就是`var a = 2`，是全局对象的同名属性。

第二点，`foo()`被调用时，`this.a`解析为全局变量`a`。为什么？因为这种情况下，对此方法调用的`this`实施了*默认绑定*，所以使`this`指向了全局对象。

我们怎么知道这里适用*默认绑定*？我们需要考察调用点看看`foo()`是如何被调用的。在我们的代码段中，`foo()`是被一个直白的，毫无修饰的函数引用调用的。所以*默认绑定*在这里适用。

如果`strict mode`在这里生效，那么对于*默认绑定*来说全局对象是不合法的，所以`this`会被设置为`undefined`。

```js
function foo() {
  "use strict";

  console.log(this.a);
}

var a = 2;

foo(); // TypeError: `this` is `undefined`
```

非`strict mode`，*默认绑定*的全局对象是**唯一**合法的。

#### 隐含绑定(Implicit Binding)

第二个规则是：调用点是否有一个环境对象(context object)，也成为拥有者(owning)或者容器(containing)对象，虽然这些名词可能有些误导人。

思考下面代码：

```js
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo
};

obj.foo(); // 2
```

首先，注意`foo()`被声明然后作为引用属性添加到`obj`上，无论`foo()`是一开始就在`obj`上被声明，还是后来作为引用添加的，这个**函数**都不被`obj`所真正『拥有』或『包含』。

然而，调用点*使用*环境来**引用**函数，所以你*可以说*`obj`对象在函数被调用的时间点上『拥有』或『包含』这个**函数引用**。

无论你怎么称呼这个模式，在`foo()`被调用的位置上，它被冠以一个指向`obj`的对象引用。当一个方法引用存在于一个环境对象时，*隐含绑定*规则会说：是这个对象应当被用于这个函数调用的`this`绑定。

因为`obj`是`foo()`调用的`this`，所以`this.a`就是`obj.a`的同义词。

只有对象属性引用链的最后一层是影响调用点的。比如：

```js
function foo() {
  console.log(this.a);
}

var obj2 = {
  a: 42,
  foo: foo
};

var obj1 = {
  a: 2,
  obj2: obj2
};

obj1.obj2.foo(); // 42
```

##### 隐含丢失(Implicitly Lost)

`this`绑定最常见的问题就是*隐含绑定*丢失，这意味着它会退回到*默认绑定*，根据`strict mode`状态，结果为全局对象或`undefined`。

思考如下代码：

```js
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo
};

var bar = obj.foo; // 函数引用
// 等同于
// var bar = foo; 

var a = "oops, global"; // `a`也是一个全局对象的属性

bar(); // "oops, global"
```

尽管`bar`似乎是`obj.foo`的引用，但实际上它仍是`foo`的引用。并且，调用点在`bar()`，是一个直白，毫无修饰的调用，因此*默认绑定*适用于这里。

还有一种更容易让人产生困扰的情况，就是传递回调函数时：

```js
function foo() {
  console.log(this.a);
}

function doFoo(fn) {
  // `fn`只不过是`foo`的另一个引用
  fn(); // 调用点
}

var obj = {
  a: 2,
  foo: foo
};

var a = "oops, global"; // `a`也是一个全局对象的属性

doFoo(obj.foo); // "oops, global"
// 等同于
// doFoo(foo);
```

参数传递仅仅是隐式赋值，我们传递一个函数，其本质是隐式的引用赋值，所以最终结果和前一个代码段一样。

那么接收的函数不是自定义，而是语言内建的呢？没有区别，结果是一样的。

```js
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo
};

var a = "oops, global"; // `a`也是一个全局对象的属性

setTimeout(obj.foo, 100); // "oops, global"
```

`setTimeout`的实现大概如下：

```js
function setTimeout(fn, delay) {
  // （通过某种方法）等待`delay`毫秒
  fn(); // 调用点
}
```

如上所示，回调函数很容易丢掉`this`绑定。

因为你没法控制回调函数执行，所以无法控制其`this`绑定，不过，接下来我们将学习一种可以*固定*`this`的办法，来解决这个问题。

#### 明确绑定

第三个规则是：明确绑定。JavaScript每个函数都拥有`call()`和`apply()`方法，适用这两种方法可以指明函数的绑定。我们称这种方式为**明确绑定(explicit binding)**。

考虑如下代码：

```js
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2
};

foo.call(obj); // 2
```

通过`foo.call()`使用*明确绑定*来调用`foo`，允许我们强制函数的`this`指向`obj`。

如果你传递一个简单基本类型值(`string`、`boolean`或`number`类型)作为`this`绑定，那么这个值会被包装在它的对象类型中(分别是`new String()`、`new Boolean()`或`new Number()`)。这种操作称为『封箱』(boxing)。

不幸的是，单独依靠*明确绑定*仍然不能解决`this`丢失或三方库覆盖`this`等问题。

##### 硬绑定(Hard Binding)

但是有一个*明确绑定*的变种可以解决这个问题，思考如下代码：

```js
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2
};

var bar = function() {
  foo.call(obj);
};

bar(); // 2
setTimeout(bar, 100); // 2

// `bar`将`foo`的`this`硬绑定到`obj`
// 所以它不可以被覆盖
bar.call(window); // 2
```

首先创建了函数`bar()`，它的内部手动调用`foo.call(obj)`，强制`this`绑定到`obj`并调用`foo`，因此无论如何调用函数`bar`，它总是手动使用`obj`调用`foo`。这种绑定即明确又坚定，所以我们称之为*硬绑定*(hard binding)。

用*硬绑定*将一个函数包装起来最典型的方法，是为所有传入参数和传出的返回值创建一个通道：

```js
function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}

var obj = {
  a: 2
};

var bar = function() {
  return foo.apply(obj, arguments);
};

var b = bar(3); // 2 3
console.log(b); 5
```

另一种表达这种模式的方法是创建一个可复用的帮助函数：

```js
function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}

// 简单的`bind`帮助函数
function bind(fn, obj) {
  return function() {
    return fn.apply(obj, arguments);
  };
}

var obj = {
  a: 2
};

var bar = bind(foo, obj);

var b = bar(3); // 2 3
console.log(b); // 5
```

由于*硬绑定*是一个常用的模式，它已作为ES5的内建工具提供：`Function.prototype.bind`，像这样使用：

```js
function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}

var obj = {
  a: 2
};

var bar = foo.bind(obj);

var b = bar(3); // 2 3
console.log(b); // 5
```

`bind()`返回一个硬编码的新函数，它使用你指定的`this`环境来调用原本的函数。

::: tip 注意

在ES6中，`bind()`生成的硬绑定函数有一个`name`属性，它源自于原始的*目标函数*(target function)。举例来说：`bar = foo.bind()`应该有一个`bar.name`属性，值为`"bound foo"`，这个值应当会显示在调用栈轨迹的函数调用名称中。

:::

##### API调用的『环境』

许多库的函数和许多在JavaScript语言以及宿主环境中的内建函数，都提供一个可选参数，通常称为『环境』(context)，这种设计作为一种替代方案来确保你的回调函数使用特定的`this`而不必非得使用`bind()`。

举例说明：

```js
function foo(el) {
  console.log(el, this.id);
}

var obj = {
  id: "awesome"
};

// 使用`obj`作为`this`来调用`foo()`
[1, 2, 3].forEach(foo, obj); // 1 awesome 2 awesome 3 awesome
```

从内部来说，几乎可以确定这种类型的函数是通过`call()`或`apply()`来使用*明确绑定*以节省你的麻烦。

#### new绑定(new Binding)

第四个规则是：通过`new`绑定。要求我们重新思考JavaScript中关于函数和对象的常见误解。

传统的面向类语言中，『构造器』是附着在类上的一种特殊方法，当使用`new`操作符来初始化一个类时，这个类的构造器就会被调用。通常看起来像这样：

```js
something = new MyClass();
```

JavaScript拥有`new`操作符，而且看起来使用方式和其它面向类语言基本一样，因此许多开发者认为JavaScript的`new`机制与其它语言差不多。但是，它和传统面向对象的机制完全没有关联。

首先，我们需要定义JavaScript的『构造器』是什么？在JS中，构造器**仅仅是一个函数**，它不依附于类，也不会初始化类，甚至不是一种特殊的函数类型。它本质上只是一般的函数，只是在被`new`调用时改变了某些行为。

> 15.7.2 Number 构造器
>
> 当Number作为New表达式的一部分被调用时，它是一个构造器：它初始化这个新创建的对象。

所以说，任何函数都可以被`new`调用，使函数调用成为*构造器调用(constructor call)*。这是一个重要的区别：实际上并不存在『构造器函数』，而只有函数的构造器调用。

当通过`new`调用函数时，也就是构造器调用时，下面这些事情会自动完成：

1. 创建一个全新的对象(被构建)
2. 新构建的对象会被接入原型链(`[[prototype]]`-linked)
3. 新构建的对象被设置为函数调用的`this`绑定
4. 除非函数返回一个其他`对象`，否则*自动*返回新构建的对象

步骤1、3、4是我们现在要讨论的，第二步后续讨论。

思考如下代码：

```js
function foo(a) {
  this.a = a;
}

var bar = new foo(2);
console.log(bar.a); // 2
```

通过`new`来调用`foo()`，构建了一个新对象，且新对象作为`foo()`调用的`this`。**`new`是函数调用可以绑定`this`的最后一种方式**，我们称之为*new*绑定(new binding)。

### 一切皆有顺序

现在我们已经揭示了函数调用的四种`this`绑定规则。你需要做的就是*找到调用点然后考察哪一种规则适用于它*。但是，调用点同时满足多个规则呢？下面我们将展示出现这种情况的优先顺序实施。

很显然，*默认绑定*在四种规则中优先权是最低的，因此它先放一边。

*隐含绑定*和*明确绑定*哪一个更优先呢？我们测试一下：

```js
function foo() {
  console.log(this.a);
}

var obj1 = {
  a: 2,
  foo: foo
};

var obj2 = {
  a: 3,
  foo: foo
};

obj1.foo(); // 2
obj2.foo(); // 3

obj1.foo.call(obj2); // 3
obj2.foo.call(obj1); // 2
```

所以，*明确绑定*的优先级要高于*隐含绑定*，这意味着你应当在考察*隐含绑定*之前考察*明确绑定*是否适用。

现在，我们只需要搞清楚*new绑定*的优先级位于何处。

```js
function foo(something) {
  this.a = something;
}

var obj1 = {
  foo: foo
};

var obj2 = {};

obj1.foo(2);
console.log(obj1.a); // 2

obj1.foo.call(obj2, 3);
console.log(obj2.a); // 3

var bar = new obj1.foo(4);
console.log(obj1.a); // 2
console.log(bar.a); // 4
```

现在得出结论，*new绑定*的优先级要高于*隐含绑定*。那么你觉得*new绑定*的优先级较之于*明确绑定*是高还是低呢？

::: 注意 warning

`new`和`call`/`apply`不能同时使用，所以`new foo.call(obj1)`是不允许的，也就是不能直接对比测试*new绑定*和*明确绑定*。但是我们可以通过*硬绑定*来测试这两个规则的优先级。

:::

首先，我们回想一下*硬绑定*是如何工作的，也就是`Function.prototype.bind()`创建了一个新的包装函数，这个函数被硬编码忽略掉它自己的`this`绑定，转而手动使用我们提供的绑定。

因此，看起来很明显，*硬绑定*的优先级比*new绑定高*，而且不能被`new`覆盖。

我们校验一下：

```js
function foo(something) {
  this.a = something;
}

var obj1 = {};

var bar = foo.bind(obj1);
bar(2);
console.log(obj1.a); // 2

var baz = new bar(3);
console.log(obj1.a); // 2
console.log(baz.a); // 3
```

`bar`是硬绑定到`obj1`的，但是`new bar(3)`并**没有**像我们期待的那样将`obj1.a`变为`3`，反而，`bar`的调用**可以**被`new`所覆盖。

#### 判定this

现在，我们可以按照优先顺序来总结一下从函数调用的调用点来判定`this`的规则了。

1. 函数是通过`new`被调用的吗**(new绑定)**？如果是，`this`就是新构建的对象。

   `var bar = new foo()`

2. 函数是通过`call`或`apply`被调用**(明确绑定)**，甚至是隐藏在`bind`硬绑定之中吗？如果是，`this`就是那个被明确指定的对象。

   `var bar = foo.call(obj2)`

3. 函数是通过环境对象(也称为拥有者或容器对象)被调用的吗(**隐含绑定**)？如果是，`this`就是那个环境对象。

   `var bar = obj1.foo()`

4. 否则，使用默认的`this`(**默认绑定**)。如果在`strict mode`下，就是`undefined`，否则是`global`对象。

   `var bar = foo()`

以上，就是理解对于普通函数调用`this`绑定规则*所需的全部*。是的，几乎是全部。

### 绑定的特例

正如通常那样，对于『规则』总有一些例外。

在某些场景下`this`绑定会让人吃惊，比如在你试图实施一种绑定，然而最终得到的却是*默认绑定*规则的绑定行为。

#### 被忽略的this

如果你传递`null`或`undefined`作为`call`、`apply`或`bind`的`this`绑定参数，那么这些值会被忽略掉，取而代之的是*默认绑定*规则将适用于这个调用。

```js
function foo() {
  console.log(this.a);
}

var a = 2;

foo.call(null); // 2
```

为什么你会向`this`绑定故意传递像`null`这样的值？

常见的情况是，使用`apply()`来将一个数组散开，作为函数调用的参数。相似地，`bind()`可以柯里化参数(预设值)，也可能非常有用。

```js
function foo(a, b) {
  console.log("a: " + a + ", b:" + b);
}

// 将数组散开作为参数
foo.apply(null, [2, 3]); // a: 2, b: 3

// 用`bind()`进行柯里化
var bar = foo.bind(null, 2);
bar(3); // a: 2, b: 3
```

这两种工具要求第一个参数`this`绑定。如果目标函数不关心`this`，你就需要一个占位值，而且如上代码段展示的，`null`是一个合理的选择。

可是，在你不在意`this`绑定而使用`null`的时候，有潜在的『危险』。当你处理函数调用时，而函数内部使用了`this`引用，那么*默认绑定*就可能会引用到`global`(浏览器是`window`)对象。

显然，这样的陷阱会导致多种*非常难*诊断和追踪的Bug。

##### 更安全的this

『更安全』的做法是：为了`this`而传递一个特殊创建好的对象，这个对象保证不会对你的程序产生副作用。从网络学(或军事)上借用一个词，我们可以建立一个『DMZ』(非军事区)对象——只不过是一个完全为空，没有委托对象。

如果我们想忽略`this`绑定，而传递一个『DMZ』对象，那我们可以对于`this`的隐藏或使用将会被限制在这个空对象中，也就是将这个对象与`global`对象和副作用隔离开。

创建**完全为空的对象**的最简单方法就是`Object.create(null)`。`Object.create(null)`和`{}`很相似，但是没有指向`Object.prototype`的委托，所以它比`{}`空的更彻底。

```js
function foo(a, b) {
  console.log("a:" + a + ", b:" + b);
}

// 我们的 DMZ 空对象
var obj = Object.create(null);

// 将数组散开作为参数
foo.apply(obj, [2, 3]); // a:2, b:3

// 用`bind`进行currying
var bar = foo.bind(obj, 2);
bar(3); // a:2, b:3
```

不仅功能上更『安全』，而且代码风格更良好，它在语义上可能比`null`更清晰地表达『我让`this`为空』。

#### 间接

另一个需要注意的点是，你可以创建对函数的『间接引用』(indirect reference)，在这种情况下，当那个函数引用被调用时，*默认绑定*规则也会适用。

最常见的*间接引用*方式是通过赋值：

```js
function foo() {
  console.log(this.a);
}

var a = 2;
var o = {a: 3, foo: foo};
var p = {a: 4};

o.foo(); // 3
(p.foo = o.foo)(); // 2
```

赋值表达式`p.foo = o.foo`的*结果值*是一个指向底层函数对象的引用。因此，起作用的调用点是`foo()`，而非`p.foo()`或`o.foo()`，所以*默认绑定*适用。

#### 软化绑定(Softening Binding)

为*默认绑定*提供不同的默认值，同时保持函数可以通过*隐含绑定*或*明确绑定*技术来手动绑定`this`。

### 词法this

上述四种规则涵盖了一般函数的情况，但是ES6引入了一种不适用于这些规则的特殊函数：箭头函数(arrow-function)。

箭头函数不是通过`function`关键字声明的，而是通过大箭头操作符：`=>`。与使用四种标准的`this`规则不同的是，箭头函数从封闭它的(函数或全局)作用域采用`this`绑定。

展示一下箭头函数的词法作用域：

```js
function foo() {
  // 返回一个箭头函数
  return (a) => {
    // 这里的`this`是词法上从`foo`采用的
    console.log(this.a);
  };
}

var obj1 = {
  a: 2
};

var obj2 = {
  a: 3
};

var bar = foo.call(obj1);
bar.call(obj2); // 2，不是3
```

在`foo()`中创建的箭头函数在词法上捕获`foo()`被调用时的`this`，不管它是什么。因为`foo()`被`this`绑定到`obj1`，`bar`也将会被`this`绑定到`obj1`。箭头函数的词法绑定是不能被覆盖的(连`new`也不行)。

最常见的用法是用于回调，比如事件处理器或计时器：

```js
function foo() {
  setTimeout(() => {
    // 这里的`this`是词法上从`foo()`采用
    console.log(this.a);
  }, 100);
}

var obj = {
  a: 2
};

foo.call(obj); // 2
```

虽然箭头函数提供了除`bind`外来确保`this`的方式，但要注意它们的本质区别是使用广为人知的词法作用域来禁止了传统的`this`机制。在ES6之前，有挺多这样的模式，这些模式和ES6的箭头函数实现原理几乎一致：

```js
function foo() {
  var self = this; // 词法上捕获`this`
  setTimeout(function () {
    console.log(self.a);
  }, 100);
}

var obj = {
  a: 2
};

foo.call(obj); // 2
```

对于不想使用`bind`的人来说，`self = this`和箭头函数是不错的解决方案，但它们实际上是规避了`this`而非理解和接受它。

如果你发现你写`this`风格的代码时，都是采用这种方式来规避`this`机制，那么也许你应该：

1. 仅使用词法作用域并忘掉虚伪的`this`风格代码。
2. 完全接受`this`风格机制，包括在必要的时候使用`bind`，并尝试避开`self = this`和箭头函数的『词法this』技巧。

一个程序可以有效地同时利用两种风格的代码(词法和`this`)，但是在同一个函数内部，特别是对同种类型的查找，混合这两种机制通常是很难维护的。

## 对象

前两章，我们知道`this`绑定是根据函数调用点指向不同的对象。但对象是什么呢，为啥需要指向它？

### 语法

对象两种来源：声明(字面)形式和构造形式。

一个对象的字面语法看起来像这样：

```js
var myObj = {
  key: value
  // ...
};
```

构造形式看起来像这样：

```js
var myObj = new Object();
myObj.key = value;
```

构造形式和字面形式是完全同种类的对象，唯一的区别是你可以向字面声明一次性添加多个键值对，而构造形式，必须一个一个地添加属性。

::: warning 注意

实际场景中，大多数内建的对象，通常都会使用字面语法形式。

:::

### 类型

对象是大多数JS程序依赖的基本构件块儿。它们是JS的六种主要类型中的一种：

* `string`
* `number`
* `boolean`
* `null`
* `undefined`
* `object`

注意*简单基本类型*(`string`、`number`、`boolean`、`null`和`undefined`)自身**不是**`object`。`null`有时会被当成一个对象类型，但是这种误解源于语言Bug，它使得`typeof null`错误地返回字符串`"object"`。实际上，`null`是它自己的基本类型。

**一个常见的错误论断是"JavaScript中的一切都是对象"。这明显是不对的。**

对比来看，存在几种特殊的对象子类型，我们可以称之为*复杂基本类型*。

`function`是对象的一种子类型(技术上讲，叫做『可调用对象』)。函数在JS中被称为『头等(first class)』类型，是因为它们基本上就是普通的对象(附带有可调用的行为语义)，而且它们可以像其他普通的对象那样被处理。

数组也是一种形式的对象，带有特别的行为。数组在内容的组织上要稍稍比一般的对象更加结构化。

#### 内建对象

有几种其他的对象子类型，通常称为内建对象。其中一部分名称看起来与基础类型有着直接的联系，但事实上，它们的关系更复杂。

* `string`
* `Number`
* `Boolean`
* `Object`
* `Function`
* `Array`
* `Date`
* `RegExp`
* `Error`

对比其他语言来看，比如Java语言的`String`类，这些内建类型有着实际类型的外观，甚至是类(class)的外观。

但是在JS中，它们实际上仅仅是内建的函数。这些内建函数的每一个都可以被用作构造器(也可以使用`new`)，其结果是一个新*构建*的相应子类型的对象。例如：

```js
var strPrimitive = "I am a string";
typeof strPrimitive; // "string"
strPrimitive instanceof String; // false

var strObject = new String("I am a string");
typeof strObject; // "object"
strObject instanceof String; // true

// 考察 object 子类型
Object.prototype.toString.call(strObject); // [object String]
```

由此可知`strObject`实际上是由`String`构造器创建的对象。而`strPrimitive`不是对象，它是一个不可变的基本字面值。为了对它进行操作，比如检查长度、访问独立字符内容等，都需要一个`String`对象。

幸运的是，在必要的时候语言会自动将`"string"`基本类型强制转换为`String`对象类型，这意味着你不需要明确地创建对象。JS社区绝大部分人都**强烈推荐**尽可能地使用字面形式的值，而非使用构造的对象形式。

思考如下代码：

```js
var strPrimitive = "I am a string";

console.log(strPrimitive.length); // 13

console.log(strPrimitive.charAt(3)); // "m"
```

在这两个例子中，我们在字符串的基本类型上调用属性和方法，引擎会自动地将它强制转化为`String`对象，所以这些属性/方法可以工作。

`null`和`undefined`没有对象包装的形式，仅有它们的基本类型值。相比之下，`Date`值*仅可以*由它们的构造对象形式创建，因为它们没有对应的字面形式。

无论使用字面还是构造形式，`Object`、`Array`、`Function`和`RegExp`都是对象。虽然构造形式在某些情况下比字面形式提供更多的创建选项，但是字面形式几乎是所有人的首选。**仅仅在你需要使用额外的选项时使用构造形式**。

`Error`对象很少在代码中明示地被创建，通常在抛出异常时自动被创建。它们可以有`new Error()`构造形式创建。

### 内容

对象的内容由存储在特定命名的*位置*上(任意类型的)值组成，我们称这些值为属性。

有一个重要的事情需要注意：当我们说『内容』时，似乎暗示着这些值*实际上*存储在对象内部，但那是表面现象。引擎会根据自己的实现来存储这些值，而且通常不是把它们存储在容器对象*内部*。在容器内存储的是这些属性的名称，它们像指针(技术上讲，叫*引用(reference)*)一样指向值存储的地方。

思考如下代码：

```js
var myObject = {
  a: 2
};

myObject.a; // 2

myObject["a"]; // 2
```

为了访问`myObject`在位置`a`的值，我们需要使用`.`或`[]`操作符。`.a`语法通常称为『属性(property)』访问，而`["a"]`语法通常称为『键(key)』访问。在现实中，它们两都访问相同的*位置*，所以这些术语可以互换。现在我们将使用最常见的术语——『属性访问』。

两种语法的主要区别在于，`.`操作符后面需要一个`标识符(Identifier)`兼容的属性名，而`[".."]`语法基本可以接收任何兼容UTF-8/unicode的字符串作为属性名。举个列子，引用名为"Super-Fun!"的属性，你就不得不使用`["Super-Fun!"]`语法访问，因为`Super-Fun!`不是一个合法的`Identifier`属性名。

而且，由于`[".."]`语法使用字符串的**值**来指定位置，这意味着程序可以动态地组件字符串的值。比如：

```js
var wantA = true;
var myObject = {
  a: 2
};

var idx;

if (wantA) {
  idx = "a";
}

console.log(myObject[idx]); // 2
```

在对象中，属性名**总是**字符串。如果你使用`string`以外的(基本)类型值，它首先会被转换为字符串。这甚至包括在数组中常用于索引的数字，所以要小心不要将对象和数组使用的数字搞混了。

```js
var myObject = {};

myObject[true] = "foo";
myObject[3] = "bar";
myObject[myObject] = "baz";

myObject["true"]; // "foo"
myObject["3"]; // "bar"
myObject["[object Object]"]; // "baz"
```

#### 计算型属性名

如果需要将计算表达式*作为*键名，`myObject[]`访问方式非常有用，例如`myObject[prefix + name]`。

ES6加入了*计算型属性名*，在字面对象声明的键名位置，可以指定表达式，通过`[]`括起来：

```js
var prefix = "foo";

var myObject = {
  [prefix + "bar"]: "hello",
  [prefix + "baz"]: "world",
};

myObject["foobar"]; // hello
myObject["foobaz"]; // world
```

*计算型属性名*的最常见用法，是用于ES6的`Symbol`，是新的基本数据类型，拥有不透明不可知的值(技术上讲是一个`string`值)，使用方式如下：

```js
var myObject = {
  [Symbol.Something]: "hello world"
};
```

#### 属性(Property) vs. 方法(Method)

对象的值如果为函数，我们称之为方法。**语言规范做出了同样的区别**。

举个例子：

```js
function foo() {
  console.log("foo");
}

var someFoo = foo;

var myObject = {
  someFoo: foo
};

foo; // function foo() {}

someFoo; // function foo() {}

myObject.someFoo; // function foo() {}
```

得出结论：方法和函数没啥区别，方法并不会被对象所『拥有』。

#### 数组

数组也使用`[]`访问形式，在存储值的方式和位置上它们的组织更加结构化(存储值*类型*不限制)。数组采用*数字索引*，值被存储的位置通常称为*下标*，是一个非负整数。

```js
var myArray = ["foo", 42, "bar"];

myArray.length; // 3

myArray[0]; // "foo"

myArray[2]; // "bar"
```

数组也是对象，虽然每个索引都是正整数，甚至你还可以在数组上添加属性：

```js
var myArray = ["foo", 42, "bar"];

myArray.baz = "baz";

myArray.length; // 3

myArray.baz; // "baz"
```

注意，添加命名属性不会改变数组的`length`值。

**小心：**如果你试图在数组上添加属性，但是属性名*看起来*像一个数字，那么最终它会成为一个数字索引：

```js
var myArray = ["foo", 42, "bar"];

myArray["3"] = "baz";

myArray.length; // 4

myArray[3]; // "bar"
```

#### 复制对象

```js
function anotherFunction() {}

var anotherObject = {
  c: true
};

var anotherArray = [];

var myObject = {
  a: 2,
  b: anotherObject, // 引用，不是拷贝
  c: anotherArray, // 又是一个引用
  d: anotherFunction
};

anotherArray.push(anotherObject, myObject);
```

上面代码，因为浅拷贝会存在循环引用的问题。

一个解决方案是，JSON安全的对象，可以简单的复制对象：

```js
var newObj = JSON.parse(JSON.stringify(someObj));
```

当然，必须保证对象是JSON安全的。

ES6为浅拷贝定义了`Object.assign`：

```js
var newObj = Object.assign({}, myObject);

newObj.a; // 2
newObj.b === anotherObject; // true
newObj.c === anotherArray; // true
newObj.d === anotherFunction; // true
```

`Object.assign`的复制与单纯`=`没有任何区别，因此会影响源对象。

#### 属性描述符(Property Descriptors)

在ES5之前，JavaScript语言没有给出直接的方法考察属性性质间的区别，比如属性是否为只读。

在ES5中，所有的属性都用**属性描述符(Property Descriptros)**来描述。

考虑如下代码：

```js
var myObject = {
  a: 2
};

Object.getOwnPropertyDescriptor(myObject, "a");
// {
//   value: 2,
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
```

普通对象属性`a`的属性描述符(称为『数据描述符』)的内容要比`value`为`2`多得多。它还包含另外三个性质：`writable`、`enumerable`和`configurable`。

当我们创建一个普通属性时，可以看到属性描述符的各种性质的默认值，同时可以用`Object.defineProperty()`来添加新属性，或使用期望的性质来修改既存的属性(如果它是`configuable`的)。

举例来说：

```js
var myObject = {};

Object.defineProperty(myObject, "a", {
  value: 2,
  writable: true,
	configurable: true,
	enumerable: true
});

myObject.a; // 2
```

使用`defineProperty()`，可以手动明确地在`myObject`上添加一个直白、普通的`a`属性，一般你不会使用这个方法，除非你需要修改描述符的值。

##### 可写性

