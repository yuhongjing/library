---
title: JS实现
---

# 外观模式-JS

* [电脑开关机](#电脑开关机)

## 电脑开关机

电脑开机和关机，其实是需要执行很多流程的。

以下例子中的开机，需要执行【开电源-发出声音-显示等待界面-开机完毕反馈】四个步骤。

通过外观模式，客户端只需要调用一个方法，就可以执行完整的开机流程。

```js
class Computer {
  getElectricShock() {
    console.log('Ouch!');
  }

  makeSound() {
    console.log('Beep beep!');
  }

  showLoadingScreen() {
    console.log('Loading..');
  }

  bam() {
    console.log('Ready to be used!');
  }

  closeEverything() {
    console.log('Bup bup bup buzzzz!');
  }

  sooth() {
    console.log('Zzzzz');
  }

  pullCurrent() {
    console.log('Haaah!');
  }
}

class ComputerFacade {
  constructor(computer) {
    this.computer = computer;
  }

  turnOn() {
    this.computer.getElectricShock();
    this.computer.makeSound();
    this.computer.showLoadingScreen();
    this.computer.bam();
  }

  turnOff() {
    this.computer.closeEverything();
    this.computer.pullCurrent();
    this.computer.sooth();
  }
}

// client
const computer = new ComputerFacade(new Computer());
computer.turnOn(); // Ouch! Beep beep! Loading.. Ready to be used!
computer.turnOff(); // Bup bup buzzz! Haah! Zzzzz
```

