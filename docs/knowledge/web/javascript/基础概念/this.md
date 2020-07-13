---
title: this
---

# this

 ![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20200710161629.png)

* this的绑定在创建执行上下文时确定。
* 大多数情况函数调用的方式决定this的值，this在执行时无法赋值。
* this的值为当前执行的环境对象，非严格下总是指向一个对象，严格下可以是任何值。
* 全局环境下this始终指向window，严格模式下函数的调用没有明确调用对象的情况下，函数内部this指向undefined，非严格下指向window。
* 箭头函数的this永远指向创建当前词法环境时的this。
* 作为构造函数时，函数中的this指向实例对象。
* this的绑定只受最靠近调用它的成员的引用。
* 执行上下文在被执行的时候才会创建，创建执行上下文时才会绑定this，所以this的指向永远是在执行时确定。

```js
function foo() {
  console.dir(this); // window， 严格下undefined
}
foo();
-------------------------------
function foo() {
  console.dir(this); // 非严格Number对象，严格模式 5
}
foo.call(5);
```

## 普通函数中的this

### 直接调用

在没有明确调用者情况下函数内部this指向window，严格模式下都为undefined，除非绑定函数的this指向，才会改变this。

```js
// 直接调用函数
function foo() {
  console.dir(this); // window 严格下 undefined
  function boo() {
    console.dir(this); // window 严格下 undefined
  }
  boo();
}
-------------------------------------
// 取出对象中的函数，再进行调用
const obj = {
  foo: function foo() {
    console.dir(this); // window 严格下 undefined
    function boo() {
      console.dir(this); // window 严格下 undefined
    }
    return boo;
  }
}
const foo = obj.foo;
foo()();
--------------------------------------
// 直接通过对象调用函数，再调用返回的函数，可以看出this的指向随调用对象改变
const obj = {
  foo: function foo() {
    console.dir(this); // obj 严格下 obj
    function boo() {
      console.dir(this); // window 严格下 undefined
    }
    return boo;
  }
}
const foo = obj.foo();
foo();
--------------------------------------
// 基于回调函数也是如此
function foo(func) {
  console.dir(this); // window 严格下 undefined
  func();
}
foo(funtion () {
    console.dir(this); // window 严格下 undefined
});
```

### 基于调用者以及不同调用方式

函数调用也就是在函数名后面加个()，表示调用，如果函数名前没有加任何东西，那么默认为**简单调用**，在严格与非严格环境下，简单调用的函数内部this指向undefined与window，但是全局环境下的this永远为window。

基于对象

当函数作为**对象的方法**调用时，不受函数定义方式或者位置影响。

```js
// 函数this指向调用者对象
const obj = {
  foo: function () {
    console.dir(this); // obj1 严格下 obj1
    function boo() {
      console.dir(this); // window 严格下 undefined
    }
    boo();
    return boo();
  }
}
const obj1 = {};
obj1.boo = obj.foo;
obj1.boo();
-----------------------------------------------------
// 不同调用对象时，this指向调用者
const obj = {
  foo: function () {
    console.dir(this); // obj 严格下 obj
    function boo() {
      console.dir(this);
    }
    boo(); // window 严格下 undefined
    return boo;
  }
}
const obj1 = {};
obj1.boo = obj.boo();
obj1.boo(); // obj1 严格下 obj1
------------------------------------------------------
// this指向最近的调用者
const obj = {
  name: 'obj',
  obj1: {
    name: 'obj1',
    foo: function () {
      console.dir(this.name); // obj1
    }
  }
}
obj.obj1.foo();
```

基于new关键字

```js
// 基于new关键字调用的函数内部this指向实例
function foo() {
  console.dir(this); // foo 实例
  console.log(this instanceof foo); // true
  console.log(foo.prototype.isPrototypeOf(this)); // true
  that = this;
}
var that;
const f = new foo();
console.log(that === f); // true
-----------------------------------------------------
// 嵌套函数内部this与调用函数所在环境的this无关
function foo() {
  console.dir(this); // foo 实例
  function boo() {
    console.dir(this); // window 严格下 undefined
  }
  boo();
}
const f = new foo();
```

基于定时器与微任务

微任务中的简单调用函数this指向window严格下指向undefined，而**定时器中的回调函数不管在严格还是非严格环境下this永远指向window**，说明一点，调用window对象的方法时，this指向window也就是全局对象，换句话说，简单调用的函数如果属于window本身自带的方法那么这个方法的this指向window。

```js
// 异步任务中简单调用的函数都是进入队列，最后由全局环境调用
const id = setInterval(function () {
  console.dir(this); // window 严格下 window
  setTimeout(() => {
    console.dir(this); // window 严格下 window
    clearInterval(id);
  });
});
-----------------------------------------
new Promise(function (resolve, reject) {
  console.dir(this); // window 严格下 undefined
  resolve();
}).then(function (res) {
  console.dir(this); // window 严格下 undefined
});
-----------------------------------------
(async function foo() {
  function boo() {
    console.dir(this); // window 严格下 undefined
  }
  await boo();
  console.dir(this); window 严格下 undefined
})();
-----------------------------------------
// 定时器的回调最终都会被作为简单函数被执行，定时器属于window对象的方法
function foo() {
  setTimeout(function (){
    console.log(this); // window 严格下window
  });
}
foo.call(5);
------------------------------------------
// 函数内部的this就是指向调用者，并且可以看出简单调用的回调函数中的this也指向window
const obj = {
  foo(callback) {
    callback();
    console.log(this.foo === obj.foo); // true
    console.log(this === obj); // true
  }
}
obj.foo(function () {
  console.log(this); // window 严格下undefined
});
--------------------------------------------
// 通过arguments调用的回调函数中的this指向调用者，注意严格与非严格下的arguments对象有所不同
const obj = {
  foo(callback) {
    arguments[0]();
    console.log(this.foo === obj.foo); // true
    console.log(this === obj); // true
  }
};
obj.foo(function () {
  console.log(this); // arguments 对象 严格下 arguments 对象
});
```

## 箭头函数中的this

es6引入的箭头函数，是不具有this绑定，不过在其函数体中可以使用this，而这个this指向的是箭头函数当前所处的词法环境中的this对象，可以理解为，this在箭头函数中是透明的，箭头函数包不住this，所以函数内部与外部的this为同一值。

判断箭头函数的this指向，可以把箭头函数看成透明，其上下文中的this就是它的this。

```js
// 可以看出箭头函数中的this就是其所在环境的this，箭头函数无法固定住this，由其环境决定
const foo = () => {
  console.dir(this); // window 严格下 window
};
foo();
-----------------------------------------------------
// 可见对象中的this指向window，箭头函数中的this指向对象中的this。由于只有创建执行上下文才会绑定this指向。
// 而除了全局上下文，只有函数作用域才会创建上下文环境从而绑定this，创建对象不会绑定this，所以还是全局this。
const obj = {
  this: this,
  foo: () => {
    console.dir(this); // window 严格下 window
  }
};
console.dir(obj.this); // window 严格下 window
obj.foo();
------------------------------------------------------
// 对象方法内部嵌套箭头函数，则此箭头函数的this属于外部非箭头函数this。
// 当调用obj.foo时foo函数创建的执行上下文中的this绑定对象obj，而箭头函数并不会绑定this。
// 所以其this属于foo下的this，即对象obj。
const obj = {
  foo: function () {
    return () => {
      console.dir(this); // obj 严格下 obj
    };
  }
};
obj.foo()();
```

## 如何改变函数的this指向

最简单的方法是通过apply、call、bind来给函数绑定this。

- apply方法中第一个参数为被调用的函数中的this指向，传入你想要绑定的this值即可，第二个参数为被调用函数的参数集合，通常是个数组。
- call与apply方法基本一致，区别在于传入参数形式不同，call传入的参数为可变参数列表，参数按逐个传入。
- bind方法与以上不同的是不会直接调用函数，只是先绑定函数的this，到要使用的时候调用即可，此方法返回一个绑定this与参数之后的新函数，其传入参数形式同call。
- 通过变量保留指定this来达到固定this。

```js
// 通过变量保留父级this，进行对_this变量修改也就达到修改原this的效果
const obj = {
  name: 'obj',
  foo: function () {
    const _this = this;
    function boo() {
      _this.name = 'OBJ';
      console.dir(obj.name); // OBJ
    }
    return boo;
  }
};
obj.foo()();
```