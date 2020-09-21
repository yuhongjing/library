(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{531:function(v,_,t){"use strict";t.r(_);var r=t(27),d=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"正则表达式与文件格式化处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式与文件格式化处理"}},[v._v("#")]),v._v(" 正则表达式与文件格式化处理")]),v._v(" "),t("ul",[t("li",[v._v("正则表达式就是处理字符串的方法，它是以行为单位来进行字符串的处理操作。")]),v._v(" "),t("li",[v._v("正则表达式通过一些特殊符号的辅助，可以让用户轻易实现【查找、删除、替换】某特定字符串的处理过程。")]),v._v(" "),t("li",[v._v("正则表达式基本上是一种【表示法】，只要工具程序支持正则表达式，那么该工具程序就可以用来作为正则表达式的字符串处理之用。")]),v._v(" "),t("li",[t("strong",[v._v("正则表达式与通配符是完全不一样的东西")]),v._v("，通配符(wildcard)代表的是bash的一个功能，但正则表达式则是一种字符串处理的表达方式。")]),v._v(" "),t("li",[v._v("使用grep或其他工具进行正则表达式的字符串对比时，"),t("strong",[v._v("因为编码的问题会有不同的状态")]),v._v("，因此，你最好将LANG等变量设置为C或en等英文语系。所以使用正则表达式时，需要特别留意当时环境的语系是什么，否则可能会发现与别人不相同的选取结果。")]),v._v(" "),t("li",[v._v("grep与egrep在正则表达式里面是很常见的两个程序，其中，egrep支持更严谨的正则表达式的语法。")]),v._v(" "),t("li",[v._v("由于编码系统的不同，不同的语系(LANG)会造成正则表达式选取数据的差异，因此可利用特殊符号如[:upper:]来替代编码范围较佳。")]),v._v(" "),t("li",[v._v("由于严谨度的不同，正则表达式之上还有更严谨的扩展正则表达式。")]),v._v(" "),t("li",[v._v("正则表达式的特殊字符与一般在命令行输入命令的通配符并不相同。")]),v._v(" "),t("li",[v._v("基础正则表达式的特殊字符有："),t("code",[v._v("*")]),v._v("、"),t("code",[v._v(".")]),v._v("、"),t("code",[v._v("[]")]),v._v("、"),t("code",[v._v("[-]")]),v._v("、"),t("code",[v._v("[^]")]),v._v("、"),t("code",[v._v("^")]),v._v("、"),t("code",[v._v("$")]),v._v("等。")]),v._v(" "),t("li",[v._v("常见的支持正则表达式的工具软件有：grep、sed、vim等。\n"),t("ul",[t("li",[v._v("grep，抓取符合管道条件的行。")]),v._v(" "),t("li",[v._v("sed，可以替换、删除、新增、选取特定行。还可以直接修改整个文件。")]),v._v(" "),t("li",[v._v("vim，编辑文本。")])])]),v._v(" "),t("li",[v._v("printf可以通过一些特殊符号来将数据进行格式化输出，使得输出的内容格式变得好看。")]),v._v(" "),t("li",[v._v("awk可以使用【字段】为根据，进行数据的重新整理与输出。")]),v._v(" "),t("li",[v._v("文件的比对中，可利用diff及cmp进行比对，其中diff主要用在纯文本文件方面的新旧版本比对。")]),v._v(" "),t("li",[v._v("patch命令可以将旧版数据更新到新版(主要亦由diff建立patch的补丁源文件)。")]),v._v(" "),t("li",[v._v("pr命令，文件打印相关设置。")])]),v._v(" "),t("h2",{attrs:{id:"特殊符号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特殊符号"}},[v._v("#")]),v._v(" 特殊符号")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("特殊符号")]),v._v(" "),t("th",[v._v("代表意义")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("[:alnum:]")]),v._v(" "),t("td",[v._v("代表英文大小写字符及数字，亦即0~9、A~Z、a~z。"),t("strong",[v._v("【常用】")])])]),v._v(" "),t("tr",[t("td",[v._v("[:alpha:]")]),v._v(" "),t("td",[v._v("代表英文大小写字符，亦即A~Z、a~z。"),t("strong",[v._v("【常用】")])])]),v._v(" "),t("tr",[t("td",[v._v("[:blank:]")]),v._v(" "),t("td",[v._v("代表空格键与[Tab]按键两者。")])]),v._v(" "),t("tr",[t("td",[v._v("[:cntrl:]")]),v._v(" "),t("td",[v._v("代表键盘上面控制按键，包括CR、LF、Tab、Del等。")])]),v._v(" "),t("tr",[t("td",[v._v("[:digit:]")]),v._v(" "),t("td",[v._v("代表数字，即0~9。"),t("strong",[v._v("【常用】")])])]),v._v(" "),t("tr",[t("td",[v._v("[:graph:]")]),v._v(" "),t("td",[v._v("除了空格键(空格键与[Tab]按键)外的其他所有按键。")])]),v._v(" "),t("tr",[t("td",[v._v("[:lower:]")]),v._v(" "),t("td",[v._v("代表小写字符，即a~z。"),t("strong",[v._v("【常用】")])])]),v._v(" "),t("tr",[t("td",[v._v("[:print:]")]),v._v(" "),t("td",[v._v("代表任何可以被打印出来的字符。")])]),v._v(" "),t("tr",[t("td",[v._v("[:punct:]")]),v._v(" "),t("td",[v._v("代表标点符号(punctuation symbol)，亦即："),t("code",[v._v("\"'?!;:#$")]),v._v("。")])]),v._v(" "),t("tr",[t("td",[v._v("[:upper:]")]),v._v(" "),t("td",[v._v("代表大写字符，即A~Z。"),t("strong",[v._v("【常用】")])])]),v._v(" "),t("tr",[t("td",[v._v("[:space:]")]),v._v(" "),t("td",[v._v("任何会产生空白的字符，包括空格键、[Tab]、CR等。")])]),v._v(" "),t("tr",[t("td",[v._v("[:xdigit:]")]),v._v(" "),t("td",[v._v("代表十六进制的数字类型，因此包括0~9、A~F、a~f的数字与字符。")])])])])])}),[],!1,null,null,null);_.default=d.exports}}]);