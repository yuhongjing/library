---
title: 前言
---
# 前言
设计模式学习总结整理。  

设计模式(`Design pattern`)代表了最佳的实践，通常被有经验的面向对象的软件开发人员所采用。设计模式是软件开发人员在软件开发过程中面临的一般问题的解决方案。这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的。

设计模式是一套被反复使用的、多数人知晓的、经过分类编目的、代码设计经验的总结。使用设计模式是为了重用代码、让代码更容易被他人理解、保证代码可靠性。毫无疑问，设计模式于己于他于系统都是多赢的，设计模式使代码编制真正工程化，设计模式是软件工程的基石，如同大厦的一块块砖石一样。项目中合理地运用设计模式可以完美地解决很多问题，每种模式在现实中都有相应的原理与之对应，每种模式都描述了一个在我们周围不断重复发生的问题，以及该问题的核心解决方案，这也是设计模式能被广泛应用的原因。

## 设计模式的由来

在1994年，由Erich Gamma、Richard Helm、Ralph Johnson和John Vlissides四人合著出版了一本名为Design Patterns - Elements of Reusable Object - Oriented Software（中文译名：设计模式-可复用的面向对象软件元素）的书，该书首次提到了软件开发中设计模式的概念。

四位作者合称GOF（四人帮，全称Gang of Four）。他们所提出的设计模式主要是基于以下的面向对象设计原则：

* 对接口编程而不是对实现编程。
* 优先使用对象组合而不是继承。

## 设计模式的使用

设计模式在软件开发中的两个主要用途：

* 开发人员的共同平台：设计模式提供了一个标准的术语系统，且具体到特定的情景。例如，单例设计模式意味着使用单个对象，这样所有熟悉单例设计模式的开发人员都能使用单个对象，并且可以通过这种方式告诉对方，程序使用的是单例模式。
* 最佳的实践：设计模式已经经历了很长一段时间的发展，它们提供了软件开发过中面临的一般问题的最佳解决方案。学习这些模式有助于经验不足的开发人员通过一种简单快捷的方式来学习软件设计。

## 设计模式的分类

### 设计模式的三大分类

根据设计模式的参考书中所提到，总共有`23`种设计模式。这些模式可以分为三大类：

* 创建型模式：对象实例化的模式，创建型模式用于解构对象的实例化过程。
* 结构型模式：把类和对象结合在一起形成一个更大的结构。
* 行为型模式：类和对象如何交互，及划分责任和算法。

下图是整体描述设计模式之间的关系：

![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20201113142558.png)

## 基础原则
* [SOLID五大设计原则](./基础原则/solid.md)
* [迪米特法则](./基础原则/迪米特法则.md)
* [合成复用原则](./基础原则/合成复用原则.md)

## 创建型模式
* [简单工厂模式](./创建型模式/简单工厂模式/read.md)
* [工厂方法模式](./创建型模式/工厂方法模式/read.md)
* [原型模式](./创建型模式/原型模式/read.md)
* [建造者模式](./创建型模式/建造者模式/read.md)
* [抽象工厂模式](./创建型模式/抽象工厂模式/read.md)
* [单例模式](./创建型模式/单例模式/read.md)

## 行为型模式
* [策略模式](./行为型模式/策略模式/read.md)
* [模板方法模式](./行为型模式/模板方法模式/read.md)
* [观察者模式](./行为型模式/观察者模式/read.md)
* [状态模式](./行为型模式/状态模式/read.md)
* [备忘录模式](./行为型模式/备忘录模式/read.md)
* [迭代器模式](./行为型模式/迭代器模式/read.md)
* [命令模式](./行为型模式/命令模式/read.md)
* [职责链模式](./行为型模式/职责链模式/read.md)
* [中介者模式](./行为型模式/中介者模式/read.md)
* [解释器模式](./行为型模式/解释器模式/read.md)
* [访问者模式](./行为型模式/访问者模式/read.md)

## 结构型模式
* [装饰者模式](./结构型模式/装饰者模式/read.md)
* [代理模式](./结构型模式/代理模式/read.md)
* [外观模式](./结构型模式/外观模式/read.md)
* [适配器模式](./结构型模式/适配器模式/read.md)
* [组合模式](./结构型模式/组合模式/read.md)
* [桥接模式](./结构型模式/桥接模式/read.md)
* [享元模式](./结构型模式/享元模式/read.md)

## 参考资料

### Java描述
* [大话设计模式]()
* [菜鸟教程](https://www.runoob.com/design-pattern/design-pattern-tutorial.html)
* [深入浅出设计模式(Head First Design Patterns)]()
* [Java Design Pattern]()

### C++描述
* [图说设计模式](https://design-patterns.readthedocs.io/zh_CN/latest/creational_patterns/builder.html)

### PHP描述
* [大话设计模式-PHP描述](https://hulin.gitbook.io/design-patterns-by-php/)
* [design-patterns-for-humans](https://github.com/kamranahmedse/design-patterns-for-humans)
* [DesignPatternsPHP](https://github.com/domnikl/DesignPatternsPHP)

### JavaScript描述
* [javascript-design-patterns-for-humans](https://github.com/sohamkamani/javascript-design-patterns-for-humans#-builder)
