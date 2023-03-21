---
title: 脚手架-CLI
---

# 脚手架-CLI

`vue-cli`和`react-create-app`等CLI工具能够提高我们的工作效率。

但是此类脚手架CLI的模板相对简单，通常我们会在此基础上放入更多业务组件和通用方法，例如`Axios`、`i18n`等等。

因此，我们需要实现一个自定义脚手架CLI。

## 初始化项目

假设自定义脚手架的名称为：`template-cli`，新建文件夹并执行`npm init -y`命令初始化项目。

目录结构如下：

```
|-- template-cli
  |-- bin
    |-- template.js
  |-- src
    |-- create.js
  |-- package.json
```

## 配置执行命令

`package.json`中需要配置执行命令。

```json
{
  "name": "template-cli",
  // ...
  "bin": { // 配置template命令
    "template": "./bin/template.js" 
  }
  // ...
  "dependencies": {
    "chalk": "xxx"
  }
}
```

然后执行`npm link`关联，现在命令行中执行`template`命令就会自动链接到`.bin/template.js`文件中了。

## 配置用户交互壳

CLI需要基础的用户交互，例如选择模板，请求帮助，查看版本等基础功能。

`bin/template.js`文件如下：

第一行需要声明该文件以Node执行。

```js
#!/usr/bin/env node

const {promisify} = require('util');
const program = require('commander'); // 命令交互
const inquirer = require('inquirer'); // 操作交互
const figlet = promisify(require('figlet')); // 生成比较独特的文字
const chalk = require('chalk'); // 文字颜色

const create = require('../src/create'); // 核心

const log = content => console.log(chalk.greenBright(content));

// 查看当前template-cli版本
program
  .version(`template-cli ${require('../package.json').version}`)
  .usage('<command> [options]');

// 核心命令：创建模板
program
  .command('create <project-name>')
  .description('create a new project powered by template-cli')
  .action(async projectName => {
    const welcomeText = await figlet('welcome use template-cli');
    log(welcomeText);
    log(`start init ${projectName}`);
    const {templateName} = await inquirer.prompt([
      {
        type: 'list',
        name: 'templateName',
        message: 'Choose a template',
        choices: [
          {name: '模板1', value: 'template-1'},
          {name: '模板2', value: 'template-2'},
        ],
        default: 'template-1'
      }
    ]);
    // 核心逻辑
    create(projectName, templateName);
  });

// 帮助命令，查看template-cli有哪些可执行命令
program.on('--help', () => {
  console.log('\nExamples:');
});

program.parse(process.argv);
```

## 核心拉取模板库

目前主要有两种拉取git库的方法，一种是通过`shell`直接`git clone`仓库到本地，一种是通过`http`下载仓库到本地。

`src/create.js`文件，内容如下：

```js
const shell = require('shelljs');

module.exports = (projectName, templateName) => {
  // ...
  shell.exec('git clone XXX');
  shell.cd(projectName);
  shell.exec('yarn install');
  shell.exec('npm run dev');
}
```

如上配置，即可通过命令行从不同的仓库拉取不同的模板。

::: warning 注意

上方代码只是DEMO，还缺失很多必要的功能。

例如：检查当前CLI版本是否满足条件、检查当前是否能够执行`shell`、`yarn`、检查拉取文件是否与当前目录同名等等。

:::

## 总结

完整的CLI主要有两个模块：『交互壳』和『核心逻辑』。

交互壳就是与获取用户需求信息的模块，所有CLI交互壳都大同小异，更改文本和选项就可以复用在其它CLI中。

而核心文件就是你所需要的功能。比如下载代码库、生成代码文件等等各种需求操作。