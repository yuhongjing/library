---
title: JS实现
---

# 单例模式-JS
* [总统](#总统)

## 总统

一个国家只有一个总统，无论出席任何会议，都必须是这一位总统。

```js
const president = (function() {
  const presidentsPrivateInformation = 'Super private';
  
  const name = 'Turd Sandwich';
  
  const getName = () => name;
  
  return {
    getName
  };
}());

// 客户端
president.getName(); // Outputs 'Turd Sandwich'
president.name; // Outputs undefined
president.presidentsPrivateInformation; // Outputs undefined
```

