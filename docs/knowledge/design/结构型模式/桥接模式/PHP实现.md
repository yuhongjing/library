---
title: PHP实现
---

# 桥接模式-PHP

* [各品牌手机软件兼容](#各品牌手机软件兼容)



## 各品牌手机软件兼容

各个品牌的软件不兼容，需要使用桥接模式，让软件能够各种品牌手机兼容运行。

```php
<?php

// 手机软件
abstract class HandsetSoft {
    abstract public function run();
}

// 游戏、通讯录等具体类

// 手机游戏
class HandsetGame extends HandsetSoft {
    public function run() {
        echo '运行手机游戏\n';
    }
}
// 手机通讯录
class HandsetAddressList extends HandsetSoft {
    public function run() {
        echo '运行手机通讯录\n';
    }
}

// 手机品牌类
abstract class HandsetBrand {
    protected $soft;

    // 设置手机软件
    public function setHandsetSoft(HandsetSoft $soft) {
        $this->soft = $soft;
    }

    // 运行
    abstract public function run();
}
// 手机品牌 n
class HandsetBrandN extends HandsetBrand {
    public function run() {
        $this->soft->run();
    }
}
// 手机品牌 m
class HandsetBrandM extends HandsetBrand {
    public function run() {
        $this->soft->run();
    }
}

// 客户端
$ab = new HandsetBrandN();
$ab->setHandsetSoft(new HandsetGame());
$ab->run(); // 运行手机游戏

$ab->setHandsetSoft(new HandsetAddressList());
$ab->run(); // 运行手机通讯录

$ab = new HandsetBrandM();
$ab->setHandsetSoft(new HandsetGame());
$ab->run(); // 运行手机游戏

$ab->setHandsetSoft(new HandsetAddressList());
$ab->run(); // 运行手机通讯录
```

