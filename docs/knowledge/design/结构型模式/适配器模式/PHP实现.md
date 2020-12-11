---
title: PHP实现
---

# 适配器模式-PHP

* [翻译](#翻译)
* [猎人捕猎](#猎人捕猎)

## 翻译

外籍球员需要翻译才能与大家进行沟通。

```php
<?php

abstract class Player {
    protected $name;

    function __construct($name) {
        $this->name = $name;
    }

    abstract public function Attack();
    abstract public function Defense();
}

// 前锋
class Forwards extends Player {
    public function Attack() {
        echo "前锋:".$this->name." 进攻\n";
    }
    public function Defense() {
        echo "前锋:".$this->name." 防守\n";
    }
}

// 中锋
class Center extends Player {
    public function Attack() {
        echo "中锋:".$this->name." 进攻\n";
    }
    public function Defense() {
        echo "中锋:".$this->name." 防守\n";
    }
}

// 外籍中锋 -- 适配者类
class ForeignCenter {
    private $name;

    public function setName($name) {
        $this->name = $name;
    }

    public function 进攻() {
        echo "外籍中锋:".$this->name." 进攻\n";
    }

    public function 防守() {
        echo "外籍中锋:".$this->name." 防守\n";
    }
}

// 翻译 -- 适配器类
class Translator extends Player {
    private $foreignCenter;

    function __construct($name) {
        // 外籍中锋接口实现方式不一样，需要适配
        $this->foreignCenter = new ForeignCenter();
        $this->foreignCenter->setName($name);
    }

    public function Attack() {
        // 翻译-适配进攻
        $this->foreignCenter->进攻();
    }

    public function Defense() {
        // 翻译-适配防守
        $this->foreignCenter->防守();
    }
}

// 客户端代码
$forwards = new Forwards("巴蒂尔");
$forwards->Attack(); // 前锋:巴蒂尔 进攻
$forwards->Defense(); // 前锋:巴蒂尔 防守
// 外籍人员经过适配，现在调用方式完全一样
$translator = new Translator("姚明");
$translator->Attack(); // 外籍中锋:姚明 进攻
$translator->Defense(); // 外籍中锋:姚明 防守
```

## 猎人捕猎

猎人根据狮子的吼叫声来定位狮子的位置并捕杀它。
但现在猎人又需要捕猎鬣狗，鬣狗却只会犬吠，所以我们需要适配鬣狗。

```php
<?php

interface Lion {
  public function roar();
}

class AfricanLion implements Lion {
  public function roar() {
    echo '非洲狮在吼叫!!!';
  }
}

class AsianLion implements Lion {
  public function roar() {
    echo '亚洲狮在吼叫!!!';
  }
}

class Hunter {
  public function hunt(Lion $lion) {
    $lion->roar();
  }
}

// This needs to be added to the game
class WildDog {
  public function bark() {
    echo '非洲野狗在犬吠!!!';
  }
}

// Adapter around wild dog to make it compatible with our game
class WildDogAdapter implements Lion {
  protected $dog;

  public function __construct(WildDog $dog) {
    $this->dog = $dog;
  }

  public function roar() {
    $this->dog->bark();
  }
}

// client
$hunter = new Hunter();

$africanLion = new AfricanLion();
$asianLion = new AsianLion();
$hunter->hunt($africanLion); // 非洲狮在吼叫!!!
$hunter->hunt($asianLion); // 亚洲狮在吼叫!!!

$wildDog = new WildDog();
$wildDogAdapter = new WildDogAdapter($wildDog);
$hunter->hunt($wildDogAdapter); // 非洲野狗在犬吠!!!
```