(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{457:function(v,_,t){"use strict";t.r(_);var a=t(27),r=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"桥接模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#桥接模式"}},[v._v("#")]),v._v(" 桥接模式")]),v._v(" "),t("p",[t("code",[v._v("桥接模式")]),v._v("(Bridge Pattern)也叫"),t("code",[v._v("柄体模式")]),v._v("(Handle and Body)或"),t("code",[v._v("接口模式")]),v._v("(Interface)。")]),v._v(" "),t("p",[v._v("桥接模式属于"),t("code",[v._v("对象结构型模式")]),v._v("。")]),v._v(" "),t("h2",{attrs:{id:"模式动机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模式动机"}},[v._v("#")]),v._v(" 模式动机")]),v._v(" "),t("p",[v._v("设想如果要绘制矩形、圆形、椭圆、正方形，我们至少需要4个形状类，但是如果绘制的图形需要具有不同的颜色，如红色、绿色、蓝色等，此时至少有如下两种设计方案：")]),v._v(" "),t("ul",[t("li",[v._v("为每一种形状都提供一套各种颜色的版本。")]),v._v(" "),t("li",[v._v("根据实际需求对形状和颜色进行组合。")])]),v._v(" "),t("p",[v._v("对于有两个变化维度(即两个变化的原因)的系统，采用方案二来进行设计系统中类的个数更少，且系统扩展更为方便。设计方案二即是桥接模式的应用。桥接模式将继承关系转换为关联关系，从而降低了类与类之间的耦合，减少了代码编写量。")]),v._v(" "),t("h2",{attrs:{id:"模式定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模式定义"}},[v._v("#")]),v._v(" 模式定义")]),v._v(" "),t("p",[v._v("将抽象部分与它的实现部分分离，使它们都可以独立地变化。")]),v._v(" "),t("h2",{attrs:{id:"模式结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模式结构"}},[v._v("#")]),v._v(" 模式结构")]),v._v(" "),t("p",[v._v("桥接模式包含如下角色：")]),v._v(" "),t("ul",[t("li",[v._v("Abstraction：抽象类")]),v._v(" "),t("li",[v._v("RefinedAbstraction：扩充抽象类")]),v._v(" "),t("li",[v._v("Implementor：实现类接口")]),v._v(" "),t("li",[v._v("ConcreteImplementor：具体实现类")])]),v._v(" "),t("h2",{attrs:{id:"代码实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[v._v("#")]),v._v(" 代码实现")]),v._v(" "),t("ul",[t("li",[t("p",[t("RouterLink",{attrs:{to:"/knowledge/design/结构型模式/桥接模式/PHP实现.html"}},[v._v("PHP实现")])],1)]),v._v(" "),t("li",[t("p",[t("RouterLink",{attrs:{to:"/knowledge/design/结构型模式/桥接模式/JS实现.html"}},[v._v("JS实现")])],1)])]),v._v(" "),t("h2",{attrs:{id:"模式分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模式分析"}},[v._v("#")]),v._v(" 模式分析")]),v._v(" "),t("p",[v._v("理解桥接模式，重点需要理解如何将抽象化(Abstraction)与实现化(Implementation)脱耦，使得二者可以独立地变化。")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("抽象化：")]),v._v(" "),t("p",[v._v("抽象化就是忽略一些信息，把不同的实体当作同样的实体对待。在面向对象中，将对象的共同性质抽取出来形成类的过程即为抽象化的过程。")])]),v._v(" "),t("li",[t("p",[v._v("实现化：")]),v._v(" "),t("p",[v._v("针对抽象化给出的具体实现，就是实现化，抽象化与实现化是一对互逆的概念，实现化产生的对象比抽象化更具体，是对抽象化事物的进一步具体化的产物。")])]),v._v(" "),t("li",[t("p",[v._v("脱耦：")]),v._v(" "),t("p",[v._v("脱耦就是将抽象化和实现化之间的耦合解脱开，或者说是将它们之间的强关联改换成弱关联，将两个角色之间的继承关系改为关联关系。桥接模式中的所谓脱耦，就是指在一个软件系统的抽象化和实现化之间使用关联关系（组合或者聚合关系）而不是继承关系，从而使两者可以相对独立地变化，这就是桥接模式的用意。")])])]),v._v(" "),t("h2",{attrs:{id:"实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[v._v("#")]),v._v(" 实例")]),v._v(" "),t("p",[v._v("如果需要开发一个跨平台视频播放器，可以在不同操作系统平台（如Windows、Linux、Unix等）上播放多种格式的视频文件，常见的视频格式包括MPEG、RMVB、AVI、WMV等。现使用桥接模式设计该播放器。")]),v._v(" "),t("h2",{attrs:{id:"优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[v._v("#")]),v._v(" 优点")]),v._v(" "),t("p",[v._v("桥接模式的优点:")]),v._v(" "),t("ul",[t("li",[v._v("分离抽象接口及其实现部分。")]),v._v(" "),t("li",[v._v("桥接模式有时类似于多继承方案，但是多继承方案违背了类的单一职责原则（即一个类只有一个变化的原因），复用性比较差，而且多继承结构中类的个数非常庞大，桥接模式是比多继承方案更好的解决方法。")]),v._v(" "),t("li",[v._v("桥接模式提高了系统的可扩充性，在两个变化维度中任意扩展一个维度，都不需要修改原有系统。")]),v._v(" "),t("li",[v._v("实现细节对客户透明，可以对用户隐藏实现细节。")])]),v._v(" "),t("h2",{attrs:{id:"缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[v._v("#")]),v._v(" 缺点")]),v._v(" "),t("p",[v._v("桥接模式的缺点:")]),v._v(" "),t("ul",[t("li",[v._v("桥接模式的引入会增加系统的理解与设计难度，由于聚合关联关系建立在抽象层，要求开发者针对抽象进行设计与编程。")]),v._v(" "),t("li",[v._v("桥接模式要求正确识别出系统中两个独立变化的维度，因此其使用范围具有一定的局限性。")])]),v._v(" "),t("h2",{attrs:{id:"适用环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#适用环境"}},[v._v("#")]),v._v(" 适用环境")]),v._v(" "),t("p",[v._v("在以下情况下可以使用桥接模式：")]),v._v(" "),t("ul",[t("li",[v._v("如果一个系统需要在构件的抽象化角色和具体化角色之间增加更多的灵活性，避免在两个层次之间建立静态的继承联系，通过桥接模式可以使它们在抽象层建立一个关联关系。")]),v._v(" "),t("li",[v._v("抽象化角色和实现化角色可以以继承的方式独立扩展而互不影响，在程序运行时可以动态将一个抽象化子类的对象和一个实现化子类的对象进行组合，即系统需要对抽象化角色和实现化角色进行动态耦合。")]),v._v(" "),t("li",[v._v("一个类存在两个独立变化的维度，且这两个维度都需要进行扩展。")]),v._v(" "),t("li",[v._v("虽然在系统中使用继承是没有问题的，但是由于抽象化角色和具体化角色需要独立变化，设计要求需要独立管理这两者。")]),v._v(" "),t("li",[v._v("对于那些不希望使用继承或因为多层次继承导致系统类的个数急剧增加的系统，桥接模式尤为适用。")])]),v._v(" "),t("h2",{attrs:{id:"模式应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模式应用"}},[v._v("#")]),v._v(" 模式应用")]),v._v(" "),t("p",[v._v("一个Java桌面软件总是带有所在操作系统的视感(LookAndFeel)，如果一个Java软件是在Unix系统上开发的，那么开发人员看到的是Motif用户界面的视感；在Windows上面使用这个系统的用户看到的是Windows用户界面的视感；而一个在Macintosh上面使用的用户看到的则是Macintosh用户界面的视感，Java语言是通过所谓的Peer架构做到这一点的。Java为AWT中的每一个GUI构件都提供了一个Peer构件，在AWT中的Peer架构就使用了桥接模式")]),v._v(" "),t("h2",{attrs:{id:"模式扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模式扩展"}},[v._v("#")]),v._v(" 模式扩展")]),v._v(" "),t("p",[v._v("适配器模式与桥接模式的联用:")]),v._v(" "),t("ul",[t("li",[v._v("桥接模式和适配器模式用于设计的不同阶段，桥接模式用于系统的初步设计，对于存在两个独立变化维度的类可以将其分为抽象化和实现化两个角色，使它们可以分别进行变化；而在初步设计完成之后，当发现系统与已有类无法协同工作时，可以采用适配器模式。但有时候在设计初期也需要考虑适配器模式，特别是那些涉及到大量第三方应用接口的情况。")])])])}),[],!1,null,null,null);_.default=r.exports}}]);