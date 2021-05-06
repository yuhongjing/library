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

### 函数命名应该突显出它的功能

见名知意。

```js
// Bad
function addToDate(date, month) {
  // ...
}

const date = new Date();

// 仅从函数名，不知道到底加的什么东西
addToDate(date, 1);

// Good
function addMonthToDate(month, date) {
  // ...
}

const date = new Date();
addMonthToDate(1, date);
```

### 保持函数只有一层抽象

当函数中有多于一个抽象级别时，你的函数通常做了太多事情。拆分函数将会提升重用性和测试性。

```js
// Bad
function parseBetterJSAlternative(code) {
  const REGEXES = [
    // ...
  ];

  const statements = code.split(' ');
  const tokens = [];
  REGEXES.forEach((REGEX) => {
    statements.forEach((statement) => {
      // ...
    });
  });

  const ast = [];
  tokens.forEach((token) => {
    // lex...
  });

  ast.forEach((node) => {
    // parse...
  });
}

// Good
function tokenize(code) {
  const REGEXES = [
    // ...
  ];

  const statements = code.split(' ');
  const tokens = [];
  REGEXES.forEach((REGEX) => {
    statements.forEach((statement) => {
      tokens.push(/* ... */);
    });
  });

  return token;
}

function lexer(tokens) {
  const ast = [];
  tokens.forEach((token) => {
    ast.push(/* ... */);
  });

  return ast;
}

function parseBetterJSAlternative(code) {
  const tokens = tokenize(code);
  const ast = lexer(tokens);
  ast.forEach((node) => {
    // parse ...
  });
}
```

### 避免冗余代码

竭尽全力避免冗余代码。因为它意味着当你需要修改一些逻辑时会有多个地方需要修改。

想象一下你在经营一家餐馆，你需要记录所有的库存西红柿、洋葱、大蒜、各种香料等等。如果你有多个记录列表，当你用西红柿做一道菜时，你得更新多个列表。如果你只有一个列表，就只有一个地方需要更新！

冗余代码通常是因为有两个或多个稍微不同的东西，它们共享大部分，但是它们的不同之处迫使你使用两个或更多独立的函数来处理大部分相同的东西，移出冗余代码意味着创建一个可以处理这些不同之处的抽象的函数/模块/类。

合理抽象很重要，这是为什么要你遵循Classes的SOLID的原因。不好的抽象比冗余代码更差，所以要谨慎行事。

```js
// Bad
function showDeveloperList(developers) {
  developers.forEach((developer) => {
    const expectedSalary = developer.calculateExpectedSalary();
    const experience = developer.getExperience();
    const githubLink = developer.getGithubLink();
    const data = {
      expectedSalary,
      experience,
      githubLink,
    };

    render(data);
  });
}

function showManagerList(managers) {
  managers.forEach((manager) => {
    const expectedSalary = manager.calculateExpectedSalary();
    const experience = manager.getExperience();
    const portfolio = manager.getMBAProjects();
    const data = {
      expectedSalary,
      experience,
      portfolio,
    };

    render(data);
  });
}

// Good
function showEmployeeList(employees) {
  employees.forEach((employee) => {
    const expectedSalary = employee.calculateExpectedSalary();
    const experience = employee.getExperience();

    let portfolio = employee.getGithubLink();

    if (employee.type === 'manager') {
      portfolio = employee.getMBAProjects();
    }

    const data = {
      expectedSalary,
      experience,
      portfolio,
    };

    render(data);
  });
}
```

### 使用Object.assign设置对象

```js
// Bad
const menuConfig = {
  title: null,
  body: "Bar",
  buttonText: null,
  cancellabel: true,
};

function createMenu(config) {
  config.title = config.title || "Foo";
  config.body = config.body || "Bar";
  config.buttonText = config.buttonText || "Baz";
  config.cancellabel = config.cancellabel !== undefined ? config.cancellabel : true;
}

createMenu(menuConfig);

// Good
const menuConfig = {
  title: "Order",
  buttonText: "Send",
  cancellabel: true,
};

function createMenu(config) {
  let finalConfig = Object.assign({
    title: "Foo",
    body: "Bar",
    buttonText: "Baz",
    cancellabel: true,
  }, config);

  return finalConfig;
  // Config值为: {title: "Order", body: "Bar", buttonText: "Send", cancellabel: true}
}
```

### 不要用标志位作为函数参数

这通常意味着函数的功能的单一性已经被破坏。此时应考虑对函数进行再次划分。

```js
// Bad
function createFile(name, temp) {
  if (temp) {
    fs.create(`./temp/${name}`);
  } else {
    fs.create(name);
  }
}

// Good
function createFile(name) {
  fs.create(name);
}

function careteTempFile(name) {
  crateFile(`./temp/${name}`);
}
```

### 避免副作用(part 1)

当函数产生了除了"接受一个值并返回一个结果"之外的行为时，称该函数产生了副作用。比如写文件、修改全局变量或将你的钱全转给了一个陌生人等。

程序在某些情况下确实需要副作用这一行为，如先前例子中的写文件。这时应该将这些功能集中在一起，不要用多个函数/类修改某个文件。用且只用与一个service完成这一需求。

重点是避免这些常见的易犯的错误，比如在对象之间共享状态而不使用任何结构，使用任何地方都可以写入的可变的数据类型，没有集中化导致副作用。

```js
// Bad
// 全局变量name被函数引用，当其他位置使用name时，值已被修改为数组。
let name = 'Ryan McDermott';

function splitIntoFirstAndLastName() {
  name = name.split(' ');
}

splitIntoFirstAndLastName();

console.log(name); // ['Ryan', 'McDermott'];

// Good
function splitInfoFirstAndLastName(name) {
  return name.split(' ');
}

const name = 'Ryan McDermott';
const newName = splitIntoFirstAndLastName(name);

console.log(name); // 'Ryan McDermott';
console.log(newName); // ['Ryan', 'McDermott'];
```

### 避免副作用(part 2)

```js
// Bad
const addItemToCart = (cart, item) => {
  cart.push({item, date: Date.now()});
};

// Good
const addItemToCart = (cart, item) => {
  return [...cart, {item, date: Date.now()}];
};
```

### 不要写全局函数

在JS中污染全局是一个非常不好的实践，这么做可能和其他库起冲突，且调用你的API的用户在实际环境中得到一个exception前对这一情况是一无所知的。

想象一下例子：如果你想扩展JS中的Array，为其添加一个diff函数显示两个数组间的差异，此时应如何去做？你可以将diff写入Array.prototype，但这么做会和其他有类似需求的库造成冲突。如果另一个库对diff的需求为比较一个数组中首尾元素间的差异呢？

使用ES6中的class对全局的Array做简单的扩展显然是一个更棒的选择。

```js
// Bad
Array.prototype.diff = function diff(comparisonArray) {
  const hash = new Set(comparisonArray);
  return this.filter(elem => !hash.has(elem));
};

// Good
class SuperArray extends Array {
  diff(comparisonArray) {
    const hash = new Set(comparisonArray);
    return this.filter(elem => !hash.has(elem));
  }
}
```

### 函数编程优于指令式编程

JavaScript不是Haskell方式的函数式语言，但是它有它的函数式风格。函数式语言更加简洁并且更容易进行测试。

```js
// Bad
const programmerOutput = [
  {
    name: 'Uncle Bobby',
    linesOfCode: 500
  }, {
    name: 'Suzie Q',
    linesOfCode: 15000
  }, {
    name: 'Jimmy Gosling',
    linesOfCode: 150
  }, {
    name: 'Gracie Hopper',
    linesOfCode: 1000
  }
];

let totalOutput = 0;

for (let i = 0; i < programmerOutput.length; i++) {
  totalOutput += programmerOutput[i].linesOfCode;
}

// Good
const programmerOutput = [
  {
    name: 'Uncle Bobby',
    linesOfCode: 500
  }, {
    name: 'Suzie Q',
    linesOfCode: 1500
  }, {
    name: 'Jimmy Gosling',
    linesOfCode: 150
  }, {
    name: 'Gracie Hopper',
    linesOfCode: 1000
  }
];

const INITIAL_VALUE = 0;

const totalOutput = programmerOutput
  .map((programmer) => programmer.linesOfCode)
  .reduce((acc, linesOfCode) => acc + linesOfCode, INITIAL_VALUE);
```

### 封装条件语句

```js
// Bad
if (fsm.state === 'fetching' && isEmpty(listNode)) {
  // ...
}

// Good
function shouldShowSpinner(fsm, listNode) {
  return fsm.state === 'fetching' && isEmpty(listNode);
}

if (shouldShowSpinner(fsmInstance, listNodeInstance)) {
  // ...
}
```

### 避免否定情况的判断

```js
// Bad
function isDOMNodeNotPresent(node) {

}

// Good
function isDOMNodePresent(node) {
  // ...
}

if (isDOMNodePresent(node)) {
  // ...
}
```

### 避免switch case

```js
// Bad
class Airplane {
  // ...
  getCruisingAltitude() {
    switch (this.type) {
      case '777':
        return this.getMaxAltitude() - this.getPassengerCount();
      case 'Air Force One':
        return this.getMaxAltitude();
      case 'Cessna':
        return this.getMaxAltitude() - this.getFuelExpenditure();
    }
  }
}

// Good
class Airplane {
  // ...
}

class Boeing777 extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude() - this.getPassengerCount();
  }
}

class AirForceOne extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude();
  }
}

class Cessna extendsAirplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude() - this.getFuelExpenditure();
  }
}
```

### 避免类型检测(part 1)

JavaScript是无类型的，这意味着你的函数能接受任何类型的参数。但是有时又会被这种自由咬伤，于是又尝试在你的函数中做类型检查。有很多种方式来避免这个问题，第一个要考虑的是一致的API。

```js
// Bad
function travelToTexas(vehicle) {
  if (vehicle instanceof Bicycle) {
    vehicle.pedal(this.currentLocation, new Location('texas'));
  } else if (vehicle instanceof Car) {
    vehicle.drive(this.currentLocation, new Location('texas'));
  }
}

// Good
function travelToTexas(vehicle) {
  vehicle.move(this.currentLocation, new Location('texas'));
}
```

### 不要过度优化

有些优化对于执行环境来说(浏览器等)根本不值一提，花时间在值得优化的地方。

```js
// Bad
// 这里使用变量len是因为在老式浏览器中
// 现代浏览器会自动完成优化
for (let i = 0, len = list.length; i < len; i++) {
  // ...
}

// Good
for (let i = 0; i < list.length; i++) {
  // ...
}
```

### 移出僵尸代码

僵尸代码和冗余代码同样糟糕，不需要时就删掉它。

```js
// Bad
function oldRequestModule(url) {
  // ...
}

function newRequestModule(url) {
  // ...
}

const req = newRequestModule;
inventoryTracker('apples', req, 'www.inventory-awesome.io');

// Good
function newRequestModule(url) {
  // ...
}

const req = newRequestModule;
inventoryTracker('apples', req, 'www.inventory-awesome.io');
```

## 对象和数据结构

### 使用getters和setters

通过getters和setters来访问对象上的数据，可以做挺多的统一前置、后置操作处理。

```js
// Bad
function makeBankAccount() {
  // ...

  return {
    balance: 0,
    // ...
  };
}

const account = makeBankAccount();
account.balance = 100;

// Good
function makeBankAccount() {
  // 模拟 private
  let balance = 0;

  function getBalance() {
    return balance;
  }

  function setBalance(amount) {
    // 前置操作
    // ...
    balance = amount;
    // 后置操作
    // ...
  }

  return {
    // ...
    getBalance,
    setBalance,
  };
}

const account = makeBankAccount();
account.setBalance(100);
```

### 让对象拥有私有成员

通过闭包完成。

```js
// Bad
const Employee = function (name){
  this.name = name;
};

Employee.prototype.getName = function getName() {
  return this.name;
}

const employee = new Employee('John Doe');
console.log(`Employee name: ${employee.getName()}`); // Employee name: John Doe
delete employee.name;
console.log(`Employee name: ${employee.getName()}`); // Employee name: undefined

// Good
function makeEmployee(name) {
  return {
    getName() {
      return name;
    }
  };
}

const employee = makeEmployee('John Doe');
console.log(`Employee name: ${employee.getName()}`); // Employee name: John Doe
delete employee.name;
console.log(`Employee name: ${employee.getName()}`); // Employee name: John Doe
```

## 类