---
title: CSS书写规范
---

# 前言

本文内容部分参考网易前端规范：[NEC](http://nec.netease.com/)

## 样式属性顺序

单个样式规则下的属性在书写时，应该按以下规范书写。

1. Positioning Model布局方式、位置，相关属性包括：position、top、z-index、display、float等。
2. Box Model盒模型，相关属性包括：width、height、padding、margin、border、overflow等。
3. Typographic文本排版，相关属性包括：font、line-height、text-align等。
4. Visual视觉外观，相关属性包括：color、background、list-style、transform、animation等。

按以上顺序书写，提高代码可读性。

举个例子：

```css
.box {
  /* 首先 书写位置相关属性 */
  position: relative;
  top: 0;
  /* 其次 书写盒模型相关属性 */
  margin: 0 auto;
  width: 50%;
  /* 第三 书写文本排版相关属性 */
  font-size: 14px;
  line-height: 1.5;
  /* 最后 书写视觉外观相关属性 */
  color: red;
  transform: scale(1.2);
}
```

## CSS选择器命名规则

### 分类式命名法

前端组件化命名方式

|      名称      | 命名  | 意义                                             |
| :------------: | :---: | :----------------------------------------------- |
|   布局(grid)   | `.g-` | 将页面分割为几个大块，通常有头部、主体、主栏等。 |
|  模块(module)  | `.m-` | 可以复用的较大的整体，比如导航、登录、注册等。   |
|   元件(unit)   | `.u-` | 不可再分割的元组件，例如按钮、loading等。        |
| 功能(function) | `.f-` | 常用的高频样式，例如清除浮动，文本省略等。       |
|      状态      | `.z-` | 状态类样式前缀，只能作为组合或后代出现。         |
|   Javascript   | `.j-` | 专用于JS获取节点，无样式。                       |

下面是几个需要注意的点：

1. 不要使用`_`下划线来命名CSS。
2. ID采用驼峰式命名(除非用作锚点，尽量不使用ID)。
3. SCSS中的变量、函数、混合、placeholder采用驼峰式命名。
4. 命名方式为(**BEM**)，即`类-体-修饰符`，例如`.u-btn-active`。

## 最佳写法

```css
/* 这是某个模块 */
.m-nav {} /* 模块容器 */

.m-nav li, .m-nav a {} /* 先共性，优化组合 */
.m-nav li {} /* 后个性，语义化标签选择器 */
.m-nav a {} /* 后个性中的共性，按结构顺序 */
.m-nav a.a1 {} /* 后个性中的个性 */
.m-nav a.a2 {} /* 后个性中的个性 */

.m-nav .z-crt a {} /* 交互状态变化 */
.m-nav .z-crt a.a1 {}
.m-nav .z-crt a.a2 {}

.m-nav .btn {} /* 典型后代选择器 */
.m-nav .btn-1 {} /* 典型后代选择器扩展 */
.m-nav .btn-dis {} /* 典型后代选择器扩展(状态) */
.m-nav .btn.z-dis {} /* 作用同上,请二选一 */

.m-nav .m-sch {} /* 控制内部其它模块位置 */
.m-nav .u-sel {} /* 控制内部其它元件位置 */

.m-nav-1 {} /* 模块扩展 */
.m-nav-1 li {}

.m-nav-dis {} /* 模块扩展(状态) */
.m-nav.z-dis {} /* 作用同上，请二选一 */
```

## 统一语义理解和命名

### 布局

|    语义    |   命名   |   简写   |
| :--------: | :------: | :------: |
|    文档    |   doc    |   Doc    |
|    头部    |   head   |   head   |
|    主体    |   body   |    bd    |
|    尾部    |   foot   |    ft    |
|    主栏    |   main   |    mn    |
| 主栏子容器 |  mainc   |   mnc    |
|    侧栏    |   side   |    sd    |
| 侧栏子容器 |  sidec   |   sdc    |
|   盒容器   | wrap/box | wrap/box |

### 模块、元件

|  语义  |     命名     | 简写  |
| :----: | :----------: | :---: |
|  导航  |     nav      |  nav  |
| 子导航 |    subnav    | snav  |
| 面包屑 |    crumb     |  crm  |
|  菜单  |     menu     | menu  |
| 选项卡 |     tab      |  tab  |
| 标题区 |  head/title  | hd/tt |
| 内容区 | body/content | bd/ct |
|  列表  |     list     | list  |
|  表格  |    table     |  tb   |
|  表单  |     form     |  fm   |
|  热点  |     hot      |  hot  |
|  排行  |     top      |  top  |
|  登录  |    login     |  log  |
|  标志  |     logo     | logo  |
|  广告  |  advertise   |  ad   |
|  搜索  |    search    |  sch  |
| 幻灯片 |    slide     |  sld  |
|  提示  |     tips     | tips  |
|  帮助  |     help     | help  |
|  新闻  |     news     | news  |
|  下载  |   download   |  did  |
|  注册  |    regist    |  reg  |
|  投票  |     vote     | vote  |
|  版权  |  copyright   | cprt  |
|  结果  |    result    |  rst  |
|  标题  |    title     |  tt   |
|  按钮  |    button    |  btn  |
|  输入  |    input     |  ipt  |

### 功能

|   语义   |        命名         | 简写 |
| :------: | :-----------------: | :--: |
| 清除浮动 |      clearboth      |  cb  |
|  左浮动  |      floatleft      |  fl  |
|   内联   |     inlineblock     |  ib  |
| 文本居中 |   textaligncenter   | tac  |
| 垂直居中 | verticalalignmiddle | vam  |
| 溢出隐藏 |   overflowhidden    |  oh  |
| 完全消失 |     displaynone     |  dn  |
| 字体大小 |      fontsize       |  fz  |
| 字体粗细 |     fontweight      |  fs  |
| 字体颜色 |      fontcolor      |  fc  |
| 背景颜色 |   backgroundcolor   | bgc  |
| 边框颜色 |     bordercolor     | bdc  |

### 状态

|  语义  |   命名   | 简写 |
| :----: | :------: | :--: |
|  选中  | selected | sel  |
|  当前  | current  | crt  |
|  显示  |   show   | show |
|  隐藏  |   hide   | hide |
|  打开  |   open   | open |
|  关闭  |  close   |      |
|  出错  |  error   | err  |
| 不可用 | disabled | dis  |

注意事项：

1. 一律小写，使用中划线区分。
2. 尽量不使用缩写。