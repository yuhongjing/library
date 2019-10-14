(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{210:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("在MAC的终端下输入以下命令,查看密匙")]),t._v(" "),t._m(1),a("p",[t._v("如果存在id_rsa和id_rsa.pub,说明已存在一对公钥/私钥。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),a("p",[t._v("操作完成后，该目录会多出id_rsa_x和id_rsa_x.pub两个文件。")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[a("router-link",{attrs:{to:"./../command/git.html"}},[t._v("Git命令大全")])],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"git同一台电脑连接多个远程仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git同一台电脑连接多个远程仓库","aria-hidden":"true"}},[this._v("#")]),this._v(" Git同一台电脑连接多个远程仓库")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("ls")]),this._v(" ~/.ssh\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"创建新的密匙，并指定密匙的名称，例如id-rsa-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建新的密匙，并指定密匙的名称，例如id-rsa-x","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建新的密匙，并指定密匙的名称，例如id_rsa_X")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("ssh-keygen -t rsa -f ~/.ssh/id_rsa_x -C "),s("span",{pre:!0,attrs:{class:"token string"}},[this._v('"yourmail@xxx.com"')]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"在-ssh-文件夹下创建一个config文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-ssh-文件夹下创建一个config文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 在"),s("code",[this._v("~/.ssh/")]),this._v("文件夹下创建一个config文件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("cd")]),this._v(" ~/.ssh/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("touch")]),this._v(" config\nvim config\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"编写config文件，配置不同的仓库指向不同的密钥文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写config文件，配置不同的仓库指向不同的密钥文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 编写config文件，配置不同的仓库指向不同的密钥文件")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第一个账号，默认使用的账号")]),t._v("\nHost github.com\nHostName github.com\nUser "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\nIdentityFile ~/.ssh/id_rsa\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第二个账号")]),t._v("\nHost icode.baidu.com  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# second为前缀名，可以任意设置")]),t._v("\nHostName icode.baidu.com\nUser "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\nIdentityFile ~/.ssh/id_rsa_x\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"查看ssh密匙的值，分别添加到对应的git账户中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看ssh密匙的值，分别添加到对应的git账户中","aria-hidden":"true"}},[this._v("#")]),this._v(" 查看SSH密匙的值，分别添加到对应的Git账户中")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("cat")]),this._v(" id_rsa.pub\n"),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("cat")]),this._v(" id_rsa_x.pub\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"清空本地ssh缓存，添加新的ssh密匙到ssh-agent中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清空本地ssh缓存，添加新的ssh密匙到ssh-agent中","aria-hidden":"true"}},[this._v("#")]),this._v(" 清空本地SSH缓存，添加新的SSH密匙到SSH agent中")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("ssh-add -D\nssh-add id_rsa\nssh-add id_rsa_x\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"确认新密匙是否添加成功"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#确认新密匙是否添加成功","aria-hidden":"true"}},[this._v("#")]),this._v(" 确认新密匙是否添加成功")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("ssh-add -l\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"测试ssh链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试ssh链接","aria-hidden":"true"}},[this._v("#")]),this._v(" 测试ssh链接")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" -T git@github.com\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" -T git@icode.baidu.com\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# xxx! You’ve successfully authenticated, but GitHub does not provide bash access.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 出现上述提示，连接成功")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"取消git全局用户名-邮箱的设置，设置独立的用户名-邮箱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#取消git全局用户名-邮箱的设置，设置独立的用户名-邮箱","aria-hidden":"true"}},[this._v("#")]),this._v(" 取消git全局用户名/邮箱的设置，设置独立的用户名/邮箱")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 取消全局 用户名/邮箱 配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global --unset user.name\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global --unset user.email\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入项目文件夹，单独设置每个repo 用户名/邮箱")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxx@xx.com"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxx"')]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"查看git项目的配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看git项目的配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 查看git项目的配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" config --list\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"命令行进入项目目录，重建origin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令行进入项目目录，重建origin","aria-hidden":"true"}},[this._v("#")]),this._v(" 命令行进入项目目录，重建origin")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" origin\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 远程仓库地址，注意Host名称")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote add origin git@second.github.com:githubUserName/repName.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看远程")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="git连接多仓库.md";s.default=n.exports}}]);