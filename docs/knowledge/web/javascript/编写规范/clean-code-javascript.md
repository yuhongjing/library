---
title: clean-code-javascript
---

# clean-code-javascript

关于书写整洁JS代码的风格指南。

* [变量](#变量)
* [函数](#函数)
* [对象和数据结构](#对象和数据结构)
* [类](#类)
* [SOLID](#SOLID)
* [测试](#测试)
* [并行](#并行)
* [错误处理](#错误处理)
* [格式化](#格式化)
* [注释](#注释)
* [翻译](#翻译)

## 变量

### 使用有意义的变量名

见名知意。

```js
// Bad
const yyyymmdstr = moment().format("YYYY/MM/DD");

// Good
const currentDate = moment().format("YYYY/MM/DD");
```

### 相同类型的变量，使用相同的词汇表

例如，获取用户信息命名为getUser即可。而不是a文件中为getUserInfo，b文件中为getUserData。

```js
// Bad
getUserInfo();
getUserData();

// Good
getUser();
```

### 使用易搜索的变量名

我们读代码的时间是多于写代码的时间，因此我们编写的代码的可读性和可搜索性是非常重要的。

```js
// Bad
setTimeout(blastOff, 86400000); // 读者不明白 86400000 是什么意思

// Good
// 声明为大写的常量
const MILLISECONDS_IN_A_DAY = 60 * 60 * 24 * 1000; // 86400000

setTimeout(blastOff, MILLISECONDS_IN_A_DAY);
```

### 使用解释性的变量

使用解释性的中转变量，能够清晰的表示代码的意图。

```js
// Bad
const address = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
// 读者不清楚，这两个参数是什么？
saveCityZipCode(
  address.match(cityZipCodeRegex)[1],
  address.match(cityZipCodeRegex)[2]
);

// Good
const address = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
// 使用解释性的中转参数，表明传递了城市和邮编。
const [_, city, zipCode] = address.match(cityZipCodeRegex) || [];
saveCityZipCode(city, zipCode);
```

### 避免使用无意义的映射变量名

映射变量名也得有意义。

```js
// Bad
const locations = ["Austin", "New York", "San Francisco"];
locations.forEach(l => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  // ...
  // 读者不明白l指代什么
  dispatch(l);
});

// Good
const locations = ["Austin", "New York", "San Francisco"];
locations.forEach(location => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  // ...
  dispatch(location);
});
```

### 避免添加不必要的上下文

类/对象的属性，不必重复添加类/对象前缀名。

```js
// Bad
const Car = {
  carMake: "Honda",
  carModel: "Accord",
  carColor: "Blue",
};

function paintCar(car) {
  // carColor 添加了前缀名，就很奇怪
  car.carColor = "Red";
}

// Good
const Car = {
  carMake: "Honda",
  carModel: "Accord",
  carColor: "Blue",
};

function paintCar(car) {
  car.color = "Red";
}
```

### 使用默认参数值来代替短路或条件判断

ES6标配，不再赘述。

```js
// Bad
function createMicrobrewery(name) {
  const breweryName = name || "Hipster Brew Co.";
  // ...
}

// Good
function createMicrobrewery(name = "Hipster Brew Co.") {
  // ...
}
```

## 函数

### 函数参数应不超过2个

限制函数参数的数量非常重要，因为可以更容易的测试函数，超过三个会导致组合爆炸，测试的情况会大大增加。

因为JS允许动态创建对象，因此不需要大量的类样板文件，所以如果你发现自己需要很多参数，可以使用对象。

```js
// Bad
function createMenu(title, body, buttonText, cancellabel) {
  // ...
}

createMenu("Foo", "Bar", "Baz", true);

// Good
function createMenu({title, body, buttonText, cancellabel}) {
  // ...
}

createMenu({
  title: "Foo",
  body: "Bar",
  buttonText: "Baz",
  cancellabel: true,
});
```

### 函数符合单一原则

这是软件工程中重要的原则之一，当函数负责多个功能时，就很难进行组合、测试和推理。因此函数只负责单一功能时，会更容易重构它，代码读着也会更清晰。

```js
// Bad
function emailClients(clients) {
  clients.forEach(client => {
    const clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      email(client);
    }
  });
}

// Good
function emailActiveClients(clients) {
  clients.filter(isActiveClient).forEach(email);
}

function isActiveClient(client) {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}
```

