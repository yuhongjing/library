---
title: PHP实现
---

# 解释器模式-PHP

* [终端解释器](#终端解释器)



## 终端解释器

```php
<?php

interface AbstractExpression
{
    public function interpret(Context $context);
}

class TerminalExpression implements AbstractExpression
{
    public function interpret(Context $context)
    {
        echo "终端解释器\n";
    }
}

class NonTerminalExpression implements AbstractExpression
{
    public function interpret(Context $context)
    {
        echo "非终端解释器\n";
    }
}

class Context
{
    private $input;
    public function setInput($input)
    {
        $this->input = $input;
    }

    public function getInput()
    {
        return $this->input;
    }

    private $output;
    public function setOutput($output)
    {
        $this->output = $output;
    }

    public function getOutput()
    {
        return $this->output;
    }
}

// client
$context = new Context();
$syntax = [];
array_push($syntax, new TerminalExpression());
array_push($syntax, new NonTerminalExpression());
array_push($syntax, new TerminalExpression());
array_push($syntax, new TerminalExpression());

foreach ($syntax as $value) {
    $value->interpret($context);
}
// 终端解释器
// 非终端解释器
// 终端解释器
// 终端解释器
```

