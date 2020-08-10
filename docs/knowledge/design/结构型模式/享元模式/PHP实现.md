---
title: PHP实现
---

# 享元模式-PHP

* [茶馆](#茶馆)
* [网站架设](#网站架设)

## 茶馆

茶馆，根据客人需求，掺入不同配料的茶。

```php
<?php
// Anything that will be cached is flyweight.
// Types of tea here will be flyweights.
class KarakTea {

}

// Acts as a factory and saves the tea
class TeaMaker {
    protected $availableTea = [];

    public function make($preference) {
        if (empty($this->availableTea[$preference])) {
            $this->availabelTea[$preference] = new KarakTea();
        }

        return $this->availabelTea[$preference];
    }
}

class TeaShop {
    protected $orders;
    protected $teaMaker;

    public function __construct(TeaMaker $teaMaker) {
        $this->teaMaker = $teaMaker;
    }

    public function takeOrder(string $teaType, int $table) {
        $this->orders[$table] = $this->teaMaker->make($teaType);
    }

    public function serve() {
        foreach ($this->orders as $table => $tea) {
            echo "Serving tea to tabel# " . $table;
        }
    }
}

// client
$teaMaker = new TeaMaker();
$shop = new TeaShop($teaMaker);


$shop->takeOrder('less sugar', 1);
$shop->takeOrder('more milk', 2);
$shop->takeOrder('without sugar', 5);

$shop->serve();
// Serving tea to table# 1
// Serving tea to table# 2
// Serving tea to table# 5
```

## 网站架设

架设多个同类网站。

```php
<?php
class User {
    private $name;
    public function __construct($name) {
        $this->name = $name;
    }

    public function getName() {
        return $this->name;
    }
}

abstract class WebSite {
    abstract public function use(User $user);
}

// 具体网站类
class ConcreteWebSite extends WebSite {
    private $name = '';

    public function __construct($name) {
        $this->name = $name;
    }

    public function use(User $user) {
        echo "网站分类: " . $this->name . "用户: " . $user->getName()."\n";
    }
}

// 网站工厂
class WebSiteFactory {
    private $flyweights = [];

    public function getWebSiteGategory($key) {
        // 相同网站复用实例，从而减少实例数，假如此处例子为围棋，就只有两个实例（黑白）即可。
        if (empty($this->flyweights[$key])) {
            $this->flyweights[$key] = new ConcreteWebSite($key);
        }

        return $this->flyweights[$key];
    }

    public function getWebSiteCount() {
        return count($this->flyweights);
    }
}

// client
$f = new WebSiteFactory();
$fx = $f->getWebSiteGategory('产品展示');
$fx->use(new User('张伟'));

$fy = $f->getWebSiteGategory('产品展示');
$fy->use(new User('王伟'));

$fz = $f->getWebSiteGategory('产品展示');
$fz->use(new User('王芳'));

$fl = $f->getWebSiteGategory('博客');
$fl->use(new User('李伟'));

$fm = $f->getWebSiteGategory('博客');
$fm->use(new User('王秀英'));

$fn = $f->getWebSiteGategory('博客');
$fn->use(new User('李秀英'));

echo "网站分类总数:".$f->getWebSiteCount()."\n";
```

