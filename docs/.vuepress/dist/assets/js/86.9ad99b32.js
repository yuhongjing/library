(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{509:function(s,t,a){"use strict";a.r(t);var e=a(27),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mysql环境配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql环境配置"}},[s._v("#")]),s._v(" MySQL环境配置")]),s._v(" "),a("h2",{attrs:{id:"mac系统下配置php环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac系统下配置php环境"}},[s._v("#")]),s._v(" Mac系统下配置PHP环境")]),s._v(" "),a("p",[s._v("既然是Mac系统肯定是通过"),a("code",[s._v("homebrew")]),s._v("安装"),a("code",[s._v("mysql")]),s._v("更方便了。"),a("br"),s._v("\n当然你也可以从"),a("a",{attrs:{href:"https://www.mysql.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),a("OutboundLink")],1),s._v("寻找，各种版本还是挺麻烦的了。"),a("br"),s._v("\n个人还是推荐"),a("code",[s._v("homebrew")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"使用homebrew一句代码安装mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用homebrew一句代码安装mysql"}},[s._v("#")]),s._v(" 使用homebrew一句代码安装MySQL")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认最新版本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当然你也可以指定版本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql@5.6\n")])])]),a("h3",{attrs:{id:"修改配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件"}},[s._v("#")]),s._v(" 修改配置文件")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置文件的地址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/local/etc/my.cnf\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Default Homebrew MySQL server config")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nport "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\nsocket "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /tmp/mysql.sock\ndefault-character-set "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" utf8\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ncollation-server "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" utf8_unicode_ci\ncharacter-set-server "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" utf8\ninit-connect "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SET NAMES utf8'")]),s._v("\nmax_allowed_packet "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 64M\nbind-address "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\nport "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\nsocket "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /tmp/mysql.sock\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这句代码正式启动MySQL时需要去掉")]),s._v("\nskip-grant-tables\n")])])]),a("h3",{attrs:{id:"启动服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动服务"}},[s._v("#")]),s._v(" 启动服务")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("brew services start mysql "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动MySQL")]),s._v("\nbrew services restart mysql "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启MySQL")]),s._v("\nbrew services stop mysql "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止MySQL")]),s._v("\n")])])]),a("h3",{attrs:{id:"连接数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接数据库"}},[s._v("#")]),s._v(" 连接数据库")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 格式为 mysql -u 用户名 -p 密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始密码默认为空")]),s._v("\nmysql -u root -p\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("ul",[a("li",[s._v("配置了"),a("code",[s._v("skip-grant-tables")]),s._v("后，连接MySQL无需验证用户密码，"),a("br"),s._v("\n常用于忘记账户和密码的场景。")]),s._v(" "),a("li",[s._v("修改了配置文件后，需重启MySQL才能生效")]),s._v(" "),a("li",[s._v("通过"),a("code",[s._v("select * from mysql.user")]),s._v("命令，可以看见有些版本的MySQL没有password字段")]),s._v(" "),a("li",[s._v("配置了"),a("code",[s._v("skip-grant-tables")]),s._v("后，导致"),a("code",[s._v("Navicat")]),s._v("等工具无法连接，去掉配置重启Mysql即可。")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);