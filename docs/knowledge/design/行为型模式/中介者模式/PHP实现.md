---
title: PHP实现
---

# 中介者模式-PHP实现

* [聊天室](#聊天室)
* [标准例子](#标准例子)

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

## 标准例子

中介者模式的标准例子。

```php
<?php
abstract class Mediator {
  abstract public function send($message, Colleague $colleague);
}

abstract class Colleague {
  protected $mediator;

  public function __construct(Mediator $mediator) {
    $this->mediator = $mediator;
  }
}

class ConcreteMediator extends Mediator {
  private $colleague1;
  private $colleague2;

  public function setColleague1(Colleague $colleague) {
    $this->colleague1 = $colleague;
  }

  public function setColleague2(Colleague $colleague) {
    $this->colleague2 = $colleague;
  }

  public function send($message, Colleague $colleague) {
    if ($this->colleague1 == $colleague) {
      $this->colleague2->notify($message);
    } else {
      $this->colleague1->notify($message);
    }
  }
}

class ConcreteColleague1 extends Colleague {
  public function send($message) {
    $this->mediator->send($message, $this);
  }

  public function notify($message) {
    echo "ConcreteColleague1 ".$message."\n";
  }
}

class ConcreteColleague2 extends Colleague {
  public function send($message) {
    $this->mediator->send($message, $this);
  }

  public function notify($message) {
    echo "ConcreteColleague2 ".$message."\n";
  }
}

// client 

$mediator = new ConcreteMediator();
$c1 = new ConcreteColleague1($mediator);
$c2 = new ConcreteColleague2($mediator);

$mediator->setColleague1($c1);
$mediator->setColleague2($c2);

$c1->send('do you eat?');
$c2->send('no, do you want to invite me to dinner?');
```