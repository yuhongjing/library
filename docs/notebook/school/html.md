# HTML

## 基础知识
### meta标签
**什么是meta标签？**  

总的来说meta标签是提供关于HTML文档的元数据(元数据是关于数据的信息),元数据不会显示在页面上，但是对于机器来说是可读的。  
例如meta被用于设置关键字、设置页面描述、设置作者、设置字符集、设置虚拟屏幕等。  
meta标签始终放在head标签中，meta的设置对搜索引擎注册，搜索引擎优化排名等有至关重要的作用。  

**meta标签有什么作用？**

meta里的数据是供机器解读的，告诉机器如何解析这个页面，还有一个用途是可以添加服务器发送到浏览器的http头部内容。
```html
<meta http-equiv="charset" content="iso-8859-1">
<meta http-equiv="expires" content="31 Dec 2018">
```
那么浏览器的头部就会包括这些:  
charset:iso-8859-1  
expires:31 Dec 2018

**meta的使用方式？**

meta主要是使用两个属性,http-equiv和name。  
http-equiv是将content的属性关联到HTTP头部。  
name是将content的属性关联到一个名称。  
相关例子如下:  
```html
<!-- name相关 -->

<!-- 设置页面关键词 -->
<meta name="keywords" content="这是关键词">
<!-- 设置页面描述 -->
<meta name="description" content="这是网站的描述">
<!-- 移动设备 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- http-equiv相关 -->

<!-- 设置页面重定向或者重定向 -->
<meta http-equiv="refresh" content="0;url=一个网址">
<!-- 禁止浏览器从本地缓存访问页面内容 -->
<meta http-equiv="Pragma" content="no-cache">
<!-- 设置网页的缓存时间 -->
<meta http-equiv="expires" content="Fri, 12 Jan 2018 18:18:18 GMT">
```
### HTML5的新特征
HTML5的主要有如下十大新特征
1. 标签语义化
2. 增强型表单
3. 添加视频和音频
4. Canvas绘图
5. Web Strong浏览器缓存
6. WebSocket
7. Web Worker
8. 拖放API(drag)
9. 地理定位
10. SVG绘图

### script标签的async和defer属性
**为什么需要这两个属性？**

因为直接使用script脚本，html会按照顺序加载并执行脚本，而脚本会阻塞后续的DOM渲染，导致页面白屏，
所以script提供了两种方式来解决上述问题，async和defer，这两个属性使得script不会阻塞DOM的渲染。    

**defer**  
使用了defer，脚本将会被延迟到整个页面都解析完毕后在运行。因此就不会阻塞DOM的渲染了。相对于告诉浏览器
立即下载，但是延迟执行。  
多个延迟的script，会按照先后出现的顺序的顺序执行。
```html
<!--  这是第一个延迟的script -->
<script src="XXX.js" defer></script>

<!-- 这是第二个延迟的script -->
<script src="YYY.js" defer></script>

<!-- 加载的顺序是第一个执行完毕后，才执行第二个，按照出现的顺序执行。 -->
```

**async**  
async与defer功能基本一致，但是不同的是async不保证脚本的先后顺序执行。
```html
<!-- 这是第一个延迟的script -->
<script src="XXX.js" async></script>

<!-- 这是第二个延迟的script -->
<script src="YYY.js" async></script>  

<!-- 第一个延迟的script并不一定先执行，执行顺序是谁先加载完谁先执行。 -->
```

**注意**  
这两个属性只有引用外部脚本的时候才有效果。
```html
<!-- 通过文件引入的script有效 -->
<script src="" defer></script>

<!-- 这种html内部执行的script无效 -->
<script defer>
    // 这里是内部js的代码
</script>
```
### 当前的主流浏览器及其内核介绍
**目前主流的浏览器**
1. Chrome浏览器(谷歌浏览器)
2. IE浏览器(window内置浏览器)
3. Safari浏览器(苹果浏览器)
4. Firefox浏览器(火狐浏览器)
5. Opera浏览器

**四大内核**
1. Trident内核(IE浏览器),IE浏览器6-10,猎豹浏览器,360急速浏览器,遨游一系列国产浏览器等
2. Blink内核(火狐浏览器),火狐浏览器
3. Webkit内核(苹果浏览器),Safari浏览器,早期的谷歌浏览器,安卓默认浏览器，遨游浏览器
4. Blink内核(谷歌浏览器),现在的谷歌浏览器

### url从输入到页面渲染发生了什么
输入url后发送的流程大体如下，更细致的细节请自行查阅:
1. 浏览器的地址栏输入URL并按下回车
2. 浏览器寻找当前URL是否存在缓存，并比较是否过期(未过期执行第7步)
3. DNS解析URL对应的IP
4. 根据IP建立TCP连接(三次握手)
5. HTTP发起请求
6. 服务器处理请求，浏览器接受HTTP响应
7. 渲染页面，构建DOM树和CSSOM树
8. 关闭TCP连接(四次挥手)

### 如何延迟HTML文档中的外部脚本文件的加载
使用script的async和defer属性即可。
### WebSocket
**WebSocket是什么**   
WebSocket是一种`网络通信协议`。RFC6455定义了它的通信标准。  
WebSocket是HTML5开始提供的一种在单个TCP连接上进行全双工通讯的协议。  
WebSocket是基于TCP连接的。  

**为什么需要WebSocket**  
因为网页的请求资源通常都是基于HTTP协议的，而HTTP协议是一种`无状态`、`无连接`、`单向`的应用层协议。它采用
了请求/响应模型。通信请求只能由`客户端`发起，服务端对请求做出应答响应。 

这种通信模型有一个弊端：HTTP协议无法实现服务器主动向客户端发起消息！！  

这种单向请求还有一个缺点，如果服务器有连续的状态变化(实时改变数据)，客户端要得到改变的资源就非常麻烦。大多数的Web程序是通过频发的请求ajax实现`长轮询`，从而获取改变的数据。但是轮询的效率低，非常浪费资源（因为必须不停的连接，或者HTTP连接始终打开）。  

而WebSocket就是因此而发明的，WebSocket连接允许客户端和服务器之间进行全双工通信，这样服务器就可以将数据推送至服务端，而且WebSocket只需要建立一次连接，就可以一直保持通信，相比轮询效率大大的提高。

**客户度API**  
客户端实现WebSocket非常简单,因为浏览器已经封装了WebSocket对象。   
```javascript
    // 下面这一句代码就已经初始化了一个WebSocket对象了
    let Socket = new WebSocket(url, [protocol]); // protocol为参数 

    // 这里是连接成功的回调函数 表明已经连接成功了
    Socket.onopen = function () {
        console.log('连接成功啦');
    };

    // 这里是服务端推送过来的数据 类型为字符串
    Socket.onmessage = function (res) {
        console.log(`我是服务端推送过来的数据:${res}`);
    };

    // 这里是手动断开WebSocket连接 默认关闭浏览器也会断开连接
    Socket.onclose = function () {
        console.log('已经断开连接了');
    };
```

## HTML5缓存
### 浏览器缓存方式
HTML5存储数据的方式有很多种,依次分为:  
1. cookie,session
2. localStrong,sessionStrong
3. Web SQL, IndexedDB

前2种方式，是我们现在开发中最常用的方式。  
**cookie**

cookie是客户端技术，存放在客户端，它的作用是来区分用户的身份。  
其原理是程序把每个用户的数据以cookie的形式写在浏览器，当用户使用浏览器再去访问服务器时，就会带着
各自的cookie数据去，从而浏览器就能得知用户的身份，再返回该用户的数据。  
常见使用场景:记住密码, 记录用户浏览信息(广告推荐)

**session**

session是服务端的技术，存放在服务端，它的作用是保持会话状态。  
其原理是当用户访问服务器后，服务器会给客户端的cookie添加一个session值。这样下一次客户端请求(肯定会携带cookie)的时候
就验证session值是否匹配，如果匹配证明还是同一次会话。  
假设场景:
```
用户第一次进入网页，此时用户的cookie里面没有session信息。
然后用户需要登录，就携带cookie请求服务器。
服务器收到了请求，并在cookie里面添加了一个唯一随机的session,并把session值存放在服务器。
用户登录成功后，又进入了网站的第二个页面，购买了一件东西，于是携带cookie又请求服务端。
服务端通过cookie里面的session和服务端的存储session对比。
验证成功表示用户已经登陆过，还是同一次会话，并进行下面的操作。
这样就保证了用户，切换不同的页面，不用重复登录了。
```
常见使用场景: 判断用户是否登录  

**localStrong**  
localStrong是HTML5新增的属性,用于缓存数据，并且缓存的数据是永久的，浏览器关闭后依旧存在。  
以前经常使用cookie来保存的业务数据，现在都可以放在localStrong了。  
记住cookie最好只保存用户信息等,因为cookie很小只有4kb，而且每次请求后端都会携带，所以尽量小！

**sessionStrong**  
sessionStrong是HTML5新增的属性,也用于存储数据，和localStrong的差别在于，关闭浏览器后数据便清空。  
用于存储一次会话的数据，或者状态等。

**区别**

名称|存储位置|存储大小|存储时间|操作方式|特点
:--:|:--:|:--:|:--:|:--:|:--:
cookie|客户端|4KB|默认浏览器关闭就消失|没有API|客户端服务器来回传输
session|服务端|服务器内存|服务器设置|服务器添加|
localStrong|客户端|5MB|永久|API封装|不和服务端通信
sessionStrong|客户端|5MB|浏览器关闭就消失|API封装|不和服务端通信

### 设置cookie保存时间
因为cookie没有相应API，所以需要自己手动来设置值相当的麻烦。   
相应的设置方式如以下代码: 
```html
    <!-- 使用字符串的方式来设置，可以说是相当麻烦了 -->
    <script>
        // 设置cookie值的方式
        document.cookie = "name=小裕";
        // 如果有多个值，分号间隔,分号哦，分号
        document.cookie = "name=小裕;sex=女";


        // 修改cookie的值
        document.cookie = "name=余鸿靖";
        // 因为是字符串，所以覆盖赋值就可以了。
        // 但是如果你的cookie有多个值时
        // 你需要先找到你需要的那个值，才能覆盖。痛苦~


        // 获取cookie的值
        // 参照修改多个值时的操作
        // 首先把cookie的值按照分号分组
        // 然后。。。。一大推,痛苦 痛苦
        let strCookie = document.cookie;
        let arrCookie = strCookie.split(';');
        for(let i=0; i<arrCookie.length; i++) {
            let temp = arrCookie[i].split('='); // 键名分割
            if(temp[0] === '我要查找的cookie名,例如name') {
                console.log(temp[1]);
            }
        }


        // 给cookie设置保存时间
        // 其实就是设置expires字段的值就OK了
        // 举个例子将name字段设置为10天后过期
        let date = new Date(); //获取当前时间
        let expireDays = 10; 
        // date.getTime()表示把当前的日期转换为时间戳 再加上 10天的时间戳
        // 就是10天后的时间戳
        date.setTime(date.getTime()+expireDays*60*1000);
        // date.toUTCString表示转换为字符串
        document.cookie = "name=小裕;expires="+date.toUTCString();


        // 删除cookie
        // 把cookie的有效时间改为过去即可（相当于过期了）
        let date=new Date();   
        date.setTime(date.getTime()-1000); //当前时间的前1秒
        document.cookie="name=小裕;expires="+date.toUTCString();
    </script>
```

## 浏览器安全
### XSS和CSRF
**XSS是什么?**  
XSS，中文名为跨站脚本攻击，是发生在`浏览器层面`上的一种攻击方式。  
主要就是通过javascript，注入一段代码来产生攻击。  
例如输入框，留言板等都是很容易被XSS攻击的地方。  
具体流程如下:  
1. 入侵者通过在前端输入js代码，即`<script>`代码提交，字段保存到数据库。
2. 当被提交的js代码，再次被渲染到页面上时，就会执行这段js代码。
3. 入侵者的js代码可以获取cookie等资料，并通过ajax传入它的接口。
4. 这样入侵者就获取了用户的所有资料

当然，XSS还有很多种入侵方式，但是其原理就是通过js代码来入侵的。所以只要能够防止js代码就可以从根源杜绝XSS攻击。

**防御XSS攻击的方式**  
一、 转义编码  
因为是输入`<script></script>`的方式，所以我们可以将`<`、`>`、`&`、`"`等一些有潜在威胁的字符进行编码。例如：  

`<`转义为`&lt;`  
`>`转义为`&gt;`   
`&`转义为`&amp;`  

这样前端渲染时，就不是`<script`标签了，而是`&lg;script&gt`;自然就不会执行js代码了。

二、 HttpOnly  
在cookie中设置了HttpOnly属性，那么通过js脚本将无法获取到cookie信息，也就能够有效的防止XSS攻击。

**CSRF是什么?**  
CSRF，中文名为跨站域请求伪造。入侵者在用户已经登录目标网站后，诱使用户访问一个攻击页面，以用户的身份发起请求，从而达到攻击的目的。  

CSRF通常是基于XSS攻击的，如果能够有效的防御XSS攻击，则被CSRF攻击的方式会大大的减少。  

**防御CSRF的方式**  
1. 尽量使用POST,限制GET
2. 加验证码
3. Token
  

### Token
**什么是Token**  
Token，就是令牌，最大的特点就是随机性，不可预测。一般黑客或软件无法猜测出来。  

**Token的用途**  
Token一般用在两个地方:  
1. 防止表单重复提交
2. CSRF(跨站点请求伪造--重点)

**原理**  
CSRF是通过获取用户的Cookie从而伪造出用户的身份进行入侵。  
所以当用户首次登录的时候(这时没有cookie),服务器返回一个Token(随机生成的值，有过期时间)。保存在前端的缓存中，当用户访问的时候会在cookie中添加Token或者在header中添加Token。从而保证入侵者只拥有cookie也不能成功入侵。

::: warning 注意
这种方式只能加大入侵的成本，因为前端的缓存也是可能被获取的。
:::

## 性能优化
### 前端性能优化方案及原理
一、 雪碧图技术
```
    把每个小图标都整合到一张大图上面，可以极大的减少http请求数量,同时可以让图片快速加载出来。
```
二、 图片懒加载
```
    图片不设置src属性，将src的值存放在data-XX中，然后页面滚动到此图片的可视区域时，
    再通过js把data-XX的值赋值给src。
```
三、 尽量减少http请求
```
    雪碧图技术实际上也是为了解决这个问题。
    请求一个100kb的数据会比请求两个50kb的数据快，因为请求需要携带很多数据与服务器连接和断开。  
    所以我们应该尽可能的减少http的请求。
    例如合并图片，合并css和js，图片多可以懒加载。
```
四、 减少页面的重绘和重排
```
    重绘和重排会非常影响浏览器的性能。
    所以尽量减少重绘和重排的操作。
    例如使用offset,scroll,client等属性，都会导致重排。
    还有动画等，都需要注意重排重绘。
```
五、 减少DOM操作
```
    对DOM的操作的代码是高昂的。
    修改和访问DOM都会造成页面的重绘和重排，循环操作DOM更是恐怖的行为。
    尽量减少DOM元素的查询和修改。尽量使用变量来存储DOM。
```
六、 使用CDN加速
```
    通过CDN可以使用户请求资源的速度大大提升。
```
七、 CSS和JS位置
```
    CSS文件放在头部，因为CSS是并且下载。
    JS文件放在尾部，因为JS会阻塞渲染，导致白屏。
    如果JS使用了async或者defer时，也可以放在头部。
```
八、 压缩CSS和JS文件
```
    通过GZip等技术来压缩JS和CSS文件。
```
### CDN
**定义**  
CDN全称(Content Delivery Network,即内容分发网络)。其目的是通过现有的Internet中增加一层新的CACHE(缓存)层，将网站的内容发布到最接近用户的网络“边缘”节点，使用户可以就近取得所需内容，提高网站的响应速度。  

**通俗的讲**  
使用了CDN后，用户请求数据就会自动按照距离用户“最近”的服务器进行访问。  
这里的最近，不一定是距离，而是拥挤度，速度等条件，综合最优的服务器。  
比如请求同一个数据，A用户可能请求A服务器，B用户则可能请求B服务器。请求的条件就是根据用户的位置，来选择最优的服务器。

### 图片多了如何优化
1. 雪碧图
2. 懒加载
3. webp格式图片
4. CDN
5. 某些gif可以由css动画实现
6. 图片质量压缩
 


