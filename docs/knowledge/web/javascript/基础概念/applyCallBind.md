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