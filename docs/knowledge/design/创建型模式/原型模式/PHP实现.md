---
title: PHP实现
---

# 原型模式—PHP

* [克隆羊多莉](#克隆羊多莉)
* [简历复印](#简历复印)

## 克隆羊多莉

克隆羊多莉与被克隆的羊拥有一样的属性。

```php
<?php

class Sheep {
  protected $name;
  protected $category;

  public function __construct(string $name, string $category = 'Mountain Sheep') {
    $this->name = $name;
    $this->category = $category;
  }

  public function setName(string $name) {
    $this->name = $name;
  }

  public function getName() {
    return $this->name;
  }

  public function setCategory(string $category) {
    $this->category = $category;
  }

  public function getCategory() {
    return $this->category;
  }
}

// client
$original = new Sheep('Jolly');
echo $original->getName(); // Jolly
echo $original->getCategory(); // Mountain Sheep

// Clone and modify what is required
$cloned = clone $original;
$cloned->setName('Dolly');
echo $cloned->getName(); // Dolly
echo $cloned->getCategory(); // Mountain sheep
```

## 简历复印

复印简历。

```php
<?php

class Company {
  private $company;

  public function setName($name) {
    $this->company = $name;
  }

  public function getName() {
    return $this->company;
  }
}

class Resume {
  private $name;
  private $sex;
  private $age;
  private $timeArea;
  private $company;

  function __construct($name) {
    $this->name = $name;
    $this->company = new Company();
  }

  public function setPersonalInfo($sex, $age) {
    $this->sex = $sex;
    $this->age = $age;
  }

  public function setWorkExperience($timeArea, $company) {
    $this->timeArea = $timeArea;
    $this->company->setName($company);
  }

  public function display() {
    echo $this->name." ".$this->sex." ".$this->age."\n";
    echo $this->timeArea." ".$this->company->getName()."\n";
  }

  // 对引用执行深复制
  function __clone()
  {
      $this->company = clone $this->company;
  }
}

// client
$resume = new Resume("大鸟");
$resume->setPersonalInfo("男", 29);
$resume->setWorkExperience("1998-2000","xxx 公司");

$resume2 = clone $resume;
$resume2->setPersonalInfo("男", 40);
$resume2->setWorkExperience("1998-2010","xx 公司");

$resume->display();
$resume2->display();
```