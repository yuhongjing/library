---
title: JS实现
---

# 职责链模式-JS实现

* [支付流程](#支付流程)

## 支付流程

买东西时，支付账单时，查询银行、信用卡、其他钱包是否能够完成此次交易，这就属于一个职责链。

```js
class Account {
  setNext(account) {
    this.successor = account;
  }

  pay(amountToPay) {
    if (this.canPay(amountToPay)) {
      console.log(`Paid ${amountToPay} using ${this.name}`);
    } else if (this.successor) {
      console.log(`Cannot pay using ${this.name}. Proceeding...`);
      this.successor.pay(amountToPay);
    } else {
      console.log('None of the accounts have enough balance');
    }
  }

  canPay(amount) {
    return this.balance >= amount;
  }
}

class Bank extends Account {
  constructor(balance) {
    super();
    this.name = 'bank';
    this.balance = balance;
  }
}

class Paypal extends Account {
  constructor(balance) {
    super();
    this.name = 'Paypal';
    this.balance = balance;
  }
}

class Bitcoin extends Account {
  constructor(balance) {
    super();
    this.name = 'bitcoin';
    this.balance = balance;
  }
}

// client
const bank = new Bank(100);
const paypal = new Paypal(200);
const bitcoin = new Bitcoin(300);

bank.setNext(paypal);
paypal.setNext(bitcoin);

bank.pay(259);

// output

// Cannot pay using bank. Proceeding...
// Cannot pay using Paypal. Proceeding...
// Paid 259 using bitcoin
```

