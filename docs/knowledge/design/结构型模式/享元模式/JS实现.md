---
title: JS实现
---

# 享元模式-JS

* [茶馆](#茶馆)

## 茶馆

茶馆，根据客人需求，掺入不同配料的茶。

```js
// Anything that will be cached is flyweight. 
// Types of tea here will be flyweights.
class KarakTea {

}

// Acts as a factory and saves the tea
class TeaMaker {
    constructor() {
        this.availabelTea = {};
    }

    make(preference) {
        this.availabelTea[preference] = this.availabelTea[preference] || (new KarakTea());
        return this.availabelTea[preference];
    }
}

class TeaShop {
    constructor(teaMaker) {
        this.teaMaker = teaMaker;
        this.orders = [];
    }

    takeOrder(teaType, table) {
        this.orders[table] = this.teaMaker.make(teaType);
    }

    serve() {
        this.orders.forEach((order, index) => {
            console.log('Serving tea to table#' + index);
        });
    }
}

// client
const teaMaker = new TeaMaker();
const shop = new TeaShop(teaMaker);

shop.takeOrder('less sugar', 1);
shop.takeOrder('more milk', 2);
shop.takeOrder('without sugar', 5);

shop.serve();
// Serving tea to table#1
// Serving tea to table#2
// Serving tea to table#5
```

