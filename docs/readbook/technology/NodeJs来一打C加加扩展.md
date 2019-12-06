---
title: 《Node.js 来一打C++扩展》
sidebarDepth: 1
---
# 《Node.js 来一打C++扩展》
![](https://img3.doubanio.com/view/subject/l/public/s29801512.jpg)  
作者: [死月絲卡蕾特](https://www.zhihu.com/people/xadillax/activities)

## CommonJS模块
Node.js中的模块定义规范参照CommonJS。

### require
`require`是一个函数，这个函数有一个参数代表`模块标识`，它的返回值就是其所引用的外部模块所暴露的API。

### 模块上下文
在一个CommonJS模块的上下文中，需要满足以下条件的一些事物存在。
1. `require`函数

2. `exports`

3. 一个名为`module`的对象，里面包含了这个模块的一些自带属性

::: tip 提示
在Node.js中，`module`对象里面还有一个exports对象  
其初始指针指向与`exports`相同，而模块真正暴露出去的是`module`中的`exports`  
如果替换了`module.export`对象，那么导出的就是被替换的对象，而不是`exports`了
:::

### 模块标识
模块标识就是一个字符串，用于传给`require`函数。  
它需要小驼峰格式命名，或者以"."以及".."带头的相对路径，从理论上来说不应该带上文件后缀，如".js"。

### Node.js寻址算法
1. **核心模块**，指代码存在于Node.js源码库，这些模块都有自己的预留标识，当执行`require`函数时传入的标识与某个Node.js核心模块吻合时，该函数返回的是核心模块的API。如"fs"、"net"等。更多核心模块参考[Node.js官方文档](https://nodejs.org/en/docs/)。

2. **文件模块**，指需要Node.js进行文件寻址获得的模块。  
如果模块的路径为一个目录，那么会依次寻找该目录下的"index.js"、"index.json"以及"index.node"文件。若存在上述任何一个字段，则立刻返回。  
如果模块是一个第三方模块目录，其目录下存在一个合法的`package.json`文件的话，就会在上述步骤前，先解析`package.json`中的`main`字段。如果字段存在且合法，就会直接加载该字段所指向的文件。
```json
// package.json
{
    ...,
    "main": "app.js", // 会加载目录下的app.js 而不是index.js
    ...
}
```

3. **第三方模块**，除上述的核心模块外，其他不是以"/"、"./"或者"../"开头的**字符串**作为标识的模块都被称为第三方模块，这些模块通常以Node.js依赖包的形式存在。它的加载流程如下:  
    1. 当前文件目录的node_modules目录下
    2. 若①没有符合的模块，则去当前文件的父目录的node_modules下
    3. 若还没有符合的模块，则再往上一层目录的mode_modules下
    4. 重复③，直到寻找到符合的模块或者到根目录为止

4. **项目模块**，在项目中通过"/"、"./"或者"../"带头的模块就是项目模块。载入模块时我们并不需要加后缀名，这也是CommonJS中所规定的，因此Node.js加载项目模块或第三方模块时会枚举尝试后缀名。依次为".js"、".json"和".node"，其中".node"就是C++模块。

### Node.js模块缓存机制
实际上在Node.js运行中，通常情况下一个包一旦被加载了，那么执行第二次的时候就会在缓存中获取暴露的API，而不会重新加载一遍该模块里面的代码再次返回。

## Node.js的包机制