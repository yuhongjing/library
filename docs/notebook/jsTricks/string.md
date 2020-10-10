---
title: String Skill
---

# String Skill
字符串相关的JS技巧。

## 时间大小对比
> **时间的个位必须补足0才能对比**

```js
const time1 = '2019-02-14 21:00:00';
const time2 = '2019-05-01 09:00:00';
const overtime = time1 > time2; // overtime => false
```

## 格式化金钱
```js
const ThousandNum = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const money = ThousandNum(20190214); // money => '20,190,214'
```

## 生成随机ID
```js
const RandomId = len => Math.random().toString(36).substr(3, len);
const id = RandomId(10); // id => nh365yoj39
```

## 生成随机HEX色值
```js
const RandomColor = () => '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0');
const color = RandomColor(); // color => "#f03665"
```

## 生成星级评分
```js
const StartScore = rate => '★★★★★☆☆☆☆☆'.slice(5 - rate, 10 - rate);
const start = StartScore(1); // start => '★☆☆☆☆'
```

## 操作URL查询参数
具体方法:[URLSearchParams](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams)
```js
const params = new URLSearchParams(location.search.replace(/\?/ig, ""));
params.get('id');
params.has('test');
```