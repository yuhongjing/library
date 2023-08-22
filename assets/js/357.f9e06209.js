(window.webpackJsonp=window.webpackJsonp||[]).push([[357],{727:function(l,v,_){"use strict";_.r(v);var i=_(28),s=Object(i.a)({},(function(){var l=this,v=l.$createElement,_=l._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[_("h1",{attrs:{id:"认识与学习bash"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#认识与学习bash"}},[l._v("#")]),l._v(" 认识与学习BASH")]),l._v(" "),_("ul",[_("li",[l._v("前面几章我们通过终端执行命令的方式，是通过bash的环境来处理的，所以说，它很重要。bash的东西非常的多，包括变量的设置与使用、bash操作环境的创建、数据流重定向的功能，还有很好用的管道命令。")]),l._v(" "),_("li",[l._v("管理整个计算机硬件的其实是操作系统的内核(kernel)，而内核在内存中是受保护的区块，因此我们必须要通过【shell】将我们输入的命令与内核沟通，好让内核可以控制硬件来正确无误地工作。")]),l._v(" "),_("li",[l._v("学习shell的原因主要有：命令行模式的shell在各大Linux的发行版都一样；远程管理时命令行模式速度较快；shell是管理Linux系统非常重要的一环，因为Linux中很多管理命令都是以shell编写的。")]),l._v(" "),_("li",[l._v("操作系统合法的shell均写在/etc/shells文件中。")]),l._v(" "),_("li",[l._v("用户默认登录取得的shell记录于/etc/passwd的最后一个字段。")]),l._v(" "),_("li",[l._v("bash是Linux默认的shell，是GNU计划中重要的工具软件之一，目前也是Linux发行版的标准shell。兼容sh，并且依据用户需求而加强的shell版本。")]),l._v(" "),_("li",[l._v("bash的主要功能有：历史命令、命令与文件补全功能、命令别名设置功能、任务管理、前台后台控制、程序化脚本、通配符。")]),l._v(" "),_("li",[l._v("type可以用来找到执行命令为何种类型，亦可用于与which相同的功能。\n"),_("ul",[_("li",[_("code",[l._v("type -a ls")])])])]),l._v(" "),_("li",[l._v("shell环境中，可以通过快捷键调整位置。\n"),_("ul",[_("li",[l._v("[ctrl] + a，移动到命令最前。")]),l._v(" "),_("li",[l._v("[ctrl] + e，移动到命令最后。")]),l._v(" "),_("li",[l._v("[ctrl] + u，删除光标之前内容。")]),l._v(" "),_("li",[l._v("[ctrl] + k，删除光标之后内容。")])])]),l._v(" "),_("li",[l._v("变量就是以一组文字或符号等，来替换一些设置或是一串保留的数据。")]),l._v(" "),_("li",[l._v("变量主要有环境变量与自定义变量，或称为全局变量与局部变量。")]),l._v(" "),_("li",[l._v("使用env与export可观察环境变量时，其中export可以将自定义变量转成环境变量。")]),l._v(" "),_("li",[l._v("set可以观察目前bash环境下的所有变量。")]),l._v(" "),_("li",[l._v("基本上在Linux默认的情况中，使用{大写的字母}来设置的变量一般都为系统内定需要的变量。")]),l._v(" "),_("li",[l._v("$?亦为变量，是前一个命令执行完毕后的返回值，在Linux返回值为0代表执行成功。")]),l._v(" "),_("li",[l._v("子进程仅会继承父进程的环境变量，子进程不会继承父进程的自定义变量。")]),l._v(" "),_("li",[l._v("locale可用于观察语系数据，declare或typeset用于声明变量的类型。")]),l._v(" "),_("li",[l._v("可用read让用户由键盘输入变量的值。")]),l._v(" "),_("li",[l._v("ulimit可用以限制用户使用系统的资源情况。")]),l._v(" "),_("li",[l._v("命令别名，通过alias和unalias可以给命令一个别名。")]),l._v(" "),_("li",[l._v("历史命令，通过history可以查看历史输入的命令。")]),l._v(" "),_("li",[l._v("路径与命令查找顺序，例如在系统中有很多ls命令，但是到底执行的是哪一个呢？\n"),_("ul",[_("li",[l._v("以相对/绝对顺序执行命令，例如【/bin/ls】或【./ls】。")]),l._v(" "),_("li",[l._v("由alias找到该命令来执行。")]),l._v(" "),_("li",[l._v("由bash内置的(builtin)命令来执行。")]),l._v(" "),_("li",[l._v("通过$PATH变量的顺序查到的第一个命令来执行。")])])]),l._v(" "),_("li",[l._v("bash的登录与欢迎信息：/etc/issue、/etc/motd。\n"),_("ul",[_("li",[l._v("/etc/issue：终端登录欢迎信息。")]),l._v(" "),_("li",[l._v("/etc/motd：远程程序登录欢迎信息。")])])]),l._v(" "),_("li",[l._v("bash的配置文件主要分为login shell与non-login shell，login shell主要读取/etc/profile与~/.bash_profile、non-login shell则仅读取~/.bashrc。\n"),_("ul",[_("li",[l._v("取得bash时需要完整的登录流程，就称为login shell。举例来说，你要由tty1~tty6登录，需要输入用户的账号与密码，此时取得的bash就称为【login shell】。")]),l._v(" "),_("li",[l._v("取得bash的方法不需要重复登录的操作，就称为no-login shell。举例来说\n"),_("ul",[_("li",[l._v("以X Window登录Linux后，再以X的图形化接口启动终端，此时这个终端接口并不需要再次输入账号与密码，就称为non-login shell。")]),l._v(" "),_("li",[l._v("在原本的bash环境下再次执行bash这个命令，同样的也没有输入帐号密码，第二个bash(子进程)也是non-login shell。")])])])])]),l._v(" "),_("li",[l._v("/etc/profile（login shell读取）：系统的整体设置，最好不要修改这个问题。每个用户登录取得bash时，一定会读取的文件。根据用户标识符(UID)来决定很多重要的变量数据，以及调度外部文件。\n"),_("ul",[_("li",[l._v("PATH：根据UID决定PATH变量要不要含有sbin的系统命令目录。")]),l._v(" "),_("li",[l._v("MAIL：根据账号设置好用户的mailbox到/var/spool/mail/账户名。")]),l._v(" "),_("li",[l._v("USRE：根据用户的账号设置此变量内容。")]),l._v(" "),_("li",[l._v("HOSTNAME：根据主机的hostname命令决定此变量内容。")]),l._v(" "),_("li",[l._v("HISTSIZE：历史命令记录条数，CentOS 7.X设置为1000。")]),l._v(" "),_("li",[l._v("umask：包括root默认为022，而一般用户为002等。")])])]),l._v(" "),_("li",[l._v("~/.bash_profile或~/.bash_login或~/.profile：属于用户个人设置，可以自己添加数据。")]),l._v(" "),_("li",[l._v("终端的环境设置：stty、set。\n"),_("ul",[_("li",[_("code",[l._v("stty -a")]),l._v("，将目前所有的stty参数列出来。")]),l._v(" "),_("li",[_("code",[l._v("set")]),l._v("，设置终端的变量值。")])])]),l._v(" "),_("li",[l._v("在使用vim时，若不小心按了[ctrl]+s则画面会被冻结，你可以使用[ctrl]+q来解除。")]),l._v(" "),_("li",[l._v("通配符主要有: *、?、[]等。")]),l._v(" "),_("li",[l._v("数据流重定向通过>、2>、<之类的符号将输出的信息转到其他文件或设备中。\n"),_("ul",[_("li",[l._v("标准输入(stdin)：代码为0，使用<或<<。")]),l._v(" "),_("li",[l._v("标准输出(stdout)：代码为1，使用>或>>。")]),l._v(" "),_("li",[l._v("标准错误输出(stderr)：代码为2，使用2>或2>>。")])])]),l._v(" "),_("li",[l._v("连续命令的执行可通过"),_("code",[l._v(";")]),l._v("、 "),_("code",[l._v("&&")]),l._v("、"),_("code",[l._v("||")]),l._v("等符号来处理。\n"),_("ul",[_("li",[_("code",[l._v("sync; sync; shutdown -h now")]),l._v("，利用分号分隔，依次执行。")]),l._v(" "),_("li",[_("code",[l._v("cmd1 && cmd2")]),l._v("，cmd1执行完毕且正确则执行cmd2。")]),l._v(" "),_("li",[_("code",[l._v("cmd1 || cmd2")]),l._v("，cmd1执行完毕且正确则不执行cmd2，否则则执行cmd2.")])])]),l._v(" "),_("li",[l._v("管道命令("),_("code",[l._v("|")]),l._v(")的重点是：管道命令仅会处理标准输出，对于标准错误会予以忽略、管道命令必须要能够接受来自"),_("strong",[l._v("前一个")]),l._v("命令的数据称为标准输入才能继续执行。")]),l._v(" "),_("li",[l._v("本章介绍的管道命令主要有：cut、grep、sort、wc、uniq、tee、tr、col、join、paste、expand、split、xargs等。\n"),_("ul",[_("li",[l._v("选取命令\n"),_("ul",[_("li",[l._v("cut：将信息的某一段单独【切】出来。单位【行】。")]),l._v(" "),_("li",[l._v("grep：分析一行信息，如果有我们所需信息，就提取该行。单位【行】。")])])]),l._v(" "),_("li",[l._v("排序命令\n"),_("ul",[_("li",[l._v("sort：将信息进行排序。")]),l._v(" "),_("li",[l._v("wc：计算输出信息的整体数据，文件有多少字，多少行。")]),l._v(" "),_("li",[l._v("uniq：去重，删掉重复的信息。")])])]),l._v(" "),_("li",[l._v("双向重定向命令\n"),_("ul",[_("li",[l._v("tee：可以同时将数据流发送到文件与屏幕。")])])]),l._v(" "),_("li",[l._v("字符转换命令\n"),_("ul",[_("li",[l._v("tr：删除一段信息当中的文字，或是进行文字信息的替换。")]),l._v(" "),_("li",[l._v("col：将"),_("code",[l._v("tab")]),l._v("转为对应的空格。")]),l._v(" "),_("li",[l._v("join：处理两个文件之间的数据。两个文件当中，有相同数据的那一行，才将它加在一起。")]),l._v(" "),_("li",[l._v("paste：直接将两行贴在一起，且中间以"),_("code",[l._v("tab")]),l._v("键隔开。")]),l._v(" "),_("li",[l._v("expand：将"),_("code",[l._v("tab")]),l._v("转换为空格键。")])])]),l._v(" "),_("li",[l._v("划分命令\n"),_("ul",[_("li",[l._v("split：将大文件依据文件大小或行数来划分为小文件。")])])]),l._v(" "),_("li",[l._v("参数代换命令\n"),_("ul",[_("li",[l._v("xargs：产生某个命令的参数。")])])])])]),l._v(" "),_("li",[l._v("关于减号["),_("code",[l._v("-")]),l._v("]的用途，在管道命令中，常常会用到前一个命令的stdout作为这次的stdin，某些命令需要用到文件名(例如tar)来进行处理时，该stdin与stdout可以利用减号"),_("code",[l._v("-")]),l._v("来替代。")])])])}),[],!1,null,null,null);v.default=s.exports}}]);