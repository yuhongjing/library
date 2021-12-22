(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{469:function(t,v,_){"use strict";_.r(v);var a=_(28),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"享元模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#享元模式"}},[t._v("#")]),t._v(" 享元模式")]),t._v(" "),_("p",[_("code",[t._v("享元模式")]),t._v("(Flyweight Pattern)，又称"),_("code",[t._v("轻量级模式")]),t._v("。")]),t._v(" "),_("p",[t._v("享元模式属于"),_("code",[t._v("对象结构型模式")]),t._v("。")]),t._v(" "),_("h2",{attrs:{id:"模式动机"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式动机"}},[t._v("#")]),t._v(" 模式动机")]),t._v(" "),_("p",[t._v("面向对象技术可以很好地解决一些灵活性或可扩展性问题，但在很多情况下需要在系统中增加类和对象的个数。当对象数量太多时，将导致运行代价过高，带来性能下降等问题。")]),t._v(" "),_("ul",[_("li",[t._v("享元模式正是为了解决这一类问题而诞生的。享元模式通过共享技术实现相同或相似对象的重用。")]),t._v(" "),_("li",[t._v("在享元模式中可以共享的相同内容称为内部状态(IntrinsicState)，而那些需要外部环境来设置的不能共享的内容称为外部状态(Extrinsic State)，由于区分了内部状态和外部状态，因此可以通过设置不同的外部状态使得相同的对象可以具有一些不同的特征，而相同的内部状态是可以共享的。")]),t._v(" "),_("li",[t._v("在享元模式中通常会出现工厂模式，需要创建一个享元工厂来负责维护一个享元池(Flyweight Pool)用于存储具有相同内部状态的享元对象。")]),t._v(" "),_("li",[t._v("在享元模式中共享的是享元对象的内部状态，外部状态需要通过环境来设置。在实际使用中，能够共享的内部状态是有限的，因此享元对象一般都设计为较小的对象，它所包含的内部状态较少，这种对象也称为细粒度对象。享元模式的目的就是使用共享技术来实现大量细粒度对象的复用。")])]),t._v(" "),_("h2",{attrs:{id:"模式定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式定义"}},[t._v("#")]),t._v(" 模式定义")]),t._v(" "),_("p",[t._v("运用共享技术有效地支持大量细粒度对象的复用。系统只使用少量的对象，而这些对象很相似，状态变化很小，可以实现对象的多次复用。享元模式要求能够共享的对象必须是细粒度对象。")]),t._v(" "),_("h2",{attrs:{id:"模式结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式结构"}},[t._v("#")]),t._v(" 模式结构")]),t._v(" "),_("p",[t._v("享元模式包含如下角色：")]),t._v(" "),_("ul",[_("li",[t._v("Flyweight：抽象享元类")]),t._v(" "),_("li",[t._v("ConcreteFlyweight：具体享元类")]),t._v(" "),_("li",[t._v("UnsharedConcreteFlyweight：非共享具体享元类")]),t._v(" "),_("li",[t._v("FlyweightFactory：享元工厂类")])]),t._v(" "),_("h2",{attrs:{id:"代码实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[t._v("#")]),t._v(" 代码实现")]),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/knowledge/design/结构型模式/享元模式/PHP实现.html"}},[t._v("PHP实现")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/knowledge/design/结构型模式/享元模式/JS实现.html"}},[t._v("JS实现")])],1)]),t._v(" "),_("h2",{attrs:{id:"模式分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式分析"}},[t._v("#")]),t._v(" 模式分析")]),t._v(" "),_("p",[t._v("享元模式是一个考虑系统性能的设计模式，通过使用享元模式可以节约内存空间，提高系统的性能。")]),t._v(" "),_("p",[t._v("享元模式的核心在于享元工厂类，享元工厂类的作用在于提供一个用于存储享元对象的享元池，用户需要对象时，首先从享元池中获取，如果享元池中不存在，则创建一个新的享元对象返回给用户，并在享元池中保存该新增对象。")]),t._v(" "),_("p",[t._v("享元模式以共享的方式高效地支持大量的细粒度对象，享元对象能做到共享的关键是区分内部状态(Internal State)和外部状态(External State)。")]),t._v(" "),_("ul",[_("li",[t._v("内部状态是存储在享元对象内部并且不会随环境改变而改变的状态，因此内部状态可以共享。")]),t._v(" "),_("li",[t._v("外部状态是随环境改变而改变的、不可以共享的状态。享元对象的外部状态必须由客户端保存，并在享元对象被创建之后，在需要使用的时候再传入到享元对象内部。一个外部状态与另一个外部状态之间是相互独立的。")])]),t._v(" "),_("h2",{attrs:{id:"优点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),_("p",[t._v("享元模式的优点")]),t._v(" "),_("ul",[_("li",[t._v("享元模式的优点在于它可以极大减少内存中对象的数量，使得相同对象或相似对象在内存中保存一份。")]),t._v(" "),_("li",[t._v("享元模式的外部状态相对独立，而且不会影响其内部状态，从而使得享元对象可以在不同环境中被共享。")])]),t._v(" "),_("h2",{attrs:{id:"缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),_("p",[t._v("享元模式的缺点")]),t._v(" "),_("ul",[_("li",[t._v("享元模式使得系统更加复杂，需要分离出内部状态和外部状态，这使得程序的逻辑复杂化。")]),t._v(" "),_("li",[t._v("为了使对象可以共享，享元模式需要将享元对象的状态外部化，而读取外部状态使得运行时间变长。")])]),t._v(" "),_("h2",{attrs:{id:"适用环境"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#适用环境"}},[t._v("#")]),t._v(" 适用环境")]),t._v(" "),_("p",[t._v("在以下情况下可以适用享元模式：")]),t._v(" "),_("ul",[_("li",[t._v("一个系统有大量相同或者相似的对象，由于这类对象的大量使用，造成内存的大量耗费。")]),t._v(" "),_("li",[t._v("对象的大部分状态都可以外部化，可以将这些外部状态传入对象中。")]),t._v(" "),_("li",[t._v("适用享元模式需要维护一个存储享元对象的享元池，而这需要耗费资源，因此，应当在多次重复使用享元对象时才值得适用享元模式。")])]),t._v(" "),_("h2",{attrs:{id:"模式应用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式应用"}},[t._v("#")]),t._v(" 模式应用")]),t._v(" "),_("p",[t._v("享元模式在编辑器软件中大量使用，如在一个文档中多次出现相同的图片，则只需要创建一个图片对象，通过在应用程序中设置该图片出现的位置，可以实现该图片在不同地方多次重复显示。")]),t._v(" "),_("h2",{attrs:{id:"模式扩展"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式扩展"}},[t._v("#")]),t._v(" 模式扩展")]),t._v(" "),_("p",[t._v("单纯享元模式和复合享元模式")]),t._v(" "),_("ul",[_("li",[t._v("单纯享元模式：在单纯享元模式中，所有的享元对象都是可以共享的，即所有抽象享元类的子类都可共享，不存在非共享具体享元类。")]),t._v(" "),_("li",[t._v("复合享元模式：将一些单纯享元使用组合模式加以组合，可以形成复合享元对象，这样的符合享元对象本身不能共享，但是它们可以分解成单纯享元对象，而后者则可以共享。")])]),t._v(" "),_("p",[t._v("享元模式与其他模式的联用")]),t._v(" "),_("ul",[_("li",[t._v("在享元模式的享元工厂类中通常提供一个静态的工厂方法用于返回享元对象，使用简单工厂模式来生成享元对象。")]),t._v(" "),_("li",[t._v("在一个系统中，通常只有唯一一个享元工厂，因此享元工厂类可以使用单例模式进行设计。")]),t._v(" "),_("li",[t._v("享元模式可以结合组合模式形成复合享元模式，统一对享元对象设置外部状态。")])])])}),[],!1,null,null,null);v.default=r.exports}}]);