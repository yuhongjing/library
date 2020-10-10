(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{436:function(t,v,_){"use strict";_.r(v);var a=_(27),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"抽象工厂模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#抽象工厂模式"}},[t._v("#")]),t._v(" 抽象工厂模式")]),t._v(" "),_("p",[_("code",[t._v("抽象工厂模式")]),t._v("(Abstract Factory Pattern)又称"),_("code",[t._v("Kit")]),t._v("模式，是围绕一个超级工厂创建的其它工厂。该超级工厂又称为其它工厂的工厂。")]),t._v(" "),_("p",[t._v("抽象工厂模式属于"),_("code",[t._v("对象创建型模式")]),t._v("。")]),t._v(" "),_("h2",{attrs:{id:"模式动机"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式动机"}},[t._v("#")]),t._v(" 模式动机")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("在工厂方法模式中具体工厂负责生产具体的产品，每一个具体工厂对应一种具体产品，工厂方法也具有唯一性，一般情况下，一个具体工厂中只有一个工厂方法或者一组重载的工厂方法。但是有时候我们需要"),_("strong",[t._v("一个工厂可以提供多个产品对象，而不是单一的产品对象")]),t._v("。")]),t._v(" "),_("p",[t._v("为了更清晰地理解工厂方法模式，需要先引入两个概念：")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("产品等级结构")]),t._v("：产品等级结构即产品的继承结构，如一个抽象类是电视机，其子类有海尔电视机、海信电视机、TCL电视机，则抽象电视机与具体品牌的电视机之间构成了一个产品等级结构，抽象电视机是父类，而具体品牌的电视机是其子类。")]),t._v(" "),_("li",[_("strong",[t._v("产品族")]),t._v("：在抽象工厂模式中，产品族是指由同一工厂生产的，位于不同产品等级结构中的一组产品，如海尔电器工厂生产的海尔电视机、海尔电冰箱，海尔电视机位于电视机产品等级结构中，海尔电冰箱位于电冰箱等级结构中。")])])]),t._v(" "),_("li",[_("p",[t._v("当系统所提供的工厂所需生产的具体产品并不是一个简单的对象，而是多个位于不同产品等级结构中属于不同类型的具体产品时需要使用抽象工厂模式。")])]),t._v(" "),_("li",[_("p",[t._v("抽象工厂模式是所有形式的工厂模式中最为抽象和最具一般性的一种形态。")])]),t._v(" "),_("li",[_("p",[t._v("抽象工厂模式与工厂方法模式最大的区别在于，工厂方法模式针对的是一个产品等级结构，而抽象工厂模式则需要面对多个产品等级结构，一个工厂等级结构可以负责多个不同产品等级结构中的产品对象的创建。当一个工厂等级结构可以创建出分属于不同产品等级结构的一个产品族中的所有对象时，抽象工厂模式比工厂模式更为简单、有效率。")])])]),t._v(" "),_("h2",{attrs:{id:"模式定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式定义"}},[t._v("#")]),t._v(" 模式定义")]),t._v(" "),_("p",[t._v("提供一个创建一系列相关或相互依赖对象的接口，而无须指定它们具体的类。")]),t._v(" "),_("h2",{attrs:{id:"模式结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式结构"}},[t._v("#")]),t._v(" 模式结构")]),t._v(" "),_("p",[t._v("抽象工厂模式包含如下角色：")]),t._v(" "),_("ul",[_("li",[t._v("AbstractFactory：抽象工厂")]),t._v(" "),_("li",[t._v("ConcreteFactory：具体工厂")]),t._v(" "),_("li",[t._v("AbstractProduct：抽象产品")]),t._v(" "),_("li",[t._v("Product：具体产品")])]),t._v(" "),_("h2",{attrs:{id:"代码实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[t._v("#")]),t._v(" 代码实现")]),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/knowledge/design/创建型模式/抽象工厂模式/PHP实现.html"}},[t._v("PHP实现")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/knowledge/design/创建型模式/抽象工厂模式/JS实现.html"}},[t._v("JS实现")])],1)]),t._v(" "),_("h2",{attrs:{id:"优点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),_("ul",[_("li",[t._v("抽象工厂模式隔离了具体类的生成，使得客户并不需要知道什么被创建。由于这种隔离，更换一个具体工厂就变得相对容易。所有的具体工厂都实现了抽象工厂中定义的那些公共接口，因此只需要改变具体工厂的实例，就可以在某种程度上改变整个软件系统的行为。另外，应用抽象工厂模式可以实现高内聚低耦合的设计目的，因此抽象工厂模式得到了广泛的应用。")]),t._v(" "),_("li",[t._v("当一个产品族中的多个对象被设计成一起工作时，它能保证客户端始终只使用同一个产品族中的对象。这对一些需要根据当前环境来决定其行为的软件系统来说，是一种非常实用的设计模式。")]),t._v(" "),_("li",[t._v('增加新的具体工厂和产品族很方便，无须修改已有系统，符合"开闭原则"。')])]),t._v(" "),_("h2",{attrs:{id:"缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),_("ul",[_("li",[t._v("在添加新的产品对象时，难以扩展抽象工厂来生产新种类的产品，这是因为在抽象工厂角色中规定了所有可能被创建的产品集合，要支持新种类的产品就意味着要对该接口进行扩展，而这将涉及到对抽象工厂角色及其所有子类的修改，显然会带来较大的不便。")]),t._v(" "),_("li",[t._v("开闭原则的倾斜性（增加新的工厂和产品族容易，增加新的产品等级结构麻烦）。")])]),t._v(" "),_("h2",{attrs:{id:"适用环境"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#适用环境"}},[t._v("#")]),t._v(" 适用环境")]),t._v(" "),_("p",[t._v("在以下情况下可以使用抽象工厂模式：")]),t._v(" "),_("ul",[_("li",[t._v("一个系统不应当依赖于产品类实例如何被创建、组合和表达的细节，这对于所有类型的工厂模式都是重要的。")]),t._v(" "),_("li",[t._v("系统中有多于一个的产品族，而每次只使用其中某一产品族。")]),t._v(" "),_("li",[t._v("属于同一个产品族的产品将在一起使用，这一约束必须在系统的设计中体现出来。")]),t._v(" "),_("li",[t._v("系统提供一个产品类的库，所有的产品以同样的接口出现，从而使客户端不依赖于具体实现。")])]),t._v(" "),_("h2",{attrs:{id:"模式应用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式应用"}},[t._v("#")]),t._v(" 模式应用")]),t._v(" "),_("p",[t._v("在很多软件系统中需要更换界面主题，要求界面中的按钮、文本框、背景色等一起发生改变，可以使用抽象工厂模式进行设计。")]),t._v(" "),_("h2",{attrs:{id:"模式扩展"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式扩展"}},[t._v("#")]),t._v(" 模式扩展")]),t._v(" "),_("h3",{attrs:{id:"开闭原则-的倾斜性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开闭原则-的倾斜性"}},[t._v("#")]),t._v(' "开闭原则"的倾斜性')]),t._v(" "),_("ul",[_("li",[_("p",[t._v('"开闭原则"要求系统对扩展开放，对修改封闭，通过扩展达到增强其功能的目的。对于涉及到多个产品族与多个产品等级结构的系统，其功能增强包括两方面：')]),t._v(" "),_("ul",[_("li",[t._v('增加产品族：对于增加新的产品族，工厂方法模式很好的支持了"开闭原则"，对于新增加的产品族，只需要对应增加一个新的具体工厂即可，对已有代码无须做任何修改。')]),t._v(" "),_("li",[t._v('增加新的产品等级结构：对于增加新的产品等级结构，需要修改所有的工厂角色，包括抽象工厂类，在所有的工厂类中都需要增加生产新产品的方法，不能很好地支持"开闭原则"。')])])]),t._v(" "),_("li",[_("p",[t._v('抽象工厂模式的这种性质称为"开闭原则"的倾斜性，抽象工厂模式以一种倾斜的方式支持增加新的产品，它为新产品族的增加提供方便，但不能为新的产品等级结构的增加提供这样的方便。')])])]),t._v(" "),_("h3",{attrs:{id:"工厂模式的退化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#工厂模式的退化"}},[t._v("#")]),t._v(" 工厂模式的退化")]),t._v(" "),_("ul",[_("li",[t._v("当抽象工厂模式中每一个具体工厂类只创建一个产品对象，也就是只存在一个产品等级结构时，抽象工厂模式退化工厂方法模式；当工厂方法模式中抽象工厂与具体工厂合并，提供一个统一的工厂来创建产品对象，并将创建对象的工厂方法设计为静态方法时，工厂方法模式退化成简单工厂模式。")])])])}),[],!1,null,null,null);v.default=r.exports}}]);