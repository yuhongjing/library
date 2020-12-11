---
title: JS实现
---

# 桥接模式-JS

* [网站主题](#网站主题)

## 网站主题

网站有许多页面，每个页面都可以设置相应的主题。可以使用桥接模式来减少类的数量。

```js
/**
 * 网站页面类
 */
// 关于页面
class About {
    constructor(theme) {
        this.theme = theme;
    }

    getContent() {
        return 'About page in' + this.theme.getColor();
    }
}
// 职业页面
class Careers {
    constructor(theme) {
        this.theme = theme;
    }

    getContent() {
        return 'Careers page in' + this.theme.getColor();
    }
}

/**
 * 主题类
 */

class DarkTheme {
    getColor() {
        return 'Dark Black';
    }
}

class LightTheme {
    getColor() {
        return 'Off white';
    }
}

class AquaTheme {
    getColor() {
        return 'Light blue';
    }
}

// 客户端
const darkTheme = new DarkTheme();

const about = new About(darkTheme);
const careers = new Careers(darkTheme);

console.log(about.getContent()); // "About page in Dark Black"
console.log(careers.getContent()); // "Careers page in Dark Black"
```

