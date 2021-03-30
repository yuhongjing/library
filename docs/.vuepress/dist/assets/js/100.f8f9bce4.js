(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{461:function(t,v,_){"use strict";_.r(v);var a=_(27),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"代理模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#代理模式"}},[t._v("#")]),t._v(" 代理模式")]),t._v(" "),_("p",[_("code",[t._v("代理模式")]),t._v("(Proxy)属于"),_("code",[t._v("对象结构型模式")]),t._v("。")]),t._v(" "),_("h2",{attrs:{id:"模式动机"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式动机"}},[t._v("#")]),t._v(" 模式动机")]),t._v(" "),_("p",[t._v("在某些情况下，一个客户不想或者不能直接引用一个对象，此时可以通过一个称之为『代理』的第三者来实现间接引用。代理对象可以在客户端和目标对象之间起到中介的作用，并且可以通过代理对象去掉客户不能看到的内容和服务或者添加客户需要的额外服务。")]),t._v(" "),_("p",[t._v("通过引入一个新的对象（如小图片和远程代理的对象）来实现对真实对象的操作或者将新的对象作为真实对象的一个替身，这种实现机制即为代理模式，通过引入代理对象来间接访问一个对象，这就是代理模式的模式动机。")]),t._v(" "),_("h2",{attrs:{id:"模式定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式定义"}},[t._v("#")]),t._v(" 模式定义")]),t._v(" "),_("p",[t._v("给某一个对象提供一个代理，并由代理对象控制对原对象的引用。")]),t._v(" "),_("h2",{attrs:{id:"模式结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式结构"}},[t._v("#")]),t._v(" 模式结构")]),t._v(" "),_("p",[t._v("代理模式包含如下角色：")]),t._v(" "),_("ul",[_("li",[t._v("Subject：抽象主题角色")]),t._v(" "),_("li",[t._v("Proxy：代理主题角色")]),t._v(" "),_("li",[t._v("RealSubject：真实主题角色")])]),t._v(" "),_("h2",{attrs:{id:"代码实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[t._v("#")]),t._v(" 代码实现")]),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/knowledge/design/结构型模式/代理模式/PHP实现.html"}},[t._v("PHP实现")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/knowledge/design/结构型模式/代理模式/JS实现.html"}},[t._v("JS实现")])],1)]),t._v(" "),_("h2",{attrs:{id:"优点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),_("p",[t._v("代理模式的优点：")]),t._v(" "),_("ul",[_("li",[t._v("代理模式能够协调调用者和被调用者，在一定程度上降低了系统的耦合性。")]),t._v(" "),_("li",[t._v("远程代理使得客户端可以访问在远程机器上的对象，远程机器可能具有更好的计算性能与处理速度，可以快速响应并处理客户端请求。")]),t._v(" "),_("li",[t._v("虚拟代理通过使用一个小对象来代表一个大对象，可以减少系统资源的消耗，对系统进行优化并提高运行速度。")]),t._v(" "),_("li",[t._v("保护代理可以控制对真实对象的使用权限。")])]),t._v(" "),_("h2",{attrs:{id:"缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),_("p",[t._v("代理模式的缺点：")]),t._v(" "),_("ul",[_("li",[t._v("由于在客户端和真实主题之间增加了代理对象，因此有些类型的代理模式可能会造成请求的处理速度变慢。")]),t._v(" "),_("li",[t._v("实现代理模式需要额外的工作，有些代理模式的实现非常复杂。")])]),t._v(" "),_("h2",{attrs:{id:"适用环境"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#适用环境"}},[t._v("#")]),t._v(" 适用环境")]),t._v(" "),_("p",[t._v("根据代理模式的使用目的，常见的代理模式有以下几种类型：")]),t._v(" "),_("ul",[_("li",[t._v("远程(Remote)代理：为一个位于不同的地址空间的对象提供一个本地的代理对象，这个不同的地址空间可以是在同一台主机中，也可以是在另一台主机中，远程代理又叫做大使(Ambassador)。")]),t._v(" "),_("li",[t._v("虚拟(Virtual)代理：如果需要创建一个资源消耗较大的对象，先创建一个消耗相对较小的对象来表示，真实对象只在需要时才会被真正创建。")]),t._v(" "),_("li",[t._v("Copy-on-Write代理：它是虚拟代理的一种，把复制（克隆）操作延迟到只有在客户端真正需要时才执行。一般来说，对象的深克隆是一个开销较大的操作，Copy-on-Write代理可以让这个操作延迟，只有对象被用到的时候才被克隆。")]),t._v(" "),_("li",[t._v("保护(Protect or Access)代理：控制对一个对象的访问，可以给不同的用户提供不同级别的使用权限。")]),t._v(" "),_("li",[t._v("缓存(Cache)代理：为某一个目标操作的结果提供临时的存储空间，以便多个客户端可以共享这些结果。")]),t._v(" "),_("li",[t._v("防火墙(Firewall)代理：保护目标不让恶意用户接近。")]),t._v(" "),_("li",[t._v("同步化(Synchronization)代理：使几个用户能够同时使用一个对象而没有冲突。")]),t._v(" "),_("li",[t._v("智能引用(Smart Reference)代理：当一个对象被引用时，提供一些额外的操作，如将此对象被调用的次数记录下来等。")])]),t._v(" "),_("h2",{attrs:{id:"模式应用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式应用"}},[t._v("#")]),t._v(" 模式应用")]),t._v(" "),_("p",[t._v("EJB、Web Service等分布式技术都是代理模式的应用。在EJB中使用了RMI机制，远程服务器中的企业级Bean在本地有一个桩模式，客户端通过桩来调用远程对象中定义的方法，而无须直接与远程对象交互。在EJB的使用中需要提供一个公共的接口，客户端针对该接口进行编程，无须知道桩以及远程EJB的实现细节。")]),t._v(" "),_("h2",{attrs:{id:"模式扩展"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式扩展"}},[t._v("#")]),t._v(" 模式扩展")]),t._v(" "),_("p",[t._v("几种常见的代理模式")]),t._v(" "),_("ul",[_("li",[t._v("图片代理：一个很常见的代理模式的应用实例就是对大图浏览的控制。用户通过浏览器访问网页时先不加载真实的大图，而是通过代理对象的方法来进行处理，在代理对象的方法中，先使用一个线程向客户端浏览器加载一个小图片，然后在后台使用另一个线程来调用大图片的加载方法将大图片加载到客户端。当需要浏览大图片时，再将大图片在新网页中显示。如果用户在浏览大图时加载工作还没有完成，可以再启动一个线程来显示相应的提示信息。通过代理技术结合多线程编程将真实图片的加载放到后台来操作，不影响前台图片的浏览。")]),t._v(" "),_("li",[t._v("远程代理：远程代理可以将网络的细节隐藏起来，使得客户端不必考虑网络的存在。客户完全可以认为被代理的远程业务对象是局域的而不是远程的，而远程代理对象承担了大部分的网络通信工作。")]),t._v(" "),_("li",[t._v("虚拟代理：当一个对象的加载十分耗费资源的时候，虚拟代理的优势就非常明显地体现出来了。虚拟代理模式是一种内存节省技术，那些占用大量内存或处理复杂的对象将推迟到使用它的时候才创建。在应用程序启动的时候，可以用代理对象代理真实对象初始化，节省了内存的占用，并大大加速了系统的启动时间。")])]),t._v(" "),_("h3",{attrs:{id:"动态代理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#动态代理"}},[t._v("#")]),t._v(" 动态代理")]),t._v(" "),_("ul",[_("li",[t._v("动态代理是一种较为高级的代理模式，它的典型应用就是Spring AOP。")]),t._v(" "),_("li",[t._v("在传统的代理模式中，客户端通过Proxy调用RealSubject类的requests()方法，同时还在代理类中封装了其他方法(如preRequest()和postRequest())，可以处理一些其他问题。")]),t._v(" "),_("li",[t._v("如果按照这种方法使用代理模式，那么真实主题角色必须是事先已经存在的，并将其作为代理对象的内部成员属性。如果一个真实主题角色必须对应一个代理主题角色，这将导致系统中的类个数急剧增加，因此需要想办法减少系统中类的个数，此外，如何在事先不知道真实主题角色的情况下使用代理主题角色，这都是动态代理需要解决的问题。")])])])}),[],!1,null,null,null);v.default=r.exports}}]);