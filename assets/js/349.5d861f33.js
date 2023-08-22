(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{719:function(s,a,t){"use strict";t.r(a);var n=t(28),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"学习shell脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#学习shell脚本"}},[s._v("#")]),s._v(" 学习shell脚本")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("shell脚本是利用shell的功能所写的一个【程序(program)】，这个程序是使用纯文本文件，将一些shell的语法与命令（含外部命令）写在里面，搭配正则表达式、管道命令余数据流重定向等功能，以达到我们所想要的处理目的。")])]),s._v(" "),t("li",[t("p",[s._v("shell脚本用在系统管理上面是很好的一项工具，但是用在处理大量数值运算上，就不够好了。因为shell脚本的速度较慢，且使用的CPU资源较多，会造成主机资源的分配不良。")])]),s._v(" "),t("li",[t("p",[s._v("在shell脚本的文件中，命令是从上而下、从左而右地分析与执行。")])]),s._v(" "),t("li",[t("p",[s._v("shell脚本的执行，至少需要有r的权限；若需要直接执行命令，则需要拥有r与x的权限。")])]),s._v(" "),t("li",[t("p",[s._v("良好的程序编写中，第一行要声明shell(#!/bin/bash)，第二行起声明程序的用途、版本、作者等信息。")])]),s._v(" "),t("li",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用户在家目录下建立bin文件且bin文件具有rx的权限，那么可以直接输入脚本即可执行。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例如")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello World! '),t("span",{pre:!0,attrs:{class:"token entity",title:"\\a"}},[s._v("\\a")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此文件地址为：用户家目录/bin/hello.sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在用户目录下任意地址输入：hello.sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 即可得到 Hello World!")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("良好的脚本编写习惯，需要在脚本头记录好以下内容")]),s._v(" "),t("ul",[t("li",[s._v("脚本的功能。")]),s._v(" "),t("li",[s._v("脚本的版本信息。")]),s._v(" "),t("li",[s._v("脚本的作者与联络方式。")]),s._v(" "),t("li",[s._v("脚本的版权声明方式。")]),s._v(" "),t("li",[s._v("脚本的History（历史记录）。")]),s._v(" "),t("li",[s._v("脚本内较特殊的命令，使用【绝对路径】的方式来执行。")]),s._v(" "),t("li",[s._v("脚本运行时需要的环境变量预先声明与设置。")])])]),s._v(" "),t("li",[t("p",[s._v("交互式脚本可用read命令完成，下面是具体实例。")])]),s._v(" "),t("li",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"please input your name: "')]),s._v(" name\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v(" Your name is: "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${name}")]),s._v('"')]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("要每次执行脚本都有不同结果的数据，可使用date命令利用日期完成，下面是具体实例。")])]),s._v(" "),t("li",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例如日志文件，每天的日志文件名为log-XXXX-XX-XX.log（年月日），仅后缀年月日不同。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 让使用者输入文件名称，并取得fileuser变量")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"I will use 'touch' command to create 3 files.\"")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Please input your filename: "')]),s._v(" fileuser\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为了避免使用者随意按Enter，利用变量分析文件名是否设置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("filename")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${fileuser"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":-")]),s._v('"filename"}')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 利用date命令来获取所需的文件名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("date1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" --date"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2 days ago'")]),s._v(" +%Y%m%d"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 前两天的日期")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("date2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" --date"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1 days ago'")]),s._v(" +%Y%m%d"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 前一天的日期")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("date3")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%Y%m%d"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("file1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${filename}")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${date1}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("file2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${filename}")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${date2}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("file3")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${filename}")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${date3}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 建立文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${file1}")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${file2}")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${file3}")]),s._v('"')]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("脚本若以source来执行，代表在父程序的bash内执行之意。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 直接执行方式来执行脚本，脚本内容会在子进程运行，而子进程的变量等不会传回父进程中。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例如，执行脚本，此时脚本中设置的变量，在最外层的命令行中无法获取。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" showname.sh "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 假设脚本中，设置了name变量")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${name}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# name变量不存在")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 利用source就可以让脚本在父进程中运行了，不开辟子进程。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" showname.sh "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 假设脚本中，设置了name变量")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${name}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yuhongjing")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("若需要进行判断式，可使用test或中括号([  ])来处理。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("test命令例子，测试/demo是否存在:"),t("code",[s._v('test -e /dmtsai && echo "exist" || echo "Not exist"')]),s._v("。")])]),s._v(" "),t("li",[t("p",[s._v("还可以使用中括号进行判断，例如"),t("code",[s._v("${Home}")]),s._v("变量是否为空："),t("code",[s._v('[ -z "{Home}" ]; echo $?')]),s._v("。")]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("中括号[]内的每个组件都需要空格分隔")]),s._v("。")])]),s._v(" "),t("li",[t("p",[s._v("中括号内的变量，最好都以双引号包裹起来。")])]),s._v(" "),t("li",[t("p",[s._v("中括号内的常量，最好都以单或双引号包裹起来。")])]),s._v(" "),t("li",[t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 假设『口』为空格，那么空格例子如下")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MAIL")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 等于")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("口"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v('"')]),s._v("口"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("口"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MAIL")]),s._v('"')]),s._v("口"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])])])])])])]),s._v(" "),t("li",[t("p",[s._v("在脚本内，$0、$1、$2....$@是有特殊意义的。")])]),s._v(" "),t("li",[t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 除了read可以获取用户输入的参数之外。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 我们可以直接在命令行后面输入参数，然后通过$0、$1来获取参数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例如")]),s._v("\n/etc/init.d/network restart\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $0为/etc/init.d/network  $1为restart")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 其使用方式如下几类")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. $#：代表后接的参数【个数】，具体指第N个参数。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 2. $@：代表【"$1", "$2", "$3", .....】所有参数的意思，每个变量独立的（用双引号包裹起来）。')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 3. $*：代表【"$1c$2c$3c$4"】，其中c为分隔字符，默认为空格。')]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("shift表示偏移参数。其功能如下：")])]),s._v(" "),t("li",[t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命令如下")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 其参数为：[a b c d e f]")]),s._v("\n/etc/init.d/network a b c d e\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shift")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此时参数为：[b c d e f]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shift")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此时参数为：[e f]")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("条件判断式可使用if...then来判断，若是固定变量内容的情况下，可使用case $var in ... esac来处理。")])]),s._v(" "),t("li",[t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# if...then 语法")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" 条件判断式一 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  语句一\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" 条件判断式二 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  语句二\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  语句三\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# case $var in ... esac 语法")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" $变量名称 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"第一个变量内容"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n     程序段\n     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"第二个变量内容"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n     程序段\n     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  *"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n     程序段\n     "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("esac")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("循环主要分为不定循环(while与until)以及固定循环(for)，配合do、done来完成所需任务。")])]),s._v(" "),t("li",[t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# while do done 语法——不定循环")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" condition "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当条件成立，就开始循环")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n\t程序段落\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# until do done 语法——不定循环")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("until")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" condition "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当条件成立，就终止循环")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n\t程序段落\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# for...do...done 语法——固定循环")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" con1 con2 con3 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对于数字可以 $ (seq 1 100)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  程序段落\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# for...do...done 语法——固定循环 第二种表达方式 数值处理")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v("初始值"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 限制值"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 赋值运算"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n\t程序段\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("函数"),t("code",[s._v("function")]),s._v("，需要写在程序最前面，且函数也支持"),t("code",[s._v("$0")]),s._v("、"),t("code",[s._v("$1")]),s._v("，表示函数名、参数1、参数2....")])]),s._v(" "),t("li",[t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 语法")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("fname")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  程序段\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("我们可使用sh -x script.sh来进行程序的debug。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("-n")]),s._v("：不执行脚本，仅查询语法问题。")]),s._v(" "),t("li",[t("code",[s._v("-v")]),s._v("：在执行脚本前，先将脚本文件的内容输出在屏幕上。")]),s._v(" "),t("li",[t("code",[s._v("-x")]),s._v("：将使用到的脚本内容显示在屏幕上。")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);