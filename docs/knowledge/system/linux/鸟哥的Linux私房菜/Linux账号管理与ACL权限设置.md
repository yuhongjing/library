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
* 查看用户详细的密码参数，可以使用【chage -l 账号】来处理。
* 用户自行修改参数的命令有chsh、chfn等，查看命令则有id、finger等。
* ACL的功能需要有文件系统支持，CentOS 7默认的xfs支持ACL功能。
* ACL可进行单一用户或用户组的权限管理，但ACL的启动需要有文件系统的支持。
* ACL的设置可使用setfacl，查看则使用getfacl。
* 身份切换可使用su，亦可使用sudo，但使用sudo者，必须先以visudo设置可使用的命令。
* PAM模块可进行某些程序的验证。与PAM模块有关的配置文件位于/etc/pam.d/\*及/etc/security/\*。
* 系统上面账号登录情况的查询，可使用w、who、last、lastlog等。
* 与在线用户即时通讯可使用write、wall，脱机状态下可使用mail发送邮件。

