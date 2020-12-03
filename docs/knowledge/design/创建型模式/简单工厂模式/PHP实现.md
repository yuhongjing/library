---
title: PHP实现
---

# 简单工厂模式-PHP

* [数据库](#数据库)
* [加减乘除](#加减乘除)
* [木门](#木门)

## 数据库

切换数据库场景。

```php
<?php
class DataBase {
  public $dbName = '';
  public function connect() {
    echo '链接'.$this->dbName.'数据库';
  }
}

class MySQL extends DataBase {
  public $dbName = 'MySQL';
}
class SqlServer extends DataBase {
  public $dbName = 'SqlServer';
}

class Factory {
    public static function createDataBase($type) {
      switch ($type) {
        case 'MySQL': return new MySQL();
        case 'SqlServer': return new SqlServer();
      }
    }
}

// 客户端调用
$dbMySQL = Factory::createDataBase('MySQL');
$dbMySQL->connect(); // 链接MySQL数据库
$dbSqlServer = Factory::createDataBase('SqlServer');
$dbSqlServer->connect(); // 链接SqlServer数据库
```

## 加减乘除

加减乘除场景。

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

class OperationFactory {
    public static function createOperation($operation) {
        switch ($operation) {
            case '+':
                $oper = new OperationAdd();
                break;
            case '-':
                $oper = new OperationSub();
                break;
            case '/':
                $oper = new OperationDiv();
                break;
            case '*':
                $oper = new OperationMul();
                break;
        }

        return $oper;
    }
}

// 客户端代码
$operation = OperationFactory::createOperation('+');
$operation->setA(1);
$operation->setB(2);
echo $operation->getResult();
```

## 木门

得到一个木门，只需传入参数即可生成不同类型的木门，无须关注生成细节。

```php
<?php

interface Door {
    public function getWidth(): float;
    public function getHeight(): float;
}

class WoodenDoor implements Door {
    protected $width;
    protected $height;

    public function __construct(float $width, float $height) {
        $this->width = $width;
        $this->height = $height;
    }

    public function getWidth(): float {
        return $this->width;
    }

    public function getHeight(): float {
        return $this->height;
    }
}

class DoorFactory {
    public static function makeDoor($width, $height): Door {
        return new WoodenDoor($width, $height);
    }
}

// client
$door = DoorFactory::makeDoor(100, 200);

echo 'Width: ' . $door->getWidth();
echo 'Height: ' . $door->getHeight();

$door2 = DoorFactory::makeDoor(50, 100);
```

