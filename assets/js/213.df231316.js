(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{583:function(s,e,t){"use strict";t.r(e);var a=t(28),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"redis集群搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis集群搭建"}},[s._v("#")]),s._v(" Redis集群搭建")]),s._v(" "),t("p",[s._v("使用Redis replication实现主从复制，Redis sential实现高可用（探活、自动主从切换、查询主节点）。")]),s._v(" "),t("ul",[t("li",[s._v("Redis下载地址："),t("a",{attrs:{href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://redis.io/"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v("Redis replication："),t("a",{attrs:{href:"https://redis.io/topics/replication",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://redis.io/topics/replication"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v("Redis sential："),t("a",{attrs:{href:"https://redis.io/topics/sentinel",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://redis.io/topics/sentinel"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"搭建架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建架构"}},[s._v("#")]),s._v(" 搭建架构")]),s._v(" "),t("p",[s._v("两台服务器")]),s._v(" "),t("ul",[t("li",[s._v("A服务器，一个Redis节点---6379端口。")]),s._v(" "),t("li",[s._v("B服务器，二个Redis节点---6379 6380端口，两个哨兵(Sentinel)---26379 26380端口。")])]),s._v(" "),t("p",[s._v("架构图如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/redis-cluster.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"安装redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装redis"}},[s._v("#")]),s._v(" 安装Redis")]),s._v(" "),t("h3",{attrs:{id:"安装包获取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装包获取"}},[s._v("#")]),s._v(" 安装包获取")]),s._v(" "),t("ul",[t("li",[s._v("wget获取："),t("code",[s._v("wget http://download.redis.io/releases/redis-6.0.6.tar.gz")])]),s._v(" "),t("li",[s._v("官网下载压缩包，通过rz命令上传服务器")])]),s._v(" "),t("h3",{attrs:{id:"解压"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解压"}},[s._v("#")]),s._v(" 解压")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提取文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xzf redis-6.0.6.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入文件夹解压")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" redis-6.0.6\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动Redis 这里是通过文件来执行，如果直接在src目录中执行redis-server会被认为是命令")]),s._v("\nsrc/redis-server\n")])])]),t("h2",{attrs:{id:"文件目录架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件目录架构"}},[s._v("#")]),s._v(" 文件目录架构")]),s._v(" "),t("p",[s._v("建议在用户目录下，建立Redis相关配置。")]),s._v(" "),t("h3",{attrs:{id:"a服务器文件架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a服务器文件架构"}},[s._v("#")]),s._v(" A服务器文件架构")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("--"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" work\n  --"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" redis_conf\n    --"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" redis_6379.conf "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从下载的redis目录下cp redis.conf ~/redis_conf/redis_6379.conf")]),s._v("\n")])])]),t("h3",{attrs:{id:"b服务器文件架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#b服务器文件架构"}},[s._v("#")]),s._v(" B服务器文件架构")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("--"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" work\n  --"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" redis_conf\n    --"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" redis_6379.conf "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从下载的redis目录下cp redis.conf ~/redis_conf/redis_6379.conf")]),s._v("\n    --"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" redis_6380.conf\n    --"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sentinel_26379.conf "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从下载的redis目录下cp sentinel.conf ~/redis_conf/sentinel_26379.conf")]),s._v("\n    --"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sentinel_26380.conf\n")])])]),t("h2",{attrs:{id:"a服务器redis配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a服务器redis配置"}},[s._v("#")]),s._v(" A服务器Redis配置")]),s._v(" "),t("p",[s._v("服务器A的Redis节点，我们想默认为master节点。")]),s._v(" "),t("p",[s._v("修改redis_6379.conf文件，其主要配置如下：")]),s._v(" "),t("div",{staticClass:"language-conf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('bind xx.xx.xx.xx # A服务器IP\nport 6379 # 端口号\nprotected-mode yes # 保护模式，连接Redis需要输入密码\ndaemonize yes # 守护进程启动\nsupervised yes # 使用supervise，缓存，可以不使用\npidfile "/home/work/redis_conf/var/run/redis_xxx.pid" # 修改路径，创建一个文件夹存放\nlogfile "/home/work/redis_conf/log/redis.log" # 修改路径，日志文件\ndir "/home/work/redis_conf/data"\nmasterauth "xxxxx"  # 登录密码，保护模式下必须设置\nrequirepass "xxxxx"  # 确认登录密码，和masterauth保持一致即可\nreplica-read-only yes # master可读写，slave只读\n')])])]),t("p",[s._v("启动Redis命令为："),t("code",[s._v("src/redis-server ~/redis_conf/redis_6379.conf")]),s._v("。")]),s._v(" "),t("p",[s._v("启动Redis cli命令为："),t("code",[s._v("src/redis-cli -h ${host}-p ${port} -a ${password}")]),s._v("。")]),s._v(" "),t("p",[s._v("测试效果：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录Redis cli")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" info\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Replication")]),s._v("\nrole:master "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以看见当前redis为master角色")]),s._v("\nmaster_host:xx.xx.xx.xx\nmaster_port:xxxx\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试功能")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" foo bar\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" get foo "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# bar")]),s._v("\n")])])]),t("p",[s._v("现在A服务器配置大功告成。启动、关闭Redis及cli命令可以自己写shell脚本。")]),s._v(" "),t("h2",{attrs:{id:"b服务器redis配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#b服务器redis配置"}},[s._v("#")]),s._v(" B服务器Redis配置")]),s._v(" "),t("p",[s._v("B服务器的配置稍微复杂一点，需要配置两个Redis服务及两个哨兵。（其实就是多复制一份配置文件即可）。")]),s._v(" "),t("h3",{attrs:{id:"配置redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置redis"}},[s._v("#")]),s._v(" 配置Redis")]),s._v(" "),t("p",[s._v("配置基本上和主服务器一样。修改redis_6379.conf文件。")]),s._v(" "),t("div",{staticClass:"language-conf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('bind xx.xx.xx.xx # B服务器IP\nport 6379 # 端口号\nprotected-mode no # 保护模式，连接Redis需要输入密码\ndaemonize yes # 守护进程启动\nsupervised yes # 使用supervise，缓存，可以不使用\npidfile "/home/work/redis_conf/var/run/redis_xxx.pid" # 修改路径，创建一个文件夹存放\nlogfile "/home/work/redis_conf/log/redis.log" # 修改路径，日志文件\ndir "/home/work/redis_conf/data"\nmasterauth "xxxxx"  # 登录密码，保护模式下必须设置\nrequirepass "xxxxx"  # 确认登录密码，和masterauth保持一致即可\nreplica-read-only yes # master可读写，slave只读\n\n# 指定master Redis，自己就变为了从属redis slave\nreplicaof xx.xx.xx.xx xxxx # IP port，这里非常重要，写在文件最后，指定master 即A服务器的Redis服务地址端口。\n')])])]),t("p",[s._v("启动Redis命令为："),t("code",[s._v("src/redis-server ~/redis_conf/redis_6379.conf")]),s._v("。")]),s._v(" "),t("p",[s._v("启动Redis cli命令为："),t("code",[s._v("src/redis-cli -h ${host}-p ${port} -a ${password}")]),s._v("。")]),s._v(" "),t("p",[s._v("测试效果：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录Redis cli")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" info\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Replication")]),s._v("\nrole:slave "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以看见当前redis为master角色")]),s._v("\nmaster_host:xx.xx.xx.xx\nmaster_port:xxxx\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试功能")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" foo bar "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 报错，slave没有写入权限")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" get foo "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# bar， 返回之前master set的值")]),s._v("\n")])])]),t("h4",{attrs:{id:"搭建多个redis-slave"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建多个redis-slave"}},[s._v("#")]),s._v(" 搭建多个Redis slave")]),s._v(" "),t("p",[s._v("为了安全，最好搭建多个Redis slave。")]),s._v(" "),t("p",[s._v("复制刚才配置的redis_6379.conf文件即可。命令为："),t("code",[s._v("cp redis_6379.conf redis_6380.conf redis_6380.conf")]),s._v("。")]),s._v(" "),t("p",[s._v("将配置文件的port修改为6380即可。")]),s._v(" "),t("h3",{attrs:{id:"配置redis-sentinel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置redis-sentinel"}},[s._v("#")]),s._v(" 配置Redis sentinel")]),s._v(" "),t("p",[s._v("修改从redis安装包目录下，复制过来的配置文件sentinel_26379.conf。")]),s._v(" "),t("div",{staticClass:"language-conf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('bind xx.xx.xx.xx # B服务器IP\nport 26379 # 端口号\nprotected-mode no # 保护模式，连接Redis需要输入密码\ndaemonize yes # 守护进程启动\nsupervised yes # 使用supervise，缓存，可以不使用\npidfile "/home/work/redis_conf/var/run/redis_xxx.pid" # 修改路径，创建一个文件夹存放\nlogfile "/home/work/redis_conf/log/redis.log" # 修改路径，日志文件\ndir "/home/work/redis_conf/data"\n\n# 下面是监控master的重要配置，具体看官方文档\nmonitor mymaster xx.xx.xx.xx xxxx 2 # master即A服务器的IP和端口，至少2个选举\nsentinel down-after-milliseconds mymaster 10000\nsentinel failover-timeout mymaster 60000\nsentinel parallel-syncs mymaster 1\nsentinel auth-pass mymaster xxxxx # 前面master的密码\n')])])]),t("p",[s._v("为了安全，多搭建即可sentinel。")]),s._v(" "),t("p",[s._v("复制配置文件："),t("code",[s._v("cp sentinel_26379.conf sentinel_26380.conf sentinel_26380.conf")]),s._v("。")]),s._v(" "),t("p",[s._v("修改两个地方即可。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改port端口")]),s._v("\nport "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26380")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注释myid，因为通过复制的myid都是一样的，导致无法识别。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sentinel myid xxxxxxxxxxxxxxxxxxxx")]),s._v("\n")])])]),t("p",[s._v("启动Redis Sentinel命令为："),t("code",[s._v("src/redis-sentinel ~/redis_conf/sentinel_26379.conf")]),s._v("。")]),s._v(" "),t("p",[s._v("启动Redis cli命令为："),t("code",[s._v("src/redis-cli -h ${host}-p ${port} -a ${password}")]),s._v("。")]),s._v(" "),t("p",[s._v("测试效果：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" info Sentinel\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" SENTINEL get-master-addr-by-name mymaster\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" SENTINEL replicas mymaster\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出")]),s._v("\nsentinel_masters:1\nsentinel_tilt:0\nsentinel_running_scripts:0\nsentinel_scripts_queue_length:0\nsentinel_simulate_failure_flags:0\nmaster0:name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("master,status"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ok,address"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("A服务器IP地址:6379,slaves"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(",sentinels"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])])]),t("p",[s._v("至此，redis集群就搭好了。")]),s._v(" "),t("h2",{attrs:{id:"最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[s._v("#")]),s._v(" 最后")]),s._v(" "),t("p",[s._v("假设停止A服务器的master redis节点，此时B服务器的两个slave节点，会有一个节点被推选为master节点。（对应的配置文件会自动改变），当新推选的B服务器master节点又停止时，会继续在剩余的redis（如果A服务器的节点又开启了，也会被包含其中）选取新的master。")]),s._v(" "),t("p",[s._v("redis的模式是启动之后会自动修改配置文件，一般在配置文件最下面会有REWRITE提示，所以重启的时候不要改配置，尤其是主节点相关配置（主从切换后，配置文件中master相关配置会自动修改），否则会发生非预期情况")])])}),[],!1,null,null,null);e.default=r.exports}}]);