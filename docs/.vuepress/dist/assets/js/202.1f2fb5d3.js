(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{573:function(t,a,r){"use strict";r.r(a);var e=r(28),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"如何画架构图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何画架构图"}},[t._v("#")]),t._v(" 如何画架构图")]),t._v(" "),r("p",[t._v("我们做系统架构设计时，如何快速的向外界传达我们的设计思路。4+1试图适合我们理清思路、表达自己的想法。在我们汇报，争取领导层的认同支持更适合用架构图来表述我们的观点。架构图包括总体架构、逻辑架构、应用架构、技术架构、数据架构、功能架构、网络架构、运行架构等等。")]),t._v(" "),r("h2",{attrs:{id:"一、整体架构图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、整体架构图"}},[t._v("#")]),t._v(" 一、整体架构图")]),t._v(" "),r("p",[t._v("总体架构基本上把下面所有的架构都体现了。下面的所有架构也都需要与总体架构保持一致。")]),t._v(" "),r("p",[t._v("总体架构需要说明几件事情：")]),t._v(" "),r("ul",[r("li",[t._v("整个系统的硬件设置是怎么回事？")]),t._v(" "),r("li",[t._v("数据大概是从哪里来，怎么采集、存储、处理、交换的？")]),t._v(" "),r("li",[t._v("做了哪些功能抽象，以便于支撑上层的应用？")]),t._v(" "),r("li",[t._v("提供哪些业务应用？管理、控制等功能有哪些？")]),t._v(" "),r("li",[t._v("终端用户怎么访问和使用这些应用？")]),t._v(" "),r("li",[t._v("该系统与外部系统是怎么进行对接的？")]),t._v(" "),r("li",[t._v("如何保障整个系统的安全、可靠、高质量的建设？")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/v2-3ea70e31361b58577f10b0c3dfe4f068_720w.webp",alt:""}})]),t._v(" "),r("center",[t._v("安防系统架构图")]),t._v(" "),r("h2",{attrs:{id:"二、逻辑架构图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、逻辑架构图"}},[t._v("#")]),t._v(" 二、逻辑架构图")]),t._v(" "),r("p",[t._v("逻辑架构就是整体架构去掉各种保障、底层的硬件基础等非软件开发逻辑核心的内容。所以有很多简单的项目压根就不写逻辑架构，直接用总体架构就行了。复杂的，就要把上面总体架构中间分层的逻辑给写清楚一些。")]),t._v(" "),r("p",[t._v('关注的是功能，包含用户直接可见的功能，还有系统中隐含的功能。或者更加通俗来描述，逻辑架构更偏向我们日常所理解的"分层"，把一个项目分为"表示层、业务逻辑层、数据访问层"这样经典的"三层架构"。')]),t._v(" "),r("p",[t._v("逻辑架构设计的目的就是为了告诉读者，整个系统是怎么产生左右的。所谓的系统架构，主要说的就是这部分。早期的单体架构、后面的各种分层架构、微服务、服务网格等，说的都是在这里进行设计。")]),t._v(" "),r("p",[t._v("在设计的时候，会用到很多设计模式，比如你看到有一个应用支撑层/服务层之类的，这就是做了一个MVC，把业务逻辑和用户前端分离。而所有的逻辑架构都有数据层，这是最早的MVP，即数据、用户视图和处理逻辑分离。当然，系统越复杂，架构图就越复杂。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/v2-e9cf3e6a6de1a33f9ab470ced82f0794_r.jpg",alt:""}})]),t._v(" "),r("center",[t._v("上汽通用B2C逻辑架构")]),t._v(" "),r("h2",{attrs:{id:"三、业务架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、业务架构"}},[t._v("#")]),t._v(" 三、业务架构")]),t._v(" "),r("p",[t._v("企业架构框架白皮书中把架构分为了四个层次，分别是业务、应用、数据、技术。只有梳理清楚了业务，才能指导应用、数据和技术架构。业务架构的分析过程是复杂的，最终的产出可能也不仅仅只是一张架构图。还有更细节的流程、建模等产出物。一张好的架构图大概是：分层次、分模块讲清楚了各个产品模块之间的关系。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/v2-e2287908c7962d63960733ecd0a2d7d6_720w.webp",alt:""}})]),t._v(" "),r("h2",{attrs:{id:"四、应用架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、应用架构"}},[t._v("#")]),t._v(" 四、应用架构")]),t._v(" "),r("p",[t._v("就是应用太丰富了，需要整理整理。内部有哪些应用，怎么对外提供服务。很多项目都没有这个，因为应用比较少，不值得多废点人工单独写。用以阐述细化逻辑架构。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/v2-da4b31a643ff041cfad64162550383d5_720w.webp",alt:""}})]),t._v(" "),r("center",[t._v("互联网医院-应用架构")]),t._v(" "),r("h2",{attrs:{id:"五、技术架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#五、技术架构"}},[t._v("#")]),t._v(" 五、技术架构")]),t._v(" "),r("p",[t._v("技术架构要干啥也就很清楚了，就是每一层，我们都用什么组件、什么技术解决什么问题。要求是：精准、明确、简练。但大体上的结构是类似的，从最底层的存储，到最上层的接口。右边是一些通用的运维体系或者支撑服务。体现出来依赖的SDK、第三方类库、中间件。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/v2-a1af113522b25d50cd2cf8bbf4ba5dba_720w.webp",alt:""}})]),t._v(" "),r("center",[t._v("云技术架构")]),t._v(" "),r("p",[t._v("现在更多的情况，是多个系统模块，组成一个大的分布式系统，或者现存多个系统的情况下，需要进行集成开发一个产品。")]),t._v(" "),r("p",[t._v("这样的话，技术架构就是高层级的技术架构了，不仅仅体现的是技术组件了，而是更高层级的一些模块，甚至规范。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/v2-7cb680d308ff5883068e7bb7b6de010e_r.jpg",alt:""}})]),t._v(" "),r("h2",{attrs:{id:"六、数据架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#六、数据架构"}},[t._v("#")]),t._v(" 六、数据架构")]),t._v(" "),r("p",[t._v("数据架构其实就是从数据侧描述数据怎么来、怎么存、怎么加工、怎么使用。从数据源开始，数据通过哪些方式集成过来；集成到数仓之后，都存在哪里，数仓怎么分层，每一层都干啥；在数据集市中又怎么存、怎么管；到数据应用层又提供哪些应用。上面所有的一切，都用什么技术，什么组件，解决什么问题。系统需要什么样的数据、如何存储、如何进行数据架构设计。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/v2-d2df43cd038d13a294bc894f2030b778_720w.webp",alt:""}})]),t._v(" "),r("h2",{attrs:{id:"七、部署架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#七、部署架构"}},[t._v("#")]),t._v(" 七、部署架构")]),t._v(" "),r("p",[t._v("部署架构也叫网络架构，就是底层服务器、网络的设计，提供网络安全、服务可靠性的设计。再简单一些理解，就是你这些应用、数据库都放在那台服务器上，这些服务器都在哪个ip端，怎么进行访问。要具体体现：机房；服务器个数、配置；网络分区关系；体现数据库、高可用；体现负载均衡；")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/v2-e6d35fe7ea54cf556f53ab11d1cac5bf_720w.webp",alt:""}})]),t._v(" "),r("h2",{attrs:{id:"八、功能架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#八、功能架构"}},[t._v("#")]),t._v(" 八、功能架构")]),t._v(" "),r("p",[t._v("就是前台页面的功能菜单的目录结构。你怎么组织系统的所有功能，给用户提供相应的服务。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/v2-f8d4a8f05077ca59c2d868c2c8d53f7c_r.jpg",alt:""}})]),t._v(" "),r("h2",{attrs:{id:"九、运行架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#九、运行架构"}},[t._v("#")]),t._v(" 九、运行架构")]),t._v(" "),r("p",[t._v("运行架构其实就是软件内部，这些系统内部是怎么运转的，一般会画很多时序图、状态图、活动图。一般不单独画一个运行架构，而是在概要和详细设计里面。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/v2-b7fa455ff52fda30eaa4dac70d57e455_720w.webp",alt:""}})]),t._v(" "),r("center",[t._v("k8s运行时序图")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/v2-f738c4e40ea471be381268027112ab7e_r.jpg",alt:""}})])],1)}),[],!1,null,null,null);a.default=s.exports}}]);