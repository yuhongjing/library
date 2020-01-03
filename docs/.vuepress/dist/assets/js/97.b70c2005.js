(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{380:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"简单工厂模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单工厂模式"}},[t._v("#")]),t._v(" 简单工厂模式")]),t._v(" "),a("p",[a("code",[t._v("简单工厂模式")]),t._v("(Simple Factory Pattern)又叫"),a("code",[t._v("静态方法模式")]),t._v("(Static Factory Method)。"),a("br"),t._v("\n因为工厂类定义了一个静态方法。")]),t._v(" "),a("p",[t._v("简单工厂模式中，根据"),a("code",[t._v("参数")]),t._v("的不同返回不同类的"),a("code",[t._v("实例")]),t._v("。")]),t._v(" "),a("p",[t._v("简单工厂模式是一种"),a("code",[t._v("创建型模式")]),t._v("，适用于创建同一类对象。")]),t._v(" "),a("h2",{attrs:{id:"适用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[t._v("#")]),t._v(" 适用场景")]),t._v(" "),a("p",[t._v("我们自然可以编写"),a("code",[t._v("Alert()")]),t._v("、"),a("code",[t._v("Prompt()")]),t._v("、"),a("code",[t._v("Confirm()")]),t._v("三个类，然后每次调用时，都使用"),a("code",[t._v("new Alert()")]),t._v("、"),a("code",[t._v("new Prompt()")]),t._v("来调用。")]),t._v(" "),a("p",[t._v("这在大多数情况下当然没什么问题，但是假如某一天我们对警告框"),a("code",[t._v("Alert()")]),t._v("做了一些改进，然后命名为"),a("code",[t._v("BatterAlert()")]),t._v("，但是此时项目中已经大量使用"),a("code",[t._v("Alert()")]),t._v("了，如果此时应用"),a("code",[t._v("BatterAlert()")]),t._v("，就涉及很多地方的更改。所以需要通过简单工厂模式来实现。")]),t._v(" "),a("p",[t._v("简单工厂模式专门定义一个类来负责创建其他类的实例，被创建的实例通常具有共同的父类。")]),t._v(" "),a("h2",{attrs:{id:"核心思想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心思想"}},[t._v("#")]),t._v(" 核心思想")]),t._v(" "),a("p",[a("code",[t._v("简单工厂模式")]),t._v("的核心思想就是抽象出一个"),a("code",[t._v("工厂函数")]),t._v("。"),a("br"),t._v("\n工厂函数内部通过传入的参数判断应该实例化哪个类。"),a("br"),t._v("\n使用者使用时仅需调用"),a("code",[t._v("工厂函数")]),t._v("即可，即便更换类名，也只需修改"),a("code",[t._v("工厂函数")]),t._v("即可。")]),t._v(" "),a("h2",{attrs:{id:"举例说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例说明"}},[t._v("#")]),t._v(" 举例说明")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("popFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'alert'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prompt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Prompt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'confirm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Confirm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("popFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'alert'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'提示信息'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("通过简单工厂模式，就可以通过一个静态函数来声明实例。"),a("br"),t._v("\n修改和添加新的实例的时候，只需修改工厂函数即可，项目的代码无需变动。"),a("br"),t._v("\n大体思路差不多就是如此。")])])}),[],!1,null,null,null);s.default=e.exports}}]);