(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{706:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"线性表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线性表"}},[t._v("#")]),t._v(" 线性表")]),t._v(" "),a("h2",{attrs:{id:"定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),a("p",[t._v("零个或多个数据元素的有限序列。")]),t._v(" "),a("p",[t._v("强调几个点:")]),t._v(" "),a("ul",[a("li",[t._v("序列: "),a("code",[t._v("元素之间存在顺序，若元素存在多个，则第一个元素无前驱，最后一个元素无后继")]),t._v("。")]),t._v(" "),a("li",[t._v("有限: "),a("code",[t._v("计算机中处理的对象都是有限的，无限的序列，只存在于数学的概念中")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"线性表的操作方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线性表的操作方法"}},[t._v("#")]),t._v(" 线性表的操作方法")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("InitList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("L"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 初始化操作，建立一个空的线性表L */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ListEmpty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("L"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 若线性表为空，返回true，否则返回false */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ClearList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("L"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 将线性表清空 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetElem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("L"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 将线性表L中的第i个位置元素返回给e */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("LocateElem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("L"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 查找线性表L中与e相同的第一个元素的下标，否则返回0 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ListInsert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("L"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 在线性表L中的第i个位置插入新元素e */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ListDelete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("L"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 删除线性表L中第i个位置元素，并用e返回其值 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ListLength")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("L"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 返回线性表L的元素个数 */")]),t._v("\n")])])]),a("h2",{attrs:{id:"线性表的顺序存储结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线性表的顺序存储结构"}},[t._v("#")]),t._v(" 线性表的顺序存储结构")]),t._v(" "),a("p",[t._v("线性表的顺序存储结构："),a("code",[t._v("指的是用一段地址连续的存储单元依次存储线性表的数据元素")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("MAXSIZE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("  ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 存储空间初始分配量 */")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ElemType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ElemType类型根据实际情况而定，这里假设为int */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ElemType data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MAXSIZE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 数组存储数据元素，最大值为MAXSIZE */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 线性表当前长度 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("SqList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("由此可见描述顺序存储结构需要三个属性:")]),t._v(" "),a("ul",[a("li",[t._v("存储空间的起始位置："),a("code",[t._v("数组data，它的存储位置就是存储空间的存储位置")]),t._v("。")]),t._v(" "),a("li",[t._v("线性表的最大存储容量："),a("code",[t._v("数组长度MaxSize")]),t._v("。")]),t._v(" "),a("li",[t._v("线性表的当前长度："),a("code",[t._v("length")]),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"数组长度与线性表长度的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组长度与线性表长度的区别"}},[t._v("#")]),t._v(" 数组长度与线性表长度的区别")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("数组的长度："),a("code",[t._v("存放线性表的存储空间的长度，存储分配后这个量一般是不变的")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("线性表的长度："),a("code",[t._v("线性表中元素的个数，随着线性表插入和删除，量是变化的")]),t._v("。")])])]),t._v(" "),a("h3",{attrs:{id:"地址计算方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#地址计算方法"}},[t._v("#")]),t._v(" 地址计算方法")]),t._v(" "),a("p",[t._v("数组的下标是从"),a("code",[t._v("0")]),t._v("开始的，于是第"),a("code",[t._v("i")]),t._v("个元素是存储在数组下标为"),a("code",[t._v("i-1")]),t._v("的位置。")]),t._v(" "),a("p",[t._v("存储器中每个存储单元都有自己的编号，这个编号称为"),a("code",[t._v("地址")]),t._v("。")]),t._v(" "),a("p",[t._v("假设"),a("code",[t._v("LOC")]),t._v("表示获得存储位置的函数，且每个元素(不考虑类型)占用"),a("code",[t._v("c")]),t._v("个存储单元。")]),t._v(" "),a("p",[t._v("那么线性表第"),a("code",[t._v("i+1")]),t._v("个数据元素的存储位置和第"),a("code",[t._v("i")]),t._v("个数据元素的存储位置满足以下关系：")]),t._v(" "),a("p",[a("code",[t._v("LOC(a(i+1)) = LOC(a(i)) + c")])]),t._v(" "),a("p",[t._v("通过这个公式可以计算出线性表任意位置的地址，不管是第一个还是最后一个，都是相同的时间。我们对于每个线性表位置的存入或者取出数据的时间，都是一个常数，所以它的时间复杂度为"),a("code",[t._v("O(1)")]),t._v("。通常具有这一特点的存储结构称为"),a("code",[t._v("随机存取机构")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"顺序存储结构的插入与删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#顺序存储结构的插入与删除"}},[t._v("#")]),t._v(" 顺序存储结构的插入与删除")]),t._v(" "),a("h3",{attrs:{id:"获得元素操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获得元素操作"}},[t._v("#")]),t._v(" 获得元素操作")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("OK")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("ERROR")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("TRUE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("FALSE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" Status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Status是函数的类型，其值是函数结果状态代码，如OK等 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 初始条件: 顺序线性表L已存在，1 <= i <= ListLength(L) */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 操作结果: 用e返回L中第i个数据元素的值 */")]),t._v("\n\nStatus "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetElem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SqList L"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ElemType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("L"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" L"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ERROR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("e "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" L"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"插入操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插入操作"}},[t._v("#")]),t._v(" 插入操作")]),t._v(" "),a("p",[t._v("插入算法思路:")]),t._v(" "),a("ul",[a("li",[t._v("如果插入位置不合理，抛出异常")]),t._v(" "),a("li",[t._v("如果线性表长度大于等于数组长度，则抛出异常或动态增加容量")]),t._v(" "),a("li",[t._v("从最后一个元素开始向前遍历到第i个位置，分别将它们后移一个位置")]),t._v(" "),a("li",[t._v("将要插入的元素填入i处")]),t._v(" "),a("li",[t._v("表长加1")])]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 初始条件: 顺序线性表L已存在，1 <= i <= ListLength(L) */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 操作结果: 在L中第i个位置之前插入新的数据元素e，L的长度加1 */")]),t._v("\nStatus "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ListInsert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SqList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("L"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ElemType e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("L"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" MAXSIZE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 顺序线性表已经满 */")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ERROR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 当i不在范围内时 */")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ERROR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" L"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 当插入数据不在表尾 */")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" L"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 将要插入位置后的元素数据向后移动一位 */")]),t._v("\n\t\t\tL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" L"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 将新元素插入 */")]),t._v("\n\tL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"删除操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除操作"}},[t._v("#")]),t._v(" 删除操作")]),t._v(" "),a("p",[t._v("删除算法的思路:")]),t._v(" "),a("ul",[a("li",[t._v("如果删除位置不合理，抛出异常")]),t._v(" "),a("li",[t._v("取出删除元素")]),t._v(" "),a("li",[t._v("从删除元素位置开始遍历到最后一个元素位置，分别将它们向前移动1个位置")]),t._v(" "),a("li",[t._v("表长减1")])]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 初始条件: 顺序线性表L已存在，1 <= i <= ListLength(L) */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 操作结果: 删除L的第i个数据元素，并用e返回值，L的长度减1 */")]),t._v("\nStatus "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ListDelete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SqList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("L"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ElemType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("L"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 线性表为空 */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ERROR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" L"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 删除位置不正确 */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ERROR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("e "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" L"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" L"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 如果删除位置不是最后位置 */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" L"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 将删除位置的后继元素迁移 */")]),t._v("\n      L"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" L "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  L"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("插入和删除的时间复杂度为"),a("code",[t._v("O(n)")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"线性表顺序存储结构的优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线性表顺序存储结构的优缺点"}},[t._v("#")]),t._v(" 线性表顺序存储结构的优缺点")]),t._v(" "),a("p",[t._v("优点:")]),t._v(" "),a("ul",[a("li",[t._v("无须为表示表中元素之间的逻辑关系而增加额外的存储空间")]),t._v(" "),a("li",[t._v("可以快速地存取表中任一位置的元素")])]),t._v(" "),a("p",[t._v("缺点:")]),t._v(" "),a("ul",[a("li",[t._v("插入和删除操作需要移动大量元素")]),t._v(" "),a("li",[t._v("当线性表长度变化较大时，难以确定存储空间的容量")]),t._v(" "),a("li",[t._v("造成存储空间的"),a("code",[t._v("碎片")])])]),t._v(" "),a("h2",{attrs:{id:"线性表的链式存储结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线性表的链式存储结构"}},[t._v("#")]),t._v(" 线性表的链式存储结构")])])}),[],!1,null,null,null);s.default=e.exports}}]);