---
title: JS实现
---

# 简单工厂模式—JS

* [弹窗](#弹窗)
* [木门](#木门)



## 弹窗

创建提示框、警告框等各种功能性弹窗。

```js
function popFactory(type, options) {
    switch (type) {
        case 'alert':
            return new Alert(options);
        case 'prompt':
            return new Prompt(options);
        case 'confirm':
            return new Confirm(options);
    }
}

// 使用
popFactory('alert', '提示信息');
```



## 木门

得到一个木门，只需传入参数即可生成不同类型的木门，无须关注生成细节。

```js
class WoodenDoor {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  getWidth() {
    return this.width;
  }
  
  getHeight() {
    return this.height;
  }
}

class DoorFactory {
  makeDoor: (width, height) => new WoodenDoor(width, height);
}

// client
const door = DoorFactory.makeDoor(100, 200); // 得到一个宽100，高200的门
console.log('Width:', door.getWidth()); // 100
console.log('Height:', door.getHeight()); // 200

const door1 = DoorFactory.makeDoor(200, 50); // 得到一个宽200，高50的门
```

