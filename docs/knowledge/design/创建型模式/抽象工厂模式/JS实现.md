---
title: JS实现
---

# 抽象工厂模式-JS
* [安装一扇门](#安装一扇门)

## 安装一扇门
现在，我们需要安装一扇门。

我们可以去木门店买一扇木门，也可以从铁门店买一扇铁门，或者从相关商店买一扇PVC门。

另外，我还需要一个不同专业的人来安装我购买的门，例如木工来安装木门，焊工来焊接铁门等等。

现在正如你看到，它们之间存在一个从属关系，木门需要木匠，铁门需要焊工。

```js
// Door 门类的接口
class WoondenDoor {
    getDescription() {
        console.log('我是木门');
    }
}
class IronDoor {
    getDescription() {
        console.log('我是铁门');
    }
}

// DoorFittingExpert 工人类的接口
class Carpenter {
  getDescription() {
      console.log('我只能安装木门');
  }
}
class Welder {
    getDescription() {
        console.log('我只能安装铁门');
    }
}

// 现在来实现一个抽象工厂，铁门工厂创建一个铁门和焊工、木门工厂会创建木门和木工
// DoorFactory 工厂类
class WoodenDoorFactory {
    makeDoor() {
        return new WoondenDoor();
    }
    makeFittingExpert() {
        return new Carpenter();
    }
}
class IronDoorFactory {
    makeDoor() {
        return new IronDoor();
    }
    makeFittingExpert() {
        return new Welder();
    }
}

// 客户端使用
 // *******木门工厂********
const woodenFactory = new WoodenDoorFactory();

const doorWooden = woodenFactory.makeDoor();
const expertWooden = woodenFactory.makeFittingExpert();

doorWooden.getDescription(); // 我是木门
expertWooden.getDescription(); // 我只能安装木门
 // *******铁门工厂********
const ironFactory = new IronDoorFactory();

const doorIron = ironFactory.makeDoor();
const expertIron = ironFactory.makeFittingExpert();

doorIron.getDescription(); // 我是铁门
expertIron.getDescription(); // 我只能安装铁门

```

你可以看到木门工厂封装了木匠和木门，铁门工厂也封装了铁门和焊工。

因此，它帮助我们确保每一个创建的门，我们不会得到一个错误的安装专家。