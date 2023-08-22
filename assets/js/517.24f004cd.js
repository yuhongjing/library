(window.webpackJsonp=window.webpackJsonp||[]).push([[517],{888:function(t,s,a){"use strict";a.r(s);var e=a(28),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"移动端控制台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端控制台"}},[t._v("#")]),t._v(" 移动端控制台")]),t._v(" "),a("p",[t._v("页面引入脚本，即可开启虚拟的控制台。"),a("br"),t._v("\n插件有很多，腾讯等都有开发。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//cdn.jsdelivr.net/npm/eruda"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    eruda"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'控制台打印信息'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h2",{attrs:{id:"手机端访问电脑端本地项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手机端访问电脑端本地项目"}},[t._v("#")]),t._v(" 手机端访问电脑端本地项目")]),t._v(" "),a("p",[t._v("按照如下方式即可在手机端访问电脑端的项目")]),t._v(" "),a("ol",[a("li",[t._v("手机与电脑处于一个局域网内")]),t._v(" "),a("li",[t._v("电脑开启一个本地端口，例如localhost:8080")]),t._v(" "),a("li",[t._v("查看电脑端的ip地址，例如192.168.0.135")]),t._v(" "),a("li",[t._v("手机访问192.168.0.135:8080即可")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("如果是vue等开启本地服务器时"),a("br"),t._v("\n需要在package.json script dev 加上 --host 0.0.0.0"),a("br"),t._v("\n具体原因还未研究")])]),t._v(" "),a("h2",{attrs:{id:"weinre真机调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weinre真机调试"}},[t._v("#")]),t._v(" Weinre真机调试")]),t._v(" "),a("p",[t._v("Weinre(WebInspector Remote)是一款基于Web Inspector(Webkit)的远程调试工具，借助于网络，可以在PC上直接调试运行在移动设备上的远程页面。")]),t._v(" "),a("h3",{attrs:{id:"安装weinre"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装weinre"}},[t._v("#")]),t._v(" 安装Weinre")]),t._v(" "),a("p",[t._v("通过Node安装："),a("code",[t._v("npm install weinre -g")])]),t._v(" "),a("h3",{attrs:{id:"启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[t._v("#")]),t._v(" 启动")]),t._v(" "),a("p",[a("code",[t._v("weinre --httpPort 8090 --boundHost -all-")])]),t._v(" "),a("h3",{attrs:{id:"weinre参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weinre参数"}},[t._v("#")]),t._v(" weinre参数")]),t._v(" "),a("ul",[a("li",[t._v("httpPort：端口号，默认为8080")]),t._v(" "),a("li",[t._v("boundHost：[hostname | ip | -all-]，默认是'localhost'")]),t._v(" "),a("li",[t._v("debug：[true | false]，是否输出更多调试信息，默认为false")]),t._v(" "),a("li",[t._v("readTimeout：[seconds]，Server发送信息到Target/Client的超时时间，默认为5s")]),t._v(" "),a("li",[t._v("deathTimeout：[seconds]，默认为3倍的readTimeout，如果页面超过这个时间都没有任何响应，那么就会断开连接")])]),t._v(" "),a("h3",{attrs:{id:"调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调试"}},[t._v("#")]),t._v(" 调试")]),t._v(" "),a("p",[t._v("在需要调试的页面嵌入以下脚本：")]),t._v(" "),a("p",[a("code",[t._v('<script src="http://localhost:8090/target/target-script-min.js#anonymous"><\/script>')])]),t._v(" "),a("p",[t._v("将"),a("code",[t._v("localhost")]),t._v("替换为IP地址。")]),t._v(" "),a("p",[t._v("现在调试时，修改样式可以在手机端即时生效，并且可以查看控制台信息，唯一缺点就是无法进行断点调试。``")])])}),[],!1,null,null,null);s.default=r.exports}}]);