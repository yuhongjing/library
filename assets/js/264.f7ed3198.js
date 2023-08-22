(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{634:function(v,_,t){"use strict";t.r(_);var a=t(28),r=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"中介者模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中介者模式"}},[v._v("#")]),v._v(" 中介者模式")]),v._v(" "),t("p",[t("code",[v._v("中介者模式")]),v._v("(Mediator Pattern)，又称"),t("code",[v._v("调停者模式")]),v._v("，属于对象行为型模式。")]),v._v(" "),t("h2",{attrs:{id:"模式动机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模式动机"}},[v._v("#")]),v._v(" 模式动机")]),v._v(" "),t("p",[v._v("在用户与用户直接聊天的设计方案中，用户对象之间存在很强的关联性，将导致系统出现如下问题：")]),v._v(" "),t("ul",[t("li",[v._v("系统结构复杂：对象之间存在大量的相互关联和调用，若有一个对象发生变化，则需要跟踪和该对象关联的其他所有对象，并进行适当处理。")]),v._v(" "),t("li",[v._v("对象可重用性差：由于一个对象和其他对象具有很强的关联，若没有其他对象的支持，一个对象很难被另一个系统或模块重用，这些对象表现出来更像一个不可分隔的整体，职责较为混乱。")]),v._v(" "),t("li",[v._v("系统扩展性低：增加一个对象需要在原有相关对象上增加引用，增加新的引用关系也需要调整原有对象，系统耦合度很高，对象操作很不灵活，扩展性差。")])]),v._v(" "),t("p",[v._v('在面向对象的软件设计与开发过程中，根据"单一职责原则"，我们应该尽量将对象细化，使其只负责或呈现单一的职责。')]),v._v(" "),t("p",[v._v("对于一个模块，可能由很多对象构成，而且这些对象之间可能存在相互的引用，为了减少对象两两之间复杂的引用关系，使之成为一个松耦合的系统，我们需要使用中介者模式，这就是中介者模式的模式动机。")]),v._v(" "),t("h2",{attrs:{id:"模式定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模式定义"}},[v._v("#")]),v._v(" 模式定义")]),v._v(" "),t("p",[v._v("用一个中介对象来封装一系列的对象交互，中介者使各对象不需要显式地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。")]),v._v(" "),t("h2",{attrs:{id:"模式结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模式结构"}},[v._v("#")]),v._v(" 模式结构")]),v._v(" "),t("p",[v._v("中介者模式包含如下角色：")]),v._v(" "),t("ul",[t("li",[v._v("Mediator：抽象中介者")]),v._v(" "),t("li",[v._v("ConcreteMediator：具体中介者")]),v._v(" "),t("li",[v._v("Colleague：抽象同事类")]),v._v(" "),t("li",[v._v("ConcreteColleague：具体同事类")])]),v._v(" "),t("h2",{attrs:{id:"代码实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[v._v("#")]),v._v(" 代码实现")]),v._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/knowledge/design/行为型模式/中介者模式/PHP实现.html"}},[v._v("PHP实现")])],1),v._v(" "),t("li",[t("RouterLink",{attrs:{to:"/knowledge/design/行为型模式/中介者模式/JS实现.html"}},[v._v("JS实现")])],1)]),v._v(" "),t("h2",{attrs:{id:"模式分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模式分析"}},[v._v("#")]),v._v(" 模式分析")]),v._v(" "),t("p",[v._v("中介者模式可以使对象之间的关系数量急剧减少。")]),v._v(" "),t("p",[v._v("中介者承担两方面的职责：")]),v._v(" "),t("ul",[t("li",[v._v("中转作用(结构性)：通过中介者提供的中转作用，各个同事对象就不再需要显式引用其他同事，当需要和其他同事进行通信时，通过中介者即可。该中转作用属于中介者在结构上的支持。")]),v._v(" "),t("li",[v._v("协调作用(行为性)：中介者可以更进一步的对同事之间的关系进行封装，同事可以一致地和中介者进行交互，而不需要指明中介者需要具体怎么做，中介者根据封装在自身内部的协调逻辑，对同事的请求进行进一步处理，将同事成员之间的关系行为进行分离和封装。该协调作用属于中介者在行为上的支持。")])]),v._v(" "),t("h2",{attrs:{id:"优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[v._v("#")]),v._v(" 优点")]),v._v(" "),t("p",[v._v("中介者模式的优点")]),v._v(" "),t("ul",[t("li",[v._v("简化了对象之间的交互。")]),v._v(" "),t("li",[v._v("将各同事解耦。")]),v._v(" "),t("li",[v._v("减少子类生成。")]),v._v(" "),t("li",[v._v("可以简化各同事类的设计和实现。")])]),v._v(" "),t("h2",{attrs:{id:"缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[v._v("#")]),v._v(" 缺点")]),v._v(" "),t("p",[v._v("中介者模式的缺点")]),v._v(" "),t("ul",[t("li",[v._v("在具体中介者类中包含了同事之间的交互细节，可能会导致具体中介者类非常复杂，使得系统难以维护。")])]),v._v(" "),t("h2",{attrs:{id:"适用环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#适用环境"}},[v._v("#")]),v._v(" 适用环境")]),v._v(" "),t("p",[v._v("在以下情况下可以使用中介者模式：")]),v._v(" "),t("ul",[t("li",[v._v("系统中对象之间存在复杂的引用关系，产生的相互依赖关系结构混乱且难以理解。")]),v._v(" "),t("li",[v._v("一个对象由于引用了其他很多对象并且直接和这些对象通信，导致难以复用该对象。")]),v._v(" "),t("li",[v._v("想通过一个中间类来封装多个类中的行为，而又不想生成太多的子类。可以通过引入中介者类来实现，在中介者中定义对象。")]),v._v(" "),t("li",[v._v("交互的公共行为，如果需要改变行为则可以增加新的中介者类。")])]),v._v(" "),t("h2",{attrs:{id:"模式应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模式应用"}},[v._v("#")]),v._v(" 模式应用")]),v._v(" "),t("p",[v._v("MVC架构中控制器")]),v._v(" "),t("p",[v._v("Controller作为一种中介者，它负责控制视图对象View和模型对象Model之间的交互。如在Struts中，Action就可以作为JSP页面与业务对象之间的中介者。")]),v._v(" "),t("h2",{attrs:{id:"模式扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模式扩展"}},[v._v("#")]),v._v(" 模式扩展")]),v._v(" "),t("p",[v._v("中介者模式与迪米特法则")]),v._v(" "),t("ul",[t("li",[v._v("在中介者模式中，通过创造出一个中介者对象，将系统中有关的对象所引用的其他对象数目减少到最少，使得一个对象与其同事之间的相互作用被这个对象与中介者对象之间的相互作用所取代。因此，中介者模式就是迪米特法则的一个典型应用。")])]),v._v(" "),t("p",[v._v("中介者模式与GUI开发")]),v._v(" "),t("ul",[t("li",[v._v("中介者模式可以方便地应用于图形界面(GUI)开发中，在比较复杂的界面中可能存在多个界面组件之间的交互关系。对于这些复杂的交互关系，有时候我们可以引入一个中介者类，将这些交互的组件作为具体的同事类，将它们之间的引用和控制关系交由中介者负责，在一定程度上简化系统的交互，这也是中介者模式的常见应用之一。")])])])}),[],!1,null,null,null);_.default=r.exports}}]);