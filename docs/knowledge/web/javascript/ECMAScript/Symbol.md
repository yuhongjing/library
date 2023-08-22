---
title: Symbol
---

# Symbol

为什么会有Symbol？

> Symbol的用途是确保对象属性使用唯一标识符，不会发生属性冲突的危险。

下面举一个例子：

```js
const objKey = { num: 0 };
const objKey1 = { num: 1 };

const obj = {
  // 基础数据类型
  undefined: undefined,
  null: null,
  true: true,
  1: 1,
  name: 'name',
  
  // 复杂数据类型
  [objKey]: 'obj',
};

// 下面尝试更改obj的属性值
obj.undefined = 'un';
obj.null = 'nu';
obj.true = 'tt';
obj[1] = '2';
obj[objKey1] = 'obj changed';

console.log(obj);
// 打印日志如下
{
  1: '2',
  name: 'name',
  null: 'nu',
  true: 'tt',
  undefined: 'un',
  [object Object]: 'obj changed', // 不符合预期
}
```

通过上面例子，可以发现两个问题：

1. 基本类型或复杂类型作为**键名**，其值都可以被修改。
2. 复杂类型作为**键名**时，键名被隐式转换为了`[object Object]`。

在实际项目中，需要用到对象作为键名，其属性不希望被覆盖和修改并且值唯一时，普通的基本类型和复杂类型是无法实现的。

因此JavaScript推出了`Map`来处理object、array等复杂数据类型作为键名的问题；针对无法覆盖且唯一的值问题，推出了`Symbol`。

## Symbol如何解决上述问题

用Symbol作为键名时：

```js
const obj = {
  [Symbol()]: 'symbol',
};

obj[Symbol()] = 'symbol changed';

console.log(obj);
// 打印日志如下
{
  [symbol()]: 'symbol',
  [symbol()]: 'symbol changed',
}
```

可以看到用了同样的`Symbol()`但是并没有被覆盖属性而是新建了一个键名，因为两个新建的`symbol`值是不同的。因此说它是`唯一标识符`。

```js
const s1 = Symbol();
const s2 = Symbol();
console.log(s1 === s2); // false
```

## Symbol是什么类型

```js
console.log(typeof Symbol); // function
console.log(typeof Symbol()); // symbol
```

Symbol是函数类型，它的返回值是symbol类型。

## Symbol是一个特殊函数

它无法通过new关键字来创建实例。

```js
console.log(Symbol.constructor); // [Function: Function]
// const a = new Symbol(); // Symbol is not a constructor
```

## Symbol的使用方法

### Symbol函数的返回值，不能通过点(.)调用

```js
const obj = {
  [Symbol()]: 'symbol',
};
const ss = Symbol();
obj[ss] = 'symbol ss';
obj.Symbol = 'str'; // symbol
// obj.Symbol() = 'error'; // obj.Symbol is not a function

console.log(obj);
// 打印日志如下
{ Symbol: 'str', [Symbol()]: 'symbol', [Symbol()]: 'symbol ss' }
```

### 传入字符串对Symbol()做解释

直接使用Symbol做键名，会失去了基础字符类型可理解性，因此可以传入一个字符串来表示此Symbol的含义。

```js
const obj = {
  [Symbol()]: '张三',
  [Symbol()]: 20,
};
const obj1 = {
  [Symbol('name')]: '张三',
  [Symbol('age')]: 20,
};
```

这个字符串只是用作对于这个Symbol()的描述，用来理解这个Symbol()的作用，除此之外没有任何其他的作用，两个Symbol()即使描述相同，也不是同一个Symbol();

```js
const s1 = Symbol('name');
const s2 = Symbol('name');
console.log(s1 === s2); // false
```

可以通过Symbol的description属性获取到描述值。

```js
const s1 = Symbol('name');
console.log(s1.description); // name
```

## Symbol.for()

这个方法可以用来创建一个**全局共享**和可供**重用**的符号实例。

### 什么是全局共享？

在整个程序运行期间存在一个虚拟的全局Symbol注册中心。跨文件甚至跨领域意味着它可以在**iframe和workers等环境中被获取到**。

### 什么是重用？

重用意思就是如果这个值已经存在就会复用这个值，如果不存在就创建这个值。这一点与Symbol有很大区别。

```js
const obj = {};
const sf = Symbol.for('sf');
const otherSf = Symbol.for('sf');

const s = Symbol('s');
const otherS = Symbol('s');

obj[sf] = 'sf';
obj[otherSf] = 'otherSf';
obj[s] = 's';
obj[otherS] = 'otherS';

console.log(sf === otherSf); // true
console.log(s === otherS); // false
console.log(obj);
// 打印日志如下
{
  [Symbol(sf)]: 'otherSf',
  [Symbol(s)]: 's',
  [Symbol(s)]: 'otherS',
}
```

## Symbol.keyFor()

传入Symbol，返回key值。

```js
// 1. 需要注意这个方法针对Symbol.for()创建的Symbol。
const s = Symbol('s');
const t = Symbol.for('t')
console.log(Symbol.keyFor(s) === undefined); // true
console.log(Symbol.keyFor(t) === 't'); // true

// 2. 如果没有输入默认的key值，系统默认返回undefined字符串，而不是undefined类型
const sf = Symbol.for();
console.log(sf, typeof Symbol.keyFor(sf)); // Symbol(undefined) string
console.log(Symbol.keyFor(sf) === undefined); // false
```

## Symbol的特性

### 不能被常规的循环方法遍历到

常用遍历对象的方法`for...in`和Object.getOwnPropertyNames()无法获取到Symbol()值，要用下面三种方法。

利用这一特征可以将**私有属性**命名为Symbol类型，虽然也能被获取到，但是一般情况下不会有人通过下面三种方式来获取对象键。

```js
const s = Symbol();
const sf = Symbol.for('sf');
const obj = {};

obj[s] = 's';
obj[sf] = 'sf';
obj[Symbol()] = 'Symbol';

// 想要获取obj的键名
for (let key in obj) {
  console.log(key, obj[key]); // 无输出
}

console.log(Object.getOwnPropertyNames(obj)); // []
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(), Symbol(sf), Symbol()]
console.log(Reflect.ownKeys(obj)); // [Symbol(), Symbol(sf), Symbol()]
console.log(Object.getOwnPropertyDesciptors(obj));
// 打印日志如下:
{
  Symbol(): {value: 's', writable: true, enumerable: true, configurable: true},
	Symbol(): {value: 'symbol', writable: true, enumerable: true, configurable: true},
	Symbol(sf): {value: 'sf', writable: true, enumerable: true, configurable: true},
}
```

### 无法被转换为JSON

当有一些重要属性需要经过JSON转换传输时，例如前后端传值。就可以将私有属性设置为Symbol类型，这样转换时就不会被传输。【可以防止XSS攻击】

```js
const s = Symbol();
const sf = Symbol.for('sf');
const obj = { name: '李四' };

obj[s] = 's';
obj[sf] = 'sf';

console.log(JSON.stringify(obj)); // { name: '李四' }
```

## 常用的内置符号

常用内置符号是用来暴露语言内部的行为和属性。我们可以通过改写或重新定义这些属性来改变原生结构的行为。

常见的有以下：

```js
Symbol.asyncIterator
Symbol.hasInstance
Symbol.isConcatSpreadable
Symbol.iterator
Symbol.match
Symbol.matchAll
Symbol.replace
Symbol.search
Symbol.species
Symbol.split
Symbol.toPrimitive
Symbol.toStringTag
Symbol.unscopables
```

具体释义可查看[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)

## Symbol的应用场景

### 用于私有属性

虽然Symbol作为键也能被获取到，但是相比字符串类型属性来说，还是有一定隐蔽性。因此在不希望别人篡改自己的属性时，可以通过Symbol来做一个简单的「私有属性」。

### 用于全局注册的变量

通过Symbol.for()创建的变量可以跨域全局共享，因此当我们在iframe、workers等非windows环境下可以通过这种方式来获取到全局变量。

### React关于Symbol的应用

React中通过使用Symbol.for()属性来为每一种react设置独一无二的标记，并将其存放在ReactSymbol.js中。

之所以采用Symbol.for()主要有以下几种原因：

1. 保证React元素的唯一性，确保每一种react元素之间都不会发生重复。
2. 保证在跨文件、跨域时也能获取到React元素的类型，对React元素进行渲染。
3. 消除**魔术字符串**，实现对字符串的解耦。

> 魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。风格良好的代码，应该尽量消除魔术字符串，改由含义清晰的变量代替。 ——阮一峰

```js
function getArea(shape, options) {
  let area = 0;
  
  switch (shape) {
    case 'Triangle': // 魔术字符串
      area = .5 * options.width * options.height;
      break;
    /* ... more code ... */
  }
  
  return area;
}

getArea('Triangle', { width: 100, height: 100 }); // 魔术字符串
```

使用魔术字符串的缺点就在于当代码中多处使用到这个值时，会将代码逻辑和字符串进行强绑定。后面维护这个字符串时会比较困难，，因此设置一个全局变量是解决这种问题的最好方式。

4. 服务端渲染时，防止XSS攻击

当服务端渲染时，由于Symbol不能被转换为JSON，**所以即使服务器存在用JSON作为文本返回安全漏洞，JSON里也不会包含Symbol**。React校验element.$$typeof，如果元素丢失或者无效，则会拒绝处理该元素。

## Symbol()与Symbol.for()应用场景的区别

Symbol()与Symbol.for()最大的区别就在于一个即使重复定义也不会重复(Symbol())，另一个是如果定义过就不会重复定义(Symbol.for())。

所以：

如果你更期望定义一个唯一且不被修改不重复的变量，后续不是用它进行逻辑处理和运算且只在同一个全局环境中使用。采用Symbol()比较好。

如果你希望像使用字符串变量一样，期望可以参与逻辑运算并且要在不同的全局环境中都要使用这个值。采用Symbol.for()更好。

