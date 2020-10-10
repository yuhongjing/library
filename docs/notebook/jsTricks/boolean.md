---
title: Boolean Skill
---

# Boolean Skill
逻辑相关的JS技巧。

## 短路运算符
```js
const a = d && 1; // 前面条件满足才执行后面
const b = d || 1; // 前面条件不满足才执行后面
const c = !d; // 前面条件取反
const e = !!d; // 强制转换Boolean型
```

## 判断数据类型
> **可判断类型**
>> **undefined、 null、 string、 number、 boolean**  
>> **array、 object、 symbol、 date、 regexp**  
>> **function、 asyncfunction、 arguments**  
>> **set、 map、 weakset、 weakmap**

```js
const DataType = (tgt, type) => {
    const dataType = Object.prototype.toString.call(tgt)
        .replace(/\[object /g, '')
        .replace(/\]/g, '')
        .toLowerCase();
    return type ? dataType === type : dataType;
}
DataType('young'); // 'string'
DataType(20190214); // 'number'
DataType(true); // 'boolean'
DataType([], 'array'); // true
DataType({}, 'array'); // false
```

## 是否为空数组
```js
const arr = [];
const flag = Array.isArray(arr) && !arr.length; // flag => true
```

## 是否为空对象
[Why DataType?](./boolean.html#判断数据类型)
```js
const obj = {};
const flag = DataType(obj, 'object') && !Object.keys(obj).length; // flag => true
```

## 满足条件时执行
```js
const flagA = true; // 条件A
const flagB = false; // 条件B
(flagA || flagB) && Func(); // 满足A或B时执行
(flagA || !flagB) && Func(); // 满足A或不满足B时执行
flagA && flagB && Func(); // 同时满足A和B时执行
flagA && !flagB && Func(); // 满足A且不满足B时执行
```

## 为非假值时执行
```js
const flag = false; // undefined、 null、 ''、 0、 false、 NaN
!flag && Func();
```

## 数组不为空时执行
```js
const arr = [0, 1, 2];
arr.length && Func();
```

## 对象不为空时执行
```js
const obj = {a: 0, b: 1, c: 2};
Object.keys(obj).length && Func();
```

## 函数退出代替条件分支退出
```js
if (flag) {
    Func();
    return false;
}
// 换成
if (flag) {
  return Func();
}
```

## switch/case使用区间
```js
const age = 26;
switch (true) {
  case isNaN(age): console.log('not a number');
      break;
  case (age < 18): console.log('under age');
      break;
  case (age >= 18): console.log('adult');
      break;
  default: console.log('please set your age');
      break;
}
```