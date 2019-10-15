---
title: git连接多托管网站
sidebarDepth: 0
---
### Git同一台电脑连接多个远程仓库
在MAC的终端下输入以下命令,查看密匙
```bash
ls ~/.ssh
```
如果存在id_rsa和id_rsa.pub,说明已存在一对公钥/私钥。

### 创建新的密匙，并指定密匙的名称，例如id_rsa_X
```bash
ssh-keygen -t rsa -f ~/.ssh/id_rsa_x -C "yourmail@xxx.com"
```
操作完成后，该目录会多出id_rsa_x和id_rsa_x.pub两个文件。

### 在`~/.ssh/`文件夹下创建一个config文件
```bash
cd ~/.ssh/
touch config
vim config
```

### 编写config文件，配置不同的仓库指向不同的密钥文件
```bash
# 第一个账号，默认使用的账号
Host github.com
HostName github.com
User git
IdentityFile ~/.ssh/id_rsa
# 第二个账号
Host icode.baidu.com  # second为前缀名，可以任意设置
HostName icode.baidu.com
User git
IdentityFile ~/.ssh/id_rsa_x
```

### 查看SSH密匙的值，分别添加到对应的Git账户中
```bash
cat id_rsa.pub
cat id_rsa_x.pub
```

### 清空本地SSH缓存，添加新的SSH密匙到SSH agent中
```bash
ssh-add -D
ssh-add id_rsa
ssh-add id_rsa_x
```

### 确认新密匙是否添加成功
```bash
ssh-add -l
```

### 测试ssh链接
```bash
ssh -T git@github.com
ssh -T git@icode.baidu.com
# xxx! You’ve successfully authenticated, but GitHub does not provide bash access.
# 出现上述提示，连接成功
```

### 取消git全局用户名/邮箱的设置，设置独立的用户名/邮箱
```bash
# 取消全局 用户名/邮箱 配置
git config --global --unset user.name
git config --global --unset user.email
# 进入项目文件夹，单独设置每个repo 用户名/邮箱
git config user.email "xxxx@xx.com"
git config user.name "xxxx"
```

### 查看git项目的配置
```bash
git config --list
```

### 命令行进入项目目录，重建origin
```bash
git remote rm origin
# 远程仓库地址，注意Host名称
git remote add origin git@second.github.com:githubUserName/repName.git
git remote -v # 查看远程
```

::: tip 提示
[Git命令大全](../command/git.md)
:::