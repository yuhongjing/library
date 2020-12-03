---
title: PHP实现
---

# 状态模式-PHP

* [工作状态](#工作状态)
* [文本编辑器](#文本编辑器)

## 工作状态
模拟一天上班在各个时间段的工作状态。

```php
<?php
// 工作状态
abstract class State {
    abstract public function WriteProgram(Work $w);
}

class ForenoonState extends State {
    public function WriteProgram(Work $w) {
        if ($w->getHour() < 12) {
            echo "当前时间：".$w->getHour()." 上午工作，精神百倍\n";
        } else {
            $w->setState(new NoonState());
            $w->WriteProgram();
        }
    }
}

class NoonState extends State {
    public function WriteProgram(Work $w) {
        if ($w->getHour() < 13) {
            echo "当前时间：".$w->getHour()." 饿了，午饭；犯困，午休\n";
        } else {
          $w->setState(new AfterNoonState());
          $w->WriteProgram();
        }
    }
}

class AfterNoonState extends State {
    public function WriteProgram(Work $w) {
        if ($w->getHour() < 17) {
            echo "当前时间：".$w->getHour()." 下午状态不错，继续努力\n";
        } else {
          $w->setState(new EveningState());
          $w->WriteProgram();
        }
    }
}

class EveningState extends State
{
    public function WriteProgram(Work $w)
    {
        if ($w->getTaskFinishedState()) {
            //如果完成任务，下班
            $w->setState(new RestState());
            $w->WriteProgram();
        } else {
            if ($w->getHour() < 21) {
                echo "当前时间：".$w->getHour()." 加班哦，疲惫之极\n";
            } else {
                //超过21点，则转入睡眠工作状态
                $w->setState(new SleepingState());
                $w->WriteProgram();
            }
        }
    }
}

class SleepingState extends State
{
    public function WriteProgram(Work $w)
    {
        echo "当前时间：".$w->getHour()." 不行了，睡觉\n";
    }
}

class RestState extends State
{
    public function WriteProgram(Work $w)
    {
        echo "当前时间：".$w->getHour()." 下班回家\n";
    }
}

class Work
{
    private $current;
    private $hour;
    private $finished = false;

    function __construct()
    {
        $this->current = new ForenoonState();
    }
    public function getHour()
    {
        return $this->hour;
    }
    public function setHour($hour)
    {
        $this->hour = $hour;
    }
    public function setTaskFinished($bool)
    {
        $this->finished = $bool;
    }
    public function getTaskFinishedState()
    {
        return $this->finished;
    }
    public function setState(State $state)
    {
        $this->current = $state;
    }
    public function WriteProgram()
    {
        $this->current->WriteProgram($this);
    }
}

//客户端代码
$emergencyProjects = new Work();
$emergencyProjects->setHour(9);
$emergencyProjects->WriteProgram(); // 当前时间：9 上午工作，精神百倍
$emergencyProjects->setHour(10);
$emergencyProjects->WriteProgram(); // 当前时间：10 上午工作，精神百倍
$emergencyProjects->setHour(12);
$emergencyProjects->WriteProgram(); // 当前时间：12 饿了，午饭；犯困，午休
$emergencyProjects->setHour(13);
$emergencyProjects->WriteProgram(); // 当前时间：13 下午状态不错，继续努力
$emergencyProjects->setHour(14);
$emergencyProjects->WriteProgram(); // 当前时间：14 下午状态不错，继续努力
$emergencyProjects->setHour(17);

$emergencyProjects->setTaskFinished(false);
$emergencyProjects->WriteProgram(); // 当前时间：17 加班哦，疲惫之极 

$emergencyProjects->setHour(19);
$emergencyProjects->WriteProgram(); // 当前时间：19 加班哦，疲惫之极
$emergencyProjects->setHour(22);
$emergencyProjects->WriteProgram(); // 当前时间：22 不行了，睡觉

// 不加班的情况
// $emergencyProjects->setTaskFinished(true);
// $emergencyProjects->WriteProgram(); // 当前时间：17 下班回家

// $emergencyProjects->setHour(19);
// $emergencyProjects->WriteProgram(); // 当前时间：19 下班回家
// $emergencyProjects->setHour(22);
// $emergencyProjects->WriteProgram(); // 当前时间：22 下班回家
```

## 文本编辑器

文本编辑器可以改变状态，当锁定为大写时，输出的字母都是大写；当锁定小写时，输出的字母都是小写。

```php
<?php
interface WritingState {
  public function write(string $words);
}

class UpperCase implements WritingState {
  public function write(string $words) {
    echo strtoupper($words);
  }
}

class LowerCase implements WritingState {
  public function write(string $words) {
    echo strtolower($words);
  }
}

class DefaultText implements WritingState {
  public function write(string $words) {
    echo $words;
  }
}

class TextEditor {
  protected $state;

  public function __construct(WritingState $state) {
    $this->state = $state;
  }

  public function setState(WritingState $state) {
    $this->state = $state;
  }

  public function type(string $words) {
    $this->state->write($words);
  }
}

// client
$editor = new TextEditor(new DefaultText());

$editor->type('First line');

$editor->setState(new UpperCase());

$editor->type('Second line');
$editor->type('Third line');

$editor->setState(new LowerCase());

$editor->type('Fourth line');
$editor->type('Fifth line');

// Output:
// First line
// SECOND LINE
// THIRD LINE
// fourth line
// fifth line
```