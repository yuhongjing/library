(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{388:function(t,s,a){"use strict";a.r(s);var n=a(2),v=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"代理模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代理模式"}},[t._v("#")]),t._v(" 代理模式")]),t._v(" "),a("p",[a("code",[t._v("代理模式")]),t._v("(Proxy)，为其他对象提供一种代理以控制对这个对象的访问。")]),t._v(" "),a("p",[a("code",[t._v("代理模式")]),t._v("属于"),a("code",[t._v("结构型模式")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),a("p",[t._v("通常在如下场景时，需要使用到代理模式。")]),t._v(" "),a("ul",[a("li",[t._v("无法直接访问某个对象")]),t._v(" "),a("li",[t._v("不想直接访问某个对象")]),t._v(" "),a("li",[t._v("访问某个对象存在困难")])]),t._v(" "),a("h2",{attrs:{id:"种类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#种类"}},[t._v("#")]),t._v(" 种类")]),t._v(" "),a("p",[t._v("代理模式分为"),a("code",[t._v("静态代理")]),t._v("和"),a("code",[t._v("动态代理")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"静态代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态代理"}},[t._v("#")]),t._v(" 静态代理")]),t._v(" "),a("p",[t._v("什么是"),a("code",[t._v("静态代理")]),t._v("？若代理类在程序运行之前已经存在，那么这种代理方式被称为"),a("code",[t._v("静态代理")]),t._v("。"),a("br"),t._v("\n下面是一个大明星想买鞋，通过助理来实现的代码。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Star")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("buyShoes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"买了一双鞋"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Assistant")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("buyShoes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里还可以添加各种过滤条件")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Star")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("buyShoes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 客户端代码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Assistant")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("buyShoes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 买了一双鞋")]),t._v("\n")])])]),a("p",[t._v("这里的助理类，就相当于代理类，并且在代理类中可以添加更多的功能，例如"),a("code",[t._v("过滤")]),t._v("等功能。"),a("br"),t._v("\n它的缺点很明显：")]),t._v(" "),a("ul",[a("li",[t._v("需要"),a("code",[t._v("代理类")]),t._v("实现与"),a("code",[t._v("目标类")]),t._v("相同的方法")]),t._v(" "),a("li",[t._v("每一个"),a("code",[t._v("代理类")]),t._v("只能代理一个"),a("code",[t._v("目标类")]),t._v("。")])]),t._v(" "),a("p",[t._v("所以当有多个需要代理的"),a("code",[t._v("目标类")]),t._v("时，就得重复书写很多代码。"),a("br"),t._v("\n而解决这个问题的办法就是"),a("code",[t._v("动态代理")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"动态代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态代理"}},[t._v("#")]),t._v(" 动态代理")]),t._v(" "),a("p",[t._v("什么是"),a("code",[t._v("动态代理")]),t._v("，代理类在程序运行时创建的，这种代理方式称为"),a("code",[t._v("动态代理")]),t._v("。"),a("br"),t._v(" "),a("code",[t._v("动态代理")]),t._v("需要一个"),a("code",[t._v("生成代理的类")]),t._v("来动态生成代理类。"),a("br"),t._v(" "),a("strong",[t._v("还没学习反射，先学习反射再回头看这里吧。待续")])]),t._v(" "),a("h2",{attrs:{id:"静态代理模式与装饰者模式的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态代理模式与装饰者模式的区别"}},[t._v("#")]),t._v(" 静态代理模式与装饰者模式的区别")]),t._v(" "),a("p",[t._v("装饰者模式中"),a("code",[t._v("客户端")]),t._v("的代码必须知道"),a("code",[t._v("被装饰者类")]),t._v("并且得生成它的"),a("code",[t._v("实例")]),t._v("。"),a("br"),t._v("\n而静态代理模式中，"),a("code",[t._v("客户端")]),t._v("是完全不知道"),a("code",[t._v("真实目标对象")]),t._v("，更别说生成它的实例了。")]),t._v(" "),a("p",[t._v("装饰模式主要是强调对类中代码的"),a("code",[t._v("拓展")]),t._v("，而代理模式则偏向于委托类的"),a("code",[t._v("访问限制")])]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("代理模式，主要就是为了防止"),a("code",[t._v("客户端")]),t._v("能够直接访问到"),a("code",[t._v("目标对象")]),t._v("所做的一层隔离。")])])}),[],!1,null,null,null);s.default=v.exports}}]);