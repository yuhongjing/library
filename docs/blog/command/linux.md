---
title: 'linux常用命令'
---
## 常用的linux命令整理

## cd命令
切换目录
```shell
cd /root/document # 绝对路径
cd ./path # 当前目录
cd path # 当前目录
cd ../path  # 上级目录
cd ~  # 用户主目录
```

## ls命令
查看当前目录下的文件
```shell
-l    # 列出长数据串，包含文件的属性与权限数据等
-a    # 列出全部的文件，连同隐藏文件（开头为.的文件)一同也列出来
-d    # 仅列出项目本身，而不是列出目录的文件数据
-h    # 将文件容量以较易读的方式(GB, KB等)列出来
-R    # 连同子目录的内容一起列出来(递归)
```

::: tip 提示
参数可以组合使用,例如  
`ls -lR  # 以长数据串的形式列出当前目录下的所有文件`
:::

## grep命令
分析一行的信息，该命令通常与管道命令一起使用，用于对一些命令的输出进行筛选加工等。  
它的简单语法为:  **`grep [-acinv] [--color=auto] '查找字符串' filename`**
```shell
-a    # 将binary文件以text文件的方式查找数据
-c    # 计算找到 要查询的字符串 的次数
-i    # 忽略大小写
-v    # 反向选择

# 例如:
# 取出文件/etc/man.config中包含MANPATH的行，并把关键字添加颜色
grep --color=auto 'MANPATH' /etc/man.confg
# 把ls -l的输出中包含字母file(不区分大小写)的内容输出
ls -l | grep -i file
```

## find命令
find是一个查找功能非常强大的命令，参数较多而且复杂。  
基本语法: **`find [PATH] [option] [action]`**  

**`时间有关的参数`**
```shell
-mtime n    # n为数字，意思是n天之前的"一天内"被更改过的文件名
-mtime +n   # 列出在n天之前(不包含n天本身)被更改过的文件名
-mtime -n   # 列出在n天之前(包含n天本身)被更改过的文件名
-newer file # 列出比file还要新的文件名

# 例如
find /root -mtime 0 # /root目录下今天之内有改动的文件
```

**`用户和用户组名有关的参数`**
```shell
-user name    # 列出文件所有者为name的文件
-group name   # 列出文件所属用户组为name的文件
-uid n        # 列出文件所有者为用户ID为n的文件
-gid n        # 列出文件所属用户组为用户组ID为n的文件

# 例如
find /home -user yuhongjing # 查找/home目录下所有者为yuhongjing的文件
```

**`文件权限及名称有关的参数`**
```shell
-name filename    # 找出文件名为filename的文件
-size +或-        # 找出比size还要大或小的文件
-type TYPE        # 找出文件类型为TYPE的文件
-perm mode        # 查找文件权限刚好等于mode的文件，mode用数字表示，如0755
-perm -mode       # 查找文件权限必须要完全包括mode权限的文件
-perm +mode       # 查找文件权限包含任一mode权限的文件

# 例如
find / -name passwd # 查找文件名为passwd的文件
find . -perm 0755   # 查找当前目录中文件权限为0755的文件
find . -size +12k   # 查找当前目录中大于12KB的文件
```

## cp命令
复制文件，可以将多个文件一次性复制到一个目录下
```shell
-a    # 将文件的特性一起复制
-p    # 连同文件的属性一同复制，常用于备份
-i    # 若目标文件已经存在，则覆盖时会先询问操作
-r    # 递归持续复制，用于目录的复制
-u    # 目标文件与源文件有差异时才会复制

# 例如
cp -a file1 file2 # 连同文件的所有特性把文件file1复制成文件file2
cp file1 file2 file3 dir # 把文件file1、2、3复制到目录dir中
```

## mv命令
移动文件、目录或更名
```shell
-f    # force强制的意思，如果目标文件已经存在，不会询问而直接覆盖
-i    # 若目标已经存在，就会询问是否覆盖
-u    # 若目标已经存在，且比目标文件新，才会覆盖

# 注意 该命令可以把一个文件或多个文件一次移动一个文件夹中，但是最后一个目标文件一定要是“目录”。

# 例如
mv file1 file2 file3 dir # 把文件file1、2、3移动到目录dir中
mv file1 file2  # 把文件file1重命名为file2
```

## rm命令
删除文件或目录
```shell
-f    # force强制的意思，忽略不存在的文件，不会出现警告消息
-i    # 互动模式，在删除前会询问用户
-r    # 递归删除，常用语目录删除，非常危险

# 例如
rm -i file  # 删除文件file，在删除前会询问用户是否进行该操作
rm -fr dir  # 强制删除目录dir中的所有文件
```

## ps命令
某个时间点的进程运行情况选取下来并输出，procees的意思
```shell
-A    # 所有进程均显示出来
-a    # 不会显示terminal有关的所有进程
-u    # 有效用户的相关进程
-x    # 一般与a参数一起使用，可列出完整的信息
-l    # 较长，较详细的将PID的信息列出

# 例如
ps aux  # 查看系统的所有进程数据
ps ax   # 查看不与terminal有关的所有进程
ps -lA  # 查看系统的所有进程数据
ps axjf # 查看同一部分进程树状态
```

## kill命令
向某个工作或者某个PID传送一个信息，通常与ps和jobs命令一起使用。  
基本语法: **`kill -signal PID`**
```shell
# 最前面的数字为信号的代号， 使用时可以用代号代替相应的新号
1: SIGHUP   # 启动被终止的进程
2: SIGINT   # 相当于输入ctrl + c, 中断一个程序的进行
9: SIGKILL  # 强制中断一个进程的进行
15: SIGTERM # 以正常的结束进程方式来终止进程
17: SIGSTOP # 相当于输入ctrl + z, 暂停一个进程的进行

# 例如
# 以正常的结束进程方式来中断第一个后台工作，可用jobs命令查看后台的第一个工作进程
kill -SIGTERM %1
# 重新改动进程ID为PID的进程，PID可用PS命令通过管道命令加上grep命令进行筛选获得
kill -SIGHUP  PID
```

## killall命令
向一个命令启动的进程发送一个信号。  
基础语法: **`killall [-iIe] [command name]`**
```shell
-i    # 交互式的意思，若需要删除时，会询问用户
-e    # 表示后面接的command name要一致，但command name不能超过15个字符
-I    # 命令名称忽略大小写

# 例如：
killall -SIGHUP syslogd # 重新启动syslogd
```

## file命令
判断接在file命令后的文件的基本数据。  
基本语法: **`file filename`**
```shell
# 例如
file ./test
```

## tar命令
对文件进行压缩和解压。
```shell
-c    # 新建打包文件
-t    # 查看打包文件的内容含有哪些文件名
-x    # 解打包或解压缩的功能，可以搭配-C（大写）指定解压的目录，注意-c,-t,-x不能同时出现在同一条命令中
-j    # 通过bzip2的支持进行压缩/解压缩
-z    # 通过gzip的支持进行压缩/解压缩
-v    # 在压缩/解压缩过程中，将正在处理的文件名显示出来
-f filename   # filename为要处理的文件
-C dir    # 指定压缩/解压缩的目录dir

# 例如
tar -zvxf filename

压缩：tar -jcv -f filename.tar.bz2 要被处理的文件或目录名称
查询：tar -jtv -f filename.tar.bz2
解压：tar -jxv -f filename.tar.bz2 -C 欲解压缩的目录
```

## cat命令
查看文本文件的内容，通常与管道或more和less一起使用，可以一页页的查看数据。  
基本语法: **`cat [filename] | [less|more]`** 

## chgrp命令
改变文件所属用户组  
基本语法: **`chgrp [-R] dirname/filename`**
```shell
-R    # 进行递归的持续对所有文件和子目录更改

# 例如
chgrp users -R ./dir # 递归的把dir目录下的所有文件和子目录用户组修改为users
```

## chown命令
改变文件的所有者，与`chgrp`命令的使用方法相同，只是修改的文件属性不同。

## chmod命令
改变文件的权限  
基本语法: **`chmod [-R] xyz [file|dir]`**
```shell
-R    # 递归持续的更改，所有子目录都会更改
```

## vim命令
用于文本编辑，接受一个或多个文件名作为参数，如果文件存在就打开，不存在就创建文件。

## gcc命令
将c程序编译成可执行文件
```shell

-o    # output之意，用于指定生成一个可执行文件的文件名
-c    # 用于把源文件生成目标文件（.o)，并阻止编译器创建一个完整的程序
-I    # 增加编译时搜索头文件的路径
-L    # 增加编译时搜索静态连接库的路径
-S    # 把源文件生成汇编代码文件
-lm   # 表示标准库的目录中名为libm.a的函数库
-lpthread     # 连接NPTL实现的线程库
-std=     # 用于指定把使用的C语言的版本
 
# 例如：
# 把源文件test.c按照c99标准编译成可执行程序test
gcc -o test test.c -lm -std=c99
#把源文件test.c转换为相应的汇编程序源文件test.s
gcc -S test.c
```

## time命令
用于测试一个命令(即程序)的运行时间。
```shell
# 例如
time ./process
time ps aux
```