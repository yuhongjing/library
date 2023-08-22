(window.webpackJsonp=window.webpackJsonp||[]).push([[416],{786:function(t,e,v){"use strict";v.r(e);var p=v(28),_=Object(p.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"pnpm构建monorepo"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pnpm构建monorepo"}},[t._v("#")]),t._v(" pnpm构建monorepo")]),t._v(" "),v("p",[t._v("Monorepo中文：单体仓库。就是单个项目仓库，其中包含"),v("strong",[t._v("多个")]),t._v("开发项目project/模块module/包package。虽然这些项也许是互相关联的，但它们通常在逻辑上独立并被不同的团队负责编写，运行。例如React源码就是monorepo。")]),t._v(" "),v("p",[t._v("monorepo是一种思想并非实际的工具，因此本篇文章就是介绍如何通过pnpm来构建monorepo仓库。")]),t._v(" "),v("p",[t._v("PNPM官方文档：https://pnpm.io/zh/")]),t._v(" "),v("h2",{attrs:{id:"什么是pnpm"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是pnpm"}},[t._v("#")]),t._v(" 什么是PNPM")]),t._v(" "),v("blockquote",[v("p",[t._v("Fast, disk space efficient package manager")])]),t._v(" "),v("p",[t._v("pnpm是新一代node包管理器。它由npm/yarn衍生而来，但却解决了npm/yarn内部潜在的bug，并且极大地优化了性能，扩展了使用场景。")]),t._v(" "),v("p",[t._v("pnpm相比yarn/npm，安装包更快速，对包的依赖管理更扁平，对磁盘占用也有优势。")]),t._v(" "),v("h2",{attrs:{id:"初始化项目"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目"}},[t._v("#")]),t._v(" 初始化项目")]),t._v(" "),v("p",[t._v("一、执行"),v("code",[t._v("pnpm init")]),t._v("，初始化项目")]),t._v(" "),v("p",[t._v("二、创建"),v("code",[t._v("ppm-workspace.yaml")]),t._v("文件")]),t._v(" "),v("div",{staticClass:"language-yaml extra-class"},[v("pre",{pre:!0,attrs:{class:"language-yaml"}},[v("code",[v("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("packages")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'packages/*'")]),t._v("\n")])])]),v("p",[t._v("三、创建"),v("code",[t._v("packages")]),t._v("文件夹")]),t._v(" "),v("h2",{attrs:{id:"cli命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cli命令"}},[t._v("#")]),t._v(" CLI命令")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("功能")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("pnpm init")])]),t._v(" "),v("td",[t._v("初始化仓库")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("pnpm install")])]),t._v(" "),v("td",[t._v("为所有包安装依赖")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("pnpm add react -g")])]),t._v(" "),v("td",[t._v("安装"),v("code",[t._v("global")]),t._v(" 依赖")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("pnpm add/remove react -wP")])]),t._v(" "),v("td",[t._v("安装全局公共"),v("code",[t._v("dependencies")]),t._v("依赖")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("pnpm add/remove react -wD")])]),t._v(" "),v("td",[t._v("安装全局公共"),v("code",[t._v("devDependencies")]),t._v("依赖")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("pnpm add/remove react -P --fliter pkg1(项目名)")])]),t._v(" "),v("td",[t._v("给pkg1单独安装"),v("code",[t._v("dependencies")]),t._v("依赖")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("pnpm add/remove react -D --filter pkg1(项目名)")])]),t._v(" "),v("td",[t._v("给pkg1单独安装"),v("code",[t._v("devDependencies")]),t._v("依赖")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("pnpm add/remove pkg1 --filter pkg2")])]),t._v(" "),v("td",[t._v("将pkg1包安装到pkg2中")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("pnpm update --latest")])]),t._v(" "),v("td",[t._v("更新所有依赖项")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("pnpm update pkg1@2")])]),t._v(" "),v("td",[t._v("将pkg1更新到v2版本")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v('pnpm update "@babel/*"')])]),t._v(" "),v("td",[t._v("更新"),v("code",[t._v("@babel")]),t._v("范围内的所有依赖项目")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("pnpm link <dir>")])]),t._v(" "),v("td",[t._v("使当前包可在系统范围内或其它位置访问")])])])])])}),[],!1,null,null,null);e.default=_.exports}}]);