---
title: Redis集群搭建
---

# Redis集群搭建

使用Redis replication实现主从复制，Redis sential实现高可用（探活、自动主从切换、查询主节点）。

* Redis下载地址：[https://redis.io/](https://redis.io/)
* Redis replication：[https://redis.io/topics/replication](https://redis.io/topics/replication)
* Redis sential：[https://redis.io/topics/sentinel](https://redis.io/topics/sentinel)

## 搭建架构

两台服务器

* A服务器，一个Redis节点---6379端口。
* B服务器，二个Redis节点---6379 6380端口，两个哨兵(Sentinel)---26379 26380端口。

架构图如下：

![](https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/redis-cluster.png)

## 安装Redis

### 安装包获取

* wget获取：`wget http://download.redis.io/releases/redis-6.0.6.tar.gz`
* 官网下载压缩包，通过rz命令上传服务器

### 解压

```bash
# 提取文件
tar xzf redis-6.0.6.tar.gz
# 进入文件夹解压
cd redis-6.0.6
make
# 启动Redis 这里是通过文件来执行，如果直接在src目录中执行redis-server会被认为是命令
src/redis-server
```

## 文件目录架构

建议在用户目录下，建立Redis相关配置。

### A服务器文件架构

```shell
--| work
  --| redis_conf
    --| redis_6379.conf # 从下载的redis目录下cp redis.conf ~/redis_conf/redis_6379.conf
```

### B服务器文件架构

```shell
--| work
  --| redis_conf
    --| redis_6379.conf # 从下载的redis目录下cp redis.conf ~/redis_conf/redis_6379.conf
    --| redis_6380.conf
    --| sentinel_26379.conf # 从下载的redis目录下cp sentinel.conf ~/redis_conf/sentinel_26379.conf
    --| sentinel_26380.conf
```

## A服务器Redis配置

服务器A的Redis节点，我们想默认为master节点。

修改redis_6379.conf文件，其主要配置如下：

```conf
bind xx.xx.xx.xx # A服务器IP
port 6379 # 端口号
protected-mode yes # 保护模式，连接Redis需要输入密码
daemonize yes # 守护进程启动
supervised yes # 使用supervise，缓存，可以不使用
pidfile "/home/work/redis_conf/var/run/redis_xxx.pid" # 修改路径，创建一个文件夹存放
logfile "/home/work/redis_conf/log/redis.log" # 修改路径，日志文件
dir "/home/work/redis_conf/data"
masterauth "xxxxx"  # 登录密码，保护模式下必须设置
requirepass "xxxxx"  # 确认登录密码，和masterauth保持一致即可
replica-read-only yes # master可读写，slave只读
```

启动Redis命令为：`src/redis-server ~/redis_conf/redis_6379.conf`。

启动Redis cli命令为：`src/redis-cli -h ${host}-p ${port} -a ${password}`。

测试效果：

```shell
# 登录Redis cli
# 查看信息
> info
# Replication
role:master # 可以看见当前redis为master角色
master_host:xx.xx.xx.xx
master_port:xxxx
...

# 测试功能
> set foo bar
> get foo # bar
```

现在A服务器配置大功告成。启动、关闭Redis及cli命令可以自己写shell脚本。

## B服务器Redis配置

B服务器的配置稍微复杂一点，需要配置两个Redis服务及两个哨兵。（其实就是多复制一份配置文件即可）。

### 配置Redis

配置基本上和主服务器一样。修改redis_6379.conf文件。

```conf
bind xx.xx.xx.xx # B服务器IP
port 6379 # 端口号
protected-mode no # 保护模式，连接Redis需要输入密码
daemonize yes # 守护进程启动
supervised yes # 使用supervise，缓存，可以不使用
pidfile "/home/work/redis_conf/var/run/redis_xxx.pid" # 修改路径，创建一个文件夹存放
logfile "/home/work/redis_conf/log/redis.log" # 修改路径，日志文件
dir "/home/work/redis_conf/data"
masterauth "xxxxx"  # 登录密码，保护模式下必须设置
requirepass "xxxxx"  # 确认登录密码，和masterauth保持一致即可
replica-read-only yes # master可读写，slave只读

# 指定master Redis，自己就变为了从属redis slave
replicaof xx.xx.xx.xx xxxx # IP port，这里非常重要，写在文件最后，指定master 即A服务器的Redis服务地址端口。
```

启动Redis命令为：`src/redis-server ~/redis_conf/redis_6379.conf`。

启动Redis cli命令为：`src/redis-cli -h ${host}-p ${port} -a ${password}`。

测试效果：

```shell
# 登录Redis cli
# 查看信息
> info
# Replication
role:slave # 可以看见当前redis为master角色
master_host:xx.xx.xx.xx
master_port:xxxx
...

# 测试功能
> set foo bar # 报错，slave没有写入权限
> get foo # bar， 返回之前master set的值
```

#### 搭建多个Redis slave

为了安全，最好搭建多个Redis slave。

复制刚才配置的redis_6379.conf文件即可。命令为：`cp redis_6379.conf redis_6380.conf redis_6380.conf`。

将配置文件的port修改为6380即可。

### 配置Redis sentinel

修改从redis安装包目录下，复制过来的配置文件sentinel_26379.conf。

```conf
bind xx.xx.xx.xx # B服务器IP
port 26379 # 端口号
protected-mode no # 保护模式，连接Redis需要输入密码
daemonize yes # 守护进程启动
supervised yes # 使用supervise，缓存，可以不使用
pidfile "/home/work/redis_conf/var/run/redis_xxx.pid" # 修改路径，创建一个文件夹存放
logfile "/home/work/redis_conf/log/redis.log" # 修改路径，日志文件
dir "/home/work/redis_conf/data"

# 下面是监控master的重要配置，具体看官方文档
monitor mymaster xx.xx.xx.xx xxxx 2 # master即A服务器的IP和端口，至少2个选举
sentinel down-after-milliseconds mymaster 10000
sentinel failover-timeout mymaster 60000
sentinel parallel-syncs mymaster 1
sentinel auth-pass mymaster xxxxx # 前面master的密码
```

为了安全，多搭建即可sentinel。

复制配置文件：`cp sentinel_26379.conf sentinel_26380.conf sentinel_26380.conf`。

修改两个地方即可。

```shell
# 修改port端口
port 26380
# 注释myid，因为通过复制的myid都是一样的，导致无法识别。
# sentinel myid xxxxxxxxxxxxxxxxxxxx
```

启动Redis Sentinel命令为：`src/redis-sentinel ~/redis_conf/sentinel_26379.conf`。

启动Redis cli命令为：`src/redis-cli -h ${host}-p ${port} -a ${password}`。

测试效果：

```shell
> info Sentinel
> SENTINEL get-master-addr-by-name mymaster
> SENTINEL replicas mymaster
# 输出
sentinel_masters:1
sentinel_tilt:0
sentinel_running_scripts:0
sentinel_scripts_queue_length:0
sentinel_simulate_failure_flags:0
master0:name=master,status=ok,address=A服务器IP地址:6379,slaves=2,sentinels=2
```

至此，redis集群就搭好了。

## 最后

假设停止A服务器的master redis节点，此时B服务器的两个slave节点，会有一个节点被推选为master节点。（对应的配置文件会自动改变），当新推选的B服务器master节点又停止时，会继续在剩余的redis（如果A服务器的节点又开启了，也会被包含其中）选取新的master。

redis的模式是启动之后会自动修改配置文件，一般在配置文件最下面会有REWRITE提示，所以重启的时候不要改配置，尤其是主节点相关配置（主从切换后，配置文件中master相关配置会自动修改），否则会发生非预期情况

