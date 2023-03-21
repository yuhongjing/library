---
title: vscode必备插件
---
# vscode必备插件
以下插件能够大大的提高开发效率和开发幸福感。

## 代码规范类插件
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 自动校验代码，每次保存代码时自动整理代码
* [vscode-fileheader](https://marketplace.visualstudio.com/items?itemName=mikey.vscode-fileheader) 自动补全头部文件注释

## 文件高亮类插件
* [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) 支持.vue文件

## 贴心功能类插件
* [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) 显示每一个引入包的大小
* [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) 根据git，显示每一行代码的作者，代码提交时间以及commit信息
* [Rainbow Brackets](https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets) 每一对的花括号颜色匹配，方便辨认代码层级
* [Indent Rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) 缩进颜色配对，配合上一个插件，从此再也不怕找错代码层级了
* [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight) 高亮注释TODO、FIXME，再也不怕工作被打断了
* [Trailing Spaces](https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces) 突出尾随空格
* [Codelf](https://marketplace.visualstudio.com/items?itemName=unbug.codelf) 变量命名神器
* [Document This](https://marketplace.visualstudio.com/items?itemName=oouo-diogo-perdigao.docthis) 函数参数文档

## 主题插件
* [Dracula Official](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula) 德古拉吸血鬼主题
* [Atom One Light Theme](https://marketplace.visualstudio.com/items?itemName=akamud.vscode-theme-onelight) Atom浅色系主题
* [Community Material Theme](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-community-material-theme) Community Material Theme

## 其他插件
* [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) 支持多种语言的运行
* [carbon-now-sh](https://marketplace.visualstudio.com/items?itemName=ericadamski.carbon-now-sh) 截取代码并生成漂亮的代码图
* [WakaTime](https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime) 统计每日敲代码时间及记录操作习惯
* [Open in External App](https://marketplace.visualstudio.com/items?itemName=YuTengjing.open-in-external-app) 在vscode内，右击md文件直接打开Typora软件。

## 字体
* [Inconsolata](https://fonts.google.com/specimen/Inconsolata#standard-styles) Inconsolata字体，非常清晰



## 个人配置

```json
{
    "workbench.startupEditor": "none",
    "editor.tabSize": 2,
    "todohighlight.keywords": [
        {
            "text": "NOTE:",
            "color": "#fff",
            "backgroundColor": "rgb(123, 104 ,238)",
            "overviewRulerColor": "rgba(255, 189, 42, 0.8)",
        },
        {
            "text": "HACK:",
            "color": "#fff",
            "backgroundColor": "rgb(34, 139, 34)",
            "overviewRulerColor": "rgba(255, 189, 42, 0.8)"
        },
    ],
    "todohighlight.include": [
        "**/*.js",
        "**/*.jsx",
        "**/*.ts",
        "**/*.tsx",
        "**/*.html",
        "**/*.php",
        "**/*.css",
        "**/*.scss"
    ],
    "todohighlight.defaultStyle": {},
    "editor.fontSize": 16,
    "terminal.integrated.fontSize": 16,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "window.zoomLevel": 1,
    // other
    "debug.console.fontFamily": "JetBrains Mono",
    // 控制编辑器是否应在对屏幕阅读器进行了优化的模式下运行。设置为“开”将禁用自动换行。
    "editor.accessibilitySupport": "off",
    "editor.cursorSmoothCaretAnimation": true,
    "editor.find.addExtraSpaceOnTop": false,
    "editor.fontLigatures": "'ss01', 'ss02', 'ss03', 'ss06', 'zero'",
    // 控制编辑器是否应呈现垂直字形边距。字形边距最常用于调试。
    "editor.glyphMargin": true,
    // 控制是否在编辑器中自动显示内联建议。
    "editor.inlineSuggest.enabled": true,
    "editor.fontWeight": 440,
    "editor.fontFamily": "JetBrains Mono, Menlo, Monaco, 'Courier New', monospace",
    // 控制是否突出显示可能与基本 ASCII 字符混淆的字符，但当前用户区域设置中常见的字符除外。
    "editor.unicodeHighlight.ambiguousCharacters": false,
    // 控制是否突出显示仅保留空格或完全没有宽度的字符。
    "editor.unicodeHighlight.invisibleCharacters": false,
    // 编辑器左侧目录树偏移量
    "workbench.tree.indent": 10,
    "workbench.iconTheme": "file-icons",
    "workbench.startupEditor": "newUntitledFile",
    "workbench.productIconTheme": "icons-carbon",
    "workbench.colorTheme": "Community Material Theme Ocean",
    // 控制无标题提示应该是编辑器或浮动按钮中的内联文本，还是应该隐藏。
    "workbench.editor.untitled.hint": "hidden",
    // 调整对话框窗口的外观。
    "window.dialogStyle": "custom",
    // 启用 macOS Sierra 窗口选项卡。请注意，更改在完全重新启动程序后才能生效。同时，开启原生选项卡将禁用自定义标题栏样式。
    "window.nativeTabs": true, // this is great, macOS only
    // 调整窗口标题栏的外观。在 Linux 和 Windows 上，此设置也会影响应用程序和上下文菜单的外观。更改需要完全重新启动才能应用。
    "window.titleBarStyle": "custom",
    // 控制工作台中活动栏的可见性。
    "workbench.activityBar.visible": true,
    // 控制在会话期间显示已打开文件的编辑器是否应在被其他进程删除或重命名时自动关闭。
    // 禁用此功能将使编辑器在此类事件中保持打开状态。
    // 请注意，从应用程序内删除将始终关闭编辑器，且永远不会关闭具有未保存更改的编辑器以保留数据。
    "workbench.editor.closeOnFileDelete": true,
    // 控制是否在具有未保存更改的编辑器的选项卡上绘制顶部边框。
    "workbench.editor.highlightModifiedTabs": true,
    // 控制在工作台中字体的渲染方式。antialiased: 进行像素而不是次像素级别的字体平滑。可能会导致字体整体显示得更细
    "workbench.fontAliasing": "antialiased",
    // 控制列表和树是否具有平滑滚动效果。
    "workbench.list.smoothScrolling": true,
    // 控制侧边栏和活动栏的位置。它们可以显示在工作台的左侧或右侧。
    "workbench.sideBar.location": "left",
    // 控制扩展的自动更新行为。更新是从 Microsoft 联机服务中获取的。
    // onlyEnabledExtensions: 仅为已启用的扩展自动下载并安装更新。将不会自动更新已禁用的扩展。
    "extensions.autoUpdate": "onlyEnabledExtensions",
    // 启用后，将不会显示扩展建议的通知。
    "extensions.ignoreRecommendations": true,
    // 控制终端光标是否闪烁。
    "terminal.integrated.cursorBlinking": true,
    // 控制终端光标的样式。
    "terminal.integrated.cursorStyle": "underline",
    // 要在终端中用于非粗体文本的字体粗细。接受“正常”和“加粗”这两个关键字，或接受 1-1000 之间的数字。
    "terminal.integrated.fontWeight": "300",
    // 当必须关闭终端进程(例如当窗口或应用程序关闭时)时，这将确定何时应还原以前的终端会话内容，以及在下次打开工作区时重新创建的进程。
    "terminal.integrated.persistentSessionReviveProcess": "never",
    // 控制终端选项卡是否以列表的形式显示在终端的一侧。如果禁用此功能，将改为显示下拉列表。
    "terminal.integrated.tabs.enabled": true,
    // 删除时，是否确认
    "explorer.confirmDelete": false,
    // 控制在资源管理器内拖放移动文件或文件夹时是否进行确认。
    "explorer.confirmDragAndDrop": false,
    // 实验性。控制是否已在资源管理器中启用文件嵌套。文件嵌套允许目录中的相关文件在单个父文件下以可视方式组合在一起。
    "explorer.experimental.fileNesting.enabled": true,
    // 实验性。控制是否自动展开文件嵌套。
    "explorer.experimental.fileNesting.expand": false,
}
```

