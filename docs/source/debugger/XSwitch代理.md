---
title: XSwitch代理
---

# XSwitch代理

仓库：https://github.com/yize/xswitch

## 使用方式

```json
"proxy": [
    [
        "https://taobao.com",
        "https://tmall.com", // 将淘宝的请求代理为天猫
    ],
    [
        "https://xapi.com/??combo1/a.js,combo2/b.js",
        "https://127.0.0.1:3333/??combo1/a.js,combo2/b.js", // 支持combo代理
    ]
],
"cors": [
    "cors.a.com", // 支持跨域的链接
]
```