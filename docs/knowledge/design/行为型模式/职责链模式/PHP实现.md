---
title: PHP实现
---

# 职责链模式-PHP实现

* [支付流程](#支付流程)
* [标准例子](#标准例子)

## 支付流程

买东西时，支付账单时，查询银行、信用卡、其他钱包是否能够完成此次交易，这就属于一个职责链。

```php
<?php

abstract class Account {
  protected $successor;
  protected $balance;

  public function setNext(Account $account) {
    $this->successor = $account;
  }

  public function pay(float $amountToPay) {
    if ($this->canPay($amountToPay)) {
      echo sprintf('Paid %s using %s'. PHP_EOL, $amountToPay, get_called_class());
    } elseif ($this->successor) {
      echo sprintf('Cannot pay using %s. Proceeding...'. PHP_EOL, get_called_class());
      $this->successor->pay($amountToPay);
    } else {
      throw new Exception('None of the accounts have enough balance');
    }
  }

  public function canPay($amount) : bool {
    return $this->balance >= $amount;
  }
}

class Bank extends Account {
  protected $balance;
  
  public function __construct(float $balance) {
    $this->balance = $balance;
  }
}

class Paypal extends Account {
  protected $balance;

  public function __construct(float $balance) {
    $this->balance = $balance;
  }
}

class Bitcoin extends Account {
  protected $balance;

  public function __construct(float $balance) {
    $this->balance = $balance;
  }
}

// client
$bank = new Bank(100);
$paypal = new Paypal(200);
$bitcoin = new Bitcoin(300);

$bank->setNext($paypal);
$paypal->setNext($bitcoin);

$bank->pay(259);

// output 

// Cannot pay using Bank. Proceeding...
// Cannot pay using Paypal. Proceeding...
// Paid 259 using Bitcoin
```

## 标准例子

职责链模式的标准例子。

```php
<?php

abstract class Handler {
  protected $successor;

  // 设置继承者
  public function setSuccessor(Handler $successor) {
    $this->successor = $successor;
  }

  // 处理请求的抽象方法
  abstract function handleRequest(int $request);
}

// 如果可以处理请求，就处理之，否则转发给它的后继者
class ConcreteHandler1 extends Handler {
  public function handleRequest(int $request) {
    if ($request >= 0 && $request < 10) {
      echo "ConcreteHandler1 handle it\n";
    } else if ($this->successor != null) {
      // 转移
      $this->successor->handleRequest($request);
    }
  }
}

class ConcreteHandler2 extends Handler {
  public function handleRequest(int $request) {
    if ($request >= 10 && $request < 20) {
      echo "ConcreteHandler2 handle it\n";
    } else if ($this->successor != null) {
      $this->successor->handleRequest($request);
    }
  }
}

// client
$h1 = new ConcreteHandler1();
$h2 = new ConcreteHandler2();
// 设置职责链
$h1->setSuccessor($h2);

$requests = [1, 5, 7, 16, 25];

foreach($requests as $value) {
  $h1->handleRequest($value);
}

// output

// ConcreteHandler1 handle it
// ConcreteHandler1 handle it
// ConcreteHandler1 handle it
// ConcreteHandler2 handle it
```

