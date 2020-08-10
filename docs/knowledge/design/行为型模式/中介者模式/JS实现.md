---
title: JS实现
---

# 中介者模块-JS

* [聊天室](#聊天室)

## 聊天室

用户相互发送消息，而聊天室（中介）负责转发消息。

```js
// Mediator
class ChatRoom {
    showMessage(user, message) {
        const time = new Date();
        const sender = user.getName();

        console.log(time + '[' + sender + ']:' + message);
    }
}

class User {
    constructor(name, chatMediator) {
        this.name = name;
        this.chatMediator = chatMediator;
    }

    getName() {
        return this.name;
    }

    send(message) {
        this.chatMediator.showMessage(this, message);
    }
}

// client
const mediator = new ChatRoom();

const john = new User('John Doe', mediator);
const jane = new User('Jane Doe', mediator);

john.send('Hi there!');
jane.send('Hey!');

// Output will be
// Thu Aug 06 2020 18:21:48 GMT+0800 (GMT+08:00)[John Doe]:Hi there!
// Thu Aug 06 2020 18:21:48 GMT+0800 (GMT+08:00)[Jane Doe]:Hey!
```

