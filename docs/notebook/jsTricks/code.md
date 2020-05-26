---
title: 代码片段
sidebarDepth: 2
---

# 代码片段
收集好用的代码段

## 简易轮询
```js
class Polling {
    // 开启轮询
    startPolling = (time, func) => {
        func();
        this.timer = setInterval(
            () => func(),
            time
        );
    }

    // 结束轮询
    clearPolling = () => {
        clearInterval(this.timer);
    }
}
```
