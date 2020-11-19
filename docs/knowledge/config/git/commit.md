---
title: commit 提交规范
---

# commit 提交规范

一种用于给提交信息增加人机可读含义的规范。

参照规范：[conventional commits](https://www.conventionalcommits.org/zh-hans/v1.0.0-beta.4/)

## 结构

提交说明的结构如下所示：

```git
<类型>[可选的作用域]: <描述>
[可选的正文]
[可选的脚注]
```

提交说明包含了下面的结构化元素，以向类库使用者表明其意图：

* fix：在代码库中修复了一个bug。
* feat：在代码库中新增了一个功能。
* BREAKING CHANGE：在可选的正文或脚注的起始位置带有`BREAKING CHANGE:`，表示引入了破坏性API变更。破坏性变更可以是任意`类型`提交的一部分。
* 其他类型
  * chore：在代码库中修改了构建过程或辅助工具。
  * docs：在代码库中修改了一个文档说明。
  * style：在代码库中修改了一段代码格式。
  * test：在代码库中修改了一个测试用例。
  * refactor：在代码库中重构了一个代码功能。
  * revert：在代码库中还原了一个代码功能。
  * misc：其他修改，在代码库中修改了依赖管理等。

类型参照：[commit lint](https://commitlint.js.org/#/reference-rules)、[sees parkbox](https://seesparkbox.com/foundry/semantic_commit_messages)

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