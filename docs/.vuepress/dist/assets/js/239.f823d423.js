(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{601:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"正则表达式的构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式的构建"}},[t._v("#")]),t._v(" 正则表达式的构建")]),t._v(" "),a("p",[t._v("对于一门语言的掌握程度怎么样，可以有两个角度来衡量：读和写。")]),t._v(" "),a("p",[t._v("不仅要看懂别人的解决方案，也要能独立地解决问题。代码是这样，正则表达式也是这样。")]),t._v(" "),a("p",[t._v('与"读"相比，"写"往往更为重要，这个道理是不言而喻的。')]),t._v(" "),a("p",[t._v("对正则的运用，首重就是：如何针对问题，构建一个合适的正则表达式？")]),t._v(" "),a("h2",{attrs:{id:"平衡法则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#平衡法则"}},[t._v("#")]),t._v(" 平衡法则")]),t._v(" "),a("p",[t._v("构建正则有一点非常重要，需要做到下面几点的平衡：")]),t._v(" "),a("ul",[a("li",[t._v("匹配预期的字符串")]),t._v(" "),a("li",[t._v("不匹配非预期的字符串")]),t._v(" "),a("li",[t._v("可读性和可维护性")]),t._v(" "),a("li",[t._v("效率")])]),t._v(" "),a("h2",{attrs:{id:"构建正则前提"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建正则前提"}},[t._v("#")]),t._v(" 构建正则前提")]),t._v(" "),a("h3",{attrs:{id:"是否能使用正则？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是否能使用正则？"}},[t._v("#")]),t._v(" 是否能使用正则？")]),t._v(" "),a("p",[t._v("正则太强大了，以至于我们随便遇到一个操作字符串问题时，都会下意识地去想，用正则该怎么做。但我们始终要提醒自己，正则虽然强大，但不是万能的，很多看似很简单的事情，还是做不到的。")]),t._v(" "),a("p",[t._v("比如匹配这样的字符串: 1010010001···。")]),t._v(" "),a("p",[t._v("虽然很有规律，但是只靠正则就是无能为力。")]),t._v(" "),a("h3",{attrs:{id:"是否有必要使用正则？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是否有必要使用正则？"}},[t._v("#")]),t._v(" 是否有必要使用正则？")]),t._v(" "),a("p",[t._v("要认识到正则的局限，不要去研究根本无法完成的任务。同时，也不能走入另一个极端：无所不用正则。能用字符串API解决的简单问题，就不该正则出马。")]),t._v(" "),a("p",[t._v("比如，从日期中提取年月日，虽然可以使用正则：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017-07-01"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" regex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^(\\d{4})-(\\d{2})-(\\d{2})/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => ["2017-07-01", "2017", "07", "01", index: 0, input: "2017-07-01"]')]),t._v("\n")])])]),a("p",[t._v("其实，可以使用字符串的"),a("code",[t._v("split")]),t._v("方法来做，即可：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017-07-01"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => ["2017", "07", "01"]')]),t._v("\n")])])]),a("p",[t._v("比如，判断是否有问号，虽然可以使用：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"?id=xx&act=search"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("search")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\?/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 0")]),t._v("\n")])])]),a("p",[t._v("其实，可以使用字符串的"),a("code",[t._v("indexOf")]),t._v("方法：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"?id=xx&act=search"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"?"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 0")]),t._v("\n")])])]),a("p",[t._v("比如获取子串，虽然可以使用正则：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JavaScript"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/.{4}(.+)/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => Script")]),t._v("\n")])])]),a("p",[t._v("其实，可以直接使用字符串的"),a("code",[t._v("substring")]),t._v("或"),a("code",[t._v("substr")]),t._v("方法来做：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JavaScript"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("substring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => Script")]),t._v("\n")])])]),a("h3",{attrs:{id:"是否有必要构建一个复杂的正则？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是否有必要构建一个复杂的正则？"}},[t._v("#")]),t._v(" 是否有必要构建一个复杂的正则？")]),t._v(" "),a("p",[t._v("比如密码匹配问题，要求密码长度6-12位，由数字、小写字母和大写字母组成，但必须至少包括2种字符。")]),t._v(" "),a("p",[t._v("在"),a("RouterLink",{attrs:{to:"/knowledge/web/javascript/正则表达式/JS正则迷你书/位置匹配攻略.html"}},[t._v("第二章")]),t._v("里，我们写出了正则是:")],1),t._v(" "),a("p",[a("code",[t._v("/(?!^[0-9]{6,12}$)(?!^[a-z]{6,12}$)(?!^[A-Z]{6,12}$)^[0-9A-Za-z]{6,12}$/")])]),t._v(" "),a("p",[t._v("其实可以使用多个小正则来做：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" regex1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^[0-9A-Za-z]{6,12}$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" regex2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" regex3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^[A-Z]{6,12}$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" regex4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^[a-z]{6,12}$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkPassword")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("regex1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("regex2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("regex3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("regex4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"准确性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准确性"}},[t._v("#")]),t._v(" 准确性")]),t._v(" "),a("p",[t._v("所谓准确性，就是能匹配预期的目标，并且不匹配非预期的目标。")]),t._v(" "),a("p",[t._v('这里提到了"预期"二字，那么我们就需要知道目标的组成规则。')]),t._v(" "),a("p",[t._v("不然没法界定什么样的目标字符串是符合预期的，什么样的又不是符合预期的。")]),t._v(" "),a("p",[t._v("下面将举例说明，当目标字符串构成比较复杂时，该如何构建正则，并考虑到哪些平衡。")]),t._v(" "),a("h3",{attrs:{id:"匹配固定电话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匹配固定电话"}},[t._v("#")]),t._v(" 匹配固定电话")]),t._v(" "),a("p",[t._v("比如要匹配如下格式的固定电话号码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("055188888888")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0551")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("88888888")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0551")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("88888888")]),t._v("\n")])])]),a("p",[t._v("第一步，了解各部分的模式规则。")]),t._v(" "),a("p",[t._v('上面的电话，总体上分为区号和号码两部分(不考虑分机号和"+86"的情形)。')]),t._v(" "),a("p",[t._v('区号是"0"开头的3到4位数字，对应的正则是：'),a("code",[t._v("0\\d{2,3}")])]),t._v(" "),a("p",[t._v('号码是非"0"开头的7到8位数字，对应的正则是：'),a("code",[t._v("[1-9]\\d{6,7}")])]),t._v(" "),a("p",[t._v('因此，匹配"055188888888"的正则是：'),a("code",[t._v("/^0\\d{2,3}[1-9]\\d{6,7}$/")])]),t._v(" "),a("p",[t._v('匹配"0551-88888888"的正则是：'),a("code",[t._v("/^0\\d{2,3}-[1-9]\\d{6,7}$/")])]),t._v(" "),a("p",[t._v('匹配"(0551)88888888"的正则是：'),a("code",[t._v("/^\\(0\\d{2,3}\\)[1-9]\\d{6,7}$/")])]),t._v(" "),a("p",[t._v("第二步，明确形式关系。")]),t._v(" "),a("p",[t._v("这三者情形是或的关系，可以构建分支：")]),t._v(" "),a("p",[a("code",[t._v("/^0\\d{2,3}[1-9]\\d{6,7}$|^0\\d{2,3}-[1-9]\\d{6,7}$|^\\(0\\d{2,3}\\)[1-9]\\d{6,7}$/")])]),t._v(" "),a("p",[t._v("提取公共部分：")]),t._v(" "),a("p",[a("code",[t._v("/^(0\\d{2,3}|0\\d{2,3}-|\\(0\\d{2,3}\\))[1-9]\\d{6,7}$/")])]),t._v(" "),a("p",[t._v("进一步简写：")]),t._v(" "),a("p",[a("code",[t._v("/^(0\\d{2,3}-?|\\(0\\d{2,3}\\))[1-9]\\d{6,7}$/")])]),t._v(" "),a("p",[t._v("上面的正则构建构成略显啰嗦，但是这样做，能保证正则是准确的。")]),t._v(" "),a("p",[t._v("上述三种情况是或的关系，这一点很重要，不然很容易按字符是否出现的情形把正则写成：")]),t._v(" "),a("p",[a("code",[t._v("/$\\(?0\\d{2,3}\\)?-?[1-9]\\d{6,7}$/")])]),t._v(" "),a("p",[t._v('虽然也能匹配上述目标字符串，但也会匹配"(0551-88888888"这样的字符串。当然，这不是我们想要的。')]),t._v(" "),a("p",[t._v("其实这个正则也不是完美的，因为现实中，并不是每个3位数和4位数都是一个真实的区号。")]),t._v(" "),a("p",[t._v("这就是一个平衡取舍问题，一般够用就行。")]),t._v(" "),a("h3",{attrs:{id:"匹配浮点数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匹配浮点数"}},[t._v("#")]),t._v(" 匹配浮点数")]),t._v(" "),a("p",[t._v("要求匹配如下的格式：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.23")]),t._v("、"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.23")]),t._v("、"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.23")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("、"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("、"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".2")]),t._v("、"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".2")]),t._v("、"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".2")]),t._v("\n")])])]),a("p",[t._v("可以看出正则分为三部分。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("符号部分："),a("code",[t._v("[+]")])])]),t._v(" "),a("li",[a("p",[t._v("整数部分："),a("code",[t._v("\\d+")])])]),t._v(" "),a("li",[a("p",[t._v("小数部分："),a("code",[t._v("\\.\\d+")])])])]),t._v(" "),a("p",[t._v("上述三个部分，并不是全部都出现。如果此时很容易写出如下的正则：")]),t._v(" "),a("p",[a("code",[t._v("/^[+-]?(\\d+)(\\.\\d+)?$/")])]),t._v(" "),a("p",[t._v('此正则看似没问题，但这个正则也会匹配空字符""。')]),t._v(" "),a("p",[t._v("因为目标字符串的形式关系不是要求每部分都是可选的。")]),t._v(" "),a("p",[t._v('要匹配"1.23"、"+1.23"、"-1.23"，可以用'),a("code",[t._v("/^[+-]?\\d+\\.\\d+$/")])]),t._v(" "),a("p",[t._v('要匹配"10"、"+10"、"-10"，可以用'),a("code",[t._v("/^[+-]?\\d+\\.\\d+$/")])]),t._v(" "),a("p",[t._v('要匹配 ".2"、"+.2"、"-.2"，可以用'),a("code",[t._v("/^[+-]?\\.\\d+$/")])]),t._v(" "),a("p",[t._v("因此整个正则是这三者的或的关系，提取公共部分后是：")]),t._v(" "),a("p",[a("code",[t._v("/^[+-]?(\\d+\\.\\d+|\\d+|\\.\\d+)$/")])]),t._v(" "),a("p",[t._v('如果要求不匹配"+.2"和"-.2"，此时正则变成：')]),t._v(" "),a("p",[a("code",[t._v("/^[+-]?(\\d+\\.\\d+|\\d+|\\.\\d+)$/")])]),t._v(" "),a("p",[t._v("当然，"),a("code",[t._v("/^[+-]?(\\d+\\.\\d+|\\d+|\\.\\d+)$/")]),t._v("也不是完美的，我们也是做了些取舍，比如：")]),t._v(" "),a("p",[t._v('它也会匹配"012"这样以"0"开头的整数。如果要求不匹配的话，需要修改整数部分的正则。一般进行验证操作之前，都要经过'),a("code",[t._v("trim")]),t._v("和判空。那样的话，也许那个错误正则也就够用了。也可以进一步改写成："),a("code",[t._v("/^[+-]?(\\d+)?(\\.)?\\d+$/")]),t._v("，这样我们就需要考虑可读性和可维护性了。")]),t._v(" "),a("h2",{attrs:{id:"效率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#效率"}},[t._v("#")]),t._v(" 效率")]),t._v(" "),a("p",[t._v("保证了准确性后，才需要是否考虑要优化。大多数情形是不需要优化的，除非运行的非常慢。什么情形正则表达式运行才慢呢？我们需要考察正则表达式的运行过程（原理）。")]),t._v(" "),a("p",[t._v("正则表达式的运行分为如下的阶段：")]),t._v(" "),a("ul",[a("li",[t._v("编译")]),t._v(" "),a("li",[t._v("设定起始位置")]),t._v(" "),a("li",[t._v("尝试匹配")]),t._v(" "),a("li",[t._v("匹配失败的话，从下一位开始继续第3步")]),t._v(" "),a("li",[t._v("最终结果：匹配成功或失败")])]),t._v(" "),a("p",[t._v("下面以代码为例，来看看这几个阶段都做了什么：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" regex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\d+/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123abc34def"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123abc34def"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123abc34def"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123abc34def"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => 0 ["123", index: 0, input: "123abc34def"]')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => 3 ["34", index: 6, input: "123abc34def"]')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 8 null")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => 0 ["123", index: 0, input: "123abc34def"]')]),t._v("\n")])])]),a("p",[t._v("具体分析如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" regex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\d+/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("当生成一个正则时，引擎会对其进行编译。报错与否出现这个阶段。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123abc34def"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("当尝试匹配时，需要确定从哪一位置开始匹配。一般情形都是字符串的开头，即第0位。")]),t._v(" "),a("p",[t._v("但当使用"),a("code",[t._v("test")]),t._v("和"),a("code",[t._v("exec")]),t._v("方法，且正则有"),a("code",[t._v("g")]),t._v("时，起始位置是从正则对象的"),a("code",[t._v("lastIndex")]),t._v("属性开始。")]),t._v(" "),a("p",[t._v("因此第一次"),a("code",[t._v("exec")]),t._v("是从第0位开始，而第二次是从3开始的。")]),t._v(" "),a("p",[t._v("设定好起始位置后，就开始尝试匹配了。")]),t._v(" "),a("p",[t._v("比如第一次"),a("code",[t._v("exec")]),t._v("，从0开始，去尝试匹配，并且成功地匹配到3个数字。此时结束时的下标是2，因此下一次的起始位置是3。")]),t._v(" "),a("p",[t._v('而第二次，起始下标是3，但第3个字符是"a"，并不是数字。但此时并不会直接报匹配失败，而是移动到下一位置，即从第4位开始继续尝试匹配，但该字符是"b"，也不是数字。再移动到下一位，是"c"仍不行，再移动一位是数字"3"，此时匹配到了两位数字"34"。此时，下一位匹配的位置是"d"的位置，即第8位。')]),t._v(" "),a("p",[t._v("第三次，是从第8位开始匹配，直到试到最后一位，也没发现匹配的，因此匹配失败，返回"),a("code",[t._v("null")]),t._v("。同时设置"),a("code",[t._v("lastIndex")]),t._v("为0，即，如果在尝试匹配的话，需从头开始。")]),t._v(" "),a("p",[t._v("从上面可以看出，匹配会出现效率问题，主要出现在上面的第3阶段和第4阶段。")]),t._v(" "),a("p",[t._v("因此，主要优化手法也是针对这两阶段的。")]),t._v(" "),a("h3",{attrs:{id:"使用具体型字符组来代替通配符，来消除回溯"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用具体型字符组来代替通配符，来消除回溯"}},[t._v("#")]),t._v(" 使用具体型字符组来代替通配符，来消除回溯")]),t._v(" "),a("p",[t._v("而在第三阶段，最大的问题就是回溯。")]),t._v(" "),a("p",[t._v('例如，匹配双引用号之间的字符。如，匹配字符串123"abc"456中的"abc"。')]),t._v(" "),a("p",[t._v("如果正则用的是："),a("code",[t._v('/".*"/')]),t._v("，会在第3阶段产生4次回溯（粉色表示"),a("code",[t._v(".*")]),t._v("匹配的内容）：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20191224101758.png",alt:""}})]),t._v(" "),a("p",[t._v("如果正则用的是："),a("code",[t._v('/".*?"/')]),t._v("，会产生2次回溯（粉色表示"),a("code",[t._v(".*?")]),t._v("匹配的内容）：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20191224101901.png",alt:""}})]),t._v(" "),a("p",[t._v("因为回溯的存在，需要引擎保存多种可能中未尝试过的状态，以便后续回溯时使用。注意要占用一定的内存。")]),t._v(" "),a("p",[t._v("此时要使用具体化的字符组，来代替通配符"),a("code",[t._v(".")]),t._v("，以便消除不必要的字符，此时使用正则"),a("code",[t._v('/"[^"]*"/')]),t._v("，即可。")]),t._v(" "),a("h3",{attrs:{id:"使用非捕获型分组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用非捕获型分组"}},[t._v("#")]),t._v(" 使用非捕获型分组")]),t._v(" "),a("p",[t._v("因为括号的作用之一是，可以捕获分组和分支里的数据。那么就需要内存来保存它们。")]),t._v(" "),a("p",[t._v("当我们不需要使用分组引用和反向引用时，此时可以使用非捕获分组。")]),t._v(" "),a("p",[t._v("例如，"),a("code",[t._v("/^[-]?(\\d\\.\\d+|\\d+|\\.\\d+)$/")]),t._v("可以修改成："),a("code",[t._v("/^[-]?(?:\\d\\.\\d+|\\d+|\\.\\d+)$/")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"独立出确定字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#独立出确定字符"}},[t._v("#")]),t._v(" 独立出确定字符")]),t._v(" "),a("p",[t._v("例如，"),a("code",[t._v("/a+/")]),t._v("可以修改成"),a("code",[t._v("/aa*/")]),t._v("。")]),t._v(" "),a("p",[t._v('因为后者能比前者多确定了字符"a"。这样会在第四步中，加快判断是否匹配失败，进而加快移位的速度。')]),t._v(" "),a("h3",{attrs:{id:"提取分支公共部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提取分支公共部分"}},[t._v("#")]),t._v(" 提取分支公共部分")]),t._v(" "),a("p",[t._v("比如，"),a("code",[t._v("/^abc|^def/")]),t._v("修改成"),a("code",[t._v("/^(?:abc|def)/")]),t._v("。")]),t._v(" "),a("p",[t._v("又比如，"),a("code",[t._v("/this|that/")]),t._v("修改成"),a("code",[t._v("/th(?:is|at)/")]),t._v("。")]),t._v(" "),a("p",[t._v("这样做，可以减少匹配过程中可消除的重复。")]),t._v(" "),a("h3",{attrs:{id:"减少分支的数量，缩小它们的范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#减少分支的数量，缩小它们的范围"}},[t._v("#")]),t._v(" 减少分支的数量，缩小它们的范围")]),t._v(" "),a("p",[a("code",[t._v("/red|read/")]),t._v("可以修改成"),a("code",[t._v("/rea?d/")]),t._v("。")]),t._v(" "),a("p",[t._v("此时分支和量词产生的回溯的成本是不一样的。但这样优化后，可读性会降低的。")]),t._v(" "),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("p",[t._v("一般情况下，针对某问题能写出一个满足需求的正则，基本上就可以了。")]),t._v(" "),a("p",[t._v("至于准确性和效率方面的追求，纯属看个人要求了。")]),t._v(" "),a("p",[t._v("关于准确性，本章关心的是最常用的解决思路：")]),t._v(" "),a("p",[t._v("针对每种情形，分别写出正则，然后用分支把它们合并在一起，再提取分支公共部分，就能得到准确的正则。")])])}),[],!1,null,null,null);s.default=e.exports}}]);