---
title: Figure Skill
---

# Figure Skill
图形相关的CSS技巧。

## 使用div描绘各种图形
* 要点: `<div>`配合其伪元素(`::before`、`::after`)通过`clip`、`transform`等方式绘制各种图形
* 场景: **各种图形容器**
* 兼容: `clip`、`transform`
* 代码: [CSS-Tricks](https://css-tricks.com/the-shapes-of-css/)

## 使用mask雕刻镂空背景
* 要点: 通过`mask`为图像背景生成蒙版提供遮罩效果
* 场景: **高斯模糊蒙层**、**票券(电影票、购物卡)**、**遮罩动画**
* 兼容: `mask`、`perspective`、`transform-style`、`animation`

```less
$mask-bg: "https://yangzw.vip/static/codepen/mask-bg.jpg";
$mask-text: "https://yangzw.vip/static/codepen/mask-text.jpg";
$logo: "https://yangzw.vip/static/codepen/logo-netease.svg";

.bruce {
    overflow: hidden;
    &::after {
        position: absolute;
        left: -20px;
        right: -20px;
        top: -20px;
        bottom: -20px;
        background: url($mask-bg) no-repeat center/cover;
        filter: blur(10px);
        content: "";
    }
}
.mask-layer {
    position: relative;
    z-index: 9;
    width: 600px;
    height: 300px;
    background: url($mask-text) left center/150% auto;
    mask: url($logo) center/cover;
    animation: move 10s infinite;
}
@keyframes move {
    0% {
        background-position-x: 0;
    }
    50% {
        background-position-x: 100%;
    }
}
```

## 使用linear-gradient描绘波浪线
* 要点: 通过`linear-gradient`绘制波浪线
* 场景: **文字强化显示**、**文字下划线**、**内容分割线**
* 兼容: `gradient`

```less
@mixin waveline($h, $color: #f66) {
    position: relative;
    &::after {
        position: absolute;
        left: 0;
        top: 100%;
        width: 100%;
        height: $h;
        background: linear-gradient(135deg, transparent, transparent 45%, $color, transparent 55%, transparent 100%), linear-gradient(45deg, transparent, transparent 45%, $color, transparent 55%, transparent 100%);
        background-size: $h * 2 $h * 2;
      content: "";
    }
}
.waveline-text {
    height: 20px;
    line-height: 20px;
    letter-spacing: 10px;
    @include waveline(10px);
}
```

## 使用linear-gradient描绘彩带
* 要点: 通过`linear-gradient`绘制间断颜色的彩带
* 场景: **主题化**
* 兼容: `gradient`

```css
.colour-bar {
    width: 500px;
    height: 50px;
    background-image: repeating-linear-gradient(90deg, #f66, #f66 50px, #66f 50px, #66f 100px);
}
```

## 使用conic-gradient描绘饼图
* 要点: 通过`conic-gradient`绘制多种色彩的饼图
* 场景: **项占比饼图**
* 兼容: `gradient`

```css
.pie-chart {
    border-radius: 100%;
    width: 300px;
    height: 300px;
    background-image: conic-gradient(#f66 0 25%, #66f 25% 30%, #f90 30% 55%, #09f 55% 70%, #3c9 70% 100%);
}
```

## 使用linear-gradient描绘方格背景
* 要点: 使用`linear-gradient`绘制间断颜色的彩带进行交互生成方格
* 场景: **格子背景**、**占位图**
* 兼容: `gradient`

```css
.square-bg {
    width: 500px;
    height: 300px;
    background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%),
        linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%);
    background-position: 0 0, 20px 20px;
    background-size: 40px 40px;
}
```

## 使用box-shadow描绘单侧投影
* 要点: 通过`box-shadow`生成投影，且模糊半径和负的扩张半径一致，使投影偏向一侧
* 场景: **容器投影**、**背景补间动画**、**立体投影**、**文字立体投影**、**文字渐变立体投影**、**长投影**、**霓虹灯**、**灯光阴影**
* 兼容: `box-shadow`、`filter`、`text-shadow`

```css
.aside-shadow {
    box-shadow: -7px 0 5px -5px #f90;
}
```

## 使用filter描绘头像彩色阴影
* 要点: 通过`filter: blur() brightness() opacity()`模拟阴影效果
* 场景: **头像阴影**
* 兼容: `filter`

```css
.avatar-shadow {
    filter: blur(10px) brightness(80%) opacity(.8);
}
```

## 使用box-shadow裁剪图像
* 要点: 通过`box-shadow`模拟蒙层实现中间的镂空
* 场景: **图片裁剪**、**新手引导**、**背景镂空**、**投射定位**
* 兼容: `box-shadow`

```css
.img-cliper {
    box-shadow: 0 0 0 9999px rgba(#000, .5);
}
```

## 使用outline描绘内边框
* 要点: 通过`outline`设置轮廓进行描边，可设置`outline-offset`设置内描边
* 场景: **内描边**、**外描边**
* 兼容: `outline`

```css
.outside-border {
    outline: 10px dashed #09f;
    outline-offset: -50px;
}
```