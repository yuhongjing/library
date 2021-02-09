(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{504:function(t,v,_){"use strict";_.r(v);var a=_(27),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"访问者模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#访问者模式"}},[t._v("#")]),t._v(" 访问者模式")]),t._v(" "),_("p",[_("code",[t._v("访问者模式")]),t._v("(Visitor Pattern)属于对象行为型模式。")]),t._v(" "),_("h2",{attrs:{id:"模式动机"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式动机"}},[t._v("#")]),t._v(" 模式动机")]),t._v(" "),_("p",[t._v("访问者模式的目的是封装一些施加于某种数据结构元素之上的操作，一旦这些操作需要修改的话，接受这个操作的数据结构可以保持不变。为不同类型的元素提供多种访问操作方式，且可以在不修改原有系统的情况下增加新的操作方式，这就是访问者模式的模式动机。")]),t._v(" "),_("h2",{attrs:{id:"模式定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式定义"}},[t._v("#")]),t._v(" 模式定义")]),t._v(" "),_("p",[t._v("提供一个作用于某对象结构中的各元素的操作表示，它使我们可以在不改变各元素的类的前提下定义作用于这些元素的新操作。")]),t._v(" "),_("h2",{attrs:{id:"模式结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式结构"}},[t._v("#")]),t._v(" 模式结构")]),t._v(" "),_("p",[t._v("访问者模式包含如下角色：")]),t._v(" "),_("ul",[_("li",[t._v("Vistor：抽象访问者")]),t._v(" "),_("li",[t._v("ConcreteVisitor：具体访问者")]),t._v(" "),_("li",[t._v("Element：抽象元素")]),t._v(" "),_("li",[t._v("ConcreteElement：具体元素")]),t._v(" "),_("li",[t._v("ObjectStructure：对象结构")])]),t._v(" "),_("h2",{attrs:{id:"代码实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[t._v("#")]),t._v(" 代码实现")]),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/knowledge/design/行为型模式/访问者模式/PHP实现.html"}},[t._v("PHP实现")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/knowledge/design/行为型模式/访问者模式/JS实现.html"}},[t._v("JS实现")])],1)]),t._v(" "),_("h2",{attrs:{id:"模式分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式分析"}},[t._v("#")]),t._v(" 模式分析")]),t._v(" "),_("p",[t._v("访问者模式中对象结构存储了不同类型的元素对象，以供不同的访问者访问。访问者模式包括两个层次结构：")]),t._v(" "),_("ul",[_("li",[t._v("访问者层次结构，提供了抽象访问者和具体访问者。")]),t._v(" "),_("li",[t._v("元素层次结构，提供了抽象元素和具体元素。")])]),t._v(" "),_("p",[t._v("相同的访问者可以以不同的方式访问不同的元素，相同的元素可以接受不同访问者以不同访问方式访问。在访问者模式中，增加新的访问者无须修改原有系统，系统具有较好的可扩展性。")]),t._v(" "),_("p",[t._v("由于访问者模式的使用条件较为苛刻，本身结构较为复杂，因此在实际应用中使用频率不是特别高。当系统中存在一个较为复杂的对象结构，且不同访问者对其所采取的操作也不相同时，可以考虑使用访问者模式进行设计。")]),t._v(" "),_("h2",{attrs:{id:"优点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),_("p",[t._v("访问者模式的优点")]),t._v(" "),_("ul",[_("li",[t._v("增加新的访问操作很方便。使用访问者模式，增加新的访问操作就意味着增加一个新的具体访问者类，实现简单，无须修改源代码，符合『开闭原则』。")]),t._v(" "),_("li",[t._v("将有关元素对象的访问行为集中到一个访问者对象中，而不是分散在一个个的元素类中。类的职责更加清晰，有利于对象结构中元素对象的复用，相同的对象结构可以拱多个不同的访问者访问。")]),t._v(" "),_("li",[t._v("让用户能够在不修改现有元素类层次结构的情况下，定义作用于该层次结构的操作。")])]),t._v(" "),_("h2",{attrs:{id:"缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),_("p",[t._v("访问者模式的缺点")]),t._v(" "),_("ul",[_("li",[t._v("增加新的元素类很困难。在访问者模式中，每增加一个新的元素类都意味着要在抽象访问者角色中增加一个新的抽象操作，并在每一个具体访问者类中增加相应的具体操作，这违背了『开闭原则』。")]),t._v(" "),_("li",[t._v("破坏封装。访问者模式要求访问者对象访问并调用每一个元素对象的操作，这意味着元素对象有时候必须暴露一些自己的内部操作和内部状态，否则无法供访问者访问。")])]),t._v(" "),_("h2",{attrs:{id:"适用环境"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#适用环境"}},[t._v("#")]),t._v(" 适用环境")]),t._v(" "),_("p",[t._v("在以下情况下可以使用访问者模式：")]),t._v(" "),_("ul",[_("li",[t._v("一个对象结构包含多个类型的对象，希望对这些对象实施一些依赖其具体类型的操作。在访问者中针对每一种具体的类型都提供了一个访问操作，不同类型的对象可以有不同的访问操作。")]),t._v(" "),_("li",[t._v("需要对一个对象结构中的对象进行很多不同的并且不相关的操作，而需要避免让这些操作『污染』这些对象的类，也不希望在增加新操作时修改这些类。访问者模式使得我们可以将相关的访问操作集中起来定义在访问者类中，对象结构可以被多个不同的访问者类所使用，将对象本身与对象的访问操作分离。")]),t._v(" "),_("li",[t._v("对象结构中对象对应的类很少改变，但经常需要在此对象结构上定义新的操作。")])]),t._v(" "),_("h2",{attrs:{id:"模式扩展"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式扩展"}},[t._v("#")]),t._v(" 模式扩展")]),t._v(" "),_("h3",{attrs:{id:"访问者模式与组合模式联用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#访问者模式与组合模式联用"}},[t._v("#")]),t._v(" 访问者模式与组合模式联用")]),t._v(" "),_("p",[t._v("在访问者模式中，包含一个用于存储元素对象集合的对象结构，我们通常可以使用迭代器来遍历对象结构，同时具体元素之间可以存在整体与部分关系，有些元素作为容器对象，有些元素作为成员对象，可以使用组合模式来组织元素。")])])}),[],!1,null,null,null);v.default=r.exports}}]);