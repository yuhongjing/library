---
title: Layout Skill
sidebarDepth: 2
---

# Layout Skill
布局相关的CSS技巧。

## 使用vw定制rem自适应布局
* 要点: 移动端使用`rem布局`需要通过JS设置不同屏幕宽高比的`font-size`,结合`vw`单位和`calc()`可脱离JS的控制
* 场景: **rem页面布局**(不兼容低版本移动端系统)
* 兼容: `vw`、`calc()`

```css
/* 基于UI width=750px DPR=2的页面 */
html {
    font-size: calc(100vw / 7.5);
}
```

## 使用:nth-child()选择指定元素
* 要点: 通过`:nth-child()`筛选指定的元素设置样式
* 场景: **表格着色、边界元素排版**(首元素、尾元素、左右两边元素)
* 兼容: `:nth-child()`

```css
:nth-child(odd) {
    background-color: #f66;
}
:nth-child(even) {
    background-color: #66f;
}
:nth-child(n+6):nth-child(-n+10) {
    background-color: #3c9;
}
```

## 使用writing-mode排版竖文
* 要点: 通过`writing-mode`调整文本排版方向
* 场景: **竖行文字、文言文、诗词**
* 兼容: `writing-mode`

```css
.vertical-text {
    writing-mode: vertical-rl;
}
```

## 使用text-align-last对齐两端文本
* 要点: 通过`text-align-last: justify`设置文本两端对齐
* 场景: **未知字数中文对齐**
* 兼容: `text-align-last`

```css
.justify-text {
    text-align-last: justify;
}
```

## 使用:not()去除无用属性
* 要点: 通过`:not()`排除指定元素不使用设置样式
* 场景: **符号分割文字、边界元素排版**(首元素、尾元素、左右两边元素)
* 兼容: `:not`

```css
/* 除了最后一个元素，其余逗号分隔 */
:not(:last-child)::after {
    content: ','
}
/* 只显示前三个元素 */
:not(:nth-child(-n + 3)) {
    display: none;
}
```

## 使用object-fit规定图像尺寸
* 要点: 通过`object-fit`使图像脱离`background-size`的约束，使用`<img>`来标识图像背景尺寸
* 场景: **图像尺寸自适应**
* 兼容: `object-fit`

```css
.image-size {
    object-fit: cover;
    object-fit: fill;
    object-fit: contain;
    object-fit: scale-down;
}
```

## 使用overflow-x排版横向列表
* 要点: 通过`flexbox`或`inline-block`的形式横向排列元素，对父元素设置`overflow-x: auto`横向滚动查看
* 场景: **横向滚动列表、元素过多但位置有限的导航栏**
* 兼容: `overflow-x`

```css
.horizontal-list {
    overflow-x: scroll;
}
```

## 使用text-overflow控制文本溢出
* 要点: 通过`text-overflow: ellipsis`对溢出的文本在末端添加`...`
* 场景: **单行文字溢出、多行文字溢出**
* 兼容: `text-overflow`、`line-clamp`、`box-orient`

```css
/* 单行省略 */
.sl-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
/* 多行省略 */
.ml-ellipsis {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
```

## 使用transform描绘1px边框
* 要点: 分辨率比较低的屏幕下显示1px的边框会显得模糊，通过`::before`或`::after`和`transform`模拟细腻的1px边框
* 场景: **容器1px边框**
* 兼容: `transform`

```css
.thin {
    position: relative;
}
.thin::after {
    position: absolute;
    left: 0;
    top: 0;
    border: 1px solid #f66;
    width: 200%;
    height: 200%;
    content: "";
    transform: scale(.5);
    transform-origin: left top;
}
```

## 使用transform翻转内容
* 要点: 通过`transform: scale3d()`对内容进行翻转(水平、垂直、倒序)
* 场景: **内容翻转**
* 兼容: `transform`

```css
/* 水平翻转 */
.x-axis {
    transform: scale3d(1, -1, 1);
}
/* 垂直翻转 */
.y-axis {
    transform: scale3d(-1, 1, 1);
}
/* 倒序翻转 */
.reverse {
    transform: scale3d(-1, -1, 1);
}
```

## 使用letter-spacing排版倒序文本
* 要点: 通过`letter-spacing`设置负值字体间距将文本倒序
* 场景: **文言文、诗词**
* 兼容: `letter-spacing`

```css
/* letter-spacing最少为font-size的2倍 */
.reverse-text {
    font-size: 16px;
    letter-spacing: -32px;
}
```

## 使用margin-left排版左重右轻列表
* 要点: 使用`flexbox横向布局`时，最后一个元素通过`margin-left: auto`实现向右对齐
* 场景: **右侧带图标的导航栏**
* 兼容: `margin`

```css
:last-child {
    margin-left: auto;
}
```