---
title: pnpm构建monorepo
---

# pnpm构建monorepo

Monorepo中文：单体仓库。就是单个项目仓库，其中包含**多个**开发项目project/模块module/包package。虽然这些项也许是互相关联的，但它们通常在逻辑上独立并被不同的团队负责编写，运行。例如React源码就是monorepo。

monorepo是一种思想并非实际的工具，因此本篇文章就是介绍如何通过pnpm来构建monorepo仓库。

PNPM官方文档：https://pnpm.io/zh/

## 什么是PNPM

> Fast, disk space efficient package manager

pnpm是新一代node包管理器。它由npm/yarn衍生而来，但却解决了npm/yarn内部潜在的bug，并且极大地优化了性能，扩展了使用场景。

pnpm相比yarn/npm，安装包更快速，对包的依赖管理更扁平，对磁盘占用也有优势。

## 初始化项目

一、执行`pnpm init`，初始化项目

二、创建`ppm-workspace.yaml`文件

```yaml
packages:
	- 'packages/*'
```

三、创建`packages`文件夹

## CLI命令

| 命令                                             | 功能                                 |
| ------------------------------------------------ | ------------------------------------ |
| `pnpm init`                                      | 初始化仓库                           |
| `pnpm install`                                   | 为所有包安装依赖                     |
| `pnpm add react -g`                              | 安装`global` 依赖                    |
| `pnpm add/remove react -wP`                      | 安装全局公共`dependencies`依赖       |
| `pnpm add/remove react -wD`                      | 安装全局公共`devDependencies`依赖    |
| `pnpm add/remove react -P --fliter pkg1(项目名)` | 给pkg1单独安装`dependencies`依赖     |
| `pnpm add/remove react -D --filter pkg1(项目名)` | 给pkg1单独安装`devDependencies`依赖  |
| `pnpm add/remove pkg1 --filter pkg2`             | 将pkg1包安装到pkg2中                 |
| `pnpm update --latest`                           | 更新所有依赖项                       |
| `pnpm update pkg1@2`                             | 将pkg1更新到v2版本                   |
| `pnpm update "@babel/*"`                         | 更新`@babel`范围内的所有依赖项目     |
| `pnpm link <dir>`                                | 使当前包可在系统范围内或其它位置访问 |

