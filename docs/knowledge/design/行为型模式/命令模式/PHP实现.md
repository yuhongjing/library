---
title: PHP实现
---

# 命令模式-PHP

* [烤串](#烤串)

## 烤串

烧烤店里，顾客告诉服务员需要的食物，服务器会通知师傅烤串。

这样师傅无须知道是谁点的烤串，顾客也无须知道是谁来烤串。

师傅只需要烤就完事，顾客只需要吃就完事。

师傅与顾客解耦。

```php
<?php
// 烤串
class Barbecuer {
    public function bakeMutton() {
        echo '烤羊肉串\n';
    }
    public function bakeChickenWing() {
        echo '烤鸡翅\n';
    }
}

// 抽象命令
abstract class Command {
    protected $receiver;

    function __construct(Barbecuer $receiver) {
        $this->receiver = $receiver;
    }

    abstract public function excuteCommand();
}

// 烤羊肉
class BakeMuttonCommand extends Command {
    public function excuteCommand() {
        $this->receiver->bakeMutton();
    }
}

// 烤鸡翅
class BakeChickenWingCommand extends Command {
    public function excuteCommand() {
        $this->receiver->bakeChickenWing();
    }
}

// 服务员
class Waiter {
    private $commands = [];

    // 设置订单
    public function setOrder(Command $command) {
        if ($command instanceof bakeChickenWingCommand) {
            echo '服务员: 鸡翅没有了，请点别的烧烤\n';
        } else {
            echo '增加订单\n';
            array_push($this->commands, $commands);
        }
    }

    // 取消订单
    public function cancelOrder(Command $command) {}
    
    // 通知执行
    public function notify() {
        foreach ($this->commands as $value) {
            $value->excuteCommand();
        }
    }
}

// 客户端代码

// 开店前的准备
$boy = new Barbecuer();
$bakeMuttonCommand1 = new BakeMuttonCommand($boy);
$bakeMuttonCommand2 = new BakeMuttonCommand($boy);
$bakeChickenWingCommand1 = new BakeChickenWingCommand($boy);
$girl = new Waiter();

//开门营业
$girl->setOrder($bakeMuttonCommand1); // 增加订单
$girl->setOrder($bakeMuttonCommand2); // 增加订单
$girl->setOrder($bakeChickenWingCommand1); // 服务员: 鸡翅没有了，请点别的烧烤
$girl->notify();
```

