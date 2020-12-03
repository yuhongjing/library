(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{477:function(t,v,_){"use strict";_.r(v);var a=_(27),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"备忘录模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#备忘录模式"}},[t._v("#")]),t._v(" 备忘录模式")]),t._v(" "),_("p",[_("code",[t._v("备忘录模式")]),t._v("(Memento Pattern)又叫做"),_("code",[t._v("快照模式")]),t._v("(Snapshot Pattern)或"),_("code",[t._v("Token模式")]),t._v("。")]),t._v(" "),_("p",[t._v("备忘录模式属于"),_("code",[t._v("对象行为型模式")]),t._v("。")]),t._v(" "),_("h2",{attrs:{id:"模式动机"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式动机"}},[t._v("#")]),t._v(" 模式动机")]),t._v(" "),_("p",[t._v('为了使软件的使用更加人性化，对于误操作，我们需要提供一种类似"后悔药"的机制，让软件系统可以回到误操作前的状态，因此需要保存用户每一次操作时系统的状态，一旦出现误操作，可以把存储的历史状态取出即可回到之前的状态。')]),t._v(" "),_("p",[t._v("现在大多数软件都有撤销(Undo)的功能，快捷键一般都是Ctrl+Z，目的就是为了解决这个后悔的问题。")]),t._v(" "),_("p",[t._v("在应用软件的开发过程中，很多时候我们都需要记录一个对象的内部状态。")]),t._v(" "),_("p",[t._v("在具体的实现过程中，为了允许用户取消不确定的操作或从错误中恢复过来，需要实现备份点和撤销机制，而要实现这些机制，必须事先将状态信息保存在某处，这样才能将对象恢复到它们原先的状态。")]),t._v(" "),_("p",[t._v("备忘录模式是一种给我们的软件提供后悔药的机制，通过它可以使系统恢复到某一特定的历史状态。")]),t._v(" "),_("h2",{attrs:{id:"模式定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式定义"}},[t._v("#")]),t._v(" 模式定义")]),t._v(" "),_("p",[t._v("在不破坏封装的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态，这样可以在以后将对象恢复到原先保存的状态。")]),t._v(" "),_("h2",{attrs:{id:"模式结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式结构"}},[t._v("#")]),t._v(" 模式结构")]),t._v(" "),_("p",[t._v("备忘录模式包含如下角色：")]),t._v(" "),_("ul",[_("li",[t._v("Originator：原发器")]),t._v(" "),_("li",[t._v("Memento：备忘录")]),t._v(" "),_("li",[t._v("Caretaker：负责人")])]),t._v(" "),_("h2",{attrs:{id:"代码实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[t._v("#")]),t._v(" 代码实现")]),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/knowledge/design/行为型模式/备忘录模式/PHP实现.html"}},[t._v("PHP实现")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/knowledge/design/行为型模式/备忘录模式/JS实现.html"}},[t._v("JS实现")])],1)]),t._v(" "),_("h2",{attrs:{id:"模式分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式分析"}},[t._v("#")]),t._v(" 模式分析")]),t._v(" "),_("p",[t._v("由于在备忘录中存储的是原发器的中间状态，因此需要防止原发器以外的其它对象访问备忘录。")]),t._v(" "),_("p",[t._v("备忘录对象通常封装了原发器的部分或所有的状态信息，而且这些状态不能被其它对象访问，也就是说不能在备忘录对象之外保存原发器状态，因为暴露其内部状态将违反封装的原则，可能有损系统的可靠性和可扩展性。")]),t._v(" "),_("p",[t._v("为了实现对备忘录对象的封装，需要对备忘录的调用进行控制：")]),t._v(" "),_("ul",[_("li",[t._v("对于原发器而言，它可以调用备忘录的所有信息，允许原发器访问返回到之前状态所需的所有数据")]),t._v(" "),_("li",[t._v("对于负责人而言，它只负责备忘录的保存并将备忘录传递给其它对象")]),t._v(" "),_("li",[t._v("对于其它对象而言，它只需要从负责人处取出备忘录对象并将原发器对象的状态恢复，而无须关心备忘录的保存细节")])]),t._v(" "),_("p",[t._v("理想的情况是只允许生成该备忘录的那个原发器访问备忘录的内部状态。")]),t._v(" "),_("h2",{attrs:{id:"优点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),_("p",[t._v("备忘录模式的优点：")]),t._v(" "),_("ul",[_("li",[t._v("提供了一种状态恢复的实现机制，使得用户可以方便地回到一个特定的历史步骤，当新的状态无效或者存在问题时，可以使用先前存储起来的备忘录将状态复原。")]),t._v(" "),_("li",[t._v("实现了信息的封装，一个备忘录对象是一种原发器对象的表示，不会被其它代码改动，这种模式简化了原发器对象，备忘录只保存原发器的状态，采用堆栈来存储备忘录对象可以实现多次撤销操作，可以通过在负责人中定义集合对象来存储多个备忘录。")])]),t._v(" "),_("h2",{attrs:{id:"缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),_("p",[t._v("备忘录模式的缺点：")]),t._v(" "),_("ul",[_("li",[t._v("资源消耗过大，如果类的成员变量太多，就不可避免占用大量的内存，而每保存一次对象的状态都需要消耗内存资源，如果知道这一点，大家就容易理解为什么一些提供了撤销功能的软件在运行时所需的内存和硬盘空间比较大了。")])]),t._v(" "),_("h2",{attrs:{id:"适用环境"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#适用环境"}},[t._v("#")]),t._v(" 适用环境")]),t._v(" "),_("p",[t._v("在以下情况可以使用备忘录模式：")]),t._v(" "),_("ul",[_("li",[t._v("保存一个对象在某一个时刻的状态或部分状态，这样以后需要时它能够恢复到先前的状态。")]),t._v(" "),_("li",[t._v("如果用一个接口来让其它对象得到这些状态，将会暴露对象的实现细节并破坏对象的封装性，一个对象不希望外界直接访问其内部状态，通过负责人可以间接访问其内部状态。")])]),t._v(" "),_("h2",{attrs:{id:"模式扩展"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式扩展"}},[t._v("#")]),t._v(" 模式扩展")]),t._v(" "),_("h3",{attrs:{id:"备忘录的封装性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#备忘录的封装性"}},[t._v("#")]),t._v(" 备忘录的封装性")]),t._v(" "),_("ul",[_("li",[t._v("为了确保备忘录的封装性，除了原发器外，其它类是不能也不应该访问备忘录类的，在实际开发中，原发器与备忘录之间的关系是非常特殊的，它们要分享信息而不让其它类知道，实现的方式因编程语言的不同而不同。")]),t._v(" "),_("li",[t._v("C++可以用friend关键字，使原发器类和备忘录类成为友元类，互相之间可以访问对象的一些私有的属性。")]),t._v(" "),_("li",[t._v("在Java语言中可以将两个类放在一个包中，使它们之间满足默认的包内可见性，也可以将备忘录类作为原发器类的内部类，使得只有原发器才可以访问备忘录中的数据，其它对象都无法使用备忘录中的数据。")])]),t._v(" "),_("h3",{attrs:{id:"多备份实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#多备份实现"}},[t._v("#")]),t._v(" 多备份实现")]),t._v(" "),_("ul",[_("li",[t._v("在负责人中定义一个集合对象来存储多个状态，而且可以方便地返回到某一历史状态。")]),t._v(" "),_("li",[t._v("在备份对象时可以做一些记号，这些记号称为检查点(Check Point)。在使用HashMap等实现时可以使用Key来设置检查点。")])])])}),[],!1,null,null,null);v.default=r.exports}}]);