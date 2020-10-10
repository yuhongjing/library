(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{480:function(v,_,t){"use strict";t.r(_);var a=t(27),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"观察者模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#观察者模式"}},[v._v("#")]),v._v(" 观察者模式")]),v._v(" "),t("p",[t("code",[v._v("观察者模式")]),v._v("(Observer Pattern)，"),t("strong",[v._v("宏观")]),v._v("上又叫作：")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("发布-订阅模式")]),v._v("(Publish/Subscribe)")]),v._v(" "),t("li",[t("code",[v._v("模型-视图")]),v._v("(Model/View)")]),v._v(" "),t("li",[t("code",[v._v("源-监听器")]),v._v("(Source/Listener)")]),v._v(" "),t("li",[t("code",[v._v("从属者")]),v._v("(Dependents)")])]),v._v(" "),t("p",[v._v("观察者模式属于"),t("code",[v._v("对象行为型模式")]),v._v("。")]),v._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[v._v("NOTE")]),v._v(" "),t("p",[v._v("虽然很多情况下，观察者模式等同于以上几种叫法。")]),v._v(" "),t("p",[v._v("但它们并不完全一致，例如"),t("code",[v._v("发布-订阅模式")]),v._v("中：")]),v._v(" "),t("p",[v._v("除了发布类和订阅类，还多了一个信息中介类，由它来串联发布类和订阅类。")]),v._v(" "),t("p",[v._v("所以发布类和订阅类并不直接通信，互相不知道彼此存在，耦合程度更低。")])]),v._v(" "),t("h2",{attrs:{id:"模式动机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模式动机"}},[v._v("#")]),v._v(" 模式动机")]),v._v(" "),t("p",[v._v("建立一种对象与对象之间的依赖关系，一个对象发生改变时将自动通知其它对象，其它对象将相应做出反应。在此，发生改变的对象称为观察目标，而被通知的对象成为观察者，一个观察目标可以对应多个观察者，而且这些观察者之间没有互相联系，可以根据需要增加和删除观察者，使得系统更易于扩展，这就是观察者模式的模式动机。")]),v._v(" "),t("p",[v._v("给一个生活中的观察者模式例子：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20191231161113.png",alt:""}})]),v._v(" "),t("h2",{attrs:{id:"模式定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模式定义"}},[v._v("#")]),v._v(" 模式定义")]),v._v(" "),t("p",[v._v("定义对象间的一种一对多依赖关系，使得每当一个对象状态发生改变时，其相关依赖对象皆得到通知并被自动更新。")]),v._v(" "),t("h2",{attrs:{id:"模式结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模式结构"}},[v._v("#")]),v._v(" 模式结构")]),v._v(" "),t("p",[v._v("观察者模式包含如下角色：")]),v._v(" "),t("ul",[t("li",[v._v("Subject：目标")]),v._v(" "),t("li",[v._v("ConcreateSubject：具体目标")]),v._v(" "),t("li",[v._v("Observer：观察者")]),v._v(" "),t("li",[v._v("ConcreateObserver：具体观察者")])]),v._v(" "),t("h2",{attrs:{id:"代码实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[v._v("#")]),v._v(" 代码实现")]),v._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/knowledge/design/行为型模式/观察者模式/PHP实现.html"}},[v._v("PHP实现")])],1),v._v(" "),t("li",[t("RouterLink",{attrs:{to:"/knowledge/design/行为型模式/观察者模式/JS实现.html"}},[v._v("JS实现")])],1)]),v._v(" "),t("h2",{attrs:{id:"模式分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模式分析"}},[v._v("#")]),v._v(" 模式分析")]),v._v(" "),t("ul",[t("li",[v._v("观察者模式描述了如何建立对象与对象之间的依赖关系，如何构造满足这种需求的系统。")]),v._v(" "),t("li",[v._v("这一模式中的关键对象是观察目标与观察者，一个目标可以有任意数目的与之相依赖的观察者，一旦目标的状态发生改变，所有的观察者都将得到通知。")]),v._v(" "),t("li",[v._v("作为对这个通知的响应，每个观察者都将即时更新自己的状态，以与目标状态同步，这种交互也被称为发布-订阅(publish/subscribe)。目标是通知的发布者，它发出通知时并不需要知道谁是它的观察者，可以有任意数目的观察者订阅它并接受通知。")])]),v._v(" "),t("h2",{attrs:{id:"优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[v._v("#")]),v._v(" 优点")]),v._v(" "),t("p",[v._v("观察者模式的优点：")]),v._v(" "),t("ul",[t("li",[v._v("观察者模式可以实现表示层和数据逻辑层的分离，并定义了稳定的消息更新传递机制，抽象了新接口，使得可以有各种各样不同的表示层作为具体观察者角色。")]),v._v(" "),t("li",[v._v("观察者模式在观察目标和观察者之间建立一个抽象的耦合。")]),v._v(" "),t("li",[v._v("观察者模式支持广播通信。")]),v._v(" "),t("li",[v._v('观察者模式符合"开闭原则"的要求。')])]),v._v(" "),t("h2",{attrs:{id:"缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[v._v("#")]),v._v(" 缺点")]),v._v(" "),t("p",[v._v("观察者模式的缺点：")]),v._v(" "),t("ul",[t("li",[v._v("如果一个观察目标对象有很多直接和间接的观察者的话，将所有的观察者都通知到会花费很多时间。")]),v._v(" "),t("li",[v._v("如果在观察者和观察目标之间有循环依赖的话，观察目标会触发它们之间进行循环调用，可能导致系统崩溃。")]),v._v(" "),t("li",[v._v("观察者模式没有相应的机制让观察者知道所观察的目标对象是怎么发生变化的，而仅仅只是知道观察目标发生了变化。")])]),v._v(" "),t("h2",{attrs:{id:"适用环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#适用环境"}},[v._v("#")]),v._v(" 适用环境")]),v._v(" "),t("p",[v._v("在以下情况下可以使用观察者模式：")]),v._v(" "),t("ul",[t("li",[v._v("一个抽象模型有两个方面，其中一个方面依赖于另一个方面。将这些方面封装在独立的对象中使它们可以各自独立地改变和复用。")]),v._v(" "),t("li",[v._v("一个对象的改变将导致其它一个或多个对象也发生改变，而不知道具体有多少对象将发生改变，可以降低对象之间的耦合度。")]),v._v(" "),t("li",[v._v("一个对象必须通知其它对象，而并不知道这些对象是谁。")]),v._v(" "),t("li",[v._v("需要在系统中创建一个触发链，A对象的行为将影响B对象，B对象的行为将影响C对象......，可以使用观察者模式创建一种链式触发机制。")])]),v._v(" "),t("h2",{attrs:{id:"模式应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模式应用"}},[v._v("#")]),v._v(" 模式应用")]),v._v(" "),t("p",[v._v("观察者模式在软件开发中应用非常广泛。")]),v._v(" "),t("ul",[t("li",[v._v("某电子商务网站可以在执行发送操作之后给多个用户发送商品打折信息。")]),v._v(" "),t("li",[v._v("某团队战斗游戏中某队友牺牲将给所有成员提示。")])]),v._v(" "),t("p",[v._v("凡是涉及到一对一或一对多的对象交互场景都可以使用观察者模式。")]),v._v(" "),t("h2",{attrs:{id:"模式扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模式扩展"}},[v._v("#")]),v._v(" 模式扩展")]),v._v(" "),t("p",[v._v("MVC模式")]),v._v(" "),t("p",[v._v("MVC模式是一种架构模式，它包含三个角色：模型(Model)，视图(View)和控制器(Controller)。观察者模式可以用来实现MVC模式，观察者模式中的观察目标就是MVC模式中的模型(Model)，而观察者就是MVC中的视图(View)，控制器(Controller)充当两者之间的中介者(Mediator)。当模型层的数据发生改变时，视图层将自动改变其显示内容。")])])}),[],!1,null,null,null);_.default=e.exports}}]);