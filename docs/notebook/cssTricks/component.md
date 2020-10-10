---
title: Compoent Skill
---

# Compoent Skill
收集一些CSS效果组件。

## 迭代计数器
* 要点: 累计选项单位的计数器
* 场景: **章节目录**、**选项计数器**、**加法计数器**
* 兼容: `counters`
* 代码: [在线演示](https://codepen.io/JowayYoung/pen/rXqRPo)

## 下划线跟随导航栏
* 要点: 下划线跟随鼠标移动的导航栏
* 场景: **动态导航栏**
* 兼容: `+`
* 代码: [在线演示](https://codepen.io/JowayYoung/pen/eYOJbNv)

## 气泡背景墙
* 要点: 不间断冒出气泡的背景墙
* 场景: **动态背景**
* 兼容: `animation`
* 代码: [在线演示](https://codepen.io/JowayYoung/pen/GRKoPdK)

## 滚动指示器
* 要点: 提示滚动进度的指示器
* 场景: **阅读进度**
* 兼容: `calc()`、`gradient`
* 代码: [在线演示](https://codepen.io/JowayYoung/pen/ExYPMog)

## 故障文本
* 要点: 显示器故障形式的文本
* 场景: **错误提示**
* 兼容: `data-*`、`attr()`、`animation`
* 代码: [在线演示](https://codepen.io/JowayYoung/pen/xxKZNYv)

## 换色器
* 要点: 通过拾色器改变图像色相的换色器
* 场景: **图片色彩变换**
* 兼容: `mix-blend-mode`

```less
.color-changer {
    overflow: hidden;
    position: relative;
    height: 100%;
    input {
        position: absolute;
        width: 100%;
        height: 100%;
        cursor: pointer;
        mix-blend-mode: hue;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
```

## 状态悬浮球
* 要点: 展示当前状态的悬浮球
* 场景: **状态动态显示**、**波浪动画**
* 兼容: `gradient`、`animation`
* 代码: [在线演示](https://codepen.io/JowayYoung/pen/WNewOxa)

## 粘粘球
* 要点: 相交粘粘效果的双球回弹运动
* 场景: `粘粘动画`
* 兼容: `filter`、`animation`
* 代码: [在线演示](https://codepen.io/JowayYoung/pen/zYOqdBz)

## 商城票券
* 要点: 边缘带孔和中间折痕的票券
* 场景: **电影票**、**代金券**、**消费卡**
* 兼容: `gradient`
* 代码: [在线演示](https://codepen.io/JowayYoung/pen/rNBeYza)

## 倒影加载条
* 要点: 带有渐变倒影的加载条
* 场景: **加载提示**
* 兼容: `box-reflect`、`animation`
* 代码: [在线演示](https://codepen.io/JowayYoung/pen/GRKZzpg)

## 三维立方体
* 要点: 三维建模的立方体
* 场景: **三维建模**
* 兼容: `transform`、`perspective`、`transform-style`、`animation`
* 代码: [在线演示](https://codepen.io/JowayYoung/pen/PoYNgXY)

## 动态边框
* 要点: 鼠标悬浮时动态渐变显示的边框
* 场景: **悬浮按钮**、**边框动画**
* 兼容: `gradient`
* 代码: [在线演示](https://codepen.io/JowayYoung/pen/qBWZPvE)

## 标签页
* 要点: 可切换内容的标签页
* 场景: **内容切换**
* 兼容: `scroll-behavior`
* 代码: [在线演示](https://codepen.io/JowayYoung/pen/JjPRjMd)

## 标签导航栏
* 要点: 可切换内容的导航栏
* 场景: **页面切换**
* 兼容: `~`
* 代码: [在线演示](https://codepen.io/JowayYoung/pen/oNvzoZg)

## 折叠面板
* 要点: 可折叠内容的面板
* 场景: **隐藏式子导航栏**
* 兼容: `~`
* 代码: [在线演示](https://codepen.io/JowayYoung/pen/NWKRMjo)

## 星级评分
* 要点: 点击星星进行评分的按钮
* 场景: **评分**
* 兼容: `~`
* 代码: [在线演示](https://codepen.io/JowayYoung/pen/MWgjGMj)

## 加载指示器
* 要点: 变换`...`长度的加载提示
* 场景: **加载提示**
* 兼容: `animation`
* 代码: [在线演示](https://codepen.io/JowayYoung/pen/wvwoRbN)

## 自适应相册
* 要点: 自适应照片数量的相册
* 场景: **九宫格相册**、**微信相册**、**图集**
* 兼容: `:only-child`、`:first-child`、`:nth-child()`、`:nth-last-child()`、`~`
* 代码: [在线演示](https://codepen.io/JowayYoung/pen/pozNGyj)

## 圆角进度条
* 要点: 单一颜色的圆角进度条
* 场景: **进度条**
* 兼容: `gradient`
* 代码: [在线演示](https://codepen.io/JowayYoung/pen/jONBxaK)

## 螺纹进度条
* 要点: 渐变螺纹的进度条
* 场景: **进度条**、**加载动画**
* 兼容: `gradient`、`animation`
* 代码: [在线演示](https://codepen.io/JowayYoung/pen/GRKrJJX)

## 立体按钮
* 要点: 点击呈现按下状态的按钮
* 场景: **按钮点击**
* 兼容: `box-shadow`

```less
.stereo-btn {
	  padding: 10px 20px;
    outline: none;
    border: none;
    border-radius: 10px;
    background-image: linear-gradient(#09f, #3c9);
    box-shadow: 0 10px 0 #09f;
    cursor: pointer;
    text-shadow: 0 5px 5px #ccc;
    font-size: 50px;
    color: #fff;
    transition: all 300ms;
    &:active {
        box-shadow: 0 5px 0 #09f;
        transform: translate3d(0, 5px, 0);
    }
}
```

## 混沌加载器
* 要点: 带混沌虚影的加载圈
* 场景: **加载提示**
* 兼容: `filter`、`animation`
* 代码: [在线演示](https://codepen.io/JowayYoung/pen/aboWbqG)

## 蛇形边框
* 要点: 蛇形运动的边框
* 场景: **蛇形动画**
* 兼容: `clip`、`animation`
* 代码: [在线演示](https://codepen.io/JowayYoung/pen/GRKmgZZ)

## 自动打字
* 要点: 逐个字符自动打印出来的文字
* 场景: **代码演示**、**文字输入动画**
* 兼容: `ch`、`animation`
* 代码: [在线演示](https://codepen.io/JowayYoung/pen/ZEzKQEx)