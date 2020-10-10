---
title: Color Skill
---

# Color Skill
颜色相关的CSS技巧。

## 使用color改变边框颜色
* 要点: `border`没有定义`border-color`是，设置`color`后，`border-color`会被定义成`color`
* 场景: **边框颜色与文字颜色相同**
* 兼容: `color`

```css
.elem {
    border: 1px solid;
    color: #f66;
}
```

## 使用filter开启悼念模式
* 要点: 通过`filter: grayscale()`设置灰度模式来悼念去世的人们
* 场景: **网站悼念**
* 兼容: `filter`

```css
html {
    filter: grayscale(100%);
}
```

## 使用::selection改变文本选择颜色
* 要点: 通过`::selection`根据主题颜色自定义文本选择颜色
* 场景: **主题化**
* 兼容: `::selection`

```css
/* 全局选中 */
::selection {
    background-color: #66f;
    color: #fff;
}
/* 个性化选中 */
.special::selection {
    background-color: #3c9;
}
```

## 使用linear-gradient控制背景渐变
* 要点: 通过`linear-gradient`设置背景渐变色并放大背景尺寸，添加背景移动效果
* 场景: **主题化**、**彩虹背景墙**
* 兼容: `gradient`、`animation`

```css
.gradient-bg {
    background: linear-gradient(135deg, #f66, #f90, #3c9, #09f, #66f) left center/400% 400%;
    animation: move 10s infinite;
}
@keyframes move {
  0%,
  100% {
      background-postion-x: left;
  }
  50% {
      background-postion-x: right;
  }
}
```

## 使用linear-gradient控制文本渐变
* 要点: 通过`linear-gradient`设置背景渐变色，配合`background-clip: text`对背景进行文本裁剪，添加滤镜动画
* 场景: **主题化**、**特色标题**
* 兼容: `gradient`、`background-clip`、`filter`、`animation`、`text-fill-color`

```css
.gradient-text {
    background-image: linear-gradient(90deg, #f66, #f90);
    background-clip: text;
    animation: hue 5s linear infinite;
    -webkit-text-fill-color: transparent;
}
@keyframes hue {
    form {
        filter: hue-rotate(0);
    }
    to {
        filter: hue-rotate(-1turn);
    }
}
```

## 使用caret-color改变光标颜色
* 要点: 通过`caret-color`根据主题颜色自定义光标颜色
* 场景: **主题化**
* 兼容: `caret-color`

```css
input {
    caret-color: #00f;
}
```

## 使用:scrollbar改变滚动条样式
* 要点: 通过`scrollbar`的`scrollbar-track`和`scrollbar-thumb`等属性来自定义滚动条样式
* 场景: **主题化**、**页面滚动**
* 兼容: `:scrollbar`

```css
.article {
    overflow: auto;
}
.article::-webkit-scrollbar {
    width: 5px;
}
.article::-webkit-scrollbar-track {
    background-color: #f0f0f0;
}
.article::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: #66f;
}
```

## 使用filter模拟Instagram滤镜
* 要点: 通过`filter`的滤镜组合来模拟`Instagram`滤镜
* 场景: **图片滤镜**
* 兼容: `filter`
* 扩展: [CSSgram](https://github.com/una/CSSgram/blob/master/README-CN.md)

```css
/* 其中一种滤镜 */
.obscure {
	  filter: brightness(80%) grayscale(20%) contrast(1.2) opacity(.6);
}
```