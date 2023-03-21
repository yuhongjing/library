---
title: Charles抓包
---

# Charles抓包

Charles是前端开发者利器，代理接口开发。

## 配置Charles

### 基础配置

确保手机和开发机在同一局域网，设置手机Wifi的代理为Charles Proxy Address。【charles默认代理端口为8888】

### 安装证书

安装路径：`Help - SSL Proxying - Install Charles Root Certificate`并设置信任证书。

查看证书安装状态：`Help - SSL Proxying - Charles Root Certificate Help`。

配置HTTPS：`Proxy - SSL Proxying Settings`，添加`*:443`配置。

手机端安装证书：`Help - SSL Proxying - Install Charles Root Certificate on a Mobile Device or Remote Browser`。

## 请求代理

可以将手机端的请求代理至其它地方。【例如开发机本地端】

方法：配置`Map Remote`即可。




