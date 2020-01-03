(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{233:function(a,e,t){"use strict";t.r(e);var s=t(2),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"常用的linux命令整理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用的linux命令整理"}},[a._v("#")]),a._v(" 常用的linux命令整理")]),a._v(" "),t("h2",{attrs:{id:"cd命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cd命令"}},[a._v("#")]),a._v(" cd命令")]),a._v(" "),t("p",[a._v("切换目录")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cd /root/document # 绝对路径\ncd ./path # 当前目录\ncd path # 当前目录\ncd ../path  # 上级目录\ncd ~  # 用户主目录\n")])])]),t("h2",{attrs:{id:"ls命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ls命令"}},[a._v("#")]),a._v(" ls命令")]),a._v(" "),t("p",[a._v("查看当前目录下的文件")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-l    # 列出长数据串，包含文件的属性与权限数据等\n-a    # 列出全部的文件，连同隐藏文件（开头为.的文件)一同也列出来\n-d    # 仅列出项目本身，而不是列出目录的文件数据\n-h    # 将文件容量以较易读的方式(GB, KB等)列出来\n-R    # 连同子目录的内容一起列出来(递归)\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),t("p",[a._v("参数可以组合使用,例如"),t("br"),a._v(" "),t("code",[a._v("ls -lR # 以长数据串的形式列出当前目录下的所有文件")])])]),a._v(" "),t("h2",{attrs:{id:"grep命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grep命令"}},[a._v("#")]),a._v(" grep命令")]),a._v(" "),t("p",[a._v("分析一行的信息，该命令通常与管道命令一起使用，用于对一些命令的输出进行筛选加工等。"),t("br"),a._v("\n它的简单语法为:  "),t("strong",[t("code",[a._v("grep [-acinv] [--color=auto] '查找字符串' filename")])])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-a    # 将binary文件以text文件的方式查找数据\n-c    # 计算找到 要查询的字符串 的次数\n-i    # 忽略大小写\n-v    # 反向选择\n\n# 例如:\n# 取出文件/etc/man.config中包含MANPATH的行，并把关键字添加颜色\ngrep --color=auto 'MANPATH' /etc/man.confg\n# 把ls -l的输出中包含字母file(不区分大小写)的内容输出\nls -l | grep -i file\n")])])]),t("h2",{attrs:{id:"find命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#find命令"}},[a._v("#")]),a._v(" find命令")]),a._v(" "),t("p",[a._v("find是一个查找功能非常强大的命令，参数较多而且复杂。"),t("br"),a._v("\n基本语法: "),t("strong",[t("code",[a._v("find [PATH] [option] [action]")])])]),a._v(" "),t("p",[t("strong",[t("code",[a._v("时间有关的参数")])])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('-mtime n    # n为数字，意思是n天之前的"一天内"被更改过的文件名\n-mtime +n   # 列出在n天之前(不包含n天本身)被更改过的文件名\n-mtime -n   # 列出在n天之前(包含n天本身)被更改过的文件名\n-newer file # 列出比file还要新的文件名\n\n# 例如\nfind /root -mtime 0 # /root目录下今天之内有改动的文件\n')])])]),t("p",[t("strong",[t("code",[a._v("用户和用户组名有关的参数")])])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-user name    # 列出文件所有者为name的文件\n-group name   # 列出文件所属用户组为name的文件\n-uid n        # 列出文件所有者为用户ID为n的文件\n-gid n        # 列出文件所属用户组为用户组ID为n的文件\n\n# 例如\nfind /home -user yuhongjing # 查找/home目录下所有者为yuhongjing的文件\n")])])]),t("p",[t("strong",[t("code",[a._v("文件权限及名称有关的参数")])])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-name filename    # 找出文件名为filename的文件\n-size +或-        # 找出比size还要大或小的文件\n-type TYPE        # 找出文件类型为TYPE的文件\n-perm mode        # 查找文件权限刚好等于mode的文件，mode用数字表示，如0755\n-perm -mode       # 查找文件权限必须要完全包括mode权限的文件\n-perm +mode       # 查找文件权限包含任一mode权限的文件\n\n# 例如\nfind / -name passwd # 查找文件名为passwd的文件\nfind . -perm 0755   # 查找当前目录中文件权限为0755的文件\nfind . -size +12k   # 查找当前目录中大于12KB的文件\n")])])]),t("h2",{attrs:{id:"cp命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cp命令"}},[a._v("#")]),a._v(" cp命令")]),a._v(" "),t("p",[a._v("复制文件，可以将多个文件一次性复制到一个目录下")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-a    # 将文件的特性一起复制\n-p    # 连同文件的属性一同复制，常用于备份\n-i    # 若目标文件已经存在，则覆盖时会先询问操作\n-r    # 递归持续复制，用于目录的复制\n-u    # 目标文件与源文件有差异时才会复制\n\n# 例如\ncp -a file1 file2 # 连同文件的所有特性把文件file1复制成文件file2\ncp file1 file2 file3 dir # 把文件file1、2、3复制到目录dir中\n")])])]),t("h2",{attrs:{id:"mv命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mv命令"}},[a._v("#")]),a._v(" mv命令")]),a._v(" "),t("p",[a._v("移动文件、目录或更名")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-f    # force强制的意思，如果目标文件已经存在，不会询问而直接覆盖\n-i    # 若目标已经存在，就会询问是否覆盖\n-u    # 若目标已经存在，且比目标文件新，才会覆盖\n\n# 注意 该命令可以把一个文件或多个文件一次移动一个文件夹中，但是最后一个目标文件一定要是“目录”。\n\n# 例如\nmv file1 file2 file3 dir # 把文件file1、2、3移动到目录dir中\nmv file1 file2  # 把文件file1重命名为file2\n")])])]),t("h2",{attrs:{id:"rm命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rm命令"}},[a._v("#")]),a._v(" rm命令")]),a._v(" "),t("p",[a._v("删除文件或目录")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-f    # force强制的意思，忽略不存在的文件，不会出现警告消息\n-i    # 互动模式，在删除前会询问用户\n-r    # 递归删除，常用语目录删除，非常危险\n\n# 例如\nrm -i file  # 删除文件file，在删除前会询问用户是否进行该操作\nrm -fr dir  # 强制删除目录dir中的所有文件\n")])])]),t("h2",{attrs:{id:"ps命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ps命令"}},[a._v("#")]),a._v(" ps命令")]),a._v(" "),t("p",[a._v("某个时间点的进程运行情况选取下来并输出，procees的意思")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-A    # 所有进程均显示出来\n-a    # 不会显示terminal有关的所有进程\n-u    # 有效用户的相关进程\n-x    # 一般与a参数一起使用，可列出完整的信息\n-l    # 较长，较详细的将PID的信息列出\n\n# 例如\nps aux  # 查看系统的所有进程数据\nps ax   # 查看不与terminal有关的所有进程\nps -lA  # 查看系统的所有进程数据\nps axjf # 查看同一部分进程树状态\n")])])]),t("h2",{attrs:{id:"kill命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kill命令"}},[a._v("#")]),a._v(" kill命令")]),a._v(" "),t("p",[a._v("向某个工作或者某个PID传送一个信息，通常与ps和jobs命令一起使用。"),t("br"),a._v("\n基本语法: "),t("strong",[t("code",[a._v("kill -signal PID")])])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 最前面的数字为信号的代号， 使用时可以用代号代替相应的新号\n1: SIGHUP   # 启动被终止的进程\n2: SIGINT   # 相当于输入ctrl + c, 中断一个程序的进行\n9: SIGKILL  # 强制中断一个进程的进行\n15: SIGTERM # 以正常的结束进程方式来终止进程\n17: SIGSTOP # 相当于输入ctrl + z, 暂停一个进程的进行\n\n# 例如\n# 以正常的结束进程方式来中断第一个后台工作，可用jobs命令查看后台的第一个工作进程\nkill -SIGTERM %1\n# 重新改动进程ID为PID的进程，PID可用PS命令通过管道命令加上grep命令进行筛选获得\nkill -SIGHUP  PID\n")])])]),t("h2",{attrs:{id:"killall命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#killall命令"}},[a._v("#")]),a._v(" killall命令")]),a._v(" "),t("p",[a._v("向一个命令启动的进程发送一个信号。"),t("br"),a._v("\n基础语法: "),t("strong",[t("code",[a._v("killall [-iIe] [command name]")])])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-i    # 交互式的意思，若需要删除时，会询问用户\n-e    # 表示后面接的command name要一致，但command name不能超过15个字符\n-I    # 命令名称忽略大小写\n\n# 例如：\nkillall -SIGHUP syslogd # 重新启动syslogd\n")])])]),t("h2",{attrs:{id:"file命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file命令"}},[a._v("#")]),a._v(" file命令")]),a._v(" "),t("p",[a._v("判断接在file命令后的文件的基本数据。"),t("br"),a._v("\n基本语法: "),t("strong",[t("code",[a._v("file filename")])])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 例如\nfile ./test\n")])])]),t("h2",{attrs:{id:"tar命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tar命令"}},[a._v("#")]),a._v(" tar命令")]),a._v(" "),t("p",[a._v("对文件进行压缩和解压。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-c    # 新建打包文件\n-t    # 查看打包文件的内容含有哪些文件名\n-x    # 解打包或解压缩的功能，可以搭配-C（大写）指定解压的目录，注意-c,-t,-x不能同时出现在同一条命令中\n-j    # 通过bzip2的支持进行压缩/解压缩\n-z    # 通过gzip的支持进行压缩/解压缩\n-v    # 在压缩/解压缩过程中，将正在处理的文件名显示出来\n-f filename   # filename为要处理的文件\n-C dir    # 指定压缩/解压缩的目录dir\n\n# 例如\ntar -zvxf filename\n\n压缩：tar -jcv -f filename.tar.bz2 要被处理的文件或目录名称\n查询：tar -jtv -f filename.tar.bz2\n解压：tar -jxv -f filename.tar.bz2 -C 欲解压缩的目录\n")])])]),t("h2",{attrs:{id:"cat命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cat命令"}},[a._v("#")]),a._v(" cat命令")]),a._v(" "),t("p",[a._v("查看文本文件的内容，通常与管道或more和less一起使用，可以一页页的查看数据。"),t("br"),a._v("\n基本语法: "),t("strong",[t("code",[a._v("cat [filename] | [less|more]")])])]),a._v(" "),t("h2",{attrs:{id:"chgrp命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chgrp命令"}},[a._v("#")]),a._v(" chgrp命令")]),a._v(" "),t("p",[a._v("改变文件所属用户组"),t("br"),a._v("\n基本语法: "),t("strong",[t("code",[a._v("chgrp [-R] dirname/filename")])])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-R    # 进行递归的持续对所有文件和子目录更改\n\n# 例如\nchgrp users -R ./dir # 递归的把dir目录下的所有文件和子目录用户组修改为users\n")])])]),t("h2",{attrs:{id:"chown命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chown命令"}},[a._v("#")]),a._v(" chown命令")]),a._v(" "),t("p",[a._v("改变文件的所有者，与"),t("code",[a._v("chgrp")]),a._v("命令的使用方法相同，只是修改的文件属性不同。")]),a._v(" "),t("h2",{attrs:{id:"chmod命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chmod命令"}},[a._v("#")]),a._v(" chmod命令")]),a._v(" "),t("p",[a._v("改变文件的权限"),t("br"),a._v("\n基本语法: "),t("strong",[t("code",[a._v("chmod [-R] xyz [file|dir]")])])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-R    # 递归持续的更改，所有子目录都会更改\n")])])]),t("h2",{attrs:{id:"vim命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vim命令"}},[a._v("#")]),a._v(" vim命令")]),a._v(" "),t("p",[a._v("用于文本编辑，接受一个或多个文件名作为参数，如果文件存在就打开，不存在就创建文件。")]),a._v(" "),t("h2",{attrs:{id:"gcc命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gcc命令"}},[a._v("#")]),a._v(" gcc命令")]),a._v(" "),t("p",[a._v("将c程序编译成可执行文件")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("\n-o    # output之意，用于指定生成一个可执行文件的文件名\n-c    # 用于把源文件生成目标文件（.o)，并阻止编译器创建一个完整的程序\n-I    # 增加编译时搜索头文件的路径\n-L    # 增加编译时搜索静态连接库的路径\n-S    # 把源文件生成汇编代码文件\n-lm   # 表示标准库的目录中名为libm.a的函数库\n-lpthread     # 连接NPTL实现的线程库\n-std=     # 用于指定把使用的C语言的版本\n \n# 例如：\n# 把源文件test.c按照c99标准编译成可执行程序test\ngcc -o test test.c -lm -std=c99\n#把源文件test.c转换为相应的汇编程序源文件test.s\ngcc -S test.c\n")])])]),t("h2",{attrs:{id:"time命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#time命令"}},[a._v("#")]),a._v(" time命令")]),a._v(" "),t("p",[a._v("用于测试一个命令(即程序)的运行时间。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 例如\ntime ./process\ntime ps aux\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);