---
title: PHP实现
---

# 中介者模式-PHP实现

* [聊天室](#聊天室)

## 聊天室

用户相互发送消息，而聊天室（中介）负责转发消息。

```php
<?php
interface ChatRoomMediator
{
    public function showMessage(User $user, string $message);
}

// Mediator
class ChatRoom implements ChatRoomMediator
{
    public function showMessage(User $user, string $message)
    {
        $time = date('M d, y H:i');
        $sender = $user->getName();

        echo $time . '[' . $sender . ']:' . $message;
    }
}

class User {
    protected $name;
    protected $chatMediator;

    public function __construct(string $name, ChatRoomMediator $chatMediator) {
        $this->name = $name;
        $this->chatMediator = $chatMediator;
    }

    public function getName() {
        return $this->name;
    }

    public function send($message) {
        $this->chatMediator->showMessage($this, $message);
    }
}

// client
$mediator = new ChatRoom();
$john = new User('John Doe', $mediator);
$jane = new User('Jane Doe', $mediator);

$john->send('Hi there!');
$jane->send('Hey!');

// output will be
// Aug 06, 20 10:33[John Doe]:Hi there!
// Aug 06, 20 10:33[Jane Doe]:Hey!
```

