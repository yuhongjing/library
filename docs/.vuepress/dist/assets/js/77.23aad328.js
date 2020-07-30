(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{438:function(t,e,v){"use strict";v.r(e);var _=v(27),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"solid原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#solid原则"}},[t._v("#")]),t._v(" SOLID原则")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("简写")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("英文全称")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("中文全称")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("功能")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("S")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("SRP(Single Responsibility Principle)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("单一职责原则")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("一个类仅具有单一功能(职责)")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("O")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("OCP(Opened Closed Principle)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("开闭原则")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("扩展开放，修改封闭")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("L")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("LSP(Liskov Substituion Principle)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("里式替换原则")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("派生类可以替换基类的使用")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("I")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("ISP(Interface Segregation Princple)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("接口隔离原则")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("使用客户端特定的细粒度接口")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("D")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("DIP(Dependency Inversion Principle)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("依赖反转原则")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("依赖抽象而不是具体实现")])])])]),t._v(" "),v("h2",{attrs:{id:"单一职责原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单一职责原则"}},[t._v("#")]),t._v(" 单一职责原则")]),t._v(" "),v("p",[t._v("单一职责原则最终的目的是"),v("code",[t._v("高内聚")]),t._v("。")]),t._v(" "),v("p",[t._v("设计类或方法的时候，应该尽可能的将复杂的逻辑拆分为简单的职能。"),v("br"),t._v("\n每一个方法只做一件事情，每个类只代表一件事物。")]),t._v(" "),v("h2",{attrs:{id:"开闭原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开闭原则"}},[t._v("#")]),t._v(" 开闭原则")]),t._v(" "),v("p",[t._v("开闭原则的最终目的是"),v("code",[t._v("提高系统的可维护性(扩展功能等)和代码的重用性")]),t._v("。")]),t._v(" "),v("p",[t._v("软件实体对于扩展是开放的，而对于修改是封闭的。"),v("br"),t._v("\n在程序扩展的时候，不应该去修改原有代码，而是应该实现一个热插拔的效果。")]),t._v(" "),v("h2",{attrs:{id:"里式替换原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#里式替换原则"}},[t._v("#")]),t._v(" 里式替换原则")]),t._v(" "),v("p",[t._v("里氏替换原则最终目的是"),v("code",[t._v("减少继承的缺点，增强程序的健壮性")]),t._v("。")]),t._v(" "),v("p",[t._v("所有的父类都可以被子类替换，而不会使系统发生任何异常。"),v("br"),t._v("\n子类可以扩展父类的功能，但不能改变父类原有的功能。")]),t._v(" "),v("h2",{attrs:{id:"接口隔离原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#接口隔离原则"}},[t._v("#")]),t._v(" 接口隔离原则")]),t._v(" "),v("p",[t._v("接口隔离原则的最终目的是"),v("code",[t._v("低耦合")]),t._v("。")]),t._v(" "),v("p",[t._v("客户端不应该被迫依赖于它所不使用的方法。"),v("br"),t._v("\n一个接口负责多个功能，应该拆成颗粒度更细的多个接口，每个接口负责单独的一个功能。")]),t._v(" "),v("h2",{attrs:{id:"依赖反转原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#依赖反转原则"}},[t._v("#")]),t._v(" 依赖反转原则")]),t._v(" "),v("p",[t._v("依赖反转原则的目的是"),v("code",[t._v("高层模块与底层模块解耦，使得设计更加灵活")]),t._v("。")]),t._v(" "),v("p",[t._v("高层模块不应该依赖于底层模块，他们都应该依赖于抽象。"),v("br"),t._v("\n抽象不应该依赖于细节，细节应该依赖于抽象。")]),t._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),v("p",[t._v("五个基本原则使得程序"),v("code",[t._v("低耦合")]),t._v("、"),v("code",[t._v("高内聚")]),t._v("、"),v("code",[t._v("易扩展与重构")]),t._v("、"),v("code",[t._v("设计更灵活")]),t._v("、"),v("code",[t._v("程序更健壮")]),t._v("。")])])}),[],!1,null,null,null);e.default=a.exports}}]);