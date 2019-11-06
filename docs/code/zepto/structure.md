---
title: Zepto之架构
sidebarDepth: 0
---

## 目录文件及作用
Zepto的目录有如下文件:  

文件名|功能
---|---
zepto.js|**核心模块**
event.js|**事件模块,处理各种移动端点击,滑动等事件**
callbacks.js|**管理封装回调函数**
ajax.js|**封装ajax相关的功能,实现了jsonp,封装了XMLHttpRequest**
data.js|**根据jQuery的$.fn.data()编写,处理节点的data-数据和存储DOM相关数据**
form.js|**表单方法,包含格式化数据和表单提交两部分**
assets.js|**处理Safari移动端对图片资源的限制,用于卸载图片释放内存**
ie.js|**改写getComputedStyle方法**
ios3.js|**针对IOS的兼容，实现了trim和reduce方法的兼容**
selector.js|**扩充选择器,支持CSS3及eq等zepto自定义的选择器**
touch.js|**移动端300ms延迟解决,并提供滑动swipe事件**
stack.js|**添加addSelf和end方法**
gesture.js|**基于IOS的Gesture事件的封装,利用scale属性,封装出pinch系列事件**
fx.js|**利用CSS3过渡和动画属性为Zepto提供动画的功能**
fx_methods.js|**提供了animate动画的一些常用方法**
detect.js|**检测设备的具体类型**
amd_layout.js|**兼容AMD标准**

