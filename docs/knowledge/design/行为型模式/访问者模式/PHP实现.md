---
title: PHP实现
---

# 访问者模式-PHP

* [男人和女人](#男人和女人)
* [动物叫声](#动物叫声)

## 男人和女人

```php
<?php

abstract class Action
{
    abstract public function getManConclusion(Man $concreteElementA);
    abstract public function getWomanConclusion(Woman $concreteElementB);
}

abstract class Person
{
    abstract public function accept(Action $visitor);
}

class Success extends Action
{
    public function getManConclusion(Man $concreteElementA)
    {
        echo "背后多半有一个伟大的女人\n";
    }

    public function getWomanConclusion(Woman $concreteElementB)
    {
        echo "背后多半有一个不成功的男人\n";
    }
}

class Failing extends Action
{
    public function getManConclusion(Man $concreteElementA)
    {
        echo "男人失败时，闷头喝酒，谁也不用劝\n";
    }

    public function getWomanConclusion(Woman $concreteElementB)
    {
        echo "女人失败时，眼泪汪汪，谁也劝不了\n";
    }
}

class Amativeness extends Action
{
    public function getManConclusion(Man $concreteElementA)
    {
        echo "男人恋爱时，凡事不懂也要装懂\n";
    }

    public function getWomanConclusion(Woman $concreteElementB)
    {
        echo "女人恋爱时，遇事懂也装作不懂\n";
    }
}

class Man extends Person
{
    public function accept(Action $visitor)
    {
        $visitor->getManConclusion($this);
    }
}

class Woman extends Person
{
    public function accept(Action $visitor)
    {
        $visitor->getWomanConclusion($this);
    }
}

class ObjectStructure
{
    private $person = [];

    public function acctch(Person $person)
    {
        array_push($this->person, $person);
    }

    public function display(Action $visitor)
    {
        foreach ($this->person as $person) {
            $person->accept($visitor);
        }
    }
}

// client
$o = new ObjectStructure();
$o->acctch(new Man()); 
$o->acctch(new Woman());

// 成功时的反应
$v1 = new Success();
$o->display($v1); // 背后多半有一个伟大的女人 背后多半有一个不成功的男人

// 失败时的反应
$v2 = new Failing();
$o->display($v2); // 男人失败时，闷头喝酒，谁也不用劝 女人失败时，眼泪汪汪，谁也劝不了

// 恋爱时的反应
$v3 = new Amativeness();
$o->display($v3); // 男人恋爱时，凡事不懂也要装懂 女人恋爱时，遇事懂也装作不懂
```

## 动物叫声

动物园有不同的动物，我们要让它们发声。

```php
<?php

// Visitee
interface Animal {
  public function accept(AnimalOperation $operation);
}

// Visitor
interface AnimalOperation {
  public function visitMonkey(Monkey $monkey);
  public function visitLion(Lion $lion);
  public function visitDolphin(Dolphin $dolphin);
}

class Monkey implements Animal {
  public function shout() {
    echo 'Ooh oo aa aa!';
  }

  public function accept(AnimalOperation $operation) {
    $operation->visitMonkey($this);
  }
}

class Lion implements Animal {
  public function roar() {
    echo 'Roaaar!';
  }

  public function accept(AnimalOperation $operation) {
    $operation->visitLion($this);
  }
}

class Dolphin implements Animal {
  public function speak() {
    echo 'Tuut tuttu tuutt!';
  }

  public function accept(AnimalOperation $operation) {
    $operation->visitDolphin($this);
  }
}

class Speak implements AnimalOperation {
  public function visitMonkey(Monkey $monkey) {
    $monkey->shout();
  }

  public function visitLion(Lion $lion) {
    $lion->roar();
  }

  public function visitDolphin(Dolphin $dolphin) {
    $dolphin->speak();
  }
}

// client
$monkey = new Monkey();
$lion = new Lion();
$dolphin = new Dolphin();

$speak = new Speak();

$monkey->accept($speak); // Ooh oo aa aa!
$lion->accept($speak); // Roaaar!
$dolphin->accept($speak); // Tuut tutt tuutt!
```