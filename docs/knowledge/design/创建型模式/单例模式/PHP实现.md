---
title: PHP实现
---

# 单例模式-PHP

* [总统](#总统)

## 总统

一个国家只有一个总统，无论出席任何会议，都必须是这一位总统。

```php
<?php

final class President {
    private static $instance;

    private function __construct() {
        // Hide the constructor
    }

    public static function getInstance(): President {
        if (!self::$instance) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    private function __clone() {
        // Disble cloning
    }

    private function __wakeup() {
        // Disable unserialize
    }
}

// 客户端
$president1 = President::getInstance();
$president2 = President::getInstance();

var_dump($president1 === $president2); // true
```

