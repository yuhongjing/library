(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{431:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"eslint是个啥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint是个啥"}},[t._v("#")]),t._v(" eslint是个啥？")]),t._v(" "),a("p",[t._v("同一个项目，保持代码风格的一致，是非常重要的一个规范。")]),t._v(" "),a("p",[t._v("eslint可以极大的提高团队代码的一致性和规范性，eslint可以根据配置自动修复和格式化代码。")]),t._v(" "),a("h2",{attrs:{id:"那该如何安装这个玩意呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#那该如何安装这个玩意呢"}},[t._v("#")]),t._v(" 那该如何安装这个玩意呢？")]),t._v(" "),a("ol",[a("li",[t._v("通过Node安装eslint包")])]),t._v(" "),a("p",[t._v("在命令行敲下如下代码即可：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install eslint -g\n")])])]),a("p",[t._v("恭喜你，已经完成了eslint的安装。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("在项目根目录下添加"),a("code",[t._v(".eslintrc.js")]),t._v("文件")])]),t._v(" "),a("p",[t._v("此文件是用于校验代码格式，自行编写校验规则:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// eslint校验规则")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("规则查询"),a("a",{attrs:{href:"https://cn.eslint.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("配置vscode，保存时自动格式化代码")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"eslint.autoFixOnSave"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  启用保存时自动修复,默认只支持.js文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要校验的文件类型，具体情况看实际需求")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"eslint.validate"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"javascript"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"language"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"autoFix"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"language"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jsx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"autoFix"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"language"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"autoFix"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("想了解更多的话，可以看看vscode的"),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint"),a("OutboundLink")],1),t._v("插件。")]),t._v(" "),a("h2",{attrs:{id:"大功告成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大功告成"}},[t._v("#")]),t._v(" 大功告成")]),t._v(" "),a("p",[t._v("现在vscode保存代码时，就可以自动校正和修复代码。")]),t._v(" "),a("p",[t._v("当然也可以通过命令修复指定文件:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("eslint --ext .js,.vue src --fix // 修复src文件夹下的js和vue文件\neslint test.js --fix // 修复根目录下的test.js文件\n")])])]),a("h2",{attrs:{id:"类似的代码校验工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类似的代码校验工具"}},[t._v("#")]),t._v(" 类似的代码校验工具")]),t._v(" "),a("p",[t._v("除了eslint，其他优秀的代码校验工具。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://fecs.baidu.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FECS"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),a("p",[t._v("各大厂整理好的eslint规则，不用自己一条一条来配置，开箱即用。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/ecomfe/eslint-config",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度 eslint"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("当然，如果这些规则与你实际使用规则有冲突时，还可以强行覆盖。")]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    root"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@ecomfe/eslint-config'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@ecomfe/eslint-config/import'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@ecomfe/eslint-config/vue'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue/html-self-closing'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'import/no-unresolved'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);