---
title: PHP实现
---

# 策略模式-PHP

* [排序算法](#排序算法)
* [两数操作](#两数操作)
* [算法选择](#算法选择)

## 排序算法

客户端可以自行选择哪种排序算法来排序。

```php
<?php

interface SortStrategy {
    public function sort(array $dataset): array;
}

class BubbleSortStrategy implements SortStrategy {
    public function sort(array $dataset): array {
        echo "Sorting using bubble sort";

        // Do sorting
        return $dataset;
    }
}

class QuickSortStrategy implements SortStrategy {
    public function sort(array $dataset): array {
        echo "Sorting using quick sort";

        // Do sorting
        return $dataset;
    }
}

class Sorter {
    protected $sorter;

    public function __construct(SortStrategy $sorter) {
        $this->sorter = $sorter;
    }

    public function sort(array $dataset): array {
        return $this->sorter->sort($dataset);
    }
}

// client
$dataset = [1, 5, 4, 3, 2, 8];

$sorter = new Sorter(new BubbleSortStrategy());
$sorter->sort($dataset); // Output: Sorting using bubble sort

$sorter = new Sorter(new QuickSortStrategy());
$sorter->sort($dataset); // Output: Sorting using quick sort
```

## 两数操作

两个数加减乘除操作。

最基础的实现方式。

```php
function operation(op, num1, num2) {
    switch (op) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2; // 不考虑为0的情况
        default: return null;
    }
}

operation('+', 3, 5); // 8
operation('-', 3, 5); // -2
```

通过策略模式实现的方式

```php
// 上下文
class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }

    executeStrategy(num1, num2) {
        return this.strategy.doOperation(num1, num2);
    }
}

// 策略组接口
class StrategyOperation {
    doOperation(num1, num2) {}
}

// 单独策略
class AddOperation extends StrategyOperation {
    doOperation(num1, num2) {
        return num1 + num2;
    }
}
class SubtractOperation extends StrategyOperation {
    doOperation(num1, num2) {
        return num1 - num2;
    }
}

let context = new Context(new AddOperation());
context.executeStrategy(10, 5); // 15
// 变化算法
context = new Context(new SubtractOperation());
context.executeStrategy(10, 5); // 5
```

## 算法选择

客户端选择算法。

```php
<?php

abstract class Strategy {
    abstract public function AlgorithmInterface();
}

class ConcreteStrategyA extends Strategy {
    public function AlgorithmInterface() {
        echo "算法a实现\n";
    }
}

class ConcreteStrategyB extends Strategy {
    public function AlgorithmInterface() {
        echo "算法b实现\n";
    }
}

class ConcreteStrategyC extends Strategy {
    public function AlgorithmInterface() {
        echo "算法c实现\n";
    }
}

class Context {
    private $strategy;

    function __construct($strategy) {
        $this->strategy = $strategy;
    }

    public function contextInterface() {
        $this->strategy->AlgorithmInterface();
    }
}

// client
$context = new Context(new ConcreteStrategyA());
$context->contextInterface(); // Output: 算法a实现

$context = new Context(new ConcreteStrategyB());
$context->contextInterface(); // Output: 算法b实现

$context = new Context(new ConcreteStrategyC());
$context->contextInterface(); // Output: 算法c实现
```

策略模式与简单工厂结合，只需替换Context类即可。

```php
<?php

abstract class Strategy {
    abstract public function AlgorithmInterface();
}

class ConcreteStrategyA extends Strategy {
    public function AlgorithmInterface() {
        echo "算法a实现\n";
    }
}

class ConcreteStrategyB extends Strategy {
    public function AlgorithmInterface() {
        echo "算法b实现\n";
    }
}

class ConcreteStrategyC extends Strategy {
    public function AlgorithmInterface() {
        echo "算法c实现\n";
    }
}

class Context {
    private $strategy;

    function __construct($operation) {
        switch ($operation) {
            case 'a':
                $this->strategy = new ConcreteStrategyA();
                break;
            case 'b':
                $this->strategy = new ConcreteStrategyB();
                break;
            case 'c':
                $this->strategy = new ConcreteStrategyC();
                break;
        }
    }

    public function contextInterface() {
        $this->strategy->AlgorithmInterface();
    }
}

// client
$context = new Context('a');
$context->contextInterface(); // Output: 算法a实现

$context = new Context('b');
$context->contextInterface(); // Output: 算法b实现

$context = new Context('c');
$context->contextInterface(); // Output: 算法c实现
```

