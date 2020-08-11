---
 title: 学习shell脚本
---

# 学习shell脚本

* shell脚本是利用shell的功能所写的一个【程序(program)】，这个程序是使用纯文本文件，将一些shell的语法与命令（含外部命令）写在里面，搭配正则表达式、管道命令余数据流重定向等功能，以达到我们所想要的处理目的。

* shell脚本用在系统管理上面是很好的一项工具，但是用在处理大量数值运算上，就不够好了。因为shell脚本的速度较慢，且使用的CPU资源较多，会造成主机资源的分配不良。

* 在shell脚本的文件中，命令是从上而下、从左而右地分析与执行。

* shell脚本的执行，至少需要有r的权限；若需要直接执行命令，则需要拥有r与x的权限。

* 良好的程序编写中，第一行要声明shell(#!/bin/bash)，第二行起声明程序的用途、版本、作者等信息。

* ```bash
  #!/bin/bash
  # 用户在家目录下建立bin文件且bin文件具有rx的权限，那么可以直接输入脚本即可执行。
  # 例如
  PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
  export PATH
  echo -e "Hello World! \a \n"
  exit 0
  
  # 此文件地址为：用户家目录/bin/hello.sh
  # 在用户目录下任意地址输入：hello.sh
  # 即可得到 Hello World!
  ```

* 良好的脚本编写习惯，需要在脚本头记录好以下内容

  * 脚本的功能。
  * 脚本的版本信息。
  * 脚本的作者与联络方式。
  * 脚本的版权声明方式。
  * 脚本的History（历史记录）。
  * 脚本内较特殊的命令，使用【绝对路径】的方式来执行。
  * 脚本运行时需要的环境变量预先声明与设置。

* 交互式脚本可用read命令完成，下面是具体实例。

* ```bash
  #!/bin/bash
  PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
  export PATH
  read -p "please input your name: " name
  echo -e "\n Your name is: ${name}"
  ```

* 要每次执行脚本都有不同结果的数据，可使用date命令利用日期完成，下面是具体实例。

* ```bash
  #!/bin/bash
  # 例如日志文件，每天的日志文件名为log-XXXX-XX-XX.log（年月日），仅后缀年月日不同。
  PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
  export PATH
  # 让使用者输入文件名称，并取得fileuser变量
  echo -e "I will use 'touch' command to create 3 files."
  read -p "Please input your filename: " fileuser
  # 为了避免使用者随意按Enter，利用变量分析文件名是否设置
  filename=${fileuser:-"filename"}
  # 利用date命令来获取所需的文件名
  date1=$(date --date='2 days ago' +%Y%m%d) ## 前两天的日期
  date2=$(date --date='1 days ago' +%Y%m%d) ## 前一天的日期
  date3=$(date +%Y%m%d)
  file1=${filename}${date1}
  file2=${filename}${date2}
  file3=${filename}${date3}
  # 建立文件
  touch "${file1}"
  touch "${file2}"
  touch "${file3}"
  ```

* 脚本若以source来执行，代表在父程序的bash内执行之意。

  ```shell
  # 直接执行方式来执行脚本，脚本内容会在子进程运行，而子进程的变量等不会传回父进程中。
  # 例如，执行脚本，此时脚本中设置的变量，在最外层的命令行中无法获取。
  sh showname.sh # 假设脚本中，设置了name变量
  echo ${name} # name变量不存在
  
  # 利用source就可以让脚本在父进程中运行了，不开辟子进程。
  source showname.sh # 假设脚本中，设置了name变量
  echo ${name} # yuhongjing
  ```

* 若需要进行判断式，可使用test或中括号([  ])来处理。

  * test命令例子，测试/demo是否存在:`test -e /dmtsai && echo "exist" || echo "Not exist"`。

  * 还可以使用中括号进行判断，例如`${Home}`变量是否为空：`[ -z "{Home}" ]; echo $?`。

    * **中括号[]内的每个组件都需要空格分隔**。

    * 中括号内的变量，最好都以双引号包裹起来。

    * 中括号内的常量，最好都以单或双引号包裹起来。

    * ```shell
      # 假设『口』为空格，那么空格例子如下
      [ "$HOME" == "$MAIL" ]
      # 等于
      [口"$HOME"口==口"$MAIL"口]
      ```

* 在脚本内，\$0、\$1、\$2....\$@是有特殊意义的。

* ```shell
  # 除了read可以获取用户输入的参数之外。
  # 我们可以直接在命令行后面输入参数，然后通过$0、$1来获取参数
  # 例如
  /etc/init.d/network restart
  # $0为/etc/init.d/network  $1为restart
  
  # 其使用方式如下几类
  # 1. $#：代表后接的参数【个数】，具体指第N个参数。
  # 2. $@：代表【"$1", "$2", "$3", .....】所有参数的意思，每个变量独立的（用双引号包裹起来）。
  # 3. $*：代表【"$1c$2c$3c$4"】，其中c为分隔字符，默认为空格。
  ```

* shift表示偏移参数。其功能如下：

* ```shell
  # 命令如下
  # 其参数为：[a b c d e f]
  /etc/init.d/network a b c d e
  
  shift
  # 此时参数为：[b c d e f]
  
  shift 3
  # 此时参数为：[e f]
  ```

* 条件判断式可使用if...then来判断，若是固定变量内容的情况下，可使用case \$var in ... esac来处理。

* ```shell
  # if...then 语法
  if [ 条件判断式一 ]; then
    语句一
  elif [ 条件判断式二 ]; then
    语句二
  else
    语句三
  fi
  
  # case $var in ... esac 语法
  case $变量名称 in
    "第一个变量内容")
       程序段
       ;;
    "第二个变量内容")
       程序段
       ;;
    *)
       程序段
       exit 1
       ;;
  esac
  ```

* 循环主要分为不定循环(while与until)以及固定循环(for)，配合do、done来完成所需任务。

* ```shell
  # while do done 语法——不定循环
  while [ condition ] # 当条件成立，就开始循环
  do
  	程序段落
  done
  
  # until do done 语法——不定循环
  until [ condition ] # 当条件成立，就终止循环
  do
  	程序段落
  done
  
  # for...do...done 语法——固定循环
  for var in con1 con2 con3 ... # 对于数字可以 $ (seq 1 100)
  do
    程序段落
  done
  
  # for...do...done 语法——固定循环 第二种表达方式 数值处理
  for ((初始值; 限制值; 赋值运算))
  do
  	程序段
  done
  ```

* 函数`function`，需要写在程序最前面，且函数也支持`$0`、`$1`，表示函数名、参数1、参数2....

* ```shell
  # 语法
  function fname() {
    程序段
  }
  ```

* 我们可使用sh -x script.sh来进行程序的debug。

  * `-n`：不执行脚本，仅查询语法问题。
  * `-v`：在执行脚本前，先将脚本文件的内容输出在屏幕上。
  * `-x`：将使用到的脚本内容显示在屏幕上。