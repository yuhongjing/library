---
title: JS实现
---

# 建造者模式—JS

* [制作汉堡](#制作汉堡)

## 制作汉堡

根据用户需求，随意组合定制汉堡。

```js
// 产品：汉堡 对应Product
class Burger {
  constructor(builder) {
    this.size = builder.size;
    this.cheeze = builder.cheeze || false;
    this.pepperoni = builder.pepperoni || false;
    this.lettuce = builder.lettuce || false;
    this.tomato = builder.tomato || false;
  }
}

// 建造者：制作汉堡 对应Builder
class BurgerBuilder {
  constructor(size) {
    this.size = size;
  }
  
  addPepperoni() {
    this.pepperoni = true;
    return this;
  }
  
  addLettuce() {
    this.lettuce = true;
    return this;
  }
  
  addCheeze() {
    this.cheeze = true;
    return this;
  }
  
  addTomato() {
    this.tomato = true;
    return this;
  }
  
  build() {
    return new Burger(this);
  }
}

// 指挥者：指挥各个工作
class Director {
  constructor(builder) {
    this.builder = builder;
  }
  action() {
    this.builder.addPepperoni();
    this.builder.addLettuce();
    this.builder.addCheeze();
    this.builder.addTomato();
  }
}

// 客人购买方式1 这里少选择了一个cheeze
// 用户知道生产过程
const burger = new BurgerBuilder(14)
	.addPepperoni()
	.addLettuce()
	.addTomato()
	.build();

// 客人购买方式2 这里没办法少选择东西
// 通过指挥者 用户不知道生产过程 隔离用户与生产过程
const burgerBuilder = new BurgerBuilder(14);
const director = new Director(burgerBuilder);
director.action();
const burger2 = burgerBuilder.build();
```

