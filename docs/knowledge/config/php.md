---
title: PHP
---

# PHP环境配置

## Mac系统下配置PHP环境
`Mac`系统内置了`Apache`和`php`，所以只需要做一些简单配置即可。

### Apache
1. 查看Apache版本
```shell
sudo apachectl -v
```

2. 启动Apache
```shell
sudo apachectl start
```

3. 重启Apache
```shell
sudo apachectl restart
```

4. 默认目录  
PHP默认解析目录地址: `/Library/WebServer/Documents`

::: tip 提示
启动Apache后，浏览器输入`http://localhost`。   
出现一个It works即表示运行成功。
:::

### PHP
1. 查看PHP版本
```shell
php -version
```

2. 开启PHP模块
终端运行命令`sudo vi /etc/apache2/httpd.conf`，打开配置文件。   
找到如下语句，并删除`#`。
```
#LoadModule php7_module libexec/apache2/libphp7.so
```

3. 改变根目录  
终端运行命令`sudo vi /etc/apache2/httpd.conf`，打开配置文件。   
找到如下语句，更改为想要的地址即可。
```
DocumentRoot "解析的目录地址"
<Directory "解析的目录地址">
```

4. 更改后重启Apache
```shell
sudo apachectl restart
```