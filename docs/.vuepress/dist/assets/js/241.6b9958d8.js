(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{602:function(s,e,t){"use strict";t.r(e);var n=t(27),a=Object(n.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"react项目结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react项目结构"}},[s._v("#")]),s._v(" React项目结构")]),s._v(" "),t("p",[s._v("合理的项目架构，对于项目的扩展与维护是至关重要的。")]),s._v(" "),t("h2",{attrs:{id:"架构图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#架构图"}},[s._v("#")]),s._v(" 架构图")]),s._v(" "),t("p",[s._v("一般项目中，主要有三个文件夹与业务页面关系耦合。")]),s._v(" "),t("p",[t("code",[s._v("api")]),s._v("：API，不建议按业务区分文件。")]),s._v(" "),t("p",[t("code",[s._v("views")]),s._v("：具体模板，建议按业务区分文件（细分）。")]),s._v(" "),t("p",[t("code",[s._v("const")]),s._v(": 常量，建议按业务区分文件（细分）。")]),s._v(" "),t("p",[t("code",[s._v("style")]),s._v(": 样式文件，建议按业务区分文件（粗分）。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("细分： 按页面区分。")]),s._v(" "),t("p",[s._v("粗分：按模块区分，一个模块可能包含多个页面。")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("|-- src 项目主目录\n  |-- api\n    |-- index.js 项目API文件，不建议区分各个模块的API。\n  |-- views 项目模板页面文件夹\n    |-- Home 模块内，存放此组件的一级页面\n      |-- components 该模块内，所有模块的子组件\n        |-- home list页的子组件\n          |-- Query.jsx\n          |-- index.js 导出所有子组件\n        |-- detail\n          |-- Dashboard.jsx\n          |-- index.js 导出所有子组件\n        |-- ... 其他具体页面的子组件\n      |-- Home.jsx 列表页面 一般为展示列表表格页\n      |-- Detail.jsx 详情页面\n      |-- ...其他具体页面\n      |-- index.js 导出该模块下所有组件\n    |-- module2 同上\n    |-- ... 同上\n  |-- style\n    |-- layout-style 项目layout相关样式\n    |-- view-style\n      |-- home.module.scss 主页样式，建议一个模块(可能包含多页)一个样式文件即可\n      |-- ...其他模块样式\n    |-- reset.scss 重置样式\n    |-- global.scss 全局样式\n  |-- const 项目常量存放文件夹\n    |-- fields 表格表单等\n      |-- home\n        |-- home 直接以模块名作为文件夹名，内部为子组件的fields\n          |-- query.js 子组件fields\n        |-- home.js 页面\n        |-- ...其他页面\n      |-- ...其他模块\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);