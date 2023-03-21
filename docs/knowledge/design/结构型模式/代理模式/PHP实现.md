---
title: PHP实现
---

# 代理模式-PHP

* [安全门](#安全门)
* [追女孩](#追女孩)

## 安全门

通过安全系统的验证，才能打开门。

```php
<?php

interface Door {
  public function open();
  public function close();
}

// 门
class LabDoor implements Door {
  public function open() {
    echo "Opening lab door";
  }

  public function close() {
    echo "Closing the lab door";
  }
}

// 安全系统，支持任何门
class SecureDoor {
  protected $door;

  public function __construct(Door $door) {
    $this->door = $door;
  }

  public function open($password) {
    if ($this->authenticate($password)) {
      $this->door->open();
    } else {
      echo "Big no! It ain't possible.";
    }
  }

  public function authenticate($password) {
    return $password === '$ecr@t';
  }

  public function close() {
    $this->door->close();
  }
}

// client
$door = new SecureDoor(new LabDoor());
$door->open('invalid'); // Big no! It ain't possible.

$door->open('$ecr@t'); // Opening lab door
$door->close(); // Closing lab door
```

## 追女孩

托人给女孩送礼物。

```php
<?php

class SchoolGirl {
  private $name;

  public function __construct($name) {
    $this->name = $name;
  }

  public function getName() {
    return $this->name;
  }
}

// 代理接口
interface GiveGift {
  public function GiveDolls();
  public function GiveFlowers();
  public function GiveChocolate();
}

// 代理实现送礼物接口
class Proxy implements GiveGift {
  protected $pursuit;

  public function __construct(SchoolGirl $girl) {
    $this->pursuit = new Pursuit($girl);
  }

  public function GiveDolls() {
    $this->pursuit->GiveDolls();
  }

  public function GiveFlowers() {
    $this->pursuit->GiveFlowers();
  }

  public function GiveChocolate() {
    $this->pursuit->GiveChocolate();
  }
}

// 追求者类实现送礼物接口
class Pursuit implements GiveGift {
  protected $girl;

  public function __construct(SchoolGirl $girl) {
    $this->girl = $girl;
  }

  public function GiveDolls() {
    echo $this->girl->getName()." 送你娃娃\n";
  }

  public function GiveFlowers() {
    echo $this->girl->getName()." 送你花\n";
  }

  public function GiveChocolate() {
    echo $this->girl->getName()." 送你巧克力\n";
  }
}

// client
$girl = new SchoolGirl('李梅');
$proxy = new Proxy($girl);
$proxy->GiveDolls(); // 李梅 送你娃娃
$proxy->GiveChocolate(); // 李梅 送你巧克力
$proxy->GiveFlowers(); // 李梅 送你花
```

