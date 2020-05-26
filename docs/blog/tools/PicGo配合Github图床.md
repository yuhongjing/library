---
title: PicGo配合GitHub图床
---

# 图床工具PicGo配合GitHub

所谓图床工具，就是自动把本地图片转换为链接的一款工具。PicGo是一款比较优秀的图床工具。

它是一款由`Electron-vue`开发的的软件，可以支持微博、七牛云、腾讯云COS、GitHub等常见图床，功能强大、简单易用。

## PicGo下载

[下载地址](https://github.com/Molunerfinn/PicGo/releases)

![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/BA444DA5-6A34-41E5-851E-3C57DB5CF311.png)

## GitHub配置

### 建立一个公共仓库或使用已有的仓库

将图片放入此仓库，必须是公共的仓库，否则别人无法访问。



### 配置Personal access tokens

路径`setting`->`Developer settings`->`Personal access tokens`->`Generate new token`

![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20191205140013.png)

![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20191205140418.png)

勾选repo、填写名称，然后生成就得到了一个token，将复制token应用在PicGo。



## 配置PicGo

### 选择GitHub图床

填写如下信息:

* 仓库名格式 `用户名/仓库名`
* 分支名 `master`(看你自己的选择)
* Token `咱创建的github token`
* 存储路径 `仓库下的某个文件夹、不填写默认存在根目录`

![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20191205141140.png)

### 其余

* 图片可以默认设置为`markdown`格式
* 图片上传时可以重命名
* 其余东西，自行发现吧

![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20191205141104.png)

## 总结

更舒心的编写markdown文档姿势解锁