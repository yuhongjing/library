---
title: clean-code-javascript
---

# clean-code-javascript

关于书写整洁JS代码的风格指南。

* [变量](#变量)
* [函数](#函数)
* [对象和数据结构](#对象和数据结构)
* [类](#类)
* [健壮性](#健壮性)
* [并发性](#并发性)
* [容错性](#容错性)
* [格式化](#格式化)
* [注释](#注释)

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

### ES2015/ES6类优先与ES5纯函数

经典的ES5类的继承、构造和定义可读性不太好。因此尽量优先使用ES6的类。

```js
// Bad
const Animal = function(age) {
  if (!(this instanceof Animal)) {
    throw new Error('Instantiate Animal with `new`');
  }

  this.age = age;
};

Animal.prototype.move = function move() {};

const Mammal = function(age, furColor) {
  if (!(this instanceof Mammal)) {
    throw new Error('Instantiate Mammal with `new`');
  }

  Animal.call(this, age);
  this.furColor = furColor;
};

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;
Mammal.prototype.liveBirth = function liveBirth() {};

const Human = function(age, furColor, languageSpoken) {
  if (!(this instanceof Human)) {
    throw new Error('Instantiate Human with `new`');
  }

  Mammal.call(this, age, furColor);
  this.languageSpoken = languageSpoken;
};

Human.prototype = Object.create(Mammal.prototype);
Human.prototype.constructor = Human;
Human.prototype.speak = function speak() {};

// Good
class Animal {
  constructor(age) {
    this.age = age;
  }

  move() {}
}

class Mammal extends Animal {
  constructor(age, furColor) {
    super(age);
    this.furColor = furColor;
  }

  liveBirth() {}
}

class Human extends Mammal {
  constructor(age, furColor, languageSpoken) {
    super(age, furColor) {
      this.languageSpoken = languageSpoken;
    }
  }

  speak() {}
}
```

### 使用方法链

方法链在JavaScript中是非常有用的，并在许多类库比如jQuery和Lodash中见到。它允许你的代码变得富有表现力，并减少啰嗦。在类/方法中返回this，就可以把类的其它方法链在一起。

```js
// Bad
class Car {
  constructor() {
    this.make = 'Honda';
    this.model = 'Accord';
    this.color = 'white';
  }

  setMake(make) {
    this.make = make;
  }

  setModel(model) {
    this.model = model;
  }

  setColor(color) {
    this.color = color;
  }

  save() {
    console.log(this.make, this.model, this.color);
  }
}

const car = new Car();
car.setColor('pink');
car.setMake('Ford');
car.setModel('F-150');
car.save();

// Good
class Car {
  constructor() {
    this.make = 'Honda';
    this.model = 'Accord';
    this.color = 'white';
  }

  setMake(make) {
    this.make = make;
    return this;
  }

  setModel(model) {
    this.model = model;
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  save() {
    console.log(this.make, this.model, this.color);
    return this;
  }
}

const car = new Car()
  .setColor('pink')
  .setMake('Ford')
  .setModel('F-150')
  .save();
```

### 组合优先于继承

尽可能先优先使用组合而不是继承。

```js
// Bad
class Employee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // ...
}

class EmployeeTaxData extends Employee {
  constructor(ssn, salary) {
    super();
    this.ssn = ssn;
    this.salary = salary;
  }

  // ...
}

// Good
class EmployeeTaxData {
  constructor(ssn, salary) {
    this.ssn = ssn;
    this.salary = salary;
  }

  // ...
}

class Employee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  setTaxData(ssn, salary) {
    this.taxData = new EmployeeTaxData(ssn, salary);
  }
  // ...
}
```

## 健壮性

### 单一职责原则(SRP)

正如代码整洁之道所述，"永远不要有超过一个理由来修改一个类"。给一个类塞满许多功能，就像你在航班上只能带一个行李箱一样，这样做的会导致类缺少内聚性，经常对它进行修改。

```js
// Bad
class UserSettings {
  constructor(user) {
    this.user = user;
  }

  changeSettings(settings) {
    if (this.verifyCredentials()) {
      // ...
    }
  }

  verifyCredentials() {
    // ...
  }
}

// Good
class UserAuth {
  constructor(user) {
    this.user = user;
  }

  verifyCredentials() {
    // ...
  }
}

class UserSettings {
  constructor(user) {
    this.user = user;
    this.auth = new UserAuth(user);
  }

  changeSettings(settings) {
    if (this.auth.verifyCredentials()) {
      // ...
    }
  }
}
```

### 开闭原则(OCP)

Bertrand Meyer说过，"软件实体(类、模块、函数等)应该为扩展开放，但是为修改关闭。"这是什么意思呢？这个原则基本上说明了你应该允许用户添加功能而不必修改现在的代码。

```js
// Bad
class AjaxAdapter extends Adapter {
  constructor() {
    super();
    this.name = 'ajaxAdapter';
  }
}

class NodeAdapter extends Adapter {
  constructor() {
    super();
    this.name = 'nodeAddapter';
  }
}

class HttpRequester {
  constructor(adapter) {
    this.adapter = adapter;
  }

  fetch(url) {
    if (this.adapter.name === 'ajaxAdapter') {
      return makeAjaxCall(url).then((response) => {
        // ...
      });
    }

    if (this.adapter.name === 'httpNodeAdapter') {
      return makeHttpCall(url).then((response) => {
        // ...
      });
    }
  }
}

function makeAjaxCall(url) {
  // ...
}

function makeHttpCall(url) {
  // ...
}

// Good
class AjaxAdapter extends Adapter {
  constructor() {
    super();
    this.name = 'ajaxAdapter';
  }

  request(url) {
    // ...
  }
}

class NodeAdapter extends Adapter {
  constructor() {
    super();
    this.name = 'nodeAdapter';
  }

  request(url) {
    // ...
  }
}

class HttpRequest {
  constructor(adapter) {
    this.adapter = adapter;
  }

  fetch(url) {
    return this.adapter.request(url).then((response) => {
      // ...
    });
  }
}
```

### Liskov替换原则(LSP)

里氏替换原则，**子类可以扩展父类的功能，但不能改变父类原有的功能**。也就是说：子类继承父类时，除添加新的方法完成新增功能外，尽量不要重写父类的方法。

```js
// Bad
class Rectangle {
  constructor() {
    this.width = 0;
    this.height = 0;
  }

  setColor(color) {
    // ...
  }

  render(area) {
    // ...
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.width = height;
    this.height = height;
  }
}

function renderLargeRectangles(rectangles) {
  rectangles.forEach((rectangle) => {
    rectangle.setWidth(4);
    rectangle.setHeight(5);
    const area = rectangle.getArea(); // BAD: 返回了25，应该返回20
    rectangle.render(area);
  });
}

const rectangles = [new Rectangle(), new Rectangle(), new Square()];
renderLargeRectangles(rectangles);

// Good
class Shape {
  setColor(color) {
    // ...
  }

  render(area) {
    // ...
  }
}

class Rectangle extends Shape {
  constructor(widht, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(length) {
    super();
    this.length = length;
  }

  getArea() {
    return this.length * this.length;
  }
}

function renderLargeShapes(shapes) {
  shapes.forEach((shape) => {
    const area = shape.getArea();
    shape.render(area);
  });
}

const shapes = [new Rectangle(4, 5), new Rectangle(4, 5), new Square(5)];
renderLargeShapes(shapes);
```

### 接口隔离原则(ISP)

JavaScript没有接口，所以这个原则不像其它语言那么严格。不过，对于JavaScript这种缺少类型的语言来说，它依然是重要并且有意义的。

接口隔离原则说的是"客户端不应该强制依赖他们不需要的接口。"在JavaScript这种弱类型语言中，接口是隐式的契约。

在JavaScript中能比较好的说明这个原则的是一个类需要一个巨大的配置对象。不需要客户端去设置大量的选项是有益的，因为多数情况下他们不需要全部的设置。让它们变成可选的有助于防止出现一个"胖接口"。

```js
// Bad
class DOMTraverser {
  constructor(settings) {
    this.settings = settings;
    this.setup();
  }

  setup() {
    this.rootNode = this.settings.rootNode;
    this.animationModule.setup();
  }

  traverse() {
    // ...
  }
}

const $ = new DOMTraverser({
  rootNode: document.getElementsByTagName('body'),
  animationModule() {}
});

// Good
class DOMTraverser {
  constructor(settings) {
    this.settings = settings;
    this.options = settings.options;
    this.setup();
  }

  setup {
    this.rootNode = this.settings.rootNode;
    this.setupOptions();
  }

  setupOptions() {
    if (this.options.animationModule) {
      // ...
    }
  }

  traverse() {
    // ...
  }
}

const $ = new DOMTraverser({
  rootNode: document.getElementsByTagName('body'),
  options: {
    animationModule() {}
  }
});
```

### 依赖反转原则(DIP)

这个原则阐述了两个重要的事情：

1. 高级模块不应该依赖于低级模块，两者都应该依赖于抽象。
2. 抽象不应当依赖于具体实现，具体实现应当依赖于抽象。

如上所述，JavaScript没有接口，所以被依赖的抽象是隐式契约。也就是说，一个对象/类的方法和属性直接暴露给另外一个对象/类。在下面的例子中，任何一个Request模块的隐式契约InventoryTracker将有一个requestItems方法。

```js
// Bad
class InventoryRequester {
  constructor() {
    this.REQ_METHODS = ['HTTP'];
  }

  requestItem(item) {
    // ...
  }
}

class InventoryTracker {
  constructor(items) {
    this.items = items;

    this.requester = new InventoryRequester();
  }

  requestItems() {
    this.items.forEach((item) => {
      this.requester.requestItem(item);
    });
  }
}

const inventoryTracker = new InventoryTracker(['apples', 'bananas']);
inventoryTracker.requestItems();

// Good
class InventoryTracker {
  constructor(items, requester) {
    this.items = items;
    this.requester = requester;
  }

  requestItems() {
    this.items.forEach((item) => {
      this.requester.requestItem(item);
    });
  }
}

class InventoryRequesterV1 {
  constructor() {
    this.REQ_METHODS = ['HTTP'];
  }

  requestItem(item) {
    // ...
  }
}

class InventoryRequesterV2 {
  constructor() {
    this.REQ_METHODS = ['WS'];
  }

  requestItem(item) {
    // ...
  }
}

const inventoryTracker = new InventoryTracker(['apples', 'bananas'], new InventoryRequesterV2());
inventoryTracker.requestItems();
```

## 并发性

### 使用Promises而不是callback

回调不够简洁，因为他们会产生过多的嵌套。在ES2015/ES6中，Promises已经是内置的全局类型了。

```js
// Bad
import { get } from 'request';
import { writeFile } from 'fs';

get('xxx/xxx', (requestErr, response) => {
  if (requestErr) {
    console.error(requestErr);
  } else {
    writeFile('xxxx', response.body, (writeErr) => {
      if (writeErr) {
        console.error(writeErr);
      } else {
        // ...
      }
    });
  }
});

// Good
import { get } from 'request';
import { writeFile } from 'fs';

get('xxx')
  .then((response) => {
    return writeFile('xxxx', response);
  })
  .then(() => {
    // ...
  })
  .catch((err) => {
    console.error(err);
  });
```

### Async/Await比Promises更加简洁

Promises是回调的一个非常简洁的替代品，但是ES2017/ES8带来的async和await提供了一个更加简洁的解决方案。你需要的只是一个前缀为async关键字的函数，接下来就可以不需要then函数链来编写逻辑了。

```js
// Bad
import { get } from 'request-promise';
import { writeFile } from 'fs-promise';

get('xxx')
  .then((response) => {
    return writeFile('xxx', response);
  })
  .then(() => {
    console.log('xxx');
  })
  .catch((err) => {
    console.error(err);
  });

// Good
import { get } from 'request-promise';
import { writeFile } from 'fs-promise';

async function getCleanCodeArticle() {
  try {
    const response = await get('xxx');
    await writeFile('xxx', response);
  } catch(err) {
    console.error(err);
  }
}
```

## 容错性

抛出错误是一件好事情！他们意味着当你的程序有错时运行时可以成功确认，并且通过停止执行当前堆栈上的函数来让你知道，结束当前进程，在控制器中用一个堆栈跟踪提示你。

### 不要忽略捕捉错误

对捕捉到的错误不做任何处理不能给你修复错误或者响应错误的能力。向控制台记录错误也不怎么好，因为往往会丢失在海量的控制台输出中。如果你把任意一段代码用try/catch包装那就意味着你想到这里可能会错，因此你应该有个修复计划，或者当错误发生时有一个代码路径。

```js
// Bad
try {
  functionThatMightThrow();
} catch(error) {
  console.log(error);
}

// Good
try {
  functionThatMightThrow();
} catch(error) {
  console.error(error);
  notifyUserOfError(error);
  reportErrorToService(error);
}
```

### 不要忽略被拒绝的promise

与你不应忽略来自try/catch的错误的原因相同。

```js
// Bad
getdata()
  .then((data) => {
    functionThatMightThrow(data);
  })
  .catch((error) => {
    console.log(error);
  })

// Good
getdata()
  .then((data) => {
    functionThatMightThrow(data);
  })
  .catch((error) => {
    console.error(error);
    notifyUserOfError(error);
    reportErrorToService(error);
  });
```

## 格式化

格式化是主观的。就像其它规则一样，没有必须让你遵循的硬性规则。重点是不要因为格式去争论，使用工具来自动格式化即可。

### 保持大小写一致

JavaScript是无类型的，所以大小写告诉你关于你的变量、函数等的很多事情。这些规则是主观的，所以你的团队可以选择他们想要的。重点是，不管你们选择了什么，要保持一致。

```js
// Bad
const DAYS_IN_WEEK = 7;
const daysInMonth = 30;

const songs = ['Back In Black', 'Stairway to Heaven', 'Hey Jude'];
const Artists = ['ACDC', 'Led Zepplein', 'The Beatles'];

function eraseDatabase() {}
function restore_database() {}

class animal {}
class Alpaca {}

// Good
const DAYS_IN_WEEK = 7;
const DAYS_IN_MONTH = 30;

const songs = ['Back In Black', 'Stairway to Heaven', 'Hey Jude'];
const artists = ['ACDC', 'Led Zeppelin', 'The Beatles'];

function eraseDatabase() {}
function restoreDatabase() {}

class Animal {}
class Alpaca {}
```

### 函数的调用方与被调用方应该靠近

如果一个函数调用另一个，则在代码中这两个函数的竖直位置应该靠近。理想情况下，保持被调用函数在被调用函数的正上方。我们倾向于从上到下阅读代码，就像读一章报纸。

```js
// Bad
class PerformanceReview {
  constructor(employee) {
    this.employee = employee;
  }

  lookupPeers() {
    return db.lookup(this.employee, 'peers');
  }

  lookupManager() {
    return db.lookup(this.employee, 'manager');
  }

  getPeerReviews() {
    const peers = this.lookupPeers();
    // ...
  }

  perfReview() {
    this.getPeerReviews();
    this.getManagerReview();
    this.getSelfReview();
  }

  getManagerReview() {
    const manager = this.lookupManager();
  }

  getSelfReview() {
    // ...
  }
}

const review = new PerformanceReview(user);
review.perfReview();

// Good
class PerformanceReview {
  constructor(employee) {
    this.employee = employee;
  }

  perfReview() {
    this.getPeerReviews();
    this.getManagerReview();
    this.getSelfReview();
  }

  getPeerReviews() {
    const peers = this.lookupPeers();
    // ...
  }

  lookupPeers() {
    return db.lookup(this.employee, 'peers');
  }

  getManagerReview() {
    const manager = this.lookupManager();
  }

  lookupManager() {
    return db.lookup(this.employee, 'manager');
  }

  getSelfReview() {
    // ...
  }
}

const review = new PerformanceReview(user);
review.perfReview();
```

## 注释

### 仅仅对包含复杂业务逻辑的代码进行注释

注释是代码的解释，不是要求。多数情况下，好的代码就是文档。

```js
// Bad
function hashIt(data) {
  // 这是hash
  let hash = 0;
  // 字符长度
  const length = data.length;

  // 遍历字符串
  for (let i = 0; i < length; i++) {
    // 获取字符编码
    const char = data.charCodeAt(i);
    // 制造Hash
    hash = ((hash << 5) - hash) + char;
    // 转换为32位数字
    hash &= hash;
  }
}

// Good
function hashIt(data) {
  let hash = 0;
  const length = data.length;

  for (let i = 0; i < length; i++) {
    const char = data.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    // 转换为32位数字
    hash &= hash;
  }
}
```

### 不要在代码库中保存注释掉的代码

因为有版本控制，把旧的代码留在历史记录即可。

```js
// Bad
doStuff();
// doOtherStuff();
// doSomeMoreStuff();
// doSoMuchStuff();

// Good
doStuff();
```

### 不要有日志式的评论

记住，使用版本控制！不需要僵尸代码，注释掉的代码，尤其是日志式的评论。使用git log来获取历史记录。

```js
// Bad
/**
 * 2016-12-20: Removed monads, didn't understand them (RM)
 * 2016-10-01: Improved using special monads (JP)
 * 2016-02-03: Removed type-checking (LI)
 * 2015-03-14: Added combine with type-checking (JR)
 */
function combine(a, b) {
  return a + b;
}

// Good
function combine(a, b) {
  return a + b;
}
```

### 避免不必要的占位符

它们仅仅添加了干扰性。让函数和变量名称与合适的缩进和格式化为你的代码提供视觉结构。

```js
// Bad
////////////////////////////////////////////////////////////////////////////////
// Scope Model Instantiation
////////////////////////////////////////////////////////////////////////////////
$scope.model = {
  menu: 'foo',
  nav: 'bar'
};

////////////////////////////////////////////////////////////////////////////////
// Action setup
////////////////////////////////////////////////////////////////////////////////
const actions = function() {
  // ...
};

// Good
$scope.model = {
  menu: 'foo',
  nav: 'bar'
};

const actions = function() {
  // ...
};
```