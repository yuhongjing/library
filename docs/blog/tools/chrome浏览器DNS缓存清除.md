---
title: chrome浏览器DNS缓存清除
---

# chrome浏览器DNS缓存清除

日常开发时，我们会经常切换hosts，在chrome浏览器上还需要清除缓存。

## 清除chrome网络缓存步骤

* 输入地址：chrome://net-internals/#dns
* Sockets -> Flush socket pools
* DNS -> Clear host cache

完成。