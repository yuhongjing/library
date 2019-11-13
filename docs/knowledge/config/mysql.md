---
title: MySQL
---

# MySQL环境配置
## Mac系统下配置PHP环境
既然是Mac系统肯定是通过`homebrew`安装`mysql`更方便了。  
当然你也可以从[官网](https://www.mysql.com/)寻找，各种版本还是挺麻烦的了。  
个人还是推荐`homebrew`。

### 使用homebrew一句代码安装MySQL
```shell
# 默认最新版本
sudo brew install mysql
# 当然你也可以指定版本
sudo brew install mysql@5.6
```

### 修改配置文件
```shell
# 配置文件的地址
vim /usr/local/etc/my.cnf

# Default Homebrew MySQL server config
[client]
port = 3306
socket = /tmp/mysql.sock
default-character-set = utf8

[mysqld]
collation-server = utf8_unicode_ci
character-set-server = utf8
init-connect ='SET NAMES utf8'
max_allowed_packet = 64M
bind-address = 127.0.0.1
port = 3306
socket = /tmp/mysql.sock
# 这句代码正式启动MySQL时需要去掉
skip-grant-tables
```

### 启动服务
```shell
brew services start mysql # 启动MySQL
brew services restart mysql # 重启MySQL
brew services stop mysql # 停止MySQL
```

### 连接数据库
```shell
# 格式为 mysql -u 用户名 -p 密码
# 初始密码默认为空
mysql -u root -p
```

::: warning 注意
* 配置了`skip-grant-tables`后，连接MySQL无需验证用户密码，  
常用于忘记账户和密码的场景。  
* 修改了配置文件后，需重启MySQL才能生效
* 通过`select * from mysql.user`命令，可以看见有些版本的MySQL没有password字段  
* 配置了`skip-grant-tables`后，导致`Navicat`等工具无法连接，去掉配置重启Mysql即可。
:::