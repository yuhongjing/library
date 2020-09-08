---
title: Debugging in VSCode
---

# Debugging in VSCode

在阅读源码时，通过`console`等方式硬调试，不仅消耗时间，并且不方便。

因此需要更科学的`debug`方式，利用VS Code的`Debug`功能，可以拥有看见全局变量、调用堆栈、断点调试、执行顺序等信息，断点地方的全部信息都会暴露，可以极高的提升阅读源码的效率。

## Debug Panel

下图为VS Code中的debug panel。

![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/3FE392D0-606A-488F-B947-BFB3EDD27B73.png)

左侧菜单的第四个蜘蛛图标，即是Debug调试工具。可以通过`command + shift + D`快捷键打开。

## 体验一下

首先新建一个文件`app.js`，内容如下。

```js
const hello = "Hello World";
console.log(hello);
```

然后点击小蜘蛛图标，进入Debug 面板，点击下图所示的`齿轮`图标。

![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20200908203345.png)

> 如果项目根目录已经存在.vscode目录，且目录下存在launch.json配置文件，则点击齿轮后会直接进入该文件。
>
> 否则需要进行初始化，手动配置Debug配置项。

这时会出现如下选项，让你选择调试环境。VS Code内置了Node.js环境，其他环境需要自行安装扩展。

这里我们调试JS文件，选择Node.js。

![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20200908203637.png)

选择后，会生成一个`launch.json`文件，并会直接打开这个文件，配置内容如下。

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/index.js"
    }
  ]
}
```

按`command + shift + E`回到目录列表会看见多了一个`.vscode`目录，目录下面就是该`launch.json`文件。可以点击右下角的`Add Configuration`按钮，会弹出如下配置供选择，在这个配置文件里可以充分利用它的智能感知功能，我们选择`Node.js: Launch Program`。

![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20200908204237.png)

它会自动帮我们生成该配置的常用项，我们将其中的`"program": "${file}"`改为`"program": "${workspaceRoot}/app.js"`，在这个配置文件中，有挺多内置变量可以直接使用，`${file}`表示当前活跃的文件，`${workspaceRoot}`表示当前项目的根目录，完整的内置变量可以参考[手册](https://code.visualstudio.com/docs/editor/variables-reference)。

> 上面配置项有个`request`字段，它有两个值可以选择：`launch`和`attach`。
>
> 如果调试的是`web`项目，浏览器已经直接打开这个项目了，这时我们可以使用`attach`，将`debugger`附加在运行的`web`项目。
>
> 否则，选择`attach`，则是直接由编辑器启动这个程序。

在开始`debug`之前，我们先在`app.js`的第二行最左边打一个断点。

![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20200908205207.png)

`configurations`里面的`name`字段会显示在`Debug`最上面的下拉列表里

点击小齿轮左边的框就可以选择刚才添加的配置，对应与`configurations`里面的`name`字段，选择`Launch Program`

然后点击左边的小绿色三角启动`debug(F5)`，然后就可以看到程序暂停在刚才打的断点这行了

![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20200908205335.png)

![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/0D4EE4DC-ABB2-4482-9749-391D457D03D8.png)

可以看到最上面的工具栏就是所有的调试操作：

* 继续/暂停 F5
* 单步跳过 F10
* 单步调试 F11
* 单步跳出 `shift + F11`
* 重启 `shift + command + F5`
* 停止 `shift + F5`

