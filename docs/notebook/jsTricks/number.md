---
title: Number Skill
sidebarDepth: 2
---

# Number Skill
数值相关的JS技巧。

## 取整
> **正数向下取整Math.floor()，负数向上取整Math.ceil()**

[位运算符详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)
```js
const num1 = ~~1.69; // 正数Math.floor() 负数Math.ceil()
const num2 = 1.69 | 0; // 取整
const num3 = 1.69 >> 0; // 取整
// num1, num2, num3 => 1, 1, 1
```

## 补零
```js
const FillZero = (num, len) => num.toString().padStart(len, '0');
const num = FillZero(169, 5); // num => '00169'
```

## 转数值
> **只对null、""、 false、 数值字符串有效**

```js
+ 或 * 都可，实际是调用.valueOf方法。
const num1 = +null;
const num2 = +'';
const num3 = +false;
const num4 = +'169'
// num1, num2, num3, num4 => 0 0 0 169
```

## 时间戳
```js
const timestamp = +new Date('2019-02-14');
// timestamp => 1550102400000
```

## 精确小数
> **四舍五入，不会被浮点影响**

```js
const RoundNum = (num, decimal) => Math.round(num * 10 ** decimal) / 10 ** decimal;
const num = RoundNum(1.69, 1); // num => 1.7
```

## 判断奇偶
```js
const OddEven = num => !!(num & 1) ? 'odd' : 'event';
const num = OddEven(2); // num => 'even'

// 更简单的
const num1 = 2;
!!(num1 % 2); // false 偶数 true 奇数
!!(num1 & 1); // false 偶数 true 奇数
```

## 取最小最大值
```js
const arr = [0, 1, 2];
const min = Math.min(...arr);
const max = Math.max(...arr);
// min max => 0 2
```

## 生成范围随机数
```js
const RandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const num = RandomNum(1, 10); // num => 9
```

## 判断NaN
```js
const number = 'ds' * 1;
Number.isNaN(number); // true
// 因为NaN !== NaN
number !== number; // true
```