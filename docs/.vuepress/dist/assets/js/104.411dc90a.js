(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{473:function(t,v,_){"use strict";_.r(v);var a=_(27),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"装饰模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#装饰模式"}},[t._v("#")]),t._v(" 装饰模式")]),t._v(" "),_("p",[_("code",[t._v("装饰模式")]),t._v("(Decorator Pattern)，别名为"),_("code",[t._v("包装器")]),t._v("(Wrapper)或"),_("code",[t._v("油漆工模式")]),t._v("。")]),t._v(" "),_("p",[t._v("装饰模式属于"),_("code",[t._v("对象结构型模式")]),t._v("。")]),t._v(" "),_("h2",{attrs:{id:"模式动机"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式动机"}},[t._v("#")]),t._v(" 模式动机")]),t._v(" "),_("p",[t._v("一般有两种方式可以实现给一个类或对象增加行为：")]),t._v(" "),_("ul",[_("li",[t._v("继承机制，使用继承机制是给现有类添加功能的一种有效途径，通过继承一个现有类可以使得子类在拥有自身方法的同时还拥有父类的方法。但是这种方法是静态的，用户不能控制增加行为的方式和时机。")]),t._v(" "),_("li",[t._v("关联机制，即将一个类的对象嵌入另一个对象中，由另一个对象来决定是否调用嵌入对象的行为以便扩展自己的行为，我们称这个嵌入的对象为装饰器。")])]),t._v(" "),_("p",[t._v("装饰模式以对客户透明的方式动态地给一个对象附加上更多的责任，换言之，客户端并不会觉得对象在装饰前和装饰后有什么不同。装饰模式可以在不需要创造更多子类的情况下，将对象的功能加以扩展。这就是装饰模式的模式动机。")]),t._v(" "),_("h2",{attrs:{id:"模式定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式定义"}},[t._v("#")]),t._v(" 模式定义")]),t._v(" "),_("p",[t._v("动态地给一个对象增加一些额外的职责(Responsibility)，就增加对象功能来说，装饰模式比生成子类实现更为灵活。")]),t._v(" "),_("h2",{attrs:{id:"模式结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式结构"}},[t._v("#")]),t._v(" 模式结构")]),t._v(" "),_("p",[t._v("装饰模式包含如下角色：")]),t._v(" "),_("ul",[_("li",[t._v("Component：抽象构件")]),t._v(" "),_("li",[t._v("ConcreteComponent：具体构件")]),t._v(" "),_("li",[t._v("Decorator：抽象装饰类")]),t._v(" "),_("li",[t._v("ConcreteDecorator：具体装饰类")])]),t._v(" "),_("h2",{attrs:{id:"代码实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[t._v("#")]),t._v(" 代码实现")]),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/knowledge/design/结构型模式/装饰模式/PHP实现.html"}},[t._v("PHP实现")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/knowledge/design/结构型模式/装饰模式/JS实现.html"}},[t._v("JS实现")])],1)]),t._v(" "),_("h2",{attrs:{id:"模式分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式分析"}},[t._v("#")]),t._v(" 模式分析")]),t._v(" "),_("ul",[_("li",[t._v("与继承关系相比，关联关系的主要优势在于不会破坏类的封装性，而且继承是一种耦合度较大的静态关系，无法在程序运行时动态扩展。在软件开发阶段，关联关系虽然不会比继承关系减少编码量，但是到了软件维护阶段，由于关联关系使系统具有较好的松耦合性，因此使得系统更加容易维护。当然，关联关系的缺点是比继承关系要创建更多的对象。")]),t._v(" "),_("li",[t._v("使用装饰模式来实现扩展比继承更加灵活，它以对客户透明的方式动态地给一个对象附加更多的责任。装饰模式可以在不需要创造更多子类的情况下，将对象的功能加以扩展。")])]),t._v(" "),_("h2",{attrs:{id:"优点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),_("p",[t._v("装饰模式的优点：")]),t._v(" "),_("ul",[_("li",[t._v("装饰模式与继承关系的目的都是要扩展对象的功能，但是装饰模式可以提供比继承更多的灵活性。")]),t._v(" "),_("li",[t._v("可以通过一种动态的方式来扩展一个对象的功能，通过配置文件可以在运行时选择不同的装饰器，从而实现不同的行为。")]),t._v(" "),_("li",[t._v("通过使用不同的具体装饰类以及这些装饰类的排列组合，可以创造出很多不同行为的组合。可以使用多个具体装饰类来装饰同一对象，得到功能更为强大的对象。")]),t._v(" "),_("li",[t._v("具体构件类与具体装饰类可以独立变化，用户可以根据需要增加新的具体构件类和具体装饰类，在使用时再对其进行组合，原有代码无须改变，符合『开闭原则』。")])]),t._v(" "),_("h2",{attrs:{id:"缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),_("p",[t._v("装饰模式的缺点：")]),t._v(" "),_("ul",[_("li",[t._v("使用装饰模式进行系统设计时将产生很多小对象，这些对象的区别在于它们之间相互连接的方式有所不同，而不是它们的类或者属性值有所不同，同时还将产生很多具体装饰类。这些装饰类和小对象的产生将增加系统的复杂度，加大学习与理解的难度。")]),t._v(" "),_("li",[t._v("这种比继承更加灵活机动的特性，也同时意味着装饰模式比继承更加易于出错，排错也很困难，对于多次装饰的对象，调试时寻找错误可能需要逐级排查，较为繁琐。")])]),t._v(" "),_("h2",{attrs:{id:"适用环境"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#适用环境"}},[t._v("#")]),t._v(" 适用环境")]),t._v(" "),_("p",[t._v("在以下情况下可以使用装饰模式：")]),t._v(" "),_("ul",[_("li",[t._v("在不影响其他对象的情况下，以动态、透明的方式给单个对象添加职责。")]),t._v(" "),_("li",[t._v("需要动态地给一个对象增加功能，这些功能也可以动态地被撤销。")]),t._v(" "),_("li",[t._v("当不能采用继承的方式对系统进行扩充或者采用继承不利于系统扩展和维护时。不能采用继承的情况主要有两类：第一类是系统中存在大量独立的扩展，为支持每一种组合将产生大量的子类，使得子类数目呈爆炸性增长；第二类是因为类定义不能继承（如final类）。")])]),t._v(" "),_("h2",{attrs:{id:"模式扩展"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式扩展"}},[t._v("#")]),t._v(" 模式扩展")]),t._v(" "),_("p",[t._v("装饰模式的简化-需要注意的问题：")]),t._v(" "),_("ul",[_("li",[t._v("一个装饰类的接口必须与被装饰类的接口保持相同，对于客户端来说无论是装饰之前的对象还是装饰之后的对象都可以保持一致。")]),t._v(" "),_("li",[t._v('尽量保持具体构件类Component作为一个"轻"类，也就是说不要把太多的逻辑和和状态放在具体构件类中，可以通过装饰类对其进行扩展。')]),t._v(" "),_("li",[t._v("如果只有一个具体构件类而没有抽象构件类，那么抽象装饰类可以作为具体构件类的直接子类。")])])])}),[],!1,null,null,null);v.default=r.exports}}]);