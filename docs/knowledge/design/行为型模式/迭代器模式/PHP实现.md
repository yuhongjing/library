---
title: PHP实现
---

# 迭代器模式-PHP

* [上车买票](#上车买票)
* [电台](#电台)

## 上车买票

售票员需要向每一个上车的人收取车票钱。

```php
<?php
// 迭代器抽象类
abstract class IteratorClass {
    abstract public function first();
    abstract public function next();
    abstract public function isDone();
    abstract public function currentItem();
}

// 聚焦抽象类
abstract class Aggregate {
    abstract function createIterator();
}

class ConcreteIterator extends IteratorClass {
    private $aggregate;
    private $current = 0;

    function __construct($aggregate) {
        $this->aggregate = $aggregate;
    }

    public function first() {
        return $this->aggregate[0];
    }

    public function next() {
        $ret = null;
        $this->current++;
        if ($this->current < count($this->aggregate)) {
            $ret = $this->aggregate[$this->current];
        }
        return $ret;
    }

    public function isDone() {
        return $this->current >= count($this->aggregate);
    }

    public function currentItem() {
        return $this->aggregate[$this->current];
    }
}

class ConcreteAggregate extends Aggregate{
    private $items = [];

    public function createIterator(){
        return new ConcreteIterator($this);
    }

    public function count(){
        return count($this->items);
    }

    public function add($item){
        array_push($this->items, $item);
    }

    public function items(){
        return $this->items;
    }
}

$a = new ConcreteAggregate();
$a->add("大鸟");
$a->add("小菜");
$a->add("行李");
$a->add("老外");
$a->add("公交内部员工");
$a->add("小偷");

$i = new ConcreteIterator($a->items());

while (!$i->isDone()) 
{
    echo $i->currentItem()." 请买票\n";
    $i->next();
}
```

## 电台

电台有很多个频道，我们通过上一个和下一个按钮，来遍历电台的所有频道。

```php
<?php
use Countable;
use Iterator;

class RadioStation {
  protected $frequency;

  public function __construct(float $frequency) {
    $this->frequency = $frequency;
  }

  public function getFrequency(): float {
    return $this->frequency;
  }
}

class StationList implements Countable, Iterator {
  /** @var RadioStation[] $stations */
  protected $stations = [];

  /** @var int $counter */
  protected $counter;

  public function addStation(RadioStation $station) {
    $this->stations[] = $station;
  }

  public function removeStation(RadioStation $toRemove) {
    $toRemoveFrequency = $toRemove->getFrequency();
    $this->stations = array_filter($this->stations, function (RadioStation $station) use ($toRemoveFrequency) {
      return $station->getFrequency() !== $toRemoveFrequency;
    });
  }

  public function count(): int {
    return count($this->stations);
  }

  public function current(): RadioStation {
    return $this->stations[$this->counter];
  }

  public function key() {
    return $this->counter();
  }

  public function next() {
    return $this->counter++;
  }

  public function rewind() {
    $this->counter = 0;
  }

  public function valid(): bool {
    return isset($this->stations[$this->counter]);
  }
}

// client
$stationList = new StationList();

$stationList->addStation(new RadioStation(89));
$stationList->addStation(new RadioStation(101));
$stationList->addStation(new RadioStation(102));
$stationList->addStation(new RadioStation(103.2));

foreach($stationList as $station) {
  echo $station->getFrequency() . PHP_EOL;
}

$stationList->removeStation(new RadioStation(89));
```