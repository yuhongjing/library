---
title: PHP实现
---

# 外观模式-PHP

* [电脑开关机](#电脑开关机)
* [标准例子](#标准例子)

## 电脑开关机

电脑开机和关机，其实是需要执行很多流程的。

以下例子中的开机，需要执行【开电源-发出声音-显示等待界面-开机完毕反馈】四个步骤。

通过外观模式，客户端只需要调用一个方法，就可以执行完整的开机流程。

```php
<?php

class Computer {
    public function getElectricShock() {
        echo "Ouch!";
    }

    public function makeSound() {
        echo "Beep beep!";
    }

    public function showLoadingScreen() {
        echo "Loading..";
    }

    public function bam() {
        echo "Ready to be used!";
    }

    public function closeEverything() {
        echo "Bup bup bup buzzzz!";
    }

    public function sooth() {
        echo "Zzzzz";
    }

    public function pullCurrent() {
        echo "Haaah!";
    }
}

class ComputerFacade {
    protected $computer;
    
    public function __construct(Computer $computer) {
        $this->computer = $computer;
    }

    // 开机
    public function turnOn() {
        $this->computer->getElectricShock();
        $this->computer->makeSound();
        $this->computer->showLoadingScreen();
        $this->computer->bam();
    }

    // 关机
    public function turnOff() {
        $this->computer->closeEverything();
        $this->computer->pullCurrent();
        $this->computer->sooth();
    }
}

// client
$computer = new ComputerFacade(new Computer());
$computer->turnOn(); // Ouch! Beep beep! Loading.. Ready to be used!
$computer->turnOff(); // Bup bup buzzz! Haah! Zzzzz
```

## 标准例子

外观模式的标准例子。

```php
<?php

// 子系统1
class SubSystemOne {
    public function methodOne() {
        echo "子系统方法1\n";
    }
}

// 子系统2
class SubSystemTwo {
    public function methodTwo() {
        echo "子系统方法2\n";
    }
}

// 子系统3
class SubSystemThree {
    public function methodThree() {
        echo "子系统方法3\n";
    }
}

// 子系统4
class SubSystemFourth {
    public function methodFourth() {
        echo "子系统方法4\n";
    }
}

// 外观方法
class Facade {
    private $systemOne;
    private $systemTwo;
    private $systemThree;
    private $systemFour;

    public function __construct() {
        $this->systemOne = new SubSystemOne();
        $this->systemTwo = new SubSystemTwo();
        $this->systemThree = new SubSystemThree();
        $this->systemFour = new SubSystemFourth();
    }

    public function methodA() {
        echo "方法A() ---\n";
        $this->systemOne->methodOne();
        $this->systemThree->methodThree();
    }

    public function methodB() {
        echo "方法B() ---\n";
        $this->systemTwo->methodTwo();
        $this->systemFour->methodFourth();
    }
}

// client
$facade = new Facade();
$facade->methodA();
$facade->methodB();
// output: 
// 方法A() ---
// 子系统方法1
// 子系统方法3
// 方法B() ---
// 子系统方法2
// 子系统方法4
```

