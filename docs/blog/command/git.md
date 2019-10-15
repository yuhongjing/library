---
title: git命令
sidebarDepth: 1
---
## 配置Git相关命令
Git的配置文件为`.gitconfig`，它可以在用户主目录(全局配置)下,也可以在项目目录(项目配置)下。
1. 显示Git配置: `git config --list`
2. 编辑Git配置: `git config -e [--global]`
3. 设置提交代码时的用户信息: 
```
git config [--global] user.name "[name]"
git config [--global] user.email "[email address]
```

## 增加删除文件相关命令
1. 添加文件到暂存区: `git add [fileName/dir/.]` // 单个文件名/文件夹/所有文件
2. 删除工作区文件: `git rm [fileName/dir]` 
3. 停止追踪文件: `git rm --cached [fileName/dir]`
4. 文件改名: `git mv [oldName] [newName]`

## 远程仓库相关命令
1. 检出仓库: `git clone`
2. 查看远程仓库: `git remote -v`
3. 添加远程仓库: `git remote add [name] [url]`
4. 删除远程仓库: `git remote rm [name]`
5. 修改远程仓库: `git remote set-url --push [name] [newUrl]`
6. 拉取远程仓库变动并合并到本地分支: `git pull [remoteName] [localBranchName]`
7. 推送远程仓库: `git push [remoteName] [localBranchName]`
8. 拉取远程仓库所有变动不合并: `git fetch [remote]`

::: warning 注意
如果把本地某个分支提交到远程仓库，并作为远程仓库的分支，命令如下
:::
```cmd
git push origin test:master     // 提交本地仓库的test分支作为远程仓库的master分支
git push origin test:test       // 提交本地仓库的test分支作为远程仓库的test分支
// 当本地仓库推送至远程仓库同名分支时可以简写:
// git push origin test = git push origin test:test
```

## 文件提交相关命令
1. 提交暂存区到仓库区: `git commit -m [message]`
2. 提交暂存区指定文件到仓库区: `git commit [file1] [file2] -m [message]`
3. 提交自上次`commit`之后的变化到仓库区: `git commit -a`
4. 提交时显示所有`diff`信息: `git commit -v`
5. 使用新的`commit`替代上一次提交: `git commit --amend -m [message]`

## 分支(branch)操作相关命令
1. 查看本地分支: `git branch`
2. 查看远程分支: `git branch -r`
3. 创建本地分支: `git branch [name]` // 不会自动切换分支
4. 切换分支: `git checkout [name]`
5. 创建新分支并切换到新分支: `git checkout -b [name]`
6. 删除分支: `git branch -d [name]` // -d只能删除合并过的分支,-D强制删除一个分支
7. 合并分支: `git merge [name]` // 将名称[name]分支与当前分支合并
8. 创建远程分支: `git push origin origin [name]`
9. 删除远程分支: `git push origin :[name]`

## 版本(tag)操作相关命令
1. 查看版本: `git tag`
2. 创建版本: `git tag [name]`
3. 删除版本: `git tag -d [name]`
4. 查看远程版本: `git tag -r`
5. 创建远程版本: `git push origin [name]`
6. 删除远程版本: `git push origin :refs/tags/[name]`
7. 合并远程仓库tag到本地: `git pull origin --tags`
8. 上传本地tag到远程仓库: `git push origin --tags`
9. 创建带注释的tag: `git tag -a [name] -m "your Message"`

## 查看信息相关命令
1. 显示有变更的文件: `git status`
2. 显示当前分支的版本历史: `git log`
3. 显示`commit`历史以及每次变更的文件: `git log --stat`
4. 搜索提交历史，根据关键词: `git log -S [keyword]`
5. 显示暂存区喝工作区的差异: `git diff`
6. 显示今天写了多少代码: `git diff --shortstat "@{0 day ago}"`

## 撤销相关命令
1. 恢复暂存区指定文件到工作区: `git checkout [file]`
2. 恢复某个`commit`的指定文件到暂存区和工作区: `git checkout [commit] [file]`
3. 恢复暂存区的所有文件到工作区: `git checkout .`
4. 重置暂存区指定文件与上次`commit`一致,工作区不变: `git reset [file]`
5. 重置暂存区和工作区: `git reset --hard`
6. 重置当前分支的指针为指定`commit`: `git reset --hard [commit]`

## 忽略提交文件、文件夹到远程仓库
在仓库根目录下创建名为`.gitignore`的文件,写入不需要的文件夹名或文件，每个元素占一行即可。
```
target
node_modules
*.db
```