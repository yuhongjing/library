---
title: Git修改作者
sidebarDepth: 0
---

### Git修改作者
一台电脑连接多个Git远程仓库时，需要配置多个Git账户信息。  
有时候Git的`user.name`和`user.email`可能会匹配错乱，从而导致commitor信息不显示。   

### 修改命令
在项目根目录下，输入以下命令可以更改所有的历史commit作者:
```shell
git filter-branch --env-filter '
if test "$GIT_AUTHOR_EMAIL" = "错误的邮箱"
then
    GIT_AUTHOR_NAME="正确的作者名"
    GIT_AUTHOR_EMAIL="正确的邮箱"
fi
export GIT_AUTHOR_NAME
export GIT_AUTHOR_EMAIL
'
```

### 强推远程仓库
`git log`查看仓库历史日志，确认是否修改成功。  

`git push origin master --force`强制推送到远程仓库。

### 错误解决
常见错误收集。
```shell
Cannot create a new backup.
A previous backup already exists in refs/original/
Force overwriting the backup with -f

# 执行如下命令即可
git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch Rakefile' HEAD
```