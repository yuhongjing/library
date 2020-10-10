---
title: Function Skill
---

# Function Skill
函数相关的JS技巧。

## 函数自执行
```js
const Func = function() {}(); // 常用

(function() {})(); // 常用
(function() {}()); // 常用
[function() {}()];

+ function() {}();
- function() {}();
~ function() {}();
! function() {}();

new function() {};
new function() {}();
void function() {}();
typeof function() {}();
delete function() {}();

1, function() {}();
1 ^ function() {}();
1 > function() {}();
```

## 隐式返回值
> **只能用于`单语句返回值箭头函数`,如果返回值是对象必须使用()包住**

```js
const Func = function(name) {
    return 'I Love ' + name;
};
// 换成
const Func = name => 'I Love ' + name;
```

## 一次性函数
> **适用于运行一些只需执行一次的初始化代码**

```js
function Func() {
    // 这一句只会执行一次
    console.log('x');
    Func = function() {
        console.log('y');
    }
}
```

## 惰性载入函数
> **函数内判断分支较多较复杂时可大大节约资源开销**

[什么是惰性载入函数](https://juejin.im/entry/5a62935cf265da3e253c3e7a)

```js
function Func() {
    if (a === b) {
        console.log('x');
    } else {
        console.log('y');
    }
}
// 换成
function Func() {
    if (a === b) {
        Func = function() {
            console.log('x');
        }
    } else {
        Func = function() {
            console.log('y');
        }
    }
    return Func();
}
```

## 检测非空参数
```js
function IsRequired() {
      throw new Error('params is required');
}
function Func(name = IsRequired()) {
    console.log('I Love ' + name);
}
Func(); // 'params is required'
Func('you'); // 'I Love You'
```

## 字符串创建函数
```js
const Func = new Function('name', 'console.log(\"I Love \" + name)');
```

## 优雅处理错误信息
```js
try {
    Func();
} catch(e) {
    // 报错直接前往stackoverflow网站搜索答案
    location.href = "https://stackoverflow.com/search?q=[js]+" + e.message;
}
```

## 优雅处理Async/Await参数
```js
function AsyncTo(promise) {
    return promise.then(data => [null, data]).catch(err => [err]);
}
const [err, res] = await AsyncTo(Func());
```

## 优雅处理多个函数返回值
```js
function Func() {
    return Promise.all([
        fetch('/user'),
        fetch('/comment')
    ]);
}
const [user, comment] = await Func(); // 需在async包裹下使用
```