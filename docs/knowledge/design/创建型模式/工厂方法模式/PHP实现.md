---
title: PHP实现
---

# 工厂方法模式-PHP

* [招聘](#招聘)
* [加减乘除](#加减乘除)

## 招聘

招聘各职位经理。

```php
<?php

interface Interviewer {
    public function askQuestions();
}

class Developer implements Interviewer {
    public function askQuestions() {
        echo 'Asking about design patterns!';
    }
}

class CommunityExecutive implements Interviewer {
    public function askQuestions() {
        echo 'Asking about community building';
    }
}

abstract class HiringManager {
    // Factory method
    abstract protected function makeInterviewer(): Interviewer;

    public function takeInterview() {
        $interviewer = $this->makeInterviewer();
        $interviewer->askQuestions();
    }
}

class DevelopmentManager extends HiringManager {
    protected function makeInterviewer(): Interviewer {
        return new Developer();
    }
}

class MarketingManager extends HiringManager {
    protected function makeInterviewer(): Interviewer {
        return new CommunityExecutive();
    }
}

// client
$devManager = new DevelopmentManager();
$devManager->takeInterview(); // output: Asking about design patterns.

$marketingManager = new MarketingManager();
$marketingManager->takeInterview(); // output: Asking about community building.
```



## 加减乘除

改造简单工厂模式中的加减乘除，用工厂方法模式实现。

```php
<?php

class Operation {
    protected $a = 0;
    protected $b = 0;
    public function setA($a) {
        $this->a = $a;
    }
    public function setB($b) {
        $this->b = $b;
    }
    public function getResult() {
        $result = 0;
        return $result;
    }
}

class OperationAdd extends Operation {
    public function getResult() {
        return $this->a + $this->b;
    }
}

class OperationMul extends Operation {
    public function getResult() {
        return $this->a * $this->b;
    } 
}

class OperationSub extends Operation {
    public function getResult() {
        return $this->a - $this->b;
    }
}

class OperationDiv extends Operation {
    public function getResult() {
        return $this->a / $this->b;
    }
}

interface IFactory {
    public function CreateOperation();
}

class AddFactory implements IFactory {
    public function CreateOperation() {
        return new OperationAdd();
    }
}

class SubFactory implements IFactory {
    public function CreateOperation() {
        return new OperationSub();
    }
}

class MulFactory implements IFactory {
    public function CreateOperation() {
        return new OperationMul();
    }
}

class DivFactory implements IFactory {
    public function CreateOperation() {
        return new OperationDiv();
    }
}

// client
$operationFactory = new AddFactory();
$operation = $operationFactory->CreateOperation();
$operation->setA(10);
$operation->setB(10);
echo $operation->getResult()."\n";
```

