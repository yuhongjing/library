---
title: Linux账号管理与ACL权限设置
---

# Linux账号管理与ACL权限设置

* Linux操作系统上面，关于账号和用户组，其实记录的是UID/GID的数字而已。
* 用户的账号/用户组与UID/GID的对应，参考/etc/passwd以及/etc/group两个文件。
* /etc/passwd文件结构以冒号隔开，共分为七个字段，分别是【账号名称、密码、UID、GID、全名、家目录、shell】。
* UID只有0与非0两种
  * 非0：表示一般账号
    * 1~999：系统账号，无家目录
    * 大于1000：可登录账号，存在家目录
  * 0：系统账号，ROOT
* 账号的密码已经移动到/etc/shadow文件中，该文件权限为仅有root可以修改。该文件分为九个字段，内容为【账号名称、加密密码、密码修改日期、密码最小可变动日期、密码最大需变动日期、密码过期前警告日数、密码失效天数、账号失效日、保留未使用】
* 用户可以支持多个用户组，其中在新建文件时会影响新文件的用户组者，为有效用户组，而写入/etc/passwd的第四个字段者，称为初始用户组。
* 与用户建立、更改参数、删除有关的命令为useradd、usermod、userdel等，密码建立则为passwd。
* 与用户组建立、修改、删除有关的命令为groupadd、groupmod、groupdel等。
* 用户组的查看与有效用户组的切换分别为groups及newgrp命令。
* useradd命令功能参考的文件有/etc/default/useradd、/etc/login.defs、/etc/skel/等。

