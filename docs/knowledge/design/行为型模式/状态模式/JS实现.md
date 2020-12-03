---
title: JS实现
---

# 状态模式-JS

* [文本编辑器](#文本编辑器)

## 文本编辑器

文本编辑器可以改变状态，当锁定为大写时，输出的字母都是大写；当锁定小写时，输出的字母都是小写。

```js
class WritingState {
    write(word) {}
}

class UpperCase extends WritingState {
    write(word) {
        const upperCaseWord = word.toUpperCase();
        console.log(upperCaseWord);
    }
}

class LowerCase extends WritingState {
    write(word) {
        const lowerCase = word.toLowerCase();
        console.log(lowerCase);
    }
}

class DefaultText extends WritingState {
    write(word) {
        console.log(word);
    }
}

class TextEditor {
    constructor(state) {
        this.state = state;
    }
    setState(state) {
        this.state = state;
    }
    type(word) {
        this.state.write(word);
    }
}

// 客户端
const editor = new TextEditor(new DefaultText());
editor.type('First line'); // Firtst line

editor.setState(new UpperCase());
editor.type('Second line'); // SECOND LINE
editor.type('Third line'); // THIRD LINE

editor.setState(new LowerCase());
editor.type('Fourth line'); // fourth line
editor.type('Fifth line'); // fifth line
```