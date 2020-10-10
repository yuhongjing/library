---
title: Behavior Skill
---

# Behavior Skill
操作行为相关的CSS技巧。

## 使用overflow-scrolling支持弹性滚动
* 要点: IOS页面`非body元素`的滚动操作会非常卡，通过`overflow-scrolling: touch`调用Safari原生滚动来支持弹性滚动，增加页面滚动的流畅度
* 场景: **IOS页面滚动**
* 兼容: IOS自带`-webkit-overflow-scrolling`

```css
body {
    -webkit-overflow-scrolling: touch;
}
.elem {
    overflow: auto;
}
```

## 使用transform启动GPU硬件加速
* 要点: 有时执行动画可能会导致页面卡顿，可在特定元素中使用硬件加速来避免这个问题
* 场景: **动画元素**(绝对定位、同级中超过6个以上使用动画)
* 兼容: `transform`

```css
.elem {
    /* translateZ(0)亦可 */
    transform: translate3d(0, 0, 0);
}
```

## 使用attr()抓取data-*
* 要点: 在标签上自定义属性`data-*`，通过`attr()`获取其内容赋值到`content`上
* 场景: **提示框**
* 兼容: `data-*`、`attr()`

```css
.tips::after {
    content: attr(data-msg);
}
```

## 使用:valid和:invalid校验表单
* 要点: `<input>`使用伪类`:valid`和`:invalid`配合`pattern`校验表单输入的内容
* 场景: **表单校验**
* 兼容: `pattern`、`:valid`、`:invalid`

```css
/* 元素需要设置pattern属性 */
/* 校验成功 */
input:valid {
    border: #3c9;
}
/* 初始状态 */
input:invalid {
    border: #f66;
}
```

## 使用pointer-events禁用事件触发
* 要点: 通过`pointer-events: none`禁用事件触发(默认事件、冒泡事件、鼠标事件、键盘事件等)，相当于`<button>`的`disabled`
* 场景: **限时点击按钮**(发送验证码倒计时)、**事件冒泡禁止**(多个元素重叠且自带事件、a标签跳转)
* 兼容: `pointer-events`

```css
.disabled-trigger {
    pointer-events: none;
}
```

## 使用+或~美化选项框
* 要点: `<label>`使用`+`或`~`配合`for`绑定`radio`或`checkbox`的选择行为
* 场景: **选项框美化**、**选中项增加选中样式**
* 兼容: `+`、`~`

```css
/* 点击input 同级下一个label颜色改变 */
input:checked + label {
    background-color: #f90;
}
input:checked ~ label {
    background-color: #f90;
}
```

## 使用:focus-within分发冒泡响应
* 要点: 表单控件触发`focus`和`blur`事件后往父元素进行冒泡，在父元素通过`:focus-within`捕获该冒泡事件来设置样式
* 场景: **登录注册弹框**、**表单校验**、**离屏导航**、**导航切换**
* 兼容: `:focus-within`、`:placeholder-shown`

```css
/* 元素及元素后代获取焦点 */
.elem:focus-within {
    background-color: #f00;
}
/* input或textarea未输入的样式 */
input:placeholder-shown {
    border-color: sliver;
}
```

## 使用:hover描绘鼠标跟随
* 要点: 将整个页面等比划分成小的单元格，每个单元格监听`:hover`，通过`:hover`触发单元格的样式变化来描绘鼠标运动轨迹
* 场景: **鼠标跟随轨迹**、**水波纹**、**怪圈**
* 兼容: `:hover`
* 代码: [在线演示](https://codepen.io/JowayYoung/pen/wvwMLJY)

## 使用max-height切换自动高度
* 要点: 通过`max-height`定义收起的最小高度和展开的最大高度，设置两者间的过渡切换
* 场景: **隐藏式子导航栏**、**悬浮式折叠面板**
* 兼容: `max-height`

```css
p {
    max-height: 0;
    transition: all .5s;
}
p:hover {
    max-height: 600px;
}
```

## 使用transform模拟视差滚动
* 要点: 通过`background-attachment: fixed`或`transform`让多层背景以不同的速度移动，形成立体的运动效果
* 场景: **页面滚动**、**视差滚动文字阴影**、**视差滚动文字虚影**
* 兼容: `background-attachment`、`transform`

```css
/* 容器 */
.bruce {
    overflow: auto;
    perspective: 1px;
    transform-style: preserve-3d;
}
/* 页面滚动视差 */
.parallax-scrolling {
    background-attachment: fixed;
}
.parallax-scrolling .elem:nth-child(1) {
    transform: translateZ(-1px);
}
.parallax-scrolling .elem:nth-child(2) {
    transform: translateZ(-2px);
}
.parallax-scrolling .elem:nth-child(3) {
    transform: translateZ(-3px);
}
```

## 使用animation-delay保留动画起始帧
* 要点: 通过`transform-delay`或`animation-delay`设置负值时延保留动画起始帧，让动画进入页面不用等待即可运行
* 场景: **开场动画**
* 兼容: `transform`、`animation`

```css
.delay-elem {
    animation-delay: -1s;
}
```

## 使用resize拉伸分栏
* 要点: 通过`resize`设置横向自由拉伸来调整目标元素的宽度
* 场景: **富文本编辑器**、**分栏阅读**
* 兼容: `resize`

```css
.resize-bar {
    resize: horizontal;
}
```