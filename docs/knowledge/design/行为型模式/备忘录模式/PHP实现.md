---
title: PHP实现
---

# 备忘录模式-PHP

* [状态存储](#状态存储)
* [编辑器](#编辑器)



## 状态存储

一个普通的Demo，存储了一个状态变量，并读取存储的状态变量。

```php
<?php
// 发起人类
class Originator {
    // 需要保存的属性，可能有多个
    private $state;
    
    public function setState($state) {
        $this->state = $state;
    }
    public function getState() {
        return $this->state;
    }
    // 创建备忘录，将当前需要保存的信息导入并实例化一个memento对象
    public function createMemento() {
        return new Memento($this->state);
    }
    // 恢复备忘录，将memento导入并将相关数据恢复
    public function setMemento(Memento $memento) {
        $this->state = $memento->getState();
    }
    // 显示数据
    public function show() {
        echo "status ".$this->state."\n";
    }
}

// 备忘录类
class Memento {
    private $state;
    // 构造方法，将相关数据导入
    function __construct($state) {
        $this->state = $state;
    }
    // 获取需要保存的数据，可以多个
    public function getState() {
        return $this->state;
    }
}

// 管理者类
class CareTaker {
    private $memento;

    public function getMemento() {
        return $this->memento;
    }
    // 设置备忘录
    public function setMemento(Memento $memento) {
        $this->memento = $memento;
    }
}

// 客户端
$o = new Originator(); // Originator初始状态，状态属性on
$o->setState("On");
$o->show(); // status On

// 保存状态时，由于有了很好的封装，可以隐藏Originator的实现细节
$c = new CareTaker();
$c->setMemento($o->createMemento());

// 改变属性
$o->setState("Off");
$o->show(); // status Off

// 恢复属性
$o->setMemento($c->getMemento());
$o->show(); // status On
```



## 编辑器

以文本编辑器为例，它不断地保存状态，如果需要，您可以恢复它。

```php
<?php
class EditorMemento {
    protected $content;

    public function __construct(string $content) {
        $this->content = $content;
    }

    public function getContent() {
        return $this->content;
    }
}

class Editor {
    protected $content = '';

    public function type(string $words) {
        $this->content = $this->content . ' ' . $words;
    }

    public function getContent() {
        return $this->content;
    }

    public function save() {
        return new EditorMemento($this->content);
    }

    public function restore(EditorMemento $memento) {
        $this->content = $memento->getContent();
    }
}

// 客户端
$editor = new Editor();

// Type some stuff
$editor->type('This is the first sentence.');
$editor->type('This is second.');

// Save the state to restore
$saved = $editor->save();

// Type some more
$editor->type('And this is third.');

// Output: Content before Saving
echo $editor->getContent(); // This is the first sentence. This is second. And this is third.

// Restoring to last saved state
$editor->restore($saved);

echo $editor->getContent(); // This is the first sentence. This is second.
```

