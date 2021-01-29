`---
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

1. 函数是通过`new`被调用的吗(**new绑定**)？如果是，`this`就是新构建的对象。

   `var bar = new foo()`

2. 函数是通过`call`或`apply`被调用(**明确绑定**)，甚至是隐藏在`bind`硬绑定之中吗？如果是，`this`就是那个被明确指定的对象。

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

**小心**：如果你试图在数组上添加属性，但是属性名*看起来*像一个数字，那么最终它会成为一个数字索引：

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

在ES5中，所有的属性都用**属性描述符**(Property Descriptros)来描述。

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

##### 可写性(Writable)

`writable`控制改变属性值的能力。

思考如下代码：

```js
var myObject = {};

Object.defineProperty(myObject, "a", {
  value: 2,
  writable: false, // 不可写
  configurable: true,
  enumerable: true
});

myObject.a = 3;
myObject.a; // 2
```

如你所见，`value`属性无法修改了，如果在`strict mode`下尝试，会得到报错：

```js
"use strict";

var myObject = {};

Object.defineProperty(myObject, "a", {
  value: 2,
  writable: false, // 不可写!
  configurable: true,
  enumerable: true
});

myObject.a = 3; // TypeError
```

##### 可配置性(Configurable)

只要属性当前是可配置的，就可以使用相同的`defineProperty`工具，修改描述符定义。

```js
var myObject = {
  a: 2
};

myObject.a = 3;
myObject.a;

Object.defineProperty(myObject, "a", {
  value: 4,
  writable: true,
  configurable: false, // 不可配置!
  enumerable: true
});

myObject.a; // 4;
myObject.a = 5;
myObject.a; // 5

Object.defineProperty(myObject, "a", {
  value: 6,
  writable: true,
  configurable: true,
  enumerable: true
}); // TypeError
```

::: warning 注意

`configurable`设置为`false`是**一个单向操作，不可撤销！**

:::

`configuable: false`另外一个事情功能是阻止`delete`操作符功能。

```js
var myObject = {
  a: 2
};

myObject.a; // 2
delete myObject.a;
myObject.a; // undefined

Object.defineProperty(myObject, "a", {
  value: 2,
  writable: true,
  configurable: false,
  enumerable: true
});

myObject.a; // 2
delete myObject.a;
myObject.a; // 2
```

现在`delete`操作符失效了。

##### 可枚举性(Enumerable)

此属性控制对象是否能够枚举，使用`for..in`等。用户自定义的属性默认都是`enumberable`的，如果你想隐藏枚举，设置为`false`即可。

#### 不可变性(Immutability)

如果我们希望属性或对象不可改变，在ES5中有几种方式可以支持此功能。

重要的注意点：这几种方法创建的都是浅不可变性。也就是，它们仅影响对象和它的直属属性的性质。如果对象拥有对其他对象(数组、对象、函数)的引用，那个被引用的对象*内容*不会受到影响，依然可变。

```js
myImmutableObject.foo; // [1,2,3]
myImmutableObject.foo.push(4);
myImmutableObject.foo; // [1,2,3,4]
```

以上代码，我们希望`myImmutableObject`对象不可变。你可以使用下面一个或多个方法实现。

::: warning 注意

封印(seal)和冻结(freeze)对象，使对象值的潜在变化更加健壮。

:::

##### 对象常量(OBject Constant)

`writable: false`与`configurable: false`结合，创建作为对象属性的*常量*(不能改变，重定义或删除)

```js
var myObject = {};

Object.defineProperty(myObject, "FAVORITE_NUMBER", {
  value: 42,
  writable: false,
  configurable: false
});
```

##### 防止扩展(Prevent Extensions)

如果想防止对象被新增属性，又要保留既存属性，可以调用`Object.preventExtensions`

```js
var myObject = {
  a: 2
};

Object.preventExtensions(myObject);

myObject.b = 3;
myObject.b; // undefined
```

在`strict mode`模式下，会抛错`TypeError`。

##### 封印(Seal)

`Object.seal`创建一个『封印』对象，相当于调用了`Object.preventExtensions`并标记了`configurable: false`，所以你不能添加新属性、也不能重新配置和删除既存属性(但可以修改既存属性)。

##### 冻结(Freeze)

`Object.freeze`创建一个『冻结』对象，相当于调用了`Object.seal`并标记了`writable: false`，所以值也不可改变。

这种方法是最高级别的不可变性，因为它能阻止任何对对象或属性的改变。

你可以『深度冻结』一个对象，通过递归实现，但是有可能会影响到『共享』的对象。

#### `[[Get]]`

关于属性访问如何工作的一个重要细节。

思考如下代码：

```js
var myObject = {
  a: 2
};

myObject.a; // 2
```

`myObject.a`是一个属性访问，但它并不是仅仅在`myObject`中寻找名为`a`属性那么简单的操作。

根据语言规范，其实际上执行了`[[Get]]`操作，对对象进行默认的内建`[[Get]]`操作，会*首先*检查对象，寻找一个拥有被请求的名称的属性，找到就返回相应值。

但`[[Get]]`操作的一个重要结果是，如果通过任何方法都找不到被请求的属性值，会返回`undefined`。

```js
var myObject = {
  a: 2
};

myObject.b; // undefined
```

这个行为和通过标识符名称引用*变量不同*。如果引用了词法作用域无法解析的变量，会抛出`ReferenceError`。

```js
var myObject = {
  a: undefined
};

myObject.a; // undefined

myObject.b; // undefined
```

从*值*的角度来说，这两个引用没区别，结果都是`undefined`，但是在`[[Get]]`操作的底层，处理`.a`比`.b`要多一些潜在的『工作』。

如果仅考察结果的值，无法分别一个属性是存在并持有一个`undefined`值，还是它根本不存在。

#### `[[Put]]`

既然存在`[[Get]]`，那么肯定也就存在`[[Put]]`。

这很容易让人认为，给对象的属性赋值，将会在对象上调用`[[Put]]`来设置或创建这个属性，但实际情况不同。

调用`[[Put]]`时，它根据几个因素表现不同的行为，包括属性是否在对象中存在了。

如果属性存在，`[[Put]]`算法将会大致检查：

1. 这个属性是访问器描述符吗？**如果是，而且是setter，就调用setter**。
2. 这个属性是`writable`为`false`数据描述符吗？**如果是，strict mode抛出TypeError**。
3. 否则，正常设置属性值。

如果属性不存在，`[[Put]]`会变得更加复杂，后续`[[Prototype]]`时会回到这里讲解。

#### Getters与Setters

对象默认的`[[Put]]`和`[[Get]]`操作分别完全控制着如何设置既存或新属性的值和如何取得既存属性。

ES5引入了一个方法来覆盖这些默认操作的一部分，但不是在对象级别而是针对每个属性，而是通过`getters`和`setters`，Getter是实际上调用一个隐藏函数来取得值的属性。Setter实际上是调用一个隐藏函数来设置值的属性。

当你将一个属性定义为拥有getter或setter或两者兼备，那么它的定义就成为了『访问器描述符』(与『数据描述符』相对)。对于访问器描述符，它的`value`和`writable`性质因没有意义而被忽略，取而代之的是JS将会考虑属性的`set`和`get`性质(还有`configurable`和`enumerable`)。

思考如下代码：

```js
var myObject = {
  // 为a定义一个getter
  get a() {
    return 2;
  }
};

Object.defienProperty(
  myObject, // 目标对象
  "b", // 属性名
  { // 描述符
    // 为b定义getter
    get: function() {return this.a * 2},
    //确保b作为对象属性出现
    enumerable: true
  }
);

myObject.a; // 2
myObject.b; // 4
```

不管通过字面对象中使用`get a()`还是通过`defineProperty()`定义，我们都在对象上创建了一个没有实际值的属性，访问它们将会自动地对getter函数进行隐藏的函数调用，其返回的任何值就是属性访问的结果。

```js
var myObject = {
  // 为a定义getter
  get a() {
    return 2;
  }
};

myObject.a = 3;
myObject.a; // 2
```

因为只定义了getter，所以赋值操作会被废弃。普通属性的逻辑如下：

```js
var myObject = {
  get a() {
    return this._a_;
  }

  set a(val) {
    this._a_ = val * 2;
  }
};

myObject.a = 2;
myObject.a; // 4
```

#### 存在性(Existence)

我们前面留下一个问题，一个属性返回`undefined`，无法分辨是属性存在但值为`undefined`，还是无此属性的情况。

现在我们可以通过此方式来判断：

```js
var myObject = {
  a: 2
};

("a" in myObject); // true
("b" in myObject); // false

myObject.hasOwnProperty("a"); // true
myObject.hasOwnProperty("b"); // false
```

`in`操作符会检查属性是否存在*对象*中，或者是否存在`[[Prototype]]`链对象遍历的更高层中。相比之下，`hasOwnProperty`仅仅检查`myObject`是否拥有属性，不会查询原型链。

通过委托到`Object.prototype`，所有对象都可以访问`hasOwnProperty`。

##### 枚举(Enumeration)

先前，学习`enumerable`属性描述符性质时，只是简单解释其含义。现在来更详细的分析它。

```js
var myObject = {};

Object.defineProperty(
  myObject,
  "a",
  {enumerable: true, value: 2}
);

Object.defineProperty(
  myObject,
  "b",
  {enumerable: false, value: 3}
);

myObject.b; // 3
("b" in myObject); // true
myObject.hasOwnProperty("b"); // true

// ......

for (var k in myObject) {
  console.log(k, myObject[k]);
}

// "a" 2
```

`myObject.b`存在，但是不出现在`for...in`循环中。这是因为"enumerable"意味着『如果对象的属性被迭代时会被包含在内』。

::: warning 注意

将`for...in`在数组上使用，可能出现意外的结果，因为枚举不仅仅包含数组所有下标，还包含所有可枚举属性。

因此`for..in`循环最好仅在对象中使用，数组用`for`循环。

:::

另一个可以区分可枚举和不可枚举属性的方法是：

```js
var myObject = {};

Object.defineProperty(
  myObject,
  "a",
  {enumerable: true, value: 2}
);

Object.defineProperty(
  myObject,
  "b",
  {enumerable: false, value: 3}
);

myObject.propertyIsEnumerable("a"); // true
myObject.propertyIsEnumerable("b"); // false

Object.keys(myObject); // ["a"]
Object.getOwnPropertyNames(myObject); // ["a", "b"]
```

`propertyIsEnumerable`测试给定的属性名是否*存在*对象上，并且是`enumerable: true`。

`Object.keys()`返回一个所有可枚举属性的数组，而`Object.getOwnPropertyNames`返回一个所有属性的数组，无论能不能枚举。

`in`和`hasOwnProperty`区别在于它们是否查询`[[Prototype]]`链，而`Object.keys`和`Object.getOwnPropertyNames`都*只*考察直接给定的对象。

目前只有`in`操作符，可以查询整个`[[Prototype]]`链。

### 迭代(Iteration)

`for..in`循环迭代在一个对象上(包括`[[Prototype]]`)链所有的可迭代属性。但是你想要迭代值呢？

最典型的就是`for`循环，比如：

```js
var myArray = [1, 2, 3];

for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
// 1 2 3
```

但是这并没有迭代值，而是迭代了所有下标。如果想直接迭代值，而不是数组下标(或对象属性)呢？ES6新增了`for...of`可以解决这个问题：

```js
var myArray = [1, 2, 3];

for (var v of myArray) {
  console.log(v);
}
// 1 2 3
```

`for..of`要求被迭代目标提供迭代器对象`@@iterator`，每次循环默认调用迭代器`next()`方法。

手动尝试一下内建迭代器`@@iterator`：

```js
var myArray = [1, 2, 3];
vat it = myArray[Symbol.iterator]();

it.next(); // {value: 1, done: false}
it.next(); // {value: 2, done: false}
it.next(); // {value: 3, done: false}
it.next(); // {done: true}
```

注意：`@@iterator`本身**不是迭代器对象**，而是返回迭代器的方法。

数组虽然可以使用`for...of`循环自动迭代，但是普通对象**没有内建的`@@iterator`**。

### 混淆类的对象

经过上一章对对象的探索，现在很自然的将注意力转移到『面向对象(OO)编程』与类(class)。我们会首先考察『面向类』的设计模式，再考察『类』的机制：实例化(instantiation)、继承(inheritance)、多态(relative polymorphism)。

你会发现，这些概念不能很自然的映射到JS的对象机制上。许多JS开发者为了兼容这些机制做了挺多mixins等。

### 类理论

『类/继承』描述了一种特定的代码组织和结构形式，一种在我们的软件中对真实世界的建模方法。

OO或者面向类的编程强调数据和操作它的行为之间固有的联系，所以合理的设计是将数据和行为打包在一起(也称为封装)。在正式的计算机科学中称为『数据结构』。
#### JavaScript的类

实际上JavaScript并没有『类』。

由于类是一种设计模式，因此可以尽可能的模仿出类的行为。JS通过提供像类的语法，来满足开发者对类的需求。

虽然看起来语法是一致的，但是JavaScript机制却在抵抗你使用*类的设计模式*，因为在底层，它与正常类的工作机制完全不同。因此虽然JS语法糖『Class』把真实情况对你隐藏了起来，但是你迟早会面对现实——其他语言类与JS模拟类的不同。

总而言之，类是软件设计的可选模式。我们接下来会探索，使用类所需付出的代价。

### 类机制

在许多面向类语言中，『标准库』会提供『栈』数据结构，用`Stack`类表示，这个类拥有一组变量来存储数据，还拥有一组可公开访问的行为，这些行为使你的代码有能力与数据互动。

但在这样的语言中，你不能直接在`Stack`上操作，必须**实例化**这个`Stack`类。

#### 建筑物

传统的『类』和『实例』好比建筑物的建造。

建筑师规划出建筑的所有性质：宽、高、窗户、墙壁甚至天花板等。但她并不关心建筑物会被建造在*哪里*，也不关心这栋建筑有多少拷贝等。

同时她也不关心这栋建筑的内容——家具、墙纸、吊扇等。她仅关心建筑物含有何种结构。

她生成的建筑学上的蓝图仅仅是建筑物的『方案』，并不实际构成真正的建筑物。为了构建真正的建筑物，需要建筑工人根据方案精确的*建造*这栋建筑物，相当于工人把方案中意图的性质*拷贝*到物理建筑中。

这栋建筑就是蓝图的一个物理实例，一个完美的*拷贝*。然后建筑工人可以移动隔壁再建造另一个拷贝。

建筑物与蓝图间的关系是间接的。你可以检视蓝图来了解建筑物是如何构造的。但是仅有蓝图是不够的，如果你想打开一扇门，就不得不走进建筑物本身(在纸上你是没办法打开一扇门的)——蓝图仅仅是用来表示门的位置而画在纸上的线条。

一个类就是一个蓝图。为了实际得到一个对象并与之互动，我们必须从类中建造(实例化)某些东西。这种『构建』的最终结果是一个对象，通常称为一个『实例』，我们可以按需要调用它的方法，访问它的公共数据属性。

**这个对象是所有在类中被描述的特性的拷贝**。

类和对象实例的关系为：**一个类通过拷贝操作被实例化为对象的形式**。

#### 构造器(Constructor)

类的实例由类的一种特殊方法构建，这个方法名通常与类名相同，称为『构造器』。这个方法的具体工作就是，初始化实例所需的所有信息(状态)。

比如，考虑下面假想代码(语法自创)：

```js
class CoolGuy {
  specialTrick = nothing;

  CoolGuy(trick) {
    specialTrick = trick;
  }

  showOff() {
    output("Here's my trick: ", specialTrick);
  }
}
```

为了*制造*一个`CoolGuy`实例，需要调用类的构造器：

```js
Joe = new CoolGuy("jumping rope");

Joe.showOff(); // Here's my trick: jumping ropo
```

构造器大多数情况下总是需要通过`new`来调用，以便语言引擎知道你想构建一个*新的*类的实例。

### 类继承

在面向类的语言中，你不仅可以定义一个能够初始化它自己的类，还可以定义另外一个类**继承**自第一个类。通常称为『父类』与『子类』。

子类被定义时，会得到父类行为的初始拷贝，但子类可以覆盖这些继承的行为，甚至是定义新行为。

#### 多态(Polymorphism)

子类定义了覆盖父类的同名方法，仍然可以引用父类的同名方法。这种技术称为『多态』、『虚拟多态』、『相对多态』。

注意：传统面向类语言通过`super`可以从子类构造器直接访问父类构造器，因为真正的类其构造器属于这个类。然而在JS中，这是相反的——实际上认为『类』属于构造器(`Foo.prototype`类型引用)更恰当。因为在JS中，父子关系仅存在于它们各自的构造器的两个`.prototype`对象间，构造器本身不直接关联，而且没有简单的方法从一个中相对引用另一个。

不要让多态把你搞糊涂，让你认为子类是链接到父类上的。子类实际上只是得到父类继承的拷贝，**类继承就是拷贝**。

#### 多重继承(Multiple Inheritance)

有些面向类的语言允许你指定一个以上的『父类』，多重继承意味着每个父类的定义都会被拷贝到子类中。

而JS不提供『多重继承』机制，但是开发者可以使用各种方法来模拟它。我们接下来就看看。

### 混合(Mixin)

当『继承』和『实例化』时，JavaScript的对象机制不会*自动地*执行拷贝行为。因为JS没有『类』可以拿来实例化，只有对象。而且对象也不会被拷贝到另一个对象中，而是*被链接在一起*。

其他语言中类的行为就是拷贝，让我们看看JS开发者如何在JS中**模拟**这种*缺失*的类的拷贝行为：mixins(混合)。我们会看到两种『mixin』，**明确的**(explicit)和**隐含的**(implicit)。

#### 明确的Mixin(Explicit Mixins)

许多库/框架都有`extend`方法，但为了便于说，这里叫它`mixin`。

```js
// 简化的mixin示例：
function mixin(sourceObj, targetObj) {
  for (var key in sourceObj) {
    // 仅拷贝非既存内容
    if (!(key in targetObj)) {
      targetObj[key] = sourceObj[key];
    }
  }
  return targetObj;
}
```

通过此工具函数，就可以复制源对象的属性到目标对象上。技术上讲，函数并没有实际复制，而是指向函数的*引用*被复制了。

#### 隐含的Mixin(Implicit Mixins)

...略过

## 原型

`[[Prototype]]`即原型链。

### `[[Prototype]]`

JavaScript对象中有一个内部属性，语言规范中称为`[[Prototype]]`，它只是其他对象的引用，几乎所有对象创建时，此属性都赋予非`null`值。

注意，我们接下来就可以看见一个对象拥有空的`[[Prototype]]`属性。

思考如下代码：

```js
var myObject = {
  a: 2
};

myObject.a; // 2
```

`[[Prototype]]`引用有啥用呢？第三章中的`[[Get]]`操作，获取对象属性时，如果不存在就会在原型链上寻找。

```js
var anotherObject = {
  a: 2
};

// 创建一个链接到anotherObject对象
var myObject = Object.create(anotherObject);
myObject.a; // 2
```

如上，就是在原型链中寻找到属性。

#### Object.prototype

但是`[[Prototype]]`链在哪里终结？

每个普通的`[[Prototype]]`链的最顶端，是内建的`Object.prototype`。这个对象包含各种被整个JS使用的共通工具，因为JavaScript中所有普通(内建，而非宿主环境拓展)的对象都*衍生自*`Object.prototype`对象。

比如`toString`、`valueOf`、`hasOwnProperty`等等。

#### 设置与遮蔽属性

之前我们说过，在对象上设置属性要比仅仅在对象上添加新属性或改变既存属性的值更加微妙，现在我们来重温这个话题。

```js
myObject.foo = "bar";
```

这段代码，可能出现以下执行方式：

* 如果`myObject`已经存在`foo`属性，那么就是普通的赋值。
* 如果`foo`存在于原型链高层，这里就会出现奇怪的情况，后续说明。
* 如果`foo`同时存在于`myObject`和原型链高层，那么高层就会被遮蔽，总查询最底层的`foo`属性。

在`myObject`的`foo`遮蔽没有看起来那么简单。现在让我们考察`myObject.foo = "bar"`赋值的三种场景，当`foo`**不直接存在**于`myObject`，但**存在**于`myObject`的`[[Prototype]]`链的更高层时：

* 如果`foo`在高层访问到，而且**没有标记只读**(`writable: false`)，那么`myObject`就会被新添`foo`属性，形成一个**遮蔽属性**。
* 如果`foo`在高层访问到，而且**标记只读**(`writable: true`)，那么赋值失效。
* 如果`foo`在高层访问到，而且是一个setter，那么setter被调用，`myObject`不会被新添属性。

大多数开发者认为，一个属性存在于原型链高层，那么对其赋值总会造成遮蔽，但实际上这只是三种场景的第一种。

### 类

现在你可能想知道：为什么一个对象需要链到另一个对象，其好处是什么？

正如第四章讲解的那样，在JavaScript中，对于对象来说没有抽象模式/蓝图，即没有面向类的语言中那样的类。JavaScript只有对象。

#### 类函数

在JavaScript中有一种奇异的行为被无耻地滥用了许多年来*山寨*成某些看起来像*类*的东西。

『某种程度的类』这种奇特的行为取决于函数的一个奇怪的性质：所有的函数默认都会得到一个公有的，不可枚举的属性，称为`Prototype`，它可以指向任何对象。

```js
function Foo() {
  // ...
}

Foo.prototype; // {}
```

这个对象经常被称为"Foo的原型"，因为我们通过`Foo.prototype`的属性引用来访问它。这个对象到底是什么呢？

解释它的最直接的方法是，每个由调用`new Foo()`而创建的对象将最终被`[[Prototype]]`链接到这个`Foo.原型`对象。

让我们描绘一下：

```js
function Foo() {
  // ...
}

var a = new Foo();

Object.getPrototypeOf(a) === Foo.prototype; // true
```

当调用`new Foo()`创建`a`时，会发生的事情之一是，`a`得到一个内部`[[Prototype]]`链接，此链接链到`Foo.prototype`所指向的对象。

在面向类的语言中，可以制造一个类的多个**拷贝**(即"实例")，因为初始化(或继承)类的处理意味着，将行为计划从这个类拷贝到物理对象中。

在JavaScript中不会出现拷贝，不会创建类的多个实例，但可以创建多个对象，它们的`[[Prototype]]`连接至一个共通对象。但正因为如此，这些多个对象并不是完全分离的，而是**链接在一起**。

`new Foo()`得到一个新对象，这个新对象`a`内部地被`[[Prototype]]`链接至`Foo.prototype`对象。

**结果我们得到两个对象，彼此链接**。

这种机制常被称为『原型继承』，但事实上它叫作『原型委托』会更为精确。

#### 构造器(Constructors)

让我们会看前面的代码：

```js
function Foo() {
  // ...
}

var a = new Foo();
```

是什么导致我们认为`Foo`是一个类？

其一，是因为`new`关键字，感觉它执行了类*构造器*方法。

为了使『构造器』语义更令人糊涂，被随意贴上标签的`Foo.prototype`对象还有另外一招，思考如下代码:

```js
function Foo() {
  // ...
}

Foo.prototype.constructor === Foo; // true

var a = new Foo();
a.constructor === Foo; // true
```

`Foo.prototype`对象默认会得到一个公有的`constructor`的不可枚举属性，而这个属性回指这个对象关联的函数。使被『构造器』创建的对象`a`看起来好像也有了`constructor`属性。

注意：事实上`a`并没有`constructor`属性。

其二，JavaScript惯例，『类』都以大写字母开头，因此更让你混淆。尽管对于JS引擎来说，这个大写一点作用都没有。

##### 构造器还是调用？

上面代码中，我们会误认为`Foo`是一个『构造器』，因为我们使用`new`调用它，而且它『构建』了一个对象。

在现实中，`Foo`和其他函数都一样。函数自身**不是**构造器。但是你通过`new`来调用函数，就将函数调用变成了『构造器调用』。事实上，`new`在某种意义劫持了普通函数并将它以另一种方式调用：构建一个对象，**外加这个函数要做的其他任何事**。

举个例子：

```js
function NothingSpecial() {
  console.log("Don't mind me!");
}

var a = new NothingSpecial();
// "Don't mind me!"

a; // {}
```

`NothingSpecial`仅仅是一个普通函数，但用`new`调用时，几乎是一种副作用，它会*构建*一个对象返回，这个**调用**是一个*构造器调用*，但是`NothingSpecial`本身并不是一个构造器。

换句话说，在JavaScript中，更合适的说法是，『构造器』是前面**用`new`关键字调用的任何函数**。

函数不是构造器，但`new`调用时，函数调用是一个『构造器调用』。

#### 机制

仅仅是这些原因使得JavaScript的『类』命运多舛吗？

**不全是**。JS开发者努力尽可能地模拟面向类：

```js
function Foo(name) {
  this.name = name;
}

Foo.prototype.myName = function() {
  return this.name;
}

var a = new Foo("a");
var b = new Foo("b");

a.myName(); // "a"
b.myName(); // "b"
```

这段代码展示了另外两种『面向类』的花招：

1. `this.name = name`：在每个对象上添加了`name`属性，模拟类的实例包装数据值。
2. `Foo.prototype.myName = ...`：让实例通过原型链访问属性，模拟实例被创建时*拷贝*了一份属性。

##### 复活构造器

思考如下代码：

```js
function Foo() {}

Foo.prototype = {};

var a1 = new Foo();
a1.constructor === Foo; // false
a1.constructor === Object; // true
```

现在你知道`constructor`的实现有多随便了吧？

### 原型继承

我们已经看到了一些近似的『类』机制黑进JavaScript程序。但是现在还缺少近似的『继承』机制。

实际上，我们前面已经看到了一个常被称为『原型继承』的机制如何工作：`a`可以『继承自』`Foo.prototype`并因此可以访问`myName()`函数，但是我们传统的想法是认为『继承』是两个『类』间的关系，而非『类』与『实例』的关系。

下面是一段典型的『原型风格』代码：

```js
function Foo(name) {
  this.name = name;
}

Foo.prototype.myName = function() {
  return this.name;
};

function Bar(name, label) {
  Foo.call(this, name);
  this.label = label;
}

// 这里，创建一个新的`Bar.prototype`链接到`Foo.prototype`
Bar.prototype = Object.create(Foo.prototype);

// 注意，现在Bar.prototype.constructor不存在了
// 如果你有依赖这个属性的习惯，它可以被手动『修复』
// Bar.prototype.constructor = Bar;
Bar.prototype.myLabel = function() {
  return this.label;
}

var a = new Bar("a", "obj a");

a.myName(); // "a"
a.myLabel(); // "obj a"
```

重要的部分是`Bar.prototype = Object.create(Foo.prototype)`。凭空*创建*了一个『新』对象，并将对象内部的`[[Prototype]]`链接到指定的对象上。

注意：这里有一个常见的误解/困惑时，下面两种方法*也能*工作，但会产生其他的问题：

```js
// 不会如你期望的那样工作
Bar.prototype = Foo.prototype;

// 会如你期望的那样工作
// 但会产生其他副作用
Bar.prototype = new Foo();
```

`Bar.prototype = Foo.prototype`会出现一个问题，即Foo和Bar共用同一个原型对象，Bar修改了原型属性会影响到Foo的原型属性，从而影响到Foo的所有实例，这肯定是不行的。

`Bar.prototype = new Foo()`，这里创建了新的对象，并且链接到了`Foo.prototype`。但是它是用`Foo`的构造器实现的，如果构造器存在副作用(loding、改变状态等等)，这些副作用就会在链接时发生。

因此，我们只能通过`Object.create()`来创建新对象，而且没调用`Foo`时所产生的副作用。唯一的缺点就是，必须创建一个新对象，并把旧的扔掉，而不是修改提供给我们的默认既存对象。

如果有一种标准且可靠的方法来修改既存对象链接就好了。ES6之前，有一个非标准的，非所有浏览器通用的方法可以实现：`__proto__`属性。ES6中新增了`Object.setPrototypeOf`辅助工具，提供了标准且可预见的方法。

接下来让我们比较一下ES6之前和ES6如何链接`Bar.prototype`至`Foo.prototype`。

```js
// ES6以前
// 扔掉默认既存的Bar.prototype
Bar.prototype = Object.create(Foo.prototype);

// ES6+
// 修改既存的Bar.prototype
Object.setPrototypeOf(Bar.prototype, Foo.prototype);
```

如果忽略`Object.create`在性能上的劣势(丢对象)，其实它更易读。

#### 考察『类』关系

如果有一个对象`a`并希望找到它委托至哪个对象该如何实现呢？考察一个实例的继承血统(在JS是委托链接)，在传统的面向类环境中称为*自省*(introspection)或*反射*(reflection)。

思考如下代码：

```js
function Foo() {
  // ...
}

Foo.prototype.blah = ...;

var a = new Foo();
```

那么我们如何反射`a`来找到它的*祖先*呢？一种方式是接受『类』的困惑：

```js
a instanceof Foo; // true
```

通过`instanceof`可以查询对象原型链上是否存在指向`a`。

但是你需要获得测试函数(Foo)，否则仅两个普通对象，想知道它们原型链是否关联，就无能为力。

第二种方法，是利用`[[Prototype]]`反射：

```js
Foo.prototype.isPrototypeOf(a); // true

// 可以直接比较两个对象
b.isPrototypeOf(c);
```

在这种情况下，我们不关心`Foo`，甚至不需要`Foo`，仅需要一个对象来与另一个对象测试。

### 对象链接

之前我们看到`[[Prototype]]`机制是一个内部链接。

这种链接(主要)在对一个对象进行属性/方法引用，如果对象不存在，就会在被链接的对象上寻找，如此链结构形成了所谓的『原型链』。

#### 创建链接

现在我们已经明白了为什么JavaScript的`[[Prototype]]`机制和类不一样。

`[[Prototype]]`机制的意义是什么？为什么JS开发者需要搞乱这些链接？

记得我们之前说过的`Object.create`是英雄吗？现在，我们准备好看看为什么了？

```js
var foo = {
  something: function() {
    console.log("Tell me something good...");
  }
};

var bar = Object.create(foo);

bar.something(); // Tell me something good...
```

`Object.create`创建了一个链接到我们指定的对象(foo)上的新对象(bar)，这给了我们`[[Prototype]]`机制的所有力量(委托)，而且没有`new`函数作为类和构造器调用产生的副作用，搞乱了`prototype`和`constructor`引用或者其他的多余的东西。

::: warning 注意

`Object.create(null)`创建一个拥有空(`null`)`[[Prototype]]`链接的对象，如此这个对象不能委托到任何地方。因为这样的对象没有原型链，`instanceof`操作符没有东西可查。

它们的典型用途是存储数据(字典)，因为它们不会受到原型链任何委托属性/函数的影响。

:::

我们不需要类在两个对象间创建有意义的关系。我们需要**真正关心**的唯一问题是对象为了委托而链接在一起，而`Object.create`给我们这种链接并且没有一切关于类的烂设计。

##### 填补`Object.create`

`Object.create()`在ES5中加入。如果需要支持ES5之前的填补：

```js
if (!Object.create) {
  Object.create = function(o) {
    function F(){}
    F.prototype = o;
    return new F();
  }
}
```

这个填补工具通过一次性的F函数并覆盖它的`prototype`属性链接到指定的对象。通过`new F`构造器调用来制造一个将会链接到我们指定对象上的新对象。

#### 链接作为候补？

也许这么想很吸引人：对象间的链接主要是为了给『缺失』的属性和方法提供某种候补。但是这种方式不太好。

```js
var anotherObject = {
  cool: function() {
    console.log("cool!");
  }
};

var myObject = Object.create(anotherObject);

myObject.cool(); // "cool!"
```

得益于`[[Prototype]]`，这段代码可以工作，但是开发者会觉得迷惑。

**这里不要错过一个重要的细节**。

即使`myObject`不存在`cool`方法，但是它也能工作，感觉在API设计上加入了『魔法』气息，这会使开发者很吃惊。因此尽可能少使用这样的『魔法』。

## 行为委托

JavaScript重要的实质**全部在于被连接到其他对象的对象**。

### 迈向面向委托的设计

为了最直接了当的使用`[[Prototype]]`，我们必须意识到它从根本上与类是不同的设计模式。

::: warning 注意

某些面向类的设计依然很有效，所以不要全部摒弃，比如封装等。

:::

我们需要试着将思维从类/继承的设计模式改变为行为代理设计模式，接下来进行一些理论练习与实践。

#### 类理论

比如我们有几个相似的任务(XYZ，ABC等)需要在软件中建模。

使用类，设计场景的方式是：定义一个泛化的父类(基类)比如`Task`，为所有同类的任务定义共享行为。然后，定义子类`XYZ`和`ABC`，它们都继承自`Task`，每个都分别添加了特化的行为来处理各自的任务。

**重要的是**，类设计模式会让继承发挥最大功效，当你在`XYZ`任务中覆盖`Task`的某些泛化方法的定义时，你将会想利用方法覆盖(和多态)，也许会利用`super`来调用这个方法的泛化版本，为它添加更多的行为。**你很可能会找到几个这样的地方：可以『抽象』到父类中，并在子类中特化(覆盖)的一般化行为**。

关于这个场景的假想代码：

```js
class Task {
  id;

  // Task构造器
  Task(ID) {id = ID;}
  ouputTask() {output(id);}
}

class XYZ inherits Task {
  label;

  // XYZ构造器
  XYZ(ID, Label) {super(ID); label = Label;}
  outputTask() {super(); output(label);}
}

class ABC inherits Task {
  // ...
}
```

现在，你可以初始化一个或多个`XYZ`子类的**拷贝**，并且使用这些实例来执行『XYZ』任务。这些实例已经**同时拷贝**了泛化的`Task`定义的行为和具体的`XYZ`定义的行为。类似地，`ABC`类的实例将拷贝`Task`的行为和具体的`ABC`的行为。在构建完成之后，你通常仅会与这些实例交互(而不是类)，因为每个实例都拷贝完成计划任务的所有行为。

#### 委托理论

但现在让我们试着用*行为委托*代替*类*来思考同样的问题。

你将首先定义一个称为`Task`的**对象**，而且它将拥有具体的行为，这些行为包含各种任务可以使用的(委托至)工具方法。然后，对于每个任务(XYZ、ABC)，你定义一个**对象**来持有这个特定任务的数据/行为。你**链接**你的特定任务对象到`Task`工具对象，允许它们在必要的时候可以委托到它。

基本上，你认为执行任务`XYZ`就是从两个兄弟/对等的对象(XYZ和Task)中请求行为来完成它。与其通过类的拷贝将它们组合在一起，它们可以将它们保持在分离的对象中，而且可以在需要的情况下允许`XYZ`对象**委托到Task**。

下面是简单的代码实现：

```js
var Task = {
  setID: function(ID) {this.id = ID;}
  outputID: function() {console.log(this.id);}
};

// 使XYZ委托到Task
var XYZ = Object.create(Task);

XYZ.prepareTask = function(ID, Label) {
  this.setID(ID);
  this.label = Label;
};

XYZ.outputTaskDetails = function() {
  this.outputID();
  console.log(this.label);
}

// ABC = Object.create(Task);
// ABC ... = ...
```

与面向类(也就是OO)对比，这种风格的代码为"OLOO"(objects-linked-to-other-objects 链接到其他对象的对象)。所以我们*真正*关心的是，对象XYZ委托到对象Task。

在JavaScript中，`[[Prototype]]`机制将**对象**链接到其他**对象**。无论你多么想说服自己这不是真的，JavaScript没有像『类』那样的抽象机制。这就像逆水行舟：你*可以*做到，但是你选择逆流而上，所以很显然，**你会更困难地到达目的地**。

**行为委托**意味着：在某个对象的属性或方法没能在这个对象上找到时，让这个对象为属性或方法引用提供一个委托。

这是一个*极其强大*的设计模式，与父类和子类、继承、多态等有很大不同，与其在你的思维中纵向地，从上面父类到下面子类地组织对象，你应当并列地，对等地考虑对象，而且对象间拥有方向性的委托链接。

##### 相互委托(不允许)

你不能在两个或多个对象间互相地委托，否则会得到一个错误。

#### 思维模型比较

现在你至少在理论上可以看到『类』和『委托』设计模式的不同了，现在让我们比较一下其思维模型。

我们将查看一些更加理论上的代码，然后比较两种代码实现。首先是经典的OO(原型)风格：

```js
function Foo(who) {
  this.me = who;
}
Foo.prototype.identify = function() {
  return "I am " + this.me;
}

function Bar(who) {
  Foo.call(this, who);
}
Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.speak = function() {
  alert("Hello, " + this.identify() + ".");
}

var b1 = new Bar("b1");
var b2 = new Bar("b2");

b1.speak();
b2.speak();
```

很普通的原型模式，没啥太具开拓性的东西发生。

现在，让我们使用*OLOO*风格的代码**实现完全相同的功能**：

```js
var Foo = {
  init: function(who) {
    this.me = who;
  },
  identify: function() {
    return "I am " + this.me;
  }
};

var Bar = Object.create(Foo);

Bar.speak = function() {
  alert("Hello, " + this.identify() + ".");
}

var b1 = Object.create(Bar);
b1.init("b1");
var b2 = Object.create(Bar);
b2.init("b2");

b1.speak();
b2.speak();
```

将三个对象链接到了一起，省略了类的东西，构造器、原型和`new`调用等。

因此OLOO风格代码接受了JS没有类的事实：我们唯一需要真正关心的事情是**链接到其他对象的对象**。

### classes vs. Objects

用类的构造器，你强制构建和初始化在同一个步骤进行。然后，在许多情况下，分开这两步做(OLOO)会更灵活。

OLOO对关注点分离原则有*更好*的支持，也就是创建和初始化没必要合并在同一个操作中。

OLOO是一种没有类的抽象，而直接创建和关联对象的代码风格，OLOO十分自然地实现了基于原型链的行为委托。

例如如下代码：

```js
var Foo = {};

var Bar = Object.create(Foo);
Bar...

var b1 = Object.create(Bar);
```

## 附录

### ES6 class

如果是本书后半部分有什么关键信息，那就是类是一种代码的可选设计模式，而JavaScript来实现它总是很尴尬。

虽然尴尬的一大部分来源于语法，但关于类的设计的问题要深刻多了。第四章指出传统的面向类语言中，类实际上发生了从父类向子类，由子类向实例的*拷贝*动作，而在`[[Prototype]]`中，动作**不是**一个拷贝，而是委托链接。

OLOO风格和行为委托接受了`[[Prototype]]`，而不是将它隐藏起来，比较它们的简单性是，类在JS的问题就暴露了出来。

#### 静态优于动态？

ES6最大的问题就是动态，虽然`class`语法让你看起来它是一个静态定义，但事实上它仅仅是一个对象，一个可以直接互动的对象。

在传统面向类的语言中，不会存在定义类之后还来调整它的情况，因此类设计模式不提供这样的能力，但是JS**最强大的部分**就是它的*动态*的，任何对象的定义都是可变的，而且它对这种动态机制带来的陷阱不提供任何支持。