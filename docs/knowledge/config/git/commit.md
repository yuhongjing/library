---
title: commit 提交规范
---

# commit 提交规范

一种用于给提交信息增加人机可读含义的规范。

参照规范：

* [conventional commits](https://www.conventionalcommits.org/zh-hans/v1.0.0-beta.4/)
* [阿里技术](https://zhuanlan.zhihu.com/p/182553920)

## 结构

提交说明的结构如下所示：

```git
<类型>[可选的作用域]: <描述>
[可选的正文]
[可选的脚注]
```

提交说明包含了下面的结构化元素，以向类库使用者表明其意图：

* fix：修复了bug。
* feat：新增了功能。
* BREAKING CHANGE：在可选的正文或脚注的起始位置带有`BREAKING CHANGE:`，表示引入了破坏性API变更。破坏性变更可以是任意`类型`提交的一部分。
* chore：其它改动，例如注释修改或者文件清理。不影响src和test代码文件都可以放这里。
* ci：持续集成修改。
* perf：优化相关，比如提升性能、体验等。
* docs：修改文档。
* style：修改代码格式。
* test：修改测试用例。
* refactor：重构功能。
* revert：回滚功能。
* merge：代码合并。
* sync：同步主线/分支的bug。
* misc：其他修改，比如依赖管理等。

类型参照：[commit lint](https://commitlint.js.org/#/reference-rules)、[sees parkbox](https://seesparkbox.com/foundry/semantic_commit_messages)

## 范围scope

主要指代码的影响面，一般没有强制要求。但是团队可以按照自己的理解进行设计。通常有『技术纬度』和『业务纬度』两种划分方式。

按照技术分为：`controller`、`dto`、`service`等。

按照业务分为：`user`、`order`等。

不填写范围也是可以的。

## 示例

包含了描述以及正文内有破坏性变更的提交说明

```git
feat: allow provided config object to extend other configs
BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

包含了可选`!`字符以提醒注意破坏性变更的提交说明

```git
chore!: drop Node 6 from testing matrix
BREAKING CHANGE: dropping Node 6 which hits end of life in April
```

不包含正文的提交说明

```git
docs: correct spelling of CHANGELOG
```

包含作用域的提交说明

```git
feat(lang): add polish language
```

为fix编写的提交说明，包含（可选的）issue编号

```git
fix: correct minor typos in code
see the issue for details on the typos fixed
closes issue #12
```

## 为什么使用约定式提交

* 自动化生成CHANGELOG。
* 基于提交的类型，自动决定语义化的版本变更。
* 向同事、公众与其他利益关系者传达变化的性质。
* 触发构建和部署流程。

## 辅助工具

通过一些辅助工具，可以高效地帮助我们提交规范的commit。

* [commitizen](https://www.npmjs.com/package/commitizen)