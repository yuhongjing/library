---
title: ESLint
---

# ESLint是个啥？

同一个项目，保持代码风格的一致，是非常重要的一个规范。

ESLint可以极大的提高团队代码的一致性和规范性，ESLint可以根据配置自动修复和格式化代码。

## 那该如何安装这个玩意呢？

1. 通过Node安装eslint包

在命令行敲下如下代码即可：

```
npm install eslint -g
```

恭喜你，已经完成了eslint的安装。

2. 在项目根目录下添加`.eslintrc.js`文件

此文件是用于校验代码格式，自行编写校验规则:

```js
module.exports = {
  // eslint校验规则
}
```

规则查询[官网](https://cn.eslint.org/)。  

4. 配置vscode，保存时自动格式化代码

```json
"eslint.autoFixOnSave": true,  //  启用保存时自动修复,默认只支持.js文件
// 需要校验的文件类型，具体情况看实际需求
"eslint.validate": [
    "javascript",
    {
        "language": "vue", 
        "autoFix": true
    },
    {
        "language": "jsx", 
        "autoFix": true
    }
    {
        "language": "html",
        "autoFix": true
    },
],
```

想了解更多的话，可以看看vscode的[eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)插件。

## 大功告成

现在vscode保存代码时，就可以自动校正和修复代码。  

当然也可以通过命令修复指定文件:

```
eslint --ext .js,.vue src --fix // 修复src文件夹下的js和vue文件
eslint test.js --fix // 修复根目录下的test.js文件
```

## 最后

各大厂整理好的eslint规则，不用自己一条一条来配置，开箱即用。

* [百度 eslint](https://github.com/ecomfe/eslint-config)

当然，如果这些规则与你实际使用规则有冲突时，还可以强行覆盖。

例如：

```js
module.exports = {
    root: true,
    extends: [
        '@ecomfe/eslint-config',
        '@ecomfe/eslint-config/import',
        '@ecomfe/eslint-config/vue'
    ],
    rules: {
        'vue/html-self-closing': true,
        'import/no-unresolved': true
    }
};
```