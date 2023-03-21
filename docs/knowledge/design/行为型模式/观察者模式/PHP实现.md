---
title: PHP实现
---

# 观察者模式—PHP

* [检查值变化](#检测值变化)
* [求职](#求职)

## 检查值变化

类似Vue的双向绑定实现。

```php
<?php

// 目标类
abstract class Subject {
    private $observers = [];

    public function attach(Observer $observer) {
        // 添加观察者
        array_push($this->observers, $observer);
    }

    public function detatch($observer) {
        // 移除观察者
        foreach ($this->observers as $key => $value) {
            if ($observer === $value) {
                unset($this->observers[$key]);
            }
        }
    }

    public function notify() {
        foreach ($this->observers as $observer) {
            $observer->update();
        }
    }
}

// 观察者
abstract class Observer {
    abstract function update();
}

// 具体目标类
class ConcreteSubject extends Subject {
    private $subjectState;

    public function setState($state) {
        $this->subjectState = $state;
    }

    public function getState() {
        return $this->subjectState;
    }
}

// 具体观察者
class ConcreteObserver extends Observer {
    private $name;
    private $subject;

    public function __construct(ConcreteSubject $subject, $name) {
        $this->subject = $subject;
        $this->name = $name;
    }

    public function update() {
        echo "观察者".$this->name."的新状态是: ".$this->subject->getState()."\n";
    }
}

// 创建一个具体目标$s
$s = new ConcreteSubject();
// 添加一个观察者x，观察$s，并放入目标$s的观察队列中
$s->attach(new ConcreteObserver($s, "x"));
// 添加一个观察者y，观察$s，并放入目标$s的观察队列中
$s->attach(new ConcreteObserver($s, "y"));
// 添加一个观察者z，观察$s
$z = new ConcreteObserver($s, "z");
// 将观察者z放入目标$s的观察队列中
$s->attach($z);
// 目标$s的观察队列移除观察者z
$s->detatch($z);
$s->setState('ABC');
$s->notify();

// output
// 观察者x的新状态是: ABC
// 观察者y的新状态是: ABC
```

## 求职

求职者在求职网站上，订阅了自己的求职岗位，当网站发现有合适的岗位时就会通知求职者。

```php
<?php

interface Observer {}
interface Observable {}

class JobPost {
    protected $title;

    public function __construct(string $title) {
        $this->title = $title;
    }

    public function getTitle() {
        return $this->title;
    }
}


class JobSeeker implements Observer {
    protected $name;

    public function __construct(string $name) {
        $this->name = $name;
    }

    public function onJobPosted(JobPost $job) {
        echo "Hi ".$this->name."! New job posted: ".$job->getTitle()."\n";
    }
}

class EmploymentAgency implements Observable {
    protected $observers = [];

    protected function notify(JobPost $jobPosting) {
        foreach ($this->observers as $observer) {
            $observer->onJobPosted($jobPosting);
        }
    }

    public function attach(Observer $observer) {
        $this->observers[] = $observer;
    }

    public function addJob(JobPost $jobPosting) {
        $this->notify($jobPosting);
    }
}

// 创建求职者
$johnDoe = new JobSeeker('John Doe');
$janeDoe = new JobSeeker('Jane Doe');

// 创建发布者并添加求职者
$jobPostings = new EmploymentAgency();
$jobPostings->attach($johnDoe);
$jobPostings->attach($janeDoe);

// 添加一份新工作，并发布出去
$jobPostings->addJob(new JobPost('Software Engineer'));

// Output
// Hi John Doe! New job posted: Software Engineer
// Hi Jane Doe! New job posted: Software Engineer
```

