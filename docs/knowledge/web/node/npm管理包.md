---
title: Npm管理包
---

# Npm管理包

本文目前简单记录一下npm包的相关操作，以后会更详细的补充。

[npm cli命令手册](https://docs.npmjs.com/cli-documentation/)

## 注册npm用户

注册npm用户，有两种方法

* [npm官网注册](https://www.npmjs.com/)
* npm命令注册，`npm adduser`

## 登录npm

输入命令，`npm login`

## 初始化包

项目根目录下输入命令，`npm init`，依次填入包名、版本、描述、github地址、关键字、license等

## 发布包

项目根目录下输入命令，`npm publish`

## 更新包

项目根目录下输入命令，`npm version patch`、`npm publish`

[更新包详情及命令](https://docs.npmjs.com/cli-commands/version.html)

## 删除包

两种情况，删除指定版本和删除整个包

* 指定版本，`npm unpublish 包名@版本号`
* 整个包删除，`npm unpublish 包名 --force`



