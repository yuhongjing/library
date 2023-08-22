(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{625:function(t,v,_){"use strict";_.r(v);var a=_(28),s=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"组合模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#组合模式"}},[t._v("#")]),t._v(" 组合模式")]),t._v(" "),_("p",[_("code",[t._v("组合模式")]),t._v("(Composite Pattern)也叫"),_("code",[t._v("合成模式")]),t._v("或"),_("code",[t._v("部分整体模式")]),t._v("。")]),t._v(" "),_("p",[t._v("组合模式属于"),_("code",[t._v("对象结构型模式")]),t._v("。")]),t._v(" "),_("h2",{attrs:{id:"模式动机"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式动机"}},[t._v("#")]),t._v(" 模式动机")]),t._v(" "),_("p",[t._v("对于树型结构，当容器对象（如文件夹）的某一个方法被调用时，将遍历整个树型结构，寻找也包含这个方法的成员对象（可以是容器对象，也可以是叶子对象，如子文件夹和文件）并调用执行。（递归调用）")]),t._v(" "),_("p",[t._v("由于容器对象和叶子对象在功能上的区别，在使用这些对象的客户端代码中必须有区别地对待容器对象和叶子对象，而对于这些对象的区别对待将会使得程序非常复杂。")]),t._v(" "),_("p",[t._v("组合模式描述了如何将容器对象和叶子对象进行递归组合，使得用户在使用时无须对它们进行区分，可以一致地对待容器对象和叶子对象，这就是组合模式的模式动机。")]),t._v(" "),_("h2",{attrs:{id:"模式定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式定义"}},[t._v("#")]),t._v(" 模式定义")]),t._v(" "),_("p",[t._v('组合多个对象形成的树形结构以表示"整体—部分"的结构层次。组合模式对单个对象（即叶子对象）和组合对象（即容器对象）的使用具有一致性。')]),t._v(" "),_("p",[t._v("组合模式将对象组织到树结构中，可以用来描述整体与部分的关系。")]),t._v(" "),_("h2",{attrs:{id:"模式结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式结构"}},[t._v("#")]),t._v(" 模式结构")]),t._v(" "),_("p",[t._v("组合模式包含如下角色：")]),t._v(" "),_("ul",[_("li",[t._v("Component: 抽象构件（接口或抽象类）")]),t._v(" "),_("li",[t._v("Leaf: 叶子构件")]),t._v(" "),_("li",[t._v("Composite: 容器构件")]),t._v(" "),_("li",[t._v("Client: 客户类")])]),t._v(" "),_("h2",{attrs:{id:"代码实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[t._v("#")]),t._v(" 代码实现")]),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/knowledge/design/结构型模式/组合模式/PHP实现.html"}},[t._v("PHP实现")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/knowledge/design/结构型模式/组合模式/JS实现.html"}},[t._v("JS实现")])],1)]),t._v(" "),_("h2",{attrs:{id:"优点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),_("ul",[_("li",[t._v("使客户端调用简单，客户端可以一致的使用组合结构或其中单个对象，用户就不必关心自己处理的是单个对象还是整个组合结构，这就简化了客户端代码。")]),t._v(" "),_("li",[t._v("定义了包含叶子对象和容器对象的类层次结构，叶子对象可以被组合成更复杂的容器对象，而这个容器对象又可以被组合，这样不断地递归下去。客户代码中，任何用到叶子对象的地方都可以使用容器对象。")]),t._v(" "),_("li",[t._v("客户端不必因为加入了新的对象构件而更改代码。")])]),t._v(" "),_("h2",{attrs:{id:"缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),_("ul",[_("li",[t._v("组合模式的缺陷是使得设计变得更加抽象，对象的商业规则如果很复杂，则实现组合模式比较困难。")]),t._v(" "),_("li",[t._v("此外，不是所有的方法都与叶子构件子类都由关联")]),t._v(" "),_("li",[t._v("有时候我们希望一个容器中只能有某些特定的构件。使用组合模式时，不能依赖类型系统来施加这些约束，因为它们都来自于相同的抽象层，在这种情况下，必须通过在运行时进行类型检查来实现。")])]),t._v(" "),_("h2",{attrs:{id:"适用环境"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#适用环境"}},[t._v("#")]),t._v(" 适用环境")]),t._v(" "),_("ul",[_("li",[t._v("需要表示一个对象整体或部分层次。")]),t._v(" "),_("li",[t._v("想让客户能够忽略不同对象层次的变化。")]),t._v(" "),_("li",[t._v("对象的结构是动态的并且复杂程度不一样，但客户需要一致地处理它们。")])]),t._v(" "),_("h2",{attrs:{id:"模式应用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式应用"}},[t._v("#")]),t._v(" 模式应用")]),t._v(" "),_("ul",[_("li",[t._v("XML文档解析")]),t._v(" "),_("li",[t._v("操作系统中的目录结构是一个树形结构，因此在对文件和文件夹进行操作时可以应用组合模式。")])])])}),[],!1,null,null,null);v.default=s.exports}}]);