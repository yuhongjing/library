(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{577:function(e,t,v){"use strict";v.r(t);var l=v(28),o=Object(l.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"branch-规范"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#branch-规范"}},[e._v("#")]),e._v(" branch 规范")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("master")]),e._v(" 主分支，负责记录上线版本的迭代，该分支代码与线上代码是完全一致的。")]),e._v(" "),v("li",[v("code",[e._v("develop")]),e._v(" 开发分支，负责记录相对稳定的版本。")]),e._v(" "),v("li",[v("code",[e._v("feature/*")]),e._v(" 特征(功能)分支，用于开发新的功能，不同的功能创建不同的的功能分支，功能分支开发完成并自测通过之后，需要合并到develop分支，删除该分支。（基于develop分支创建）")]),e._v(" "),v("li",[v("code",[e._v("bugfix/*")]),e._v(" bug修复分支，用于修复不紧急的bug，普通bug均需要创建bugfix分支开发，开发完成自测没问题之后，合并到develop分支后，删除该分支。（基于develop分支创建）")]),e._v(" "),v("li",[v("code",[e._v("release/*")]),e._v(" 发布分支，用于代码上线准备，由测试同学发布到测试环境进行测试，测试过程中发现bug需要开发人员在该分支上进行修复，所有bug修复完后，在上线之前，需要合并该分支到master和develop分支。（基于develop分支创建）")]),e._v(" "),v("li",[v("code",[e._v("hotfix/*")]),e._v(" 紧急bug修复分支，该分支仅在紧急情况下适用，用于紧急修复线上bug，修复完成后，需要合并该分支到master和develop分支。（基于master分支创建）")])])])}),[],!1,null,null,null);t.default=o.exports}}]);