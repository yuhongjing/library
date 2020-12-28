(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{641:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue项目结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue项目结构"}},[t._v("#")]),t._v(" Vue项目结构")]),t._v(" "),a("p",[t._v("合理的项目架构，对于项目的扩展与维护是至关重要的。")]),t._v(" "),a("h2",{attrs:{id:"架构图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#架构图"}},[t._v("#")]),t._v(" 架构图")]),t._v(" "),a("p",[t._v("一般项目中，主要有三个文件夹与业务页面关系耦合。")]),t._v(" "),a("p",[a("code",[t._v("views")]),t._v("：具体模板，建议按模块区分文件。")]),t._v(" "),a("p",[a("code",[t._v("const")]),t._v(": 全局常量，建议按模块区分文件。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("views和const目录结构应该保持一致。")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("|-- src 项目主目录\n  |-- views 项目模板页面文件夹\n    |-- register 一级目录\n      |-- user 二级目录\n        |-- student 三级目录\n          |-- components\n            |-- show.vue 公共展示组件\n            |-- list 同名子组件文件夹\n              |-- list-search.vue\n              |-- ...\n          |-- list.vue 列表页\n          |-- detail.vue 详情页\n        |-- teather\n        |-- ... 保持同上\n      |-- admin 二级目录\n        |-- president 只有二级目录的情况\n          |-- list.vue\n          |-- detail.vue\n    |-- home 只有一级目录的情况\n      |-- list.vue\n      |-- detail.vue\n    |-- ... 同上\n  |-- const 项目常量存放文件夹\n    |-- fields 表格表单 与views保持一致\n      |-- register\n        |-- user\n          |-- student\n            |-- components\n              |-- show.js\n              |-- list\n                |-- list-search.js\n            |-- list.js\n            |-- deatil.js\n")])])]),a("p",[a("strong",[t._v("无单独路由的组件，应该都放在components下")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"文件命名及路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件命名及路由"}},[t._v("#")]),t._v(" 文件命名及路由")]),t._v(" "),a("p",[t._v("文件命名一律为小写，多个单词以中划线"),a("code",[t._v("-")]),t._v("分隔，不使用小驼峰。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("|-- dcg-detail 文件名以这样的规范命名\n")])])]),a("p",[t._v("路由参数规则如下：")]),t._v(" "),a("p",[t._v("URL路径上的参数"),a("code",[t._v("path")]),t._v("，应该为中划线"),a("code",[t._v("-")]),t._v("分隔，不使用小驼峰。")]),t._v(" "),a("p",[t._v("而"),a("code",[t._v("Vue")]),t._v("依赖的"),a("code",[t._v("name")]),t._v("，使用小驼峰。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Layout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  redirect"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/dcg-detail'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/dcg-detail'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dcgDetail'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/views/dcg-detail'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    meta"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'home'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" icon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'table'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);