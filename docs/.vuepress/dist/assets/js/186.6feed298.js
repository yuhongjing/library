(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{574:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"原型与原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型与原型链"}},[t._v("#")]),t._v(" 原型与原型链")]),t._v(" "),a("p",[t._v("与大部分面向对象语言不同，JavaScript中并没有引入类"),a("code",[t._v("class")]),t._v("的概念。")]),t._v(" "),a("p",[t._v("但JavaScript大量地使用了对象，为了保证"),a("strong",[t._v("对象之间的联系")]),t._v("，JavaScript引入了原型与原型链的概念。")]),t._v(" "),a("h2",{attrs:{id:"相关知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关知识点"}},[t._v("#")]),t._v(" 相关知识点")]),t._v(" "),a("p",[t._v("ES2015中，将"),a("code",[t._v("Object")]),t._v("原型上操作对象的一系列方法，整合在"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reflect"),a("OutboundLink")],1),t._v("内置对象中。")]),t._v(" "),a("p",[t._v("为了降低阅读门槛，本文仍使用"),a("code",[t._v("Object")]),t._v("原型方法操作对象。")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/knowledge/web/javascript/ECMAScript/反射.html"}},[t._v("Reflect")]),t._v("相关知识，点击阅读。")],1),t._v(" "),a("h3",{attrs:{id:"对象的-proto-属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象的-proto-属性"}},[t._v("#")]),t._v(" 对象的"),a("code",[t._v("__proto__")]),t._v("属性")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("__proto__")]),a("OutboundLink")],1),t._v("不属于ECMAScript的语言规范，它只是大多数现代浏览器厂商自己实现的功能。")]),t._v(" "),a("p",[t._v("由于JS早期无法获取对象的原型，即"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",target:"_blank",rel:"noopener noreferrer"}},[t._v("对象内部"),a("OutboundLink")],1),t._v("[[prototype]]属性。所以各大浏览器厂商对Object.prototype通过访问描述符实现"),a("code",[t._v("__proto__")]),t._v("的getter和setter来达到访问调用对象的[[prototype]]属性。")]),t._v(" "),a("blockquote",[a("p",[t._v("[[prototype]]属性属于对象内部属性，无法直接访问，此属性指向对象原型。")])]),t._v(" "),a("p",[a("code",[t._v("__proto__")]),t._v("大致实现：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__proto__'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPrototypeOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取引用对象的[[Prototype]]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("o")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPrototypeOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置引用对象[[Prototype]]属性关联的原型为o")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("本质上是通过访问器属性来获取与设置对象关联的原型，可以理解为通过"),a("code",[t._v("__proto__")]),t._v("属性能获取或设置原型的引用。")]),t._v(" "),a("p",[t._v("这里先把"),a("strong",[t._v("普通对象的"),a("code",[t._v("__proto__")]),t._v("属性就称呼为对象原型")]),t._v("，以便接下来讲解。")]),t._v(" "),a("h3",{attrs:{id:"函数的prototype属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数的prototype属性"}},[t._v("#")]),t._v(" 函数的prototype属性")]),t._v(" "),a("p",[t._v("所有函数都有prototype属性（函数独有的属性）。并且在JS中，"),a("strong",[t._v("函数也属于对象的子类型")]),t._v("，因此函数也具备对象的"),a("code",[t._v("__proto__")]),t._v("属性。")]),t._v(" "),a("p",[t._v("当函数使用new关键字修饰时，我们可以理解此函数被当做构造函数使用，也就是构造器。当函数被当作构造函数调用时，其prototype发挥了作用，使得由构造器new出来对象的"),a("code",[t._v("__proto__")]),t._v("属性指向了构造函数的prototype。")]),t._v(" "),a("p",[t._v("以下代码演示了函数的prototype属性在实例化时的作用：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义构造函数")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义Foo构造函数时，自动创建的“干净的实例原型”")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个实例对象")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因此，实例关联的原型即为构造函数的prototype指向的原型对象")]),t._v("\n\n")])])]),a("p",[t._v("为了便于理解，这里把"),a("strong",[t._v("函数的prototype属性称呼为构造器原型")]),t._v("，以便接下来讲解。")]),t._v(" "),a("p",[t._v("现在需要理解的是：")]),t._v(" "),a("p",[t._v("函数的"),a("code",[t._v("__proto__")]),t._v("属性是：函数被当做一个对象时，对象关联的原型（即对象原型）。")]),t._v(" "),a("p",[t._v("函数的"),a("code",[t._v("prototype")]),t._v("属性是：函数被当作构造函数调用时，函数关联的原型（即构造器原型）。")]),t._v(" "),a("h3",{attrs:{id:"各类方法与属性的统称"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#各类方法与属性的统称"}},[t._v("#")]),t._v(" 各类方法与属性的统称")]),t._v(" "),a("ul",[a("li",[t._v("构造函数中定义的方法/属性，统称为『静态方法/属性』。")]),t._v(" "),a("li",[t._v("原型中定义的方法/属性，统称为『原型方法/属性』。")]),t._v(" "),a("li",[t._v("实例中定义的方法/属性，统称为『实例方法/属性』。")])]),t._v(" "),a("p",[t._v("当然，方法也属于属性。只是我们通常会把定义在对象中的函数，称为方法。")]),t._v(" "),a("h2",{attrs:{id:"原型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型"}},[t._v("#")]),t._v(" 原型")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("只有对象类型才有原型概念。")])]),t._v(" "),a("li",[a("p",[t._v("普通对象（即使用对象字面量或者Object构造器创建的对象）的原型为"),a("code",[t._v("__proto__")]),t._v("属性，此属性其实是一个访问器属性，并不是真实存在的属性，或者可以使用ES6的"),a("code",[t._v("Reflect")]),t._v("方法获取对象的原型。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其关系为")]),t._v("\nReflect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPrototypeOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPrototypeOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__\n")])])])]),t._v(" "),a("li",[a("p",[t._v("普通函数同时有这两个属性："),a("code",[t._v("__proto__")]),t._v("（与普通对象类似），"),a("code",[t._v("prototype")]),t._v("（函数专有）。")]),t._v(" "),a("p",[t._v("因为函数具有双重身份，既可以是实例也可以是构造器。所以比较特殊。")])]),t._v(" "),a("li",[a("p",[t._v("不是所有对象都有原型")]),t._v(" "),a("p",[t._v("例如对象原型"),a("code",[t._v("Object.prototype")]),t._v("的原型"),a("code",[t._v("Object.prototype.__proto__")]),t._v("就指向null。")]),t._v(" "),a("p",[t._v("字典对象的原型也为null（把对象的"),a("code",[t._v("__proto__")]),t._v("设置为null，或者使用"),a("code",[t._v("Object.create(null)创建一个没有原型的字典对象，但是这个对象还是属于对象类型")]),t._v(")，所以原始对象原型(Object.prototype)就是最原始的原型，其他对象类型都要继承自它。")])]),t._v(" "),a("li",[a("p",[t._v("箭头函数虽然属于函数，由Function产生，但是没有prototype属性没有构造器特性，所以也就没有所谓的constructor，就不能作为构造器使用。")])])]),t._v(" "),a("h2",{attrs:{id:"原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型链"}},[t._v("#")]),t._v(" 原型链")]),t._v(" "),a("p",[t._v("下面详细了解原型、原型链、实例、构造器的关系。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/%E5%8E%9F%E5%9E%8B%E9%93%BE.svg",alt:""}})]),t._v(" "),a("p",[t._v("由上图关系可以验证")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("__proto__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("__proto__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" Function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" Function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("所有函数都是由Function函数构造器实例化生成")])]),t._v(" "),a("li",[a("p",[t._v("所以实例的原型都指向构造它的构造器的prototype")])]),t._v(" "),a("li",[a("p",[t._v("每个构造器自身特有的方法就是"),a("strong",[t._v("静态方法")]),t._v("，原型上的方法可供所有继承它或间接继承它的实例使用")])]),t._v(" "),a("li",[a("p",[t._v("构造器也是函数，也是被Function实例化出来的，所以构造器的"),a("code",[t._v("__proto__")]),t._v("就是Function，但是构造器的prototype属性指向的原型，是此构造器实例化出来的实例所指向的原型。也就是：构造器的prototype就是作为它的实例的原型")])])]),t._v(" "),a("h3",{attrs:{id:"函数原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数原型链"}},[t._v("#")]),t._v(" 函数原型链")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20200520165720.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("JS中函数具有多重身份，作为类就是构造器使用，定义静态方法；作为普通函数调用")]),t._v(" "),a("li",[t._v("只有由原始函数构造器(Function)实例化的函数才拥有直接使用函数原型(Function.prototype)的内置方法，创造函数只能通过原始函数构造器生成")]),t._v(" "),a("li",[t._v("普通函数作为构造器使用(new)时相当于类(class)使用，类的prototype就是实例的原型，可以给原型添加属性，给类添加属性时就相当于给构造器添加静态属性")]),t._v(" "),a("li",[t._v("普通函数创建实例的时候，会生成一个实例的原型，此原型指向Object.prototype即原始对象原型，也就是继承对象原型，这么一来实例也继承了对象的原型，则实例也属于对象类型")])])])}),[],!1,null,null,null);s.default=e.exports}}]);