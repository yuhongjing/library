---
title: 滚动条
---

# 浏览器-滚动条行为
整理滚动相关的`方法`和`属性`。

## 分类
滚动分为`全局滚动(浏览器窗口)`和`局部滚动(自定义盒子)`。  
`全局滚动`需调用`window`对象、`局部滚动`则需先获取`指定的DOM`再调用`相应的API`。

## 如何设置全局滚动条高度
1. 最常用的方法
```js
window.scrollTo(0, 0);

// or
window.scrollTo({
    left: 0,
    top: 100
});
```

2. 也可以设置`相对滚动`
```js
window.scrollBy(0, 100);

// or
window.scrollBy({
    left: 0,
    top: 100
});
```

3. 或者利用`scrollTop`
```js
document.scrollingElement.scrollTop = 100;
```

::: tip 注意
`scrollTo`跟`scrollBy`的参数是一样的。  
区别在于`scrollBy`的滚动距离是相对于当前滚动条的位置滚动。
:::

## 如何指定一个元素显示在视窗
1. 最常用的方法
```js
// 获取元素的offsetTop(元素距离文档顶部的距离)
let offsetTop = document.querySelector(".box").offsetTop;

// 设置滚动条的高度
window.scrollTo(0, offsetTop);
```

2. 利用`锚点`
```html
<a href="#box">盒子出现在顶部</a>
<div id="box">我是锚点元素</div>
```

3. 利用`scrollIntoView`展现
```js
document.querySelector(".box").scrollIntoView();

// 还可以指定元素的出现位置
document.querySelector(".box").scrollIntoView({
    block: "start" || "center" || "end"
});
```

## 如何设置滚动具有平滑的过渡效果
1. 利用每个方法的`参数`设置
```js
window.scrollTo({
    behavior: "smooth"
});

window.scrollBy({
    behavior: "smooth"
});

document.querySelector(".box").scrollIntoView({
    behavior: "smooth"
});
```

2. 利用`css`属性设置
```css
html {
    scroll-behavior: smooth;
}

/* 所有 */
* {
    scroll-behavior: smooth;
}
```

::: tip 注意
设置该属性后，所有方法都不用设置`behavior`参数了。
:::

## 其他有趣的知识点
### scrollingElement
该对象可以非常`兼容`地获取`scrollTop`、`scrollHeight`等属性，在`移动端`跟`PC端`都屡试不爽。
```js
// 从前
let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

// 现在
let scrollHeight = document.scrollingElement.scrollHeight;
```

### 滚动到底部
```js
window.scrollTo({
    left: 0,
    top: document.scrollingElement.scrollHeight
});

// 或者懒人做法
window.scrollTo(0, 999999);
```

### 解决IOS设备局部滚动不顺畅(粘手)
除了浏览器原生滚动，`自定义的滚动条`都会出现滚动不顺畅的问题。  
添加以下属性即可:
```css
.box {
    -webkit-overflow-scrolling: touch;
}
```

### 滚动传播
指有多个`滚动区域`，当一个`滚动区域`滚动完之后，继续滚动会`传播到`父区域继续滚动的行为。
```css
.box {
    /* 阻止滚动传播 */
    overscroll-behavior: contain;
}
```

### 滚动结束后，强制滚动到指定元素
应用场景: `轮播图`、`全屏滚动`等。
```css
ul {
    scroll-snap-type: x mandatory;

    li {
        scroll-snap-align: start;
    }
}
```