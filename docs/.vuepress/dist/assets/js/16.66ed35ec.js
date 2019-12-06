(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{268:function(t,e,v){"use strict";v.r(e);var a=v(2),_=Object(a.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"配置git相关命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#配置git相关命令"}},[t._v("#")]),t._v(" 配置Git相关命令")]),t._v(" "),v("p",[t._v("Git的配置文件为"),v("code",[t._v(".gitconfig")]),t._v("，它可以在用户主目录(全局配置)下,也可以在项目目录(项目配置)下。")]),t._v(" "),v("ol",[v("li",[t._v("显示Git配置: "),v("code",[t._v("git config --list")])]),t._v(" "),v("li",[t._v("编辑Git配置: "),v("code",[t._v("git config -e [--global]")])]),t._v(" "),v("li",[t._v("设置提交代码时的用户信息:")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('git config [--global] user.name "[name]"\ngit config [--global] user.email "[email address]\n')])])]),v("h2",{attrs:{id:"增加删除文件相关命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#增加删除文件相关命令"}},[t._v("#")]),t._v(" 增加删除文件相关命令")]),t._v(" "),v("ol",[v("li",[t._v("添加文件到暂存区: "),v("code",[t._v("git add [fileName/dir/.]")]),t._v(" // 单个文件名/文件夹/所有文件")]),t._v(" "),v("li",[t._v("删除工作区文件: "),v("code",[t._v("git rm [fileName/dir]")])]),t._v(" "),v("li",[t._v("停止追踪文件: "),v("code",[t._v("git rm --cached [fileName/dir]")])]),t._v(" "),v("li",[t._v("文件改名: "),v("code",[t._v("git mv [oldName] [newName]")])])]),t._v(" "),v("h2",{attrs:{id:"远程仓库相关命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库相关命令"}},[t._v("#")]),t._v(" 远程仓库相关命令")]),t._v(" "),v("ol",[v("li",[t._v("检出仓库: "),v("code",[t._v("git clone")])]),t._v(" "),v("li",[t._v("查看远程仓库: "),v("code",[t._v("git remote -v")])]),t._v(" "),v("li",[t._v("添加远程仓库: "),v("code",[t._v("git remote add [name] [url]")])]),t._v(" "),v("li",[t._v("删除远程仓库: "),v("code",[t._v("git remote rm [name]")])]),t._v(" "),v("li",[t._v("修改远程仓库: "),v("code",[t._v("git remote set-url --push [name] [newUrl]")])]),t._v(" "),v("li",[t._v("拉取远程仓库变动并合并到本地分支: "),v("code",[t._v("git pull [remoteName] [localBranchName]")])]),t._v(" "),v("li",[t._v("推送远程仓库: "),v("code",[t._v("git push [remoteName] [localBranchName]")])]),t._v(" "),v("li",[t._v("拉取远程仓库所有变动不合并: "),v("code",[t._v("git fetch [remote]")])])]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),v("p",[t._v("如果把本地某个分支提交到远程仓库，并作为远程仓库的分支，命令如下")])]),t._v(" "),v("div",{staticClass:"language-cmd extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("git push origin test:master     // 提交本地仓库的test分支作为远程仓库的master分支\ngit push origin test:test       // 提交本地仓库的test分支作为远程仓库的test分支\n// 当本地仓库推送至远程仓库同名分支时可以简写:\n// git push origin test = git push origin test:test\n")])])]),v("h2",{attrs:{id:"文件提交相关命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#文件提交相关命令"}},[t._v("#")]),t._v(" 文件提交相关命令")]),t._v(" "),v("ol",[v("li",[t._v("提交暂存区到仓库区: "),v("code",[t._v("git commit -m [message]")])]),t._v(" "),v("li",[t._v("提交暂存区指定文件到仓库区: "),v("code",[t._v("git commit [file1] [file2] -m [message]")])]),t._v(" "),v("li",[t._v("提交自上次"),v("code",[t._v("commit")]),t._v("之后的变化到仓库区: "),v("code",[t._v("git commit -a")])]),t._v(" "),v("li",[t._v("提交时显示所有"),v("code",[t._v("diff")]),t._v("信息: "),v("code",[t._v("git commit -v")])]),t._v(" "),v("li",[t._v("使用新的"),v("code",[t._v("commit")]),t._v("替代上一次提交: "),v("code",[t._v("git commit --amend -m [message]")])])]),t._v(" "),v("h2",{attrs:{id:"分支-branch-操作相关命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分支-branch-操作相关命令"}},[t._v("#")]),t._v(" 分支(branch)操作相关命令")]),t._v(" "),v("ol",[v("li",[t._v("查看本地分支: "),v("code",[t._v("git branch")])]),t._v(" "),v("li",[t._v("查看远程分支: "),v("code",[t._v("git branch -r")])]),t._v(" "),v("li",[t._v("创建本地分支: "),v("code",[t._v("git branch [name]")]),t._v(" // 不会自动切换分支")]),t._v(" "),v("li",[t._v("切换分支: "),v("code",[t._v("git checkout [name]")])]),t._v(" "),v("li",[t._v("创建新分支并切换到新分支: "),v("code",[t._v("git checkout -b [name]")])]),t._v(" "),v("li",[t._v("删除分支: "),v("code",[t._v("git branch -d [name]")]),t._v(" // -d只能删除合并过的分支,-D强制删除一个分支")]),t._v(" "),v("li",[t._v("合并分支: "),v("code",[t._v("git merge [name]")]),t._v(" // 将名称[name]分支与当前分支合并")]),t._v(" "),v("li",[t._v("创建远程分支: "),v("code",[t._v("git push origin origin [name]")])]),t._v(" "),v("li",[t._v("删除远程分支: "),v("code",[t._v("git push origin :[name]")])])]),t._v(" "),v("h2",{attrs:{id:"版本-tag-操作相关命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#版本-tag-操作相关命令"}},[t._v("#")]),t._v(" 版本(tag)操作相关命令")]),t._v(" "),v("ol",[v("li",[t._v("查看版本: "),v("code",[t._v("git tag")])]),t._v(" "),v("li",[t._v("创建版本: "),v("code",[t._v("git tag [name]")])]),t._v(" "),v("li",[t._v("删除版本: "),v("code",[t._v("git tag -d [name]")])]),t._v(" "),v("li",[t._v("查看远程版本: "),v("code",[t._v("git tag -r")])]),t._v(" "),v("li",[t._v("创建远程版本: "),v("code",[t._v("git push origin [name]")])]),t._v(" "),v("li",[t._v("删除远程版本: "),v("code",[t._v("git push origin :refs/tags/[name]")])]),t._v(" "),v("li",[t._v("合并远程仓库tag到本地: "),v("code",[t._v("git pull origin --tags")])]),t._v(" "),v("li",[t._v("上传本地tag到远程仓库: "),v("code",[t._v("git push origin --tags")])]),t._v(" "),v("li",[t._v("创建带注释的tag: "),v("code",[t._v('git tag -a [name] -m "your Message"')])])]),t._v(" "),v("h2",{attrs:{id:"查看信息相关命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#查看信息相关命令"}},[t._v("#")]),t._v(" 查看信息相关命令")]),t._v(" "),v("ol",[v("li",[t._v("显示有变更的文件: "),v("code",[t._v("git status")])]),t._v(" "),v("li",[t._v("显示当前分支的版本历史: "),v("code",[t._v("git log")])]),t._v(" "),v("li",[t._v("显示"),v("code",[t._v("commit")]),t._v("历史以及每次变更的文件: "),v("code",[t._v("git log --stat")])]),t._v(" "),v("li",[t._v("搜索提交历史，根据关键词: "),v("code",[t._v("git log -S [keyword]")])]),t._v(" "),v("li",[t._v("显示暂存区喝工作区的差异: "),v("code",[t._v("git diff")])]),t._v(" "),v("li",[t._v("显示今天写了多少代码: "),v("code",[t._v('git diff --shortstat "@{0 day ago}"')])])]),t._v(" "),v("h2",{attrs:{id:"撤销相关命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#撤销相关命令"}},[t._v("#")]),t._v(" 撤销相关命令")]),t._v(" "),v("ol",[v("li",[t._v("恢复暂存区指定文件到工作区: "),v("code",[t._v("git checkout [file]")])]),t._v(" "),v("li",[t._v("恢复某个"),v("code",[t._v("commit")]),t._v("的指定文件到暂存区和工作区: "),v("code",[t._v("git checkout [commit] [file]")])]),t._v(" "),v("li",[t._v("恢复暂存区的所有文件到工作区: "),v("code",[t._v("git checkout .")])]),t._v(" "),v("li",[t._v("重置暂存区指定文件与上次"),v("code",[t._v("commit")]),t._v("一致,工作区不变: "),v("code",[t._v("git reset [file]")])]),t._v(" "),v("li",[t._v("重置暂存区和工作区: "),v("code",[t._v("git reset --hard")])]),t._v(" "),v("li",[t._v("重置当前分支的指针为指定"),v("code",[t._v("commit")]),t._v(": "),v("code",[t._v("git reset --hard [commit]")])])]),t._v(" "),v("h2",{attrs:{id:"忽略提交文件、文件夹到远程仓库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#忽略提交文件、文件夹到远程仓库"}},[t._v("#")]),t._v(" 忽略提交文件、文件夹到远程仓库")]),t._v(" "),v("p",[t._v("在仓库根目录下创建名为"),v("code",[t._v(".gitignore")]),t._v("的文件,写入不需要的文件夹名或文件，每个元素占一行即可。")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("target\nnode_modules\n*.db\n")])])]),v("h2",{attrs:{id:"其他"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),v("ul",[v("li",[t._v("暂存区内容还原")])]),t._v(" "),v("div",{staticClass:"language-git extra-class"},[v("pre",{pre:!0,attrs:{class:"language-git"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查找最近10条add的内容")]),t._v("\nfind .git/objects -type f | xargs ls -lt | sed 10q\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 内容例子")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -r--r--r--  1 yuhongjing  staff      162 11  4 15:53 .git/objects/ff/b7a6c59262007a4f8723716d02eb608fb49acd")]),t._v("\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# objects后面的就是ID, 去除/, ID为ffb7a6c59262007a4f8723716d02eb608fb49acd")]),t._v("\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 还原文件")]),t._v("\ngit cat-file -p ID > 地址(例如docs/a.md)\n")])])])])}),[],!1,null,null,null);e.default=_.exports}}]);