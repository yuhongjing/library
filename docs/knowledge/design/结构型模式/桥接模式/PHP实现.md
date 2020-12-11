---
title: PHP实现
---

# 桥接模式-PHP

* [各品牌手机软件兼容](#各品牌手机软件兼容)
* [网站主题](#网站主题)

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
        echo "运行手机游戏\n";
    }
}
// 手机通讯录
class HandsetAddressList extends HandsetSoft {
    public function run() {
        echo "运行手机通讯录\n";
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

## 网站主题

网站有许多页面，每个页面都可以设置相应的主题。可以使用桥接模式来减少类的数量。

```php
<?php

interface WebPage {
  public function __construct(Theme $theme);
  public function getContent();
}

class About implements WebPage {
  protected $theme;

  public function __construct(Theme $theme) {
    $this->theme = $theme;
  }

  public function getContent() {
    return "About page in" . $this->theme->getColor();
  }
}

class Careers implements WebPage {
  protected $theme;

  public function __construct(Theme $theme) {
    $this->theme = $theme;
  }

  public function getContent() {
    return "Careers page in" . $this->theme->getColor();
  }
}

interface Theme {
  public function getColor();
}

class DarkTheme implements Theme {
  public function getColor() {
    return 'Dark Black';
  }
}

class LightTheme implements Theme {
  public function getColor() {
    return 'Off white';
  }
}

class AquaTheme implements Theme {
  public function getColor() {
    return 'Light blue';
  }
}

// client

$darkTheme = new DarkTheme();

$about = new About($darkTheme);
$careers = new Careers($darkTheme);

echo $about->getContent(); // "About page in Dark Black";
echo $careers->getContent(); // "Careers page in Dark Black";
```