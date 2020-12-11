---
title: JS实现
---

# 适配器模式-JS

* [猎人捕猎](#猎人捕猎)

## 猎人捕猎

猎人根据狮子的吼叫声来定位狮子的位置并捕杀它。
但现在猎人又需要捕猎鬣狗，鬣狗却只会犬吠，所以我们需要适配鬣狗。

```js
// 狮子基类
class Lion {
  roar() {}
}

class AfricanLion extends Lion {
  roar() {
    console.log("非洲狮在吼叫!!!");
  }
}

class AsianLion extends Lion {
  roar() {
    console.log("亚洲狮在吼叫!!!");
  }
}

class Hunter {
  hunt(lion) {
    // 听到狮子的吼叫，去猎杀狮子
    lion.roar();
  }
}
// 现在猎人需要捕杀鬣狗，但鬣狗不会吼叫
class WildDog {
  // 鬣狗只会犬吠
  bark() {
    console.log("鬣狗在犬吠。。。");
  }
}
// 所以需要适配器，来模拟吼叫的方法，实际执行的犬吠
class WildDogAdapter {
  constructor(dog) {
    this.dog = dog;
  }

  roar() {
    this.dog.bark();
  }
}

// 客户端
const hunter = new Hunter();
// 捕猎狮子
const africanLion = new AfricanLion();
const asianLion = new AsianLion();
hunter.hunt(africanLion); // 非洲狮在吼叫!!!
hunter.hunt(asianLion); // 亚洲狮在吼叫!!!
// 捕猎鬣狗
const wildDog = new WildDog();
const wildDogAdapter = new WildDogAdapter(wildDog);
hunter.hunt(wildDogAdapter); // 鬣狗在犬吠。。。
```

