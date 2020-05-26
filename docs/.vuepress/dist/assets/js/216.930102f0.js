(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{504:function(t,s,n){"use strict";n.r(s);var a=n(27),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"fibers数据结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fibers数据结构"}},[t._v("#")]),t._v(" Fibers数据结构")]),t._v(" "),n("p",[t._v('为了方便描述渲染树和单元任务，React 设计了一种数据结构"fiber 树"。每个元素都是一个fiber，每个 fiber 就是一个单元任务。')]),t._v(" "),n("p",[t._v("假如我们渲染如下这样一棵树：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("Redact"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h1"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  container\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("用 Fiber 树来描述就是：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20200413184111.png",alt:""}})]),t._v(" "),n("p",[t._v("在"),n("code",[t._v("render")]),t._v("函数我们创建"),n("strong",[t._v("根 fiber")]),t._v("，再把它设为"),n("code",[t._v("nextUnitOfWork")]),t._v("。在 workLoop 函数把"),n("code",[t._v("nextUnitOfWork")]),t._v("给"),n("code",[t._v("performUnitOfWork")]),t._v("执行，主要包含以下三步：")]),t._v(" "),n("ol",[n("li",[t._v("把元素添加到 DOM")]),t._v(" "),n("li",[t._v("为元素的后代创建 fiber 节点")]),t._v(" "),n("li",[t._v("选择下一个单元任务，并返回")])]),t._v(" "),n("p",[t._v("为了完成这些目标需要设计的数据结构方便的找到下一个任务单元。"),n("strong",[t._v("所以每个 fiber 直接链接它的第一个子节点（child），子节点链接它的兄弟节点（sibling），兄弟节点链接到父节点（parent）")]),t._v("。")]),t._v(" "),n("p",[t._v("示意图如下（注意不同节点之间的高亮箭头）：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20200103143611.png",alt:""}})]),t._v(" "),n("p",[t._v("当我们完成了一个 fiber 的单元任务，如果他有一个"),n("code",[t._v("子节点/child")]),t._v("，则这个节点作为"),n("code",[t._v("nextUnitOfWork")]),t._v("。")]),t._v(" "),n("p",[t._v("如下图所示，当完成"),n("code",[t._v("div")]),t._v("单元任务之后，下一个单元任务就是"),n("code",[t._v("h1")]),t._v("。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20200103144905.png",alt:""}})]),t._v(" "),n("p",[t._v("如果一个 fiber 没有"),n("code",[t._v("child")]),t._v("，我们用"),n("code",[t._v("兄弟节点/sibling")]),t._v("作为下一个任务单元。")]),t._v(" "),n("p",[t._v("如下图所示，"),n("code",[t._v("p")]),t._v("节点没有"),n("code",[t._v("child")]),t._v("而有"),n("code",[t._v("sibling")]),t._v("，所以下一个任务单元是"),n("code",[t._v("a")]),t._v("节点。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20200103145713.png",alt:""}})]),t._v(" "),n("p",[t._v("如果一个 fiber 既没有"),n("code",[t._v("child")]),t._v("也没有"),n("code",[t._v("sibling")]),t._v("，则找到父节点的兄弟节点。")]),t._v(" "),n("p",[t._v("如下图所示的"),n("code",[t._v("a")]),t._v("和"),n("code",[t._v("h2")]),t._v("。")]),t._v(" "),n("p",[t._v("当"),n("code",[t._v("fiber")]),t._v("不存在"),n("code",[t._v("child fiber")]),t._v("和"),n("code",[t._v("sibling fiber")]),t._v("时，我们会寻找父级的"),n("code",[t._v("sibling fiber")]),t._v("，如果父级也没有"),n("code",[t._v("sibling fiber")]),t._v("，会依次向上寻找，直到"),n("code",[t._v("root fiber")]),t._v("。这时就说明整棵"),n("code",[t._v("fiber")]),t._v("树渲染完毕。")]),t._v(" "),n("p",[t._v("举例：如下图所示，"),n("code",[t._v("a")]),t._v("元素没有子元素和未渲染的兄弟节点了，此时就需要向上寻找父元素的兄弟节点"),n("code",[t._v("h2")]),t._v("，所以下一个工作单元就是"),n("code",[t._v("h2")]),t._v("。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20200103151837.png",alt:""}})]),t._v(" "),n("p",[t._v("如果父节点没有兄弟节点，则继续往上找，直到找到一个兄弟节点或者到达 fiber 根节点。")]),t._v(" "),n("p",[t._v("到达根节点即意味本次"),n("code",[t._v("render")]),t._v("任务全部完成。")]),t._v(" "),n("p",[t._v("把这个思路用代码表达如下：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 之前 render 的逻辑挪到这个函数")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDom")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fiber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dom "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    fiber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TEXT_ELEMENT"')]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTextNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fiber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("isProperty")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("key")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" key "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"children"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fiber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isProperty"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      dom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fiber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("element"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" container")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建根 fiber，设为下一次的单元任务")]),t._v("\n  nextUnitOfWork "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    dom"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    props"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      children"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("element"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" nextUnitOfWork "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("workLoop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("deadline")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" shouldYield "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextUnitOfWork "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("shouldYield"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    nextUnitOfWork "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("performUnitOfWork")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextUnitOfWork"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    shouldYield "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" deadline"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeRemaining")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestIdleCallback")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workLoop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一旦浏览器空闲，就触发执行单元任务")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestIdleCallback")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workLoop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("performUnitOfWork")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fiber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("fiber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fiber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dom "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDom")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fiber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子节点 DOM 插到父节点之后")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fiber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fiber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fiber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每个子元素创建新的 fiber")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" elements "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fiber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" index "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" prevSibling "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" elements"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" element "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" elements"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newFiber "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" element"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      props"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" element"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      parent"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" fiber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      dom"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据上面的图示，父节点只链接第一个子节点")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      fiber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("child "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newFiber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 兄弟点链接弟节点")]),t._v("\n      prevSibling"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sibling "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newFiber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    prevSibling "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newFiber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    index"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回下一个任务单元 (fiber)")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 有子节点直接返回")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fiber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" fiber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 没有子节点则找兄弟节点，兄弟节点也没有找父节点的兄弟节点")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 循环遍历直至找到为止")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" nextFiber "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fiber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextFiber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextFiber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sibling"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" nextFiber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sibling"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    nextFiber "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nextFiber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);