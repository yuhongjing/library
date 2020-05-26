---
title: Win10激活
sidebarDepth: 0
---
### Win10家庭版和专业版的激活方法
几句命令即可。

### ID码
进入系统设置，输入对应ID码   
Win10家庭版ID: `00342-34947-91204-AAOEM`  
Win10专业版ID: `W269N-WFGWX-YVC9B-4J6C9-T83GX`

### 安装
1. 输入以下命令: `slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX`  
弹出窗口提示: "成功的安装了产品密匙"。

2. 继续输入命令: `slmgr /skms zh.us.to`  
弹出窗口提示: "密钥管理服务计算机名成功的设置为zh.us.to"。

3. 接下来输入以下命令: `slmgr /ato`   
弹出窗口提示: "成功激活了产品"。

::: tip 成功
激活完毕！
:::