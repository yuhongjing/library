---
title: JS实现
---

# 代理模式-JS

* [安全门](#安全门)

## 安全门

通过安全系统的验证，才能打开门。

```js

class LabDoor {
  open() {
    console.log('Opening lab door');
  }

  close() {
    console.log('Closing the lab door');
  }
}

class Security {
  constructor(door) {
    this.door = door;
  }

  open(password) {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log("Big no! It ain't possible.");
    }
  }

  authenticate(password) {
    return password === 'ecr@t';
  }

  close() {
    this.door.close();
  }
}

// client
const door = new Security(new LabDoor());
door.open('incalid'); // Big no! It ain't possible.

door.open('ecr@t'); // Opening lab door
door.close(); // Closing lab door
```

