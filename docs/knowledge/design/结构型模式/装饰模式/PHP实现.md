---
title: PHP实现
---

# 装饰模式-PHP

* [咖啡](#咖啡)
* [标准例子](#标准例子)
* [穿衣打扮](#穿衣打扮)

## 咖啡

咖啡添加配料。

```php
<?php

interface Coffee {
    public function getCost();
    public function getDescription();
}

class SimpleCoffee implements Coffee {
    public function getCost() {
        return 10;
    }

    public function getDescription() {
        return 'Simple coffee';
    }
}

class MilkCoffee implements Coffee {
    protected $coffee;

    public function __construct(Coffee $coffee) {
        $this->coffee = $coffee;
    }

    public function getCost() {
        return $this->coffee->getCost() + 2;
    }

    public function getDescription() {
        return $this->coffee->getDescription() . ', milk';
    }
}

class WhipCoffee implements Coffee {
    protected $coffee;

    public function __construct(Coffee $coffee) {
        $this->coffee = $coffee;
    }

    public function getCost() {
        return $this->coffee->getCost() + 5;
    }

    public function getDescription() {
        return $this->coffee->getDescription() . ', whip';
    }
}

class VanillaCoffee implements Coffee {
    protected $coffee;

    public function __construct(Coffee $coffee) {
        $this->coffee = $coffee;
    }

    public function getCost() {
        return $this->coffee->getCost() + 3;
    }

    public function getDescription() {
        return $this->coffee->getDescription() . ', vanilla';
    }
}

// client
$someCoffee = new SimpleCoffee();
echo $someCoffee->getCost(); // 10
echo $someCoffee->getDescription(); // Simple Coffee

$someCoffee = new MilkCoffee($someCoffee);
echo $someCoffee->getCost(); // 12
echo $someCoffee->getDescription(); // Simple Coffee, milk

$someCoffee = new WhipCoffee($someCoffee);
echo $someCoffee->getCost(); // 17
echo $someCoffee->getDescription(); // Simple Coffee, milk, whip

$someCoffee = new VanillaCoffee($someCoffee);
echo $someCoffee->getCost(); // 20
echo $someCoffee->getDescription(); // Simple Coffee, milk, whip, vanilla
```

## 标准例子

装饰模式的标准例子。

```php
<?php

abstract class Component {
    abstract public function Operation();
}

class ConcreteComponent extends Component {
    public function Operation() {
        echo "具体对象的操作\n";
    }
}

abstract class Decorator extends Component {
    protected $component;

    // 设置component
    public function SetComponent($component) {
        $this->component = $component;
    }

    // 重写Operation(),实际执行的是component的Operation方法
    public function Operation() {
        if ($this->component != null) {
            $this->component->Operation();
        }
    }
}

// 装饰类A
class ConcreteDecoratorA extends Decorator {
    // 本类的独有功能，以区别于ConcreteDecoratorB
    private $addedState;

    public function Operation() {
        // 首先运行原Component的Operation()，再执行本类的功能
        // 如addedState，相当于对原Component进行了装饰
        parent::Operation();
        $this->addedState = "ConcreteDecoratorA Status";
        echo $this->addedState."\n";
        echo "具体装饰对象A的操作\n";
    }
}

// 装饰类B
class ConcreteDecoratorB extends Decorator {
    public function Operation() {
        // 首先运行原Component的Operation(),再执行本类的功能，
        // 如addedBehavior,相当于对原Component进行了装饰
        parent::Operation();
        $this->addedBehavior();
        echo "具体装饰对象B的操作\n";
    }

    // 本类的独有功能，以区别于ConcreteDecoratorA
    private function addedBehavior() {
        echo "ConcreteDecoratorB Status\n";
    }
}

// client
$c = new ConcreteComponent();
$d1 = new ConcreteDecoratorA();
$d2 = new ConcreteDecoratorB();

$d1->SetComponent($c);
$d2->SetComponent($d1);
$d2->Operation();
```

## 穿衣打扮

搭配各种服装。

```php
<?php

class Person {
    private $name;

    public function __construct($name) {
        $this->name = $name;
    }

    public function show() {
        echo "打扮".$this->name."\n";
    }
}

class Finery {
    protected $person;

    public function decorate($person) {
        $this->person = $person;
    }

    public function show() {
        if ($this->person != null) {
            $this->person->show();
        }
    }
}

class TShirts extends Finery {
    public function show() {
        echo "大T恤\n";
        parent::show();
    }
}

class BigTrouser extends Finery {
    public function show() {
        echo "跨裤\n";
        parent::show();
    }
}

class Sneakers extends Finery {
    public function show() {
        echo "破球鞋\n";
        parent::show();
    }
}

class Suit extends Finery {
    public function show() {
        echo "西装\n";
        parent::show();
    }
}

class Tie extends Finery {
    public function show() {
        echo "领带\n";
        parent::show();
    }
}

class LeatherShoes extends Finery {
    public function show() {
        echo "皮鞋\n";
        parent::show();
    }
}

// client
$person = new Person("alex");

$sneakers = new Sneakers();
$bigTrouser = new BigTrouser();
$tShirts = new TShirts();

$sneakers->decorate($person);
$bigTrouser->decorate($sneakers);
$tShirts->decorate($bigTrouser);
$tShirts->show();
```

