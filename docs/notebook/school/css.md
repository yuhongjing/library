# CSS

## 基础知识
### 盒子模型以及区别和设置
所有的HTML元素都可以看作为一个盒子(box-model)。  
盒子有四个模块,边距(margin)、边框(border)、填充(padding)和内容(content)。  
标准(W3C)盒子模型的宽度=width(content)+padding+margin+border。  
怪异(IE)盒子模型的宽度=width(content+padding+border)+margin。

CSS3可以通过box-sizing属性来设置盒子模型。  
box-sizing: content-box(标准盒子模型)  
box-sizing: border-box(IE盒子模型)
### Position属性值以及相对于谁定位
**position的属性值**
1. 相对定位 relative
2. 绝对定位 absolute
3. 没有定位 static(默认值)
4. 绝对定位 fixed
5. 粘性定位 sticky
6. 继承 inherit

**相对于谁定位**  
绝对定位absolute,设置后元素会脱离文档流。定位有两种情况。如果该元素的祖先元素设置了相对定位或者绝对定位,那么该元素就相对于祖先元素定位。否则相对于body定位。  

相对定位relative,设置后元素不会脱离文档流。相对于自己定位，只是视觉的移动，元素实际还在远位置。因此其他元素的位置不会受到影响。  

没有定位static,元素定位的默认值。元素处于正常文档流，会忽视left,top,right,bottom和z-index等属性。  

绝对定位fixed,特殊版的absolute,元素会脱离文档流。元素总是相对于浏览器窗口定位。  

粘性定位sticky,设置后元素的定位有两种情况。若元素在屏幕范围内(viewport)时，元素的定位属性为static。若元素离开了屏幕范围,则定位属性为fixed。  

继承inherit,继承父元素的定位属性值。

### Margin50%是相对于宽还是高
`margin: 50%`是相对于`父元素`的宽度。   

没错,无论是`margin-top`或者`margin-left`,上下左右边距只要是百分比。都是相对于父元素的宽度,宽度,宽度(重要的事情说三遍)。  
  
这里是我的个人猜测。为什么`margin-top`这些都按照父元素的宽度设置，而不是高度设置呢？  
因为CSS里面大多数的元素高度都默认为`auto`，所以就不能按照父元素的高度计算了。这也是为什么CSS里面很少有高度计算的原因吧？
### CSS3的新特性
CSS3添加了非常多的特性，这里只说比较常用的特性。
1. 媒体查询(media)
2. animation(动画)
3. transtion(过渡),
4. 圆角(border-radius)
5. 变形(transform)
6. 阴影(box-shadow)
7. 绘图(canvas)
8. 颜色(RGBA,HSLA)
9. 伪类(nth-child)
10. 多栏布局(column)

### Float布局对后续元素的影响
当一个元素设置为float后，此元素就会脱离文档流。而后续的元素会无视此元素的存在，然后会占据它的位置。就可能会产生浮动元素和后续元素的重叠，页面布局错乱等情况。
### BFC
BFC,块级格式化上下文(Block Fromatting Context)按照块级盒子布局。  

一个HTML元素创建BFC，满足以下任意一个或者多个条件即可：  
1. float的值不是none (相当于元素需要浮动)
2. postion的值不是static或者relative (脱离文档流的定位)
3. display的值是inline-block、table-cell、flex、table-caption或者inline-flex (独特的盒子布局模式)
4. overflow的值不是visible (元素被裁剪)


body元素默认是一个BFC  

因为BFC是一个独立的布局环境，BFC内部的元素不受外界的影响，所以可以解决以下的问题:  
1. 外边距折叠(margin上下重叠)
2. 包含浮动(子元素浮动后仍然将其包含)
3. 避免文字环绕

### CSS中的伪类before和after
before和after都是CSS3新增的伪类元素。它们的区别在于before在元素之前而after在元素之后。

### Display的属性值
display的常用属性值及效果如下:  

一 、 display: inline  
内联元素的默认属性值，元素的宽`width`、高`height`、以及`上下`方向的边距`margin` 和内边距`padding`无效。

二、 display: block  
块级元素的默认属性值，元素的宽度`width`默认为100%，且可以设置宽，高及上下边距和内边距。

三、 display: none  
设置此属性的元素，将不会渲染(DOM树仍会解析)，也不会占据页面空间。

四、 display: inline-block  
设置此属性的元素，具有inline和block两者的特性，既可以设置宽,高,上下内外边距，又可以保持了inline元素的不换行的特性。

五、 display: flex  
设置此属性的元素，盒子模型采用弹性布局。将拥有一套新的布局方式，详情查阅MDN flex。


### Outline和Border的区别

CSS |可以应用的地方|事件效果|占据空间
:--:|:--:|:--:|:--:|
border|    几乎所有能够显示的元素| 自己写js代码控制border的效果|会占据空间，影响元素大小
outline|    链接,表单控件等元素| 浏览器默认行为,元素focus出现,元素blur消失|不占据空间，不影响元素大小
::: warning 注意
outline不一定是矩形，在火狐浏览器下是非矩形的。
:::

### CSS单位,rem,em,px的区别,及计算规则
**CSS有哪些常见单位**
1. px
2. pt
3. em
4. rem
5. vw
6. vh
7. in
8. ex

**rem,em,px的区别和计算规则**  
px,计算机屏幕的一个像素点。  
em,相对于父元素的单位。1em=父元素的字体大小。  
```css
.father {
    font-size: 20px;
}
.son {
    font-size: 1em;   /* 20px */
    font-size: 1.5em; /* 30px */
}
```
rem,相对于根节点(html)的字体大小单位。1rem=根节点的字体大小。  
```css
html {
    font-size: 16px;
}
.father {
    font-size: 20px;
}
.son {
    font-size: 1rem;   /* 16px */
    font-size: 1.5rem; /* 24px 相对于根节点 */
}
```

### 块状元素与内联元素的区别
### 选择器优先级
**CSS有哪些基本的选择器？**  
1. 标签选择器(body,div,p,ul)
2. 类选择器(class="test",class="head_logo")
3. ID选择器(id="modal",id="name_txt")

**优先级排序**  
!important>行内样式>ID选择器>类选择器>标签>全局选择器(*)  
::: tip 提示
同一级别的样式，后面的会覆盖前面的
:::

```css
<div class="test1 test2"></div>

.test1 {
    color: red;
}
.test2 {
     color: blue; /* 都是同一级的类选择器,会覆盖前面的color */
}
```

### Margin重叠
**边界叠加**  
边界(margin)叠加是一个非常简单的概念，当两个元素的`垂直`边界相遇时，他们会形成一个边界。而这个边界的高度等于两个元素的边界的高度中的较大者。   
举个例子:  
```html
  <style>
    .div1 {
      margin-bottom: 10px;
    }
    .div2 {
      margin-top: 15px;
    }
  </style>
  
  <body>
    <!-- 此时div1和div2的上下距离并不是25px，而是15px -->
    <div class="div1">这是元素1</div>
    <div class="div2">这是元素2</div>
  </body>
```

**解决边界重叠的方式**  
只有同一个BFC内的元素才会发生边界重叠。默认是body元素。  
所以可以将发生边界重叠的元素设置为BFC即可。如何设置BFC请查阅相关资料。  

### CSS控制字体粗细,什么属性让字体更清晰
**font-weight**  
CSS通过font-weight属性来控制字体的粗细。  
属性值如下:  

名称|描述
:--:|:--:
normal|默认值。定义标准的字符
bold|    粗体字符
bolder|    定义更粗的字符
lighter|   定义更细的字符
100-900|    400等同于normal 700等同于bold
inherit|    继承父元素的属性值

注意: 有时候设置300,400等数字却发现字体粗细没有改变时，并不是属性设置错误。而是字体库只有几种粗细大小的字体。  

例如宋体只有,普通字体，细字体，粗字体三种。所以设置300-500就可能都是使用的普通字体。
## 布局相关
### CSS水平垂直居中
**行内元素垂直居中**  

一、 行高法  
让文字一行的高度与元素的高度相同，自然就实现垂直居中了。  
```css
  /* 注意，这种方式并不是完全意义上的垂直居中，只是无限趋近 */
  p {
    height: 30px;
    line-height: 30px;
  }  
```

二、 模拟表格   
通过设置为表盒子的方式就可以实现垂直居中。  
```html
  <style>
    .wrapper {
      display: table; /* 容器设置为表格 */
      height: 300px;
    }
    .wrapper>.cell {
      display: table-cell;
      vertical-align: middle;
    }
  </style>
  
  <div class="wrapper">
    <div class="cell">
      <p>我是测试的内容</p>
      <p>我是测试的内容</p>
    </div>
  </div>
```

**块元素垂直居中**   

一、 box盒子   
通过css3新增的box属性来实现垂直居中。  
```html
  <style>
    .container {
      display: box;
      box-orient: horizontal;
      box-pack: center; 
      box-align: center;
      height: 200px;
    }
  </style>

  <div class="container">
    <p>我是测试的内容</p>
    <p>我是测试的内容</p>
    <p>我是测试的内容</p>
  </div>
```

二、 flex盒子  
通过css3新增的flex属性来实现垂直居中。   
```html
  <style>
    .container {
      display: flex;
      align-items: center;
      height: 300px;
    }
  </style>

  <div class="container">
    <p>我是测试内容<p>
    <p>我是测试内容</p>
  </div>
```

三、 绝对定位加负边距   
通过绝对定位+负元素一般高度的间距，来实现绝对定位。  
```css
  .box {
    postion: absolute;
    top: 50%;
    margin-top: -50px; /* 负元素自身的一半高度 */
    height: 100px;
  }
```

四、transform  
通过css的变形属性来位移元素，从而实现垂直居中。  
```css
  .center-vertical {
    position: relative;
    top: 50%; /* 相对于父元素的高度 */
    transform: translateY(-50%); /* 相对于自己的高度 */
  }
```

五、 绝对定位加margin:auto   
通过绝对定位+margin:auto来实现垂直居中。   
```css
  .box {
    postion: absolute;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
  }
```


### 圣杯布局，双飞翼布局
圣杯布局和双飞翼布局的目的都是左右两栏固定宽度，中间部分自适应 。都是通过float加margin来实现的，不过双飞翼布局多了一层盒子(div)。  

**圣杯布局**   
圣杯布局的核心理念就是，浮动(float)+负偏移(负margin)。
   
设计思路:  
::: tip 注意
中间盒子一定要放在两栏元素上面。  
:::

1. 圣杯布局是一种相对定位，所以需要一个父容器(`postion: relative`)
2. 左右两栏的位置，其实是富容器的内边距(`padding`)
3. 将左,中,右三栏放在一行的方法是，都设置浮动(`float:left`)
4. 中间部分自适应的方式是(`width: 100%`)，独占一行
5. 中间独占一行后，会把左右两栏，挤到下一行
6. 将左右两栏还原的方法是负边距(`margin: -100%`)
7. 这样所有元素就都到一行了，不过都挤在了父元素的内容位置内(`content盒子内`)
8. 所以需要将左右两栏通过相对定位到父元素的内间距盒子内(`left: -间距宽度px`)
9. 大功告成

完整代码如下:  
```html
<!DOCTYPE  html>
  <html>
    <head>
      <meta  charset="utf-8">
       <title>实现三栏水平布局之圣杯布局</title>
       <style  type="text/css">
          .container {
            padding: 0  300px  0  200px;
          }
          .left, .main, .right {
            position: relative;
            float: left;
            min-height: 130px;
          }
          .left {
            left: -200px;
            margin-left: -100%;
            width: 200px;
            background: green;
          }
          .right {
            right: -300px;
            margin-left: -300px;
            width: 300px;
            background-color: red;
          }
          .main {
            width: 100%;
            background-color: blue;
          }
       </style>
  </head>
  <body>
    <div class="container">
　　    <div class="main">main</div> <!-- 内容盒子放最前面 -->
        <div class="left">left</div>
        <div class="right">right</div>
    </div>
  </body>
</html>
```

**双飞翼布局**    
双飞翼布局是阿里玉伯提出的方式，是基于圣杯布局的`改良版`，通过多添加一个div盒子，来减少css代码。通过这种方式我们就可以不使用相对定位(`postion: relative`)了。  

双飞翼布局的核心理念就是，前半段和圣杯布局一样负间距`负margin`加浮动`float`,但是后半段，双飞翼是将中间部分的布局先解决完毕后，然后将两翼放在合适的位置即可。  

设计思路:  
前半段一样，所以main还是要放在最前面。  
1. 三个元素一行的方法还是浮动(`float: left`)
2. 中间元素自动适应的方式还是占满(`width: 100%`)
3. 然后左右两栏被挤下去，回去的方式还是负间距(`margin: -100%`)
4. 所以此时和圣杯布局一模一样，但是圣杯布局之后是通过父元素的padding完成。而双飞翼布局是通过中间元素新添加的父元素盒子的外边距完成(`margin: 两栏的宽度`),给他们挤出去来代替相对位移
5. 搞定！可以看到css代码精简了不少

完整代码如下:  
```html
<!DOCTYPE  html>
<html>
  <head>
    <meta  charset="utf-8">
    <title>实现三栏水平布局之双飞翼布局</title>
    <style  type="text/css">
      .left, .main, .right {
        float: left;
        min-height: 130px;
        text-align: center;
      }
      .left {
        margin-left: -100%;
        background: green;
        width: 200px;
      }
      .right {
        margin-left: -300px;
        background-color: red;
        width: 300px;
      }
      .main {
        background-color: blue;
        width: 100%;
      }
      .content{
        margin: 0  300px  0  200px;
      }
    </style>
  </head>
  <body>
    <div class="container">
    　　<div class="main"> <!-- 我依旧在最前面 -->
    　　  <div class="content">main</div>
        </div>
    　　<div class="left">left</div>
    　　<div class="right">right</div>
    </div>
  </body>
</html>
```

## 动画
### Transform,Transtion和animation的区别
CSS有3种和动画相关的属性:transform,transtion,animation。  
其中tranform是描述元素静态样式，而transition和animation可以实现动画。   
所以transform经常配合后两者使用。

**transform描述元素的样式**  
transform属性应用于元素的2D或3D转换。这个属性运行元素旋转,缩放,倾斜等。  
例如:  
1. 旋转rote(度数deg)
2. 位移translate(x, y)
3. 缩放scale(x,y)

假如你只设置`transform: scale(1.2)`，那么进入页面元素就为1.2倍大小，没有什么过渡效果。因为transform是固定的属性。如果你想元素从默认大小慢慢放大为1.2倍，就需要配合transtion或者animation属性才可以完成。

**能够实现动画效果的transtion和animation**  

transtion,实现动画过渡效果的属性，设置方式如下:  
`transtion: property duration timing-function delay;`  
参数意思为: 属性名， 动画执行时间， 速度曲线， 延迟时间  
例如:   
```css
   /* 元素缓慢放大 */
  .box {
    transtion: transform 2s; /* 监控元素的transform属性，过渡时间为2s */
    transform: scale(1.2);
  }

  /* 鼠标移动到元素上，元素位移，鼠标离开，元素回归 */
  .box2:hover {
    transtion: transform 1s;
    transform: translate(10px, 0);
  }

  /* 当然也可以不使用transform，监控普通属性也是可以的 */
  /* 元素的宽度缓慢增长 */
  .box3 {
    width: 100px;
    transtion: width 2s; /* 当元素的width发生变化时，过渡时间为2s */
  }
  /* 如果不添加过渡动画，则鼠标移到元素上，瞬间变为200px */
  /* 此时有过渡动画，所以会在2秒才会变为200px */
  .box3:hover {
    width: 200px;
  }
```

transtion时常和伪类配合使用，例如hover,active等。

animation,实现精准动画的属性，设置方式如下：  
`animation: name duration timing-function delay iteration-count direction ;`  
参数意思为: 动画名称， 动画执行时间， 速度曲线， 延迟时间， 播放次数， 是否反向播放。  
animation的使用必须结合`@keyframes`使用。    
例如:  
```css
  .box {
     animation: move 2s;
  }
  
  /* 这里的函数名move可以随便设置 */
  @keyframes move {
    from {width: 0px;}  
    to {width: 200px;}
    
    /* 这里除了from to  还可以设置0%-100%之中的任何一个 */
    /* 例如 */
    0% {width: 0px;}
    10% {width: 20px;}
    100% {width: 200px;}   /* 可以设置每一帧 */
  }
```

**animation和transtion的区别**  
1. 触发条件不同，transtion通常和hover等伪类配合由事件触发。而animation是立即播放，不用事件触发(例如轮播图)。
2. 循环，animation可以设置动画循环的次数。
3. 精准性，animation可以设置每一帧的样式，而transtion只能设置头尾。而且animation中每一帧都可以设置不同的样式，新增样式，删减样式都可以，而transtion的不能，只能改变已有CSS样式的值。
4. 与js的交互性。因为transtion是由事件触发，所以和js的交互性更强，而animation与js的交互不是很紧密。

### Transform优化原理和属性
transform的属性主要有:位移，变形，旋转等。而transform能够优化动画的主要原因是重绘，重排。  

例如传统的轮播图，传统的方式是通过margin或者left的方式来改变图片的位置。这样会导致网页大量的重排，重绘，动画就会显得非常的卡顿。  
但是现在我们可以通过transform的位移(translate)属性来完成,这样就不会产生重排,从而使动画变得流畅。  

总之，transform的优化原理就是通过transform不会产生重排。来代替传统的方式，性能比传统的方式高很多。
### Javascript动画和CSS动画的区别
1. css动画比js动画性能更优(js需要操作dom)
2. css动画代码比js动画代码更少
3. css动画可以开启硬件加速(GPU)
4. js动画比css动画有更好的兼容性(只要代码质量高)
5. js对于动画的控制比css动画更优(js可以操作每一毫秒的动画,而CSS就不能)

::: tip 总结：
CSS性能较高，代码较少，但是控制比较麻烦  
JS性能较低，代码量多，但是兼容性强，控制性好
:::

### CSS动画如何避免重排
1. 不要一条一条的修改DOM的样式，应该先定义好class样式，然后切换className(相当于批量修改)
2. 先将DOM关闭后再修改，例如可以先`display: none;`这样元素不渲染，此时再修改100次都不会影响其他元素了,修改完毕之后再`display: block`显示即可，可以大大减少重排次数
3. 动画的元素使用绝对定位，并且使用`transform: translate`来代替`margin`和`left`
4. 尽量避免直接在元素的style上添加样式，因为每一次设置都会重排,最好通过class
5. 尽量少使用css的计算表达式,每次计算都会触发一次重排

### 动画优化,为什么transform比margin的性能好
上面transform优化的原理其实已经说过了，主要就是重排的性能消耗特别大，重绘就小很多了。  
而transform不会重排，所以性能比margin产生的重排好很多了。

## 自适应和响应式
### 响应式网页设计
响应式网页(Responsive Web Design, RWD)是指网页在不同的显示设备下，都能够适应。   
即一套代码，能够在多个终端(手机，平板，台式等)下正常显示。   

**响应式网站的优点**  
1. 跨平台
2. 节约开发成本(不用每一个终端都写一套代码)
3. 在不同平台上内容都是一致的,体验较好

**响应式网站的缺点**  
1. 局限性大，自由度低，为了在各种终端上都适应，在设计和表现上必然有很多局限性
2. 影响加载速度，响应式网站在不同的终端必然有不同的CSS，但是每次加载时所有的CSS代码都加在完毕了。还有图片是移动端，客户端都是一套的。尽管在移动端图片显示没问题，但是图片的大小仍然太大了。

::: tip 提示
目前来说，除了一些内容咨询(新闻,博客)网站等结构简单的网站采用响应式的设计  
大型或复杂网站依旧还是各终端单独写代码
:::

### Media query
media query(媒体查询),是一种专门针对响应式布局的CSS属性。   
著名的框架Bootstrap2和3都是通过媒体查询实现的。   

使用@media可以针对不同的媒体类型定义不同的样式,也可以针对不同的屏幕尺寸显示不同的样式。  
其使用语法如下:  
```css
  @media 媒体类型and|not|only (媒体特征) {
    ... 
    /* css代码 */
  }
```

媒体类型有如下三种:  
1. print(用于打印机和打印预览)
2. screen(电脑屏幕，手机屏幕，平板等)----这是我们最常用的
3. all(所有媒体)

常用的媒体特征有如下几种:  
1. width(设备的页面可见区域宽度)
2. max-width(设备的页面可见的最大宽度)
3. device-width(设备的屏幕可见宽度)

::: tip 提示
width和device-width的区别在于  
width指我们看见窗口的大小，例如电脑端中，我们把浏览器窗口缩小，那么width就相应缩小了  
device-width指我们的设备物理大小，例如电脑的屏幕有多大，device-width就多大
:::

### Bootstrap布局,如何实现响应式布局
Bootstrap2和Bootstrap3是基于媒体查询(media query)实现的。  
而Bootstrap4全新改版通过flex实现。(这里请查询flex相关即可知道)   

而BT3的实现原理为，根据屏幕大小的不同，设置不同大小的container(盒子)宽度,配合栅格布局从而实现了响应式布局。  

而栅格布局是根据container的宽度，分成12份大小。这样盒子的宽度发生了变化，内部的元素自然也就按比例发生变化了,并且栅格的份数是可以通过媒体查询控制的。

总结: BT2和3框架通过盒子(container)+栅格布局=响应式布局

### 手机端不同屏幕如何适配
手机端的适配和响应式布局不同,因为手机端的种类繁多,宽度差距也不大。所以媒体查询就比较吃力了。  
目前手机端的适配方法目前有如下2种:  
1. 基于rem的适配方式(阿里的flexible)
2. 基于vw的适配方式

**rem**  
基于rem的库有阿里的flexible。  
其原理为根据手机端的设备宽度不同从而定义rem的宽度，并且内部的所有px都使用rem来转换。  
```css
  /* 若此时手机为iphone6 那么屏幕的宽度为375px */
  /* 则此时的rem为10分之1则为1rem=37.5px */
  .content {
    width: 1.2rem; /* 37.5px * 1.2 */
  }
  /* 如果手机的屏幕宽度为350px */
  /* 那么此时的1rem=35px */
  .content {
    width: 1.2rem; /* 35px * 1.2 */
  }
```
同一个CSS，在不同的手机上，显示的宽度就不同，从而完成了适配。是的原理就是如此的简单。

**vw**  
vw是CSS3新增的属性，100vw=屏幕的宽度。  
是的，这个属性天生就和屏幕的宽度有关，那么其实原理就和rem差不多了。  
```css
  /* iphone6 屏幕宽度375px */
  .content {
    padding-left: 5vw; /* 375/100*5=18.75px */
  }
  /* 其他手机 屏幕400px */
  .content {
    padding-left: 5vw; /* 400/100*5=20px */
  }
```
是的，依旧完成了适配，从某种意义上来说，两种实现的方式原理是一样的。  
不过rem是通过js来获取宽度的，当然也可以设置，更加的灵活(例如可以1rem等于5分之一的屏幕宽度)  
而vw是纯css的，比较死板,1vw就永远是屏幕的百分之一。

## CSS技巧及应用
### CSS画一个三角形和圆
**三角形**  
纯CSS写三角形的原理为:元素的宽度，高度为0，通过边框(border)透明来实现。  
具体代码如下:  
```css
  /* 向上的三角形 */
  .triangle_top {
    width: 0;
    height: 0;
    border-width: 30px;
    border-style: solid;
    border-color: transparent transparent #333; /* 下边显示 */
  }
  
  /* 向左的三角形 */
  .triangle_left {
    width: 0;
    height: 0;
    border-width: 30px;
    border-style: solid;
    border-color: transparent #333 transparent transparent; /* 右边显示 */
  }
```

**圆**  
纯CSS画圆主要是靠CSS3新增的border-radius来实现的。  
具体代码如下:  
```css
  .circle {
    width: 50px;
    height: 50px;
    background-color: red;
    border-radius: 50%;
  }
```
### CSS实现loading
设计思路是通过一层固定定位的蒙版来实现。  
具体代码如下: 
```html
  <div class="loading"></div>

  <style>
    /* 蒙版 */
    .loading {
      position: fixed;
      top: 0;
      left: 0;
      display: none; /* 为block时，打开蒙版 */
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .7);
      z-index: 1;
    }
    /* 旋转的图标 */
    .loading::after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%);
      transform: translateY(-50%);
      display: block;
      content: '';
      background-image: url(); /* gif图片或者配合animation动画实现 */
    }
  </style>
```
### 实现progress进度条
html5有原生的进度条标签([progress MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress))。    
不过progess的样式修改，对于低版本的浏览器兼容性不佳。所以我们一般还是通过div标签来实现。   

设计思路:  
1. 一个外层盒子控制滚动条的高度和宽度
2. 内层滚动条的width从0到100%
3. 配合动画即可

完整代码如下:  
```html
  <!-- 外层盒子 -->
  <div class="container">
    <!-- 滚动条 -->
    <div class="bar"></div>
  </div>

  <style>
    .container {
      width: 300px;
      height: 25px;
      border: 1px solid #ccc;
    }
    .bar {
      width: 0;
      height: 100%;
      background-color: red;
      animation: move 2s infinite;
    }
    @keyframes move {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }
  </style>
```

::: warning 注意
如果想和progress一样控制每一帧的进度，必须要使用JS控制。  
如果配合JS就不需要使用动画，而是通过改变width(0-100%)的值即可。
:::