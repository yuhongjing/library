(window.webpackJsonp=window.webpackJsonp||[]).push([[544],{914:function(t,_,v){"use strict";v.r(_);var r=v(28),a=Object(r.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"react"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#react"}},[t._v("#")]),t._v(" React")]),t._v(" "),v("blockquote",[v("p",[t._v("基于React 17.0.0源码解析。")]),t._v(" "),v("p",[t._v("GitHub仓库地址：https://github.com/facebook/react")])]),t._v(" "),v("h2",{attrs:{id:"api解析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#api解析"}},[t._v("#")]),t._v(" API解析")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("API")]),t._v(" "),v("th",[t._v("作用")]),t._v(" "),v("th",[t._v("文件地址")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("createElement")]),t._v(" "),v("td",[t._v("创建React组件")]),t._v(" "),v("td",[v("a",{attrs:{href:"./api/createElement"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("cloneElement")]),t._v(" "),v("td",[t._v("复制React组件")]),t._v(" "),v("td",[v("a",{attrs:{href:"./api/cloneElement"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("isValidElement")]),t._v(" "),v("td",[t._v("校验React组件")]),t._v(" "),v("td",[v("a",{attrs:{href:"./api/isValidElement"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("createFactory（废弃）")]),t._v(" "),v("td",[t._v("创建指定类型的React组件")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("lazy")]),t._v(" "),v("td",[t._v("懒加载异步组件")]),t._v(" "),v("td",[v("a",{attrs:{href:"./api/lazy"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("memo")]),t._v(" "),v("td",[t._v("缓存组件")]),t._v(" "),v("td",[v("a",{attrs:{href:"./api/memo"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("version（常量）")]),t._v(" "),v("td",[t._v("获取React版本号")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("Fragment（常量）")]),t._v(" "),v("td",[t._v("Fragment标识")]),t._v(" "),v("td",[v("a",{attrs:{href:"./api/symbol"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("Profiler（常量）")]),t._v(" "),v("td",[t._v("Profiler标识")]),t._v(" "),v("td",[v("a",{attrs:{href:"./api/symbol"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("StrictMode（常量）")]),t._v(" "),v("td",[t._v("严格模式标识")]),t._v(" "),v("td",[v("a",{attrs:{href:"./api/symbol"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("unstable_DebugTracingMode（常量）")]),t._v(" "),v("td"),t._v(" "),v("td",[v("a",{attrs:{href:"./api/symbol"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("Suspense（常量）")]),t._v(" "),v("td"),t._v(" "),v("td",[v("a",{attrs:{href:"./api/symbol"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("SuspenseList（常量）")]),t._v(" "),v("td"),t._v(" "),v("td",[v("a",{attrs:{href:"./api/symbol"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("unstable_LegacyHidden（常量）")]),t._v(" "),v("td"),t._v(" "),v("td",[v("a",{attrs:{href:"./api/symbol"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("unstable_Scope（常量）")]),t._v(" "),v("td"),t._v(" "),v("td",[v("a",{attrs:{href:"./api/symbol"}},[t._v("跳转")])])])])]),t._v(" "),v("h2",{attrs:{id:"基本概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("文件地址")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("宏观包结构")]),t._v(" "),v("td",[v("a",{attrs:{href:"./basic/%E5%AE%8F%E8%A7%82%E5%8C%85%E7%BB%93%E6%9E%84"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("两大工作循环")]),t._v(" "),v("td",[v("a",{attrs:{href:"./basic/%E4%B8%A4%E5%A4%A7%E5%B7%A5%E4%BD%9C%E5%BE%AA%E7%8E%AF"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("高频对象")]),t._v(" "),v("td",[v("a",{attrs:{href:"./basic/%E9%AB%98%E9%A2%91%E5%AF%B9%E8%B1%A1"}},[t._v("跳转")])])])])]),t._v(" "),v("h2",{attrs:{id:"运行核心"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#运行核心"}},[t._v("#")]),t._v(" 运行核心")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("文件地址")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("启动过程")]),t._v(" "),v("td",[v("a",{attrs:{href:"./core/%E5%90%AF%E5%8A%A8%E8%BF%87%E7%A8%8B"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("Reconciler 运作流程")]),t._v(" "),v("td",[v("a",{attrs:{href:"./core/reconciler%E8%BF%90%E4%BD%9C%E6%B5%81%E7%A8%8B"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("优先级管理")]),t._v(" "),v("td",[v("a",{attrs:{href:"./core/%E4%BC%98%E5%85%88%E7%BA%A7%E7%AE%A1%E7%90%86"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("调度原理")]),t._v(" "),v("td",[v("a",{attrs:{href:"./core/%E8%B0%83%E5%BA%A6%E5%8E%9F%E7%90%86"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("Fiber 树构造（基础准备）")]),t._v(" "),v("td",[v("a",{attrs:{href:"./core/fiber%E6%A0%91%E6%9E%84%E9%80%A0%E5%9F%BA%E7%A1%80%E5%87%86%E5%A4%87"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("Fiber 树构造（初次创建）")]),t._v(" "),v("td",[v("a",{attrs:{href:"./core/fiber%E6%A0%91%E6%9E%84%E9%80%A0%E5%88%9D%E6%AC%A1%E5%88%9B%E5%BB%BA"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("Fiber 树构造（对比更新）")]),t._v(" "),v("td",[v("a",{attrs:{href:"./core/fiber%E6%A0%91%E6%9E%84%E9%80%A0%E5%AF%B9%E6%AF%94%E6%9B%B4%E6%96%B0"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("Fiber 树渲染")]),t._v(" "),v("td",[v("a",{attrs:{href:"./core/fiber%E6%A0%91%E6%B8%B2%E6%9F%93"}},[t._v("跳转")])])])])]),t._v(" "),v("h2",{attrs:{id:"状态管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#状态管理"}},[t._v("#")]),t._v(" 状态管理")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("文件地址")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("状态与副作用")]),t._v(" "),v("td",[v("a",{attrs:{href:"./state/%E7%8A%B6%E6%80%81%E4%B8%8E%E5%89%AF%E4%BD%9C%E7%94%A8"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("Hook 原理（概览）")]),t._v(" "),v("td",[v("a",{attrs:{href:"./state/Hook%E5%8E%9F%E7%90%86%E6%A6%82%E8%A7%88"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("Hook 原理（状态Hook）")]),t._v(" "),v("td",[v("a",{attrs:{href:"./state/Hook%E5%8E%9F%E7%90%86%E7%8A%B6%E6%80%81"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("Hook 原理（副作用Hook）")]),t._v(" "),v("td",[v("a",{attrs:{href:"./state/Hook%E5%8E%9F%E7%90%86%E5%89%AF%E4%BD%9C%E7%94%A8"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("Context 原理")]),t._v(" "),v("td",[v("a",{attrs:{href:"./state/context%E5%8E%9F%E7%90%86"}},[t._v("跳转")])])])])]),t._v(" "),v("h2",{attrs:{id:"交互"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#交互"}},[t._v("#")]),t._v(" 交互")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("文件地址")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("合成事件")]),t._v(" "),v("td",[v("a",{attrs:{href:"./interact/%E5%90%88%E6%88%90%E4%BA%8B%E4%BB%B6"}},[t._v("跳转")])])])])]),t._v(" "),v("h2",{attrs:{id:"高频算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#高频算法"}},[t._v("#")]),t._v(" 高频算法")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("文件地址")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("调和算法")]),t._v(" "),v("td",[v("a",{attrs:{href:"./algorithm/%E8%B0%83%E5%92%8C%E7%AE%97%E6%B3%95"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("位运算")]),t._v(" "),v("td",[v("a",{attrs:{href:"./algorithm/%E4%BD%8D%E8%BF%90%E7%AE%97"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("深度优先遍历")]),t._v(" "),v("td",[v("a",{attrs:{href:"./algorithm/%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E9%81%8D%E5%8E%86"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("堆排序")]),t._v(" "),v("td",[v("a",{attrs:{href:"./algorithm/%E5%A0%86%E6%8E%92%E5%BA%8F"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("链表操作")]),t._v(" "),v("td",[v("a",{attrs:{href:"./algorithm/%E9%93%BE%E8%A1%A8%E6%93%8D%E4%BD%9C"}},[t._v("跳转")])])]),t._v(" "),v("tr",[v("td",[t._v("栈操作")]),t._v(" "),v("td",[v("a",{attrs:{href:"./algorithm/%E6%A0%88%E6%93%8D%E4%BD%9C"}},[t._v("跳转")])])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);