---
title: JS实现
---

# 建造者模式—PHP

* [制作汉堡](#制作汉堡)
* [创建人物](#创建人物)

## 制作汉堡

根据用户需求，随意组合定制汉堡。

```php
<?php

// 汉堡类
class Burger {
    protected $size;

    protected $cheese = false;
    protected $pepperoni = false;
    protected $lettuce = false;
    protected $tomato = false;

    public function __construct(BurgerBuilder $builder) {
        $this->size = $builder->size;
        $this->cheese = $builder->cheese;
        $this->pepperoni = $builder->pepperoni;
        $this->lettuce = $builder->lettuce;
        $this->tomato = $builder->tomato;
    }
}

// 建造者
class BurgerBuilder {
    public $size;

    public $cheese = false;
    public $pepperoni = false;
    public $lettuce = false;
    public $tomato = false;

    public function __construct(int $size) {
        $this->size = $size;
    }

    public function addPepperoni() {
        $this->pepperoni = true;
        return $this;
    }

    public function addLettuce() {
        $this->lettuce = true;
        return $this;
    }

    public function addCheese() {
        $this->cheese = true;
        return $this;
    }

    public function addTomato() {
        $this->tomato = true;
        return $this;
    }

    public function build(): Burger {
        return new Burger($this);
    }
}

$burger = (new BurgerBuilder(14))
    ->addPepperoni()
    ->addLettuce()
    ->addTomato()
    ->build();
```

## 创建人物

游戏，捏脸系统，外形换装等。

```php
<?php

abstract class PersonBuilder {
    abstract public function BuildHead();
    abstract public function BuildBody();
    abstract public function BuildArmLeft();
    abstract public function BuildArmRight();
    abstract public function BuildLegLeft();
    abstract public function BuildLegRight();
}

class PersonThinBuilder extends PersonBuilder {
    public function BuildHead() {
        echo "小头\n";
    }

    public function BuildBody() {
        echo "小身子\n";
    }

    public function BuildArmRight() {
        echo "右臂\n";
    }

    public function BuildArmLeft() {
        echo "左臂\n";
    }

    public function BuildLegLeft() {
        echo "左腿\n";
    }

    public function BuildLegRight() {
        echo "右腿\n";
    }
}

class PersonFatBuilder extends PersonBuilder {
    public function BuildHead() {
        echo "大头\n";
    }

    public function BuildBody() {
        echo "大身子\n";
    }

    public function BuildArmRight() {
        echo "右臂\n";
    }

    public function BuildArmLeft() {
        echo "左臂\n";
    }

    public function BuildLegLeft()
    {
        echo "左腿\n";
    }

    public function BuildLegRight()
    {
        echo "右腿\n";
    }
}

class PersonDirector {
    private $personBuilder;

    function __construct($personBuilder) {
        $this->personBuilder = $personBuilder;
    }

    public function CreatePerson() {
        $this->personBuilder->BuildHead();
        $this->personBuilder->BuildBody();
        $this->personBuilder->BuildArmRight();
        $this->personBuilder->BuildArmLeft();
        $this->personBuilder->BuildLegLeft();
        $this->personBuilder->BuildLegRight();
    }
}

echo "苗条的:\n";
$thinDirector = new PersonDirector(new PersonThinBuilder());
$thinDirector->CreatePerson();

echo "\n胖的:\n";
$fatDirector = new PersonDirector(new PersonFatBuilder());
$fatDirector->CreatePerson();
```

