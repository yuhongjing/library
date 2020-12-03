---
title: JS实现
---

# 访问者模式-JS

* [动物叫声](#动物叫声)

## 动物叫声

动物园有不同的动物，我们要让它们发声。

```js
class Monkey {
  shout() {
    console.log('Ooh oo aa aa!');
  }

  accept(operation) {
    operation.visitMonkey(this);
  }
}

class Lion {
  roar() {
    console.log('Roaaar!');
  }

  accept(operation) {
    operation.visitLion(this);
  }
}

class Dolphin {
  speak() {
    console.log('Tuut tuttu tuutt!');
  }

  accept(operation) {
    operation.visitDolphin(this);
  }
}

// 访问者
const speak = {
  visitMonkey(monkey) {
    monkey.shout();
  },
  visitLion(lion) {
    lion.roar();
  },
  visitDolphin(dolphin) {
    dolphin.speak();
  }
};

// client
const monkey = new Monkey();
const lion = new Lion();
const dolphin = new Dolphin();

monkey.accept(speak); // Ooh oo aa aa!
lion.accept(speak); // Roaaar!
dolphin.accept(speak); // Tuut tutt tuutt!
```