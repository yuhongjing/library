---
title: JS实现
---

# 备忘录模式-JS

* [编辑器](#编辑器)

## 编辑器

以文本编辑器为例，它不断地保存状态，如果需要，您可以恢复它。

```js
// 存储-备忘录类 记录信息
class EditorMemento {
  constructor(content) {
    this._content = content;
  }

  getContent() {
    return this._content;
  }
}
// 编辑器类，也就是发起者，可以操作memento对象
class Editor {
  constructor() {
    this._content = '';
  }

  type(words) {
    this._content = this._content + ' ' + words;
  }

  getContent() {
    return this._content;
  }
  // 存储当前文本
  save() {
    return new EditorMemento(this._content);
  }
  // 读档
  restore(memento) {
    this._content = memento.getContent();
  }
}

// 客户端
const editor = new Editor();

// 输入文字
editor.type('This is the first sentence.');
editor.type('This is second.');

// 存储当前输入的文本
const saved = editor.save();

// 输入更多文字
editor.type('And this is third.');

// 输出现在编辑器中的文字
console.log(editor.getContent()); // This is the first sentence. This is second. And this is third.

// 读档 OR 撤销
editor.restore(saved);
// 输出存档时编辑器中的文字
console.log(editor.getContent()); // This is the first sentence. This is second.
```

