---
title: JS实现
---

# 命令模式-JS

* [开关灯](#开关灯)

## 开关灯

通过开关，来控制灯的状态。

```js
// Receiver
class Bulb {
    turnOn() {
        console.log('Bulb has been lit');
    }

    turnOff() {
        console.log('Darkness');
    }
}

// Command
class TurnOnCommand {
    constructor(blub) {
        this.blub = blub;
    }

    excute() {
        this.blub.turnOn();
    }

    undo() {
        this.blub.turnOff();
    }

    redo() {
        this.excute();
    }
}

class TurnOffCommand {
    constructor(blub) {
        this.blub = blub;
    }

    excute() {
        this.blub.turnOff();
    }

    undo() {
        this.blub.turnOn();
    }

    redo() {
        this.excute();
    }
}

// Invoker
class RemoteControl {
    submit(command) {
        command.excute();
    }
}

const bulb = new Bulb();

const turnOn = new TurnOnCommand(bulb);
const turnOff = new TurnOffCommand(bulb);

const remote = new RemoteControl();
remote.submit(turnOn); // Bulb has been lit!
remote.submit(turnOff); // Darkness!
```

